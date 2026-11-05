/**
 * Firebase Cloud Function (2nd gen): `openrouterTts`
 *
 * Secure server-side proxy for OpenRouter Text-to-Speech (`fish-audio/s2.1-pro-free:free`)
 * used across EGBaccloria hints and explanations. Ported from the former Supabase
 * Edge Function `openrouter-tts`.
 *
 * Security Guarantees:
 * - Reads `OPENROUTER_API_KEY` strictly from Firebase Secret Manager
 *   (`firebase functions:secrets:set OPENROUTER_API_KEY`).
 * - Requires a valid Firebase Auth ID token (`Authorization: Bearer <idToken>`) so
 *   only signed-in app users can spend the OpenRouter quota.
 * - Locks allowed TTS models to `fish-audio/s2.1-pro-free:free` (or explicit
 *   `OPENROUTER_TTS_MODEL` env var) so public callers can never invoke paid models.
 * - Enforces payload length limits and upstream timeouts, returning clean error codes
 *   (e.g., 429) so the browser client immediately falls back to its built-in Web Speech
 *   neural voice engine.
 */

import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { logger } from 'firebase-functions';
import { defineSecret } from 'firebase-functions/params';
import { onRequest } from 'firebase-functions/v2/https';

initializeApp();

const OPENROUTER_API_KEY = defineSecret('OPENROUTER_API_KEY');

const DEFAULT_OPENROUTER_MODEL = 'fish-audio/s2.1-pro-free:free';
const OPENROUTER_SPEECH_ENDPOINT = 'https://openrouter.ai/api/v1/audio/speech';
const MAX_INPUT_CHARS = 3800;
const UPSTREAM_TIMEOUT_MS = 12000;

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Expose-Headers': 'Retry-After, X-TTS-Model',
  'Access-Control-Max-Age': '3600',
};

interface TtsRequestPayload {
  text?: string;
  lang?: string;
  context?: 'hint' | 'explanation' | 'general';
  model?: string;
}

export const openrouterTts = onRequest(
  {
    region: 'us-central1',
    secrets: [OPENROUTER_API_KEY],
    timeoutSeconds: 30,
    memory: '256MiB',
    maxInstances: 10,
  },
  async (req, res) => {
    res.set(corsHeaders);

    const sendJson = (status: number, body: Record<string, unknown>, extraHeaders: Record<string, string> = {}) => {
      res.status(status).set(extraHeaders).json(body);
    };

    // 1. Handle CORS Preflight
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    if (req.method !== 'POST') {
      sendJson(405, { error: 'Method not allowed. Use POST.', fallback: true });
      return;
    }

    // 2. Require a valid Firebase Auth ID token
    const authHeader = req.get('authorization') || '';
    const idToken = authHeader.startsWith('Bearer ') ? authHeader.slice('Bearer '.length).trim() : '';
    if (!idToken) {
      sendJson(401, { error: 'Missing Firebase ID token.', fallback: true });
      return;
    }
    try {
      await getAuth().verifyIdToken(idToken);
    } catch {
      sendJson(401, { error: 'Invalid or expired Firebase ID token.', fallback: true });
      return;
    }

    // 3. Verify server-side OpenRouter secret exists
    const openRouterApiKey = OPENROUTER_API_KEY.value()?.trim();
    if (!openRouterApiKey) {
      sendJson(503, {
        error: 'OPENROUTER_API_KEY secret is not configured in Firebase Secret Manager.',
        fallback: true,
      });
      return;
    }

    // 4. Parse and validate request payload (Cloud Functions pre-parses JSON bodies)
    const payload: TtsRequestPayload =
      req.body && typeof req.body === 'object' ? (req.body as TtsRequestPayload) : {};

    const rawText = typeof payload.text === 'string' ? payload.text.trim() : '';
    if (!rawText) {
      sendJson(400, { error: 'Missing required non-empty "text" field.', fallback: true });
      return;
    }

    const boundedText = rawText.length > MAX_INPUT_CHARS ? rawText.slice(0, MAX_INPUT_CHARS) : rawText;

    // Enforce strict model allowlist so nobody can abuse this endpoint for paid models
    const configuredModel = process.env.OPENROUTER_TTS_MODEL?.trim() || DEFAULT_OPENROUTER_MODEL;
    const allowedModels = new Set([DEFAULT_OPENROUTER_MODEL, configuredModel]);
    const selectedModel =
      typeof payload.model === 'string' && allowedModels.has(payload.model.trim())
        ? payload.model.trim()
        : configuredModel;

    const isArabic = (payload.lang || '').toLowerCase().startsWith('ar') || /[\u0600-\u06FF]/.test(boundedText);
    const deliveryInstructions = isArabic
      ? payload.context === 'hint'
        ? 'تحدث بوضوح وهدوء وبنبرة معلم مشجع يوجه الطالب لتذكر فكرة الحل.'
        : 'تحدث بوضوح وسلاسة وبأسلوب معلم يشرح خطوات الحل العلمي بهدوء ودقة.'
      : payload.context === 'hint'
      ? 'Speak clearly, warmly, and encouragingly like a tutor giving a helpful study hint.'
      : 'Speak clearly, calmly, and articulately like an educator explaining a step-by-step solution.';

    const originHeader = req.get('origin') || 'https://egbaccloria.app';

    const callOpenRouter = async (includeOptionalParams: boolean): Promise<Response> => {
      const requestBody: Record<string, unknown> = {
        model: selectedModel,
        input: boundedText,
        response_format: 'mp3',
      };

      if (includeOptionalParams) {
        requestBody.instructions = deliveryInstructions;
        requestBody.provider = {
          data_collection: 'allow',
        };
      }

      return await fetch(OPENROUTER_SPEECH_ENDPOINT, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${openRouterApiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': originHeader,
          'X-Title': 'EGBaccloria Study Hints & Explanations',
        },
        body: JSON.stringify(requestBody),
        signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      });
    };

    try {
      let upstreamRes = await callOpenRouter(true);

      // If upstream rejects optional fields with 400, retry once with minimal required schema
      if (upstreamRes.status === 400) {
        upstreamRes = await callOpenRouter(false);
      }

      if (!upstreamRes.ok) {
        const retryAfter = upstreamRes.headers.get('retry-after');
        let upstreamDetail = `OpenRouter returned HTTP ${upstreamRes.status}`;
        try {
          const errJson = (await upstreamRes.json()) as { error?: { message?: string } };
          upstreamDetail = errJson?.error?.message || upstreamDetail;
        } catch {
          // ignore non-JSON error body
        }

        const extraHeaders: Record<string, string> = {};
        if (retryAfter) {
          extraHeaders['Retry-After'] = retryAfter;
        }

        sendJson(
          upstreamRes.status,
          {
            error: upstreamDetail,
            status: upstreamRes.status,
            rateLimited: upstreamRes.status === 429 || upstreamRes.status === 402,
            fallback: true,
          },
          extraHeaders
        );
        return;
      }

      const audioBuffer = Buffer.from(await upstreamRes.arrayBuffer());
      if (audioBuffer.byteLength === 0) {
        sendJson(502, { error: 'Upstream returned empty audio stream.', fallback: true });
        return;
      }

      const contentType = upstreamRes.headers.get('content-type') || 'audio/mpeg';

      res
        .status(200)
        .set({
          'Content-Type': contentType.startsWith('audio/') ? contentType : 'audio/mpeg',
          'Cache-Control': 'private, max-age=86400',
          'X-TTS-Model': selectedModel,
        })
        .send(audioBuffer);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upstream OpenRouter TTS request failed.';
      logger.warn('openrouterTts upstream failure', { message });
      sendJson(504, { error: message, fallback: true });
    }
  }
);
