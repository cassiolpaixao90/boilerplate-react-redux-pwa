if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      reg.onupdatefound = function() {
        var installingWorker = reg.installing;
        installingWorker.onstatechange = function() {
          if (installingWorker.state === 'activated' && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
              action: 'navigate',
              url: window.location.pathname
            });
          }
        };
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  });
}