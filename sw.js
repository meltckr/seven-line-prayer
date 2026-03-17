// Service Worker for Seven-Line Supplication PWA
const CACHE_NAME='seven-line-prayer-v2';
const ASSETS=['/seven-line-prayer/','/seven-line-prayer/index.html','/seven-line-prayer/seven-line-supplication.mp3','/seven-line-prayer/icon-192.png','/seven-line-prayer/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE_NAME).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE_NAME).then(cache=>cache.put(e.request,c));return r;}).catch(()=>caches.match(e.request)));});