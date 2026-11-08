const CACHE_NAME = 'carraa-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/draw.html',
  '/check.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
