importScripts('/conti/conti.bundle.js');
importScripts('/conti/conti.config.js');
importScripts(__uv$config.sw || '/conti/conti.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event => {
    event.respondWith(sw.fetch(event))
});