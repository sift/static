var CACHE_NAME = 'tanium.ui.user';

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log(navigator);
        console.log(cache);
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});