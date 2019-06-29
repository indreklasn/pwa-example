importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

console.log('Reading from src-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "app.js",
    "revision": "dc1832d1f1a5ed33f8e68e96bf37d41b"
  },
  {
    "url": "index.html",
    "revision": "5ad14f843a167083b047edfaa7ad16dd"
  },
  {
    "url": "manifest.json",
    "revision": "05bf9462cda2e18fb0e4e8d7b19cd4d8"
  },
  {
    "url": "package-lock.json",
    "revision": "ba76f0df6065e18a8ad36ed99cdc7b9a"
  },
  {
    "url": "package.json",
    "revision": "76bf14d70e540977b39e5977df6d36c5"
  },
  {
    "url": "server.js",
    "revision": "2f796fa386feca8332eee0eef5af79c3"
  },
  {
    "url": "src-sw.js",
    "revision": "cd4156f8c497c82a657fb7d90e790d75"
  },
  {
    "url": "styles.css",
    "revision": "db248e727f72cb6f843beffd6d88761f"
  },
  {
    "url": "workbox-config.js",
    "revision": "6a17d6acc3899dceac8b5bb61a2efaff"
  },
  {
    "url": "yarn.lock",
    "revision": "f3bf83014918f659c23834982bdadc46"
  }
]);
