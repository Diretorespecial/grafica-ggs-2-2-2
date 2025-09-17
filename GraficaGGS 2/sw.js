self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ggs-store').then((cache) => {
      return cache.addAll([
        '/GraficaGGS%202/',
        '/GraficaGGS%202/index.html',
        '/GraficaGGS%202/Formulario.html',
        '/GraficaGGS%202/css/main.css',
        '/GraficaGGS%202/css/style.css',
        '/GraficaGGS%202/js/main.js',
        '/GraficaGGS%202/images/logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
