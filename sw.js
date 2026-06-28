const CACHE = 'spark-estimator-v3';
const STATIC = [
  '/',
  '/index.html',
  '/sw.js'
];
const CDN = [
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(STATIC))
      .then(() => self.skipWaiting())
      .then(() => {
        return caches.open(CACHE).then(c => {
          return Promise.allSettled(CDN.map(url =>
            c.add(url).catch(() => {/* skip failed CDN */})
          ));
        });
      })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(r => r || fetch(e.request))
      .catch(() => {
        if (e.request.destination === 'document') {
          return caches.match('/index.html');
        }
        return new Response('', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      })
  );
});
