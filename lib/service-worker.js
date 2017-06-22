const CACHE_NAME = 'my-pwa-cache-v1'

//TODO: organize urlstocache
const urlsToCache = [
    '/',
    '/api/config.json',
    '/utils/dist/bundle.js',
    '/utils/dist/styles.css',
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => (cache.addAll(urlsToCache)))
    )
})

self.addEventListener('fetch', (event) => {
    console.log(event.request.url)
    event.respondWith(
        caches.match(event.request)
            .then((response) => (response || fetch(event.request)))
    )
})