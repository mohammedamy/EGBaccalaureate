/**
 * ClipSAT EGBaccalaureate — Production Service Worker
 *
 * Strategies:
 *   - App Shell (HTML, manifest):    StaleWhileRevalidate
 *   - Hashed JS/CSS bundles:         CacheFirst (immutable — hash changes on update)
 *   - Databank & textbook chunks:    CacheFirst (large, rarely change)
 *   - Google Fonts:                  CacheFirst (long TTL)
 *   - KaTeX CDN:                     CacheFirst
 *   - Firebase/Analytics:            NetworkOnly (never cache)
 *   - Navigation fallback:           Serve cached index.html for SPA routing
 */

const CACHE_VERSION = 'egbac-sw-v2';
const APP_SHELL_CACHE = `${CACHE_VERSION}-shell`;
const ASSETS_CACHE = `${CACHE_VERSION}-assets`;
const FONTS_CACHE = `${CACHE_VERSION}-fonts`;
const CDN_CACHE = `${CACHE_VERSION}-cdn`;

// ---------------------------------------------------------------------------
// Precache — critical shell assets
// ---------------------------------------------------------------------------

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './clipsat-logo.png',
];

// ---------------------------------------------------------------------------
// Install: precache shell
// ---------------------------------------------------------------------------

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(APP_SHELL_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ---------------------------------------------------------------------------
// Activate: clean old caches
// ---------------------------------------------------------------------------

self.addEventListener('activate', (event) => {
  const currentCaches = [APP_SHELL_CACHE, ASSETS_CACHE, FONTS_CACHE, CDN_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => !currentCaches.includes(name))
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ---------------------------------------------------------------------------
// Fetch: strategy router
// ---------------------------------------------------------------------------

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // --- Skip: Firebase, Analytics, GCP ---
  if (
    url.hostname.includes('firebase') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('google-analytics.com')
  ) {
    return; // Let browser handle normally (NetworkOnly)
  }

  // --- Google Fonts: CacheFirst ---
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(request, FONTS_CACHE, 365 * 24 * 60 * 60));
    return;
  }

  // --- KaTeX CDN: CacheFirst ---
  if (url.hostname === 'cdn.jsdelivr.net') {
    event.respondWith(cacheFirst(request, CDN_CACHE, 30 * 24 * 60 * 60));
    return;
  }

  // --- Vite hashed assets (JS/CSS with content hash): CacheFirst ---
  if (isHashedAsset(url.pathname)) {
    event.respondWith(cacheFirst(request, ASSETS_CACHE));
    return;
  }

  // --- Navigation requests: serve shell (SPA fallback) ---
  if (request.mode === 'navigate') {
    event.respondWith(navigationFallback(request));
    return;
  }

  // --- Everything else: StaleWhileRevalidate ---
  event.respondWith(staleWhileRevalidate(request, APP_SHELL_CACHE));
});

// ---------------------------------------------------------------------------
// Cache Strategies
// ---------------------------------------------------------------------------

async function cacheFirst(request, cacheName, maxAgeSec) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);

  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        caches.open(cacheName).then((cache) => cache.put(request, response.clone()));
      }
      return response;
    })
    .catch(() => cached);

  return cached || fetchPromise;
}

async function navigationFallback(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(APP_SHELL_CACHE);
      cache.put(request, response.clone());
      return response;
    }
  } catch {
    // Offline — serve cached index.html
  }

  const cached = await caches.match('./index.html');
  if (cached) return cached;

  return new Response('Offline — لا يوجد اتصال بالإنترنت', {
    status: 503,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Vite produces filenames like `assets/chunk-ABC123.js` or `assets/index-DEF456.css`.
 * These are content-hashed and immutable — perfect for CacheFirst.
 */
function isHashedAsset(pathname) {
  return /\/assets\/[^/]+-[a-zA-Z0-9]{8,}\.(js|css|woff2?|ttf|otf|wasm)$/.test(pathname);
}

// ---------------------------------------------------------------------------
// Background Sync — deferred analytics
// ---------------------------------------------------------------------------

self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(flushAnalyticsQueue());
  }
});

async function flushAnalyticsQueue() {
  // Read queued analytics events from IndexedDB and POST them
  // This is a placeholder — the actual implementation will be
  // added when the analytics event buffer is built in Phase 2.
  return Promise.resolve();
}
