// check if the serviceWorker object exists in the navigator object
if ('serviceWorker' in navigator) {

  // attach event listener  on page l aod
  window.addEventListener('load', () => {

    // register serviceWorker withthe [sw.js] file
    navigator.serviceWorker.register('/sw.js').then(registration => {

      console.log('ServiceWorker registration successful with scope: ', registration.scope);

    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });

  });
}

Notification.requestPermission(result => {
  if (result === 'granted') {
    // showNotification('So nice to have you here!', 'Hey there!')
  }
});

function showNotification(title, message) {
  if ('Notification' in window) {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(title, {
        body: message,
        tag: 'vibration-sample'
      });
    });
  }
}