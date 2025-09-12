const cacheName = 'grafica-ggs-cache-v1';
const filesToCache = [
  './',
  'Formulario.html',
  'index.html',
  'css/main.css',
  'css/style.css',
  'js/main.js',
  'js/firebase.js',
  'images/logo.png',
  'images/favicon.png',
  'images/default_avatar.jpg',
  'images/arrow.png',
  'images/google.png',
  'images/qrcode.png',
  'assets/declaracao.png',
  'assets/procuracao.png',
  'assets/procuracao_a.png',
  'assets/requisicao.png',
  'assets/retinoides.png',
  'assets/tipo_amarelo.png',
  'assets/tipo_b.png',
  'assets/tipo_b2.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
