'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d86942982f4098725c632fd9d27f3a78",
"version.json": "eca3cc8b444921c2ec68ff4c1673f87d",
"index.html": "504b3da36d897b3c2fb65bfdd0673bff",
"/": "504b3da36d897b3c2fb65bfdd0673bff",
"main.dart.js": "ff47b177002795ce2d2f2abc4e557db2",
"flutter.js": "35408b1be0f5de68cc5d1c5175d717ed",
"app-ads.txt": "d41d8cd98f00b204e9800998ecf8427e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2eec9e76a98005f4eca583cd7576fd07",
".git/config": "593b5659acb799bd6864c8567d3d420f",
".git/objects/0d/f85cad17fc7d27e34992e2f1870a7e78e60da1": "659c4efd27ef46c1675030ae3bef4540",
".git/objects/6f/db1c1a31ae8cebadb3ca02878cfdacf75ddfe4": "1595e44b8b8b239a7e805b56e2fc6cc5",
".git/objects/51/e17b8e1fe51e6c444d0251a206b35a4c31b553": "2a36c618bbabf7c193df633dd35be598",
".git/objects/93/55d13895c1173c2d50a9be0285cc9afeb52b61": "c8250a7ca59d49b382a6ebaeae06c969",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/5f/78f05fc1e03836eab77409c0378eb100dc6029": "7308946a546e44181c0b1f4783905f54",
".git/objects/9c/27435b6045ec04b89f05368163a366ee391866": "d1e78b34b44a83495a533149d1d5eff8",
".git/objects/b5/16946b9c40d11022670355f0433df98f8635db": "beeb63b14343b5f9e98f848d36ffdc80",
".git/objects/b2/255330ecae8935eae8279fdae71ea85765a434": "4d4b611072cb964ce6d1722ba29d5868",
".git/objects/d9/167f632b699b82eb81e0e0ad1ddb89bcdbd6c3": "d68722be843c9652ddbb8af1f1f95a58",
".git/objects/d9/350e4a8dd4d015fa399205cc06afb6f8d48256": "bdc435a3e8e17927399cc73255c15000",
".git/objects/bb/4d2b86a26fcd0953e1aed35fc8395ff34a94e4": "ec7a4c6e7e56b053aa88aadc588b9514",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/08dcb4e3858b917d0654f1a3c894b087eeb2e4": "5e14b5dfc75ad74765552c348e298da7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/697866acb0d5f8cae54b57d2684c443be06985": "f48985d92bc70ddff8380b683915575f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/130569efdf9b82abec2d67a2582253f8fc98bc": "e5b3c096e283a7b825e8d18c38864d0c",
".git/objects/fe/1fa26c470c2af5e37f7cf2b574c73eac2a5a25": "5db4ad05d7ac7aac50d2a19a039023a5",
".git/objects/27/e9647c34c2b8359e77b708db0f3bc81c266927": "887e28bb01cfaace88aa9459f9a14c7a",
".git/objects/16/f8a6d0ac3223ac415083e5ede3e6da7e68b645": "ca11ccc38b370e9e6027964f01fede6d",
".git/objects/8f/115edf10fd2165ae21b8504ddf386244e657ff": "cd997506153c48ea596c0a131927f34b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2a/48d343e6110b50e5fbf1bc2fd59b3e624e79c9": "1aee3031da2d7c86a6429eada4f537f9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/96/e7469f815326d92d4e5373e49fa595cbb40568": "0175900e726bf703531f1b7330573cef",
".git/objects/5b/f6a79e0294860431857ec827fb51d60570a06b": "fc7d4c6461a35ad1a9ffd99a396a57b0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/8397a8942b41b672ff07564e702a8223032a09": "c811e341e15770557f35021e9fd26094",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/4221e28e29e6b17a8149b9679c8c44cb04358b": "315d0589f5e119490c1ffe39d25eef7a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/33efedae115dd1c52b6aaa0cc0744aa9b0b1e2": "18f7078eab0728095dec28f6550d549c",
".git/objects/b0/5e9a796c380ee6cbae0b61f1cc6e09c9e0a607": "d0e940505d397e3fa4e09c939188ab0d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/78bcf3cacb65109e8148a50cbd50ec6037a891": "a92ef55e380c7c615b898ff7381c1723",
".git/objects/a1/1d3e61305c1d18a4eb6a9447fd2f2d8b59e38d": "8ce33ed144b3cf8ec9269c095378d5e2",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/b1070d381236af4c544f346f96f4f28792dc55": "26c1a49025336803a3d809063d8b0cf3",
".git/objects/f6/7b269ab213eb61e3c9f02c1e8ab89040db59db": "77fecbdb846ebdc278a04716f26d6874",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/79/0b1dd5dbd0d43fc9f115d69b02d24cf3d6c1af": "56a1355cbba7b801066482004ea5ef89",
".git/objects/1b/4f14bd739186aaf7368bd18b616f7b5815781d": "df5e850488e7426a70fd0a7923b8c2ec",
".git/objects/4a/cf3e9e0c2ed61f3e0c8ce719c391222921e820": "8d9371648bb05b695df92e90d61329c5",
".git/objects/49/5f4584f926eeab2f73994633aa2ae62c29bc76": "022c939bce57f77484f2494c813a267f",
".git/objects/40/bfb5e3cc1f3a9077a7aac7430c35688d7d5b82": "cb1cdf336a61e70801bf7744646f6e0c",
".git/objects/47/3954f1286e1ee931c3187e87025f112de3db23": "ac39c3bd87a85b0a3dee5d1d267784fc",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4599d06911bf5f638c5bb7453681f3a8",
".git/logs/refs/heads/main": "5e589af6401e19fe5daf45c09fc0435a",
".git/logs/refs/remotes/origin/main": "8cabcdc63fd24228eb983f358c32c1a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5987672df100476dcefee7f5a57764f1",
".git/refs/remotes/origin/main": "5987672df100476dcefee7f5a57764f1",
".git/index": "e687b9cd22da14bcb222b7a0df642e2a",
".git/COMMIT_EDITMSG": "3407469f014215cbbbb2499b192f9bfb",
"assets/NOTICES": "5fe4fb0d075734db66df5ef5b434dd5e",
"assets/FontManifest.json": "caa726aafa230e12e3830de4f9972aef",
"assets/AssetManifest.bin.json": "a984108f12a91046056e230b36c6043d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "dec542306c4250a5d47fe4a0c1d7e5ad",
"assets/fonts/MaterialIcons-Regular.otf": "0c4860fcaab55cdac099d1babe020314",
"assets/assets/fonts/NotoSansDevanagari-Bold.ttf": "8a99933c276c0de9ff1eeb134d33b26a",
"assets/assets/fonts/NotoSansDevanagari-Regular.ttf": "44e0b243bd0ac5430fca8b45ddd9e040",
"canvaskit/skwasm.js": "95f1685cbe3a3e1d94cac24eb0148a02",
"canvaskit/skwasm_heavy.js": "53b1d7d620269ae543e0dc5311a07f49",
"canvaskit/skwasm.js.symbols": "1a5b8c8bd31b6b53fd8a420bfc634397",
"canvaskit/canvaskit.js.symbols": "d27e66928fc257409c5b285ca140647d",
"canvaskit/skwasm_heavy.js.symbols": "3b16e8e140eebd4a10c80852be7e9354",
"canvaskit/skwasm.wasm": "87c3f232cc3c98bc37a5857ce259dcb5",
"canvaskit/chromium/canvaskit.js.symbols": "c21f552d607bfd35d6c2c65e7594e17b",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "a3ac017bb86e93f8e7aa79afdb9a6a7a",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "0601f94e5ba7422d7d0f15082f291f59",
"canvaskit/skwasm_heavy.wasm": "7d6fb8111343b68829a36dfba156fc57"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
