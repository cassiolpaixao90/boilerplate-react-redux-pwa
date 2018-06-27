importScripts('/workbox-sw.prod.v2.0.1.js');
importScripts('/workbox-runtime-caching.prod.v2.0.0.js');
importScripts('/workbox-google-analytics.prod.v2.0.0.js');

workbox.googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'replay'
  }
});
const workboxSW = new WorkboxSW({ clientsClaim: true });
const customRequest = new workbox.runtimeCaching.RequestWrapper();
const fontsOptions = {
  cacheName: 'fonts',
  cacheExpiration: {
    maxEntries: 4,
    maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
  },
  cacheableResponse: { statuses: [0, 200] }
};

workboxSW.precache([]);

workboxSW.router.registerRoute(
  '/',
  workboxSW.strategies.networkFirst()
);

workboxSW.router.registerRoute(
  '/posts/:id',
  workboxSW.strategies.networkFirst()
);

workboxSW.router.registerRoute(
  '/about',
  workboxSW.strategies.cacheFirst()
);

workboxSW.router.registerRoute(
  '/login',
  workboxSW.strategies.cacheFirst({
    cacheName: 'content'
  })
);

workboxSW.router.registerRoute(
  '/api/:entity/:id?',
  workboxSW.strategies.networkFirst({
    cacheName: 'api'
  })
);

workboxSW.router.registerRoute(
  'https://fonts.googleapis.com/(.*)',
  workboxSW.strategies.cacheFirst(fontsOptions)
);

workboxSW.router.registerRoute(
  'https://fonts.gstatic.com/(.*)',
  workboxSW.strategies.cacheFirst(fontsOptions)
);

self.addEventListener('message', function(event) {
  if (event.data && event.data.action === 'navigate') {
    customRequest.fetchAndCache({ request: new Request(event.data.url) });
  }
});
