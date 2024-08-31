/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b9ac2c9fec0bff02f68e73a02fe37f52"
  },
  {
    "url": "assets/css/0.styles.025369c0.css",
    "revision": "c4a3d352a687014c2000a9c379809cfb"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.deb1adf8.js",
    "revision": "afa8aaf12f9385b89332ce836f504eff"
  },
  {
    "url": "assets/js/10.c011c1fe.js",
    "revision": "f174549f411122bc62c326ba532ad70d"
  },
  {
    "url": "assets/js/14.58fc00ca.js",
    "revision": "45347535983eff2a3600d94e16057511"
  },
  {
    "url": "assets/js/15.af3e10a9.js",
    "revision": "5974e53ac510e9f77c4a6b32633955d4"
  },
  {
    "url": "assets/js/16.377fe542.js",
    "revision": "65d67fb92b59ed1b6d68851016cf9d6b"
  },
  {
    "url": "assets/js/17.404e09d4.js",
    "revision": "f978997035c26691a8c44966c6f7f058"
  },
  {
    "url": "assets/js/18.ee5c3b64.js",
    "revision": "71e410e9689c7fa75e72b14cae7bd839"
  },
  {
    "url": "assets/js/19.5578a13f.js",
    "revision": "568b5647f8d3fd3dcd1c1d2560cf4038"
  },
  {
    "url": "assets/js/2.852b7bea.js",
    "revision": "d5783b8691895293d68bea790e4dc33e"
  },
  {
    "url": "assets/js/20.f864ed0e.js",
    "revision": "d12ffbd890755e6da229956caa0d2bff"
  },
  {
    "url": "assets/js/21.cb0ab7cd.js",
    "revision": "3a91660cc5580392683cf914ea9c0366"
  },
  {
    "url": "assets/js/22.fcac0ff7.js",
    "revision": "1e8f5c40a30044d6af767b63697a9f3d"
  },
  {
    "url": "assets/js/23.889e5911.js",
    "revision": "0d4c9f8932831d68c07e8d4994daf8a2"
  },
  {
    "url": "assets/js/24.709189e4.js",
    "revision": "6e5e3a4fe9ba41a5d42418e886d16e57"
  },
  {
    "url": "assets/js/25.8e45464c.js",
    "revision": "e1aa1f7d2bca3e3de89b7f287b52ecec"
  },
  {
    "url": "assets/js/26.bb971f15.js",
    "revision": "09019f97f2eca8724a3593c77febff7a"
  },
  {
    "url": "assets/js/27.fd8c95f0.js",
    "revision": "62810ac7c90bc8f65409b65b6424a27f"
  },
  {
    "url": "assets/js/28.fee2ea24.js",
    "revision": "b3a64a3941fabcb6537db33f09caf639"
  },
  {
    "url": "assets/js/29.972d637c.js",
    "revision": "e2d3c7938c5a71016c49a7924ccc21bd"
  },
  {
    "url": "assets/js/3.810365fc.js",
    "revision": "e655516fb874097cb1a37e07f53fcdc4"
  },
  {
    "url": "assets/js/30.8961d27e.js",
    "revision": "12e283a60d87530d40365d8d78d38e04"
  },
  {
    "url": "assets/js/31.8b852bef.js",
    "revision": "e07e72b14345da40c95db63c074916e8"
  },
  {
    "url": "assets/js/32.7415c5e4.js",
    "revision": "007588ab703c3f5ee51f70bc1b4f299e"
  },
  {
    "url": "assets/js/33.e76234bc.js",
    "revision": "b4e88cfdb7bb843d8b5fde399fd25828"
  },
  {
    "url": "assets/js/34.25dda315.js",
    "revision": "e7cd1df1492d01f5e7bb09f06e7743a3"
  },
  {
    "url": "assets/js/35.4f6c844a.js",
    "revision": "5b94ecadd8071535f25825249e604cb0"
  },
  {
    "url": "assets/js/36.90faa6db.js",
    "revision": "adafaf9c5fa5ad3896069e264fce4d98"
  },
  {
    "url": "assets/js/37.758681a2.js",
    "revision": "c1e1a7457c588e69d83f7b579582ecf8"
  },
  {
    "url": "assets/js/38.409f2a98.js",
    "revision": "e873c51e6e7fd168283b54f9db58eb77"
  },
  {
    "url": "assets/js/39.d74b7d92.js",
    "revision": "31366ff7fdfa0dcf7e772bd1dd969764"
  },
  {
    "url": "assets/js/4.3d428e5c.js",
    "revision": "d64c79810c2841d0611ee72e91b2ad6f"
  },
  {
    "url": "assets/js/40.b7d1f6e6.js",
    "revision": "e1e28901ed8c357f655f06b021e237ac"
  },
  {
    "url": "assets/js/41.d43a6c18.js",
    "revision": "d51812ab78d09bc811abfa87583d63f8"
  },
  {
    "url": "assets/js/42.c3b501d0.js",
    "revision": "4ce318c750e918b3b82ce2cf8243b2f2"
  },
  {
    "url": "assets/js/43.906eb492.js",
    "revision": "6accec2eee742228f7e4eee2aaad7d78"
  },
  {
    "url": "assets/js/44.606af65d.js",
    "revision": "0cbffff5ae314f966426641cb8eb7e72"
  },
  {
    "url": "assets/js/45.db30929d.js",
    "revision": "66a6e1ead28b3f6a5d129f8cdb4c5e39"
  },
  {
    "url": "assets/js/5.a27fa64b.js",
    "revision": "ef4a6b8cdf84c228e9454d8cc31e9f35"
  },
  {
    "url": "assets/js/6.2d35a075.js",
    "revision": "0f9083c5cdd2a577e2fbab456172aa7d"
  },
  {
    "url": "assets/js/7.05a1cff2.js",
    "revision": "89050f75d1fc8adadb1c0e7f259fab45"
  },
  {
    "url": "assets/js/8.abb2c214.js",
    "revision": "ebd21324e8fdda77f31b3d8929b7ad6a"
  },
  {
    "url": "assets/js/9.5ad1906f.js",
    "revision": "b0e36f5049c238308f2edabd34a81e3b"
  },
  {
    "url": "assets/js/app.f4557d8b.js",
    "revision": "abaecde8301cafdac085b5e7997c39d6"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~docsearch.019f8db4.js",
    "revision": "add879689833caf77e8eb36e28e241bd"
  },
  {
    "url": "assets/js/vendors~flowchart.35818d3c.js",
    "revision": "13aa0e38488e53e280a3c914b4c6d2e4"
  },
  {
    "url": "avatar.jpg",
    "revision": "04ad1dfd150be69a18d5b93e23629de4"
  },
  {
    "url": "categories/index.html",
    "revision": "f8975d36cc94adc10f119718bb238420"
  },
  {
    "url": "categories/java/index.html",
    "revision": "778be1842cdf0978b785fd419665695d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "d77256bfeab89f9683a25ee8486da5a1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e258962231d523b759c7755bd2d367aa"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a79bad4f6905d319bc37ea2ae8e53020"
  },
  {
    "url": "css/style.css",
    "revision": "8314185589e87c03f6d8a562dcdb6b95"
  },
  {
    "url": "guide/index.html",
    "revision": "941efcc9a7fb12a0bc3d8c5b046af5e2"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "index.html",
    "revision": "b94e90d05b4d0e43e9f6032d575dc35f"
  },
  {
    "url": "js/custom.js",
    "revision": "ebb29dfcd8bf8e01c9db9c2f45a02130"
  },
  {
    "url": "tag/index.html",
    "revision": "4c68d43aae8527ba592b60cb0d27df5c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2c9556cbfa1b5a08ab1c8bad414e1a17"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d5fda5b139b6635afb5bb173d164f2b9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c6635fe7b2959b518a250285acbba4d3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "4f5a5757906fe7f7e9182eaf37598950"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "988323b3eca59b9cd8a9f1281375c7db"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3ca3fc71ecff739b82267e8864a5f579"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c258c64c4ae4de44f9106127f90d5cf3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "cae738943fd6f8ea21da9da1e10cfc9f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "34d780e0cac7a51bd16fe0dee3592957"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "0e1d36ab53fc69825bdfec390884fae1"
  },
  {
    "url": "timeline/index.html",
    "revision": "bde22c569b0dac241f128c8187040e2b"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1682ece5123944feb6c02226b163318a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "800ca3f1c4bd76b1e1862fb8668e087e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "5e6c19daa271eac8517725aa39c3965e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "fca7fefc8ee5bfb91a3a6d5e56e2bfbb"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f8738949c6d937f6395b67ce60845ce9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
