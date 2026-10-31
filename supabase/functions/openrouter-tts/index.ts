/**
 * Supabase Edge Function: `openrouter-tts`
 *
 * Secure server-side proxy for OpenRouter Text-to-Speech (`fish-audio/s2.1-pro-free:free`)
 * used across EGBaccloria hints and explanations.
 *
 * Security Guarantees:
 * - Reads `OPENROUTER_API_KEY` strictly from Supabase Secrets (`Deno.env.get('OPENROUTER_API_KEY')`).
 * - Locks allowed TTS models to `fish-audio/s2.1-pro-free:free` (or explicit `OPENROUTER_TTS_MODEL` secret)
 *   so public callers can never invoke paid models using your OpenRouter key.
 * - Enforces payload length limits and upstream timeouts, returning clean error codes (e.g., 429)
 *   so the browser client immediately falls back to its built-in Web Speech neural voice engine.
 */

const DEFAULT_OPENROUTER_MODEL = 'fish-audio/s2.1-pro-free:free';
const OPENROUTER_SPEECH_ENDPOINT = 'https://openrouter.ai/api/v1/audio/speech';
const MAX_INPUT_CHARS = 3800;
const UPSTREAM_TIMEOUT_MS = 12000;

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Expose-Headers': 'Retry-After, X-TTS-Model',
};

interface TtsRequestPayload {
  text?: string;
  lang?: string;
  context?: 'hint' | 'explanation' | 'general';
  model?: string;
}

function jsonResponse(body: Record<string, unknown>, status: number, extraHeaders: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
  });
}

Deno.serve(async (req: Request): Promise<Response> => {
  // 1. Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed. Use POST.', fallback: true }, 405);
  }

  // 2. Verify server-side OpenRouter secret exists
  const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY')?.trim();
  if (!openRouterApiKey) {
    return jsonResponse(
      {
        error: 'OPENROUTER_API_KEY secret is not configured in Supabase Edge Function secrets.',
        fallback: true,
      },
      503
    );
  }

  // 3. Parse and validate request payload
  let payload: TtsRequestPayload;
  try {
    payload = (await req.json()) as TtsRequestPayload;
  } catch {
    return jsonResponse({ error: 'Invalid JSON request body.', fallback: true }, 400);
  }

  const rawText = typeof payload.text === 'string' ? payload.text.trim() : '';
  if (!rawText) {
    return jsonResponse({ error: 'Missing required non-empty "text" field.', fallback: true }, 400);
  }

  const boundedText = rawText.length > MAX_INPUT_CHARS ? rawText.slice(0, MAX_INPUT_CHARS) : rawText;

  // Enforce strict model allowlist so nobody can abuse this endpoint for paid models
  const configuredModel = Deno.env.get('OPENROUTER_TTS_MODEL')?.trim() || DEFAULT_OPENROUTER_MODEL;
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

  const originHeader = req.headers.get('origin') || 'https://egbaccloria.app';

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
        const errJson = await upstreamRes.json();
        upstreamDetail = errJson?.error?.message || upstreamDetail;
      } catch {
        // ignore non-JSON error body
      }

      const extraHeaders: Record<string, string> = {};
      if (retryAfter) {
        extraHeaders['Retry-After'] = retryAfter;
      }

      return jsonResponse(
        {
          error: upstreamDetail,
          status: upstreamRes.status,
          rateLimited: upstreamRes.status === 429 || upstreamRes.status === 402,
          fallback: true,
        },
        upstreamRes.status,
        extraHeaders
      );
    }

    const audioBuffer = await upstreamRes.arrayBuffer();
    if (!audioBuffer || audioBuffer.byteLength === 0) {
      return jsonResponse({ error: 'Upstream returned empty audio stream.', fallback: true }, 502);
    }

    const contentType = upstreamRes.headers.get('content-type') || 'audio/mpeg';

    return new Response(audioBuffer, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': contentType.startsWith('audio/') ? contentType : 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400',
        'X-TTS-Model': selectedModel,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Upstream OpenRouter TTS request failed.';
    return jsonResponse(
      {
        error: message,
        fallback: true,
      },
      504
    );
  }
});

