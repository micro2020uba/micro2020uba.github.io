/* Service worker mínimo: existe solo para que Android/Chrome ofrezcan
   "Instalar aplicación" (PWA de verdad) en vez de un simple acceso
   directo. No cachea nada todavía, así que siempre trae la versión
   más nueva de cada página (no hay riesgo de quedarse con una copia
   vieja de guardias.html / pase_guardia.html / examenesiar). */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', () => {
  // Sin caché: pasa todo directo a la red.
});
