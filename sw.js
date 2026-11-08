const CACHE_NAME = 'carraa-biiftuu-v2';
const ASSETS = ['/', '/index.html', '/draw.html', '/check.html', '/scanner.html', '/config.js', '/manifest.json'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});