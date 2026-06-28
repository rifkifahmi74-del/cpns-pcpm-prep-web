/* Service worker — NETWORK-FIRST (selalu ambil versi terbaru saat online,
   fallback ke cache saat offline). Ini mencegah bug "versi lama nyangkut".
   NOTE: setelah mengubah isi soal/app, naikkan versi CACHE (v5 -> v6). */
const CACHE = 'cpns-bi-cache-v6';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data/config.js',
  './data/cpns.js',
  './data/cpns-extra.js',
  './data/pcpm.js',
  './data/ojk.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  // Network-first: ambil dari jaringan dulu (selalu terbaru), simpan ke cache,
  // dan baru pakai cache bila offline / jaringan gagal.
  e.respondWith(
    fetch(e.request).then((res) => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});
