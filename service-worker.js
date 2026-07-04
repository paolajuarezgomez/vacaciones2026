const CACHE_NAME = "vacaciones-2026-v16";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=16",
  "./data.js?v=16",
  "./app.js?v=16",
  "./manifest.webmanifest",
  "./assets/trip-hero.png?v=16",
  "./assets/day-photos/camping-granada.png",
  "./assets/day-photos/la-marina-dia-1.png",
  "./assets/day-photos/la-marina-dia-2.png",
  "./assets/day-photos/la-marina-13-julio.png",
  "./assets/day-photos/la-marina-14-julio.png",
  "./assets/day-photos/la-marina-15-julio.png",
  "./assets/day-photos/la-marina-16-julio.png",
  "./assets/day-photos/la-marina-17-julio.png",
  "./assets/day-photos/bravoplaya-18-julio.png",
  "./assets/day-photos/bravoplaya-19-julio.png",
  "./assets/day-photos/riberamar-20-julio.png",
  "./assets/day-photos/riberamar-21-julio.png",
  "./assets/day-photos/la-siesta-22-julio.png",
  "./assets/day-photos/portaventura-23-julio.png",
  "./assets/day-photos/portaventura-plan-23-julio.jpg",
  "./assets/day-photos/ferrari-land-24-julio.png",
  "./assets/day-photos/la-siesta-25-julio.png",
  "./assets/day-photos/la-siesta-26-julio.png",
  "./assets/day-photos/zaragoza-27-julio.png",
  "./assets/day-photos/zaragoza-28-aljaferia.png",
  "./assets/day-photos/madrid-experiencia-amarilla.png",
  "./assets/day-photos/madrid-willy-29-julio.png",
  "./assets/day-photos/caceres-30-julio.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  if (shouldPreferNetwork(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request)),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached ?? fetch(event.request)),
  );
});

function shouldPreferNetwork(request) {
  return request.mode === "navigate" || ["document", "script", "style"].includes(request.destination);
}
