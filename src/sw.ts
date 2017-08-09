import WorkboxSW from 'workbox-sw';

const workboxSW = new WorkboxSW({
  clientsClaim: true, // active状態になったらすぐにSWでブラウザをコントロールするため
  skipWaiting: true // 更新時にinstallingからすぐにactivateするため
});

const CACHE_VERSION = 1;
const CACHE_NAMES = {
  offline: 'test-offline-cache-v' + CACHE_VERSION,
  channel: 'test-cache-channel-v' + CACHE_VERSION
};

/**
 * strategies
 *
 * @see https://github.com/GoogleChrome/workbox/blob/master/packages/workbox-sw/src/lib/strategies.js
 */
const cacheFirstStrategy = workboxSW.strategies.cacheFirst({
  cacheName: CACHE_NAMES.offline,
  cacheExpiration: {
    maxEntries: 10,
    maxAgeSeconds: 60 * 60 * 24 * 7 // a week
  },
  broadcastCacheUpdate: {
    channelName: CACHE_NAMES.channel
  },
  cacheableResponse: {
    statuses: [0, 200, 404]
  }
});

/**
 * router
 *
 * @see https://github.com/GoogleChrome/workbox/blob/master/packages/workbox-sw/src/lib/router.js
 */
workboxSW.router.registerRoute('/public/*', cacheFirstStrategy);
// workboxSW.router.registerRoute('/public/*', (args) => {
//   const event = args.event;
//   event.respondWith(
//     caches.open(CACHE_NAMES.offline).then((cache) => {
//       return cache.match(event.request).then((cached) => {
//         return cached || fetch(event.request);
//       });
//     })
//   );
// });
