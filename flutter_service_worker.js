'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "75fd02108c5ecb668834baae523790f3",
".git/config": "ae72e7a8105b522b57593e58e86f53a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2c1417f541fbe728cd03a38ba6cb6d93",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65be956af04bca105922a031b837a959",
".git/logs/refs/heads/main": "f42eef629a196fbfce7b85ff6a67ec1b",
".git/logs/refs/remotes/origin/main": "33d8cdb865b3cea98c0b9619e030b793",
".git/objects/00/1ea3b252f3bfd16f85f03528171d4c77645983": "38388a3f23b7127fdb0cf9823a9d2dd0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/a3e9d40fe3cd0e382fc0b07b159ee50855c903": "fa53c3ae4984d6c3afefd9e994cf59cc",
".git/objects/08/adf67f0d14c9288ce8b4021c02cc6130e21c6a": "f51819a847f1488a6675e2e4a76e3d90",
".git/objects/0a/a4fb36355bf049a49998de24eabc97cafc9278": "6b48e5e45d5159241fafb3a384df6b80",
".git/objects/0e/25a2017e4ba8c6c5866d15308ff6c15a21ad63": "5fb3e74917e13cab4217c3aabd321eee",
".git/objects/0f/49a804a4c9432078bd518108c8b0123a051a47": "e8e27445d74845a3f141f5374f05d837",
".git/objects/18/4ef1dc5de9f7c06576110d175683849d6add97": "61b4a6461f43d6761aad0f60ea492c82",
".git/objects/18/d866b2e116147083cb300e4a6af3eab28ba56d": "300b7eba2e173321cf7edaa0e032c56b",
".git/objects/25/698a24a3930234dba08560b2722fa5794b2062": "5440b237bc26d29fa1434d73cfca45f1",
".git/objects/25/a791a74c3df1d8638d92a62c48b7f646a3d156": "41adc59f3dd71a070ce8fe56276adffa",
".git/objects/27/fe0a6b7231bccafd67d91227f03a8519cca733": "b5637c7b2bfed19f381ca23c83d3a2c7",
".git/objects/29/0d6f6fa0838d3d0322ba13c23c461446d3d1df": "60c5bd8cc32ab85348c0c773e3ad24a9",
".git/objects/2a/effabdd678c1079247bafe7ed16ae20a994f00": "732b95f6d944f5e985ac90fecdbe305c",
".git/objects/2f/e81e3bc63357e14856f7fdb125f717c7386e7a": "2ddf84e8c278971409f9224796239a7f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/50be5afd71008fd9ad2ddd74297f51aa447420": "650de4c169189717e0a950801499faf5",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/42/d643f68160773248b646993743b6230e5e3dc1": "4cdf484005b5479d23eb0862e5d50da9",
".git/objects/43/ab7242b4f9aae419eed0361103911ec19d9124": "599544dadd2dbfb9a2bb336cafe986af",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/cbaddc564e9d973facb354fc4ec78816918f5a": "879940e9ccc5509ab7a56b9dfd4f94b8",
".git/objects/53/f05998f5fb2155380a0a9bea6b3839b262beba": "71f7770f216aa9f06ba085e7126ab234",
".git/objects/58/2edc2beddca7abf3358c00e3d033cffb9f7ac3": "bf5024799befa90f5d3f6e046111c6e6",
".git/objects/5a/ca7ce0aef5d7c521ffd7babd914d5645d0656a": "146b74b595c5a4376db4db574628ad6b",
".git/objects/5b/9b2f12cda6fa270db69cc1443aa22d4a70088c": "8a2008f6211f7d096ddb8034c693ff8e",
".git/objects/5c/3259465a0bdc78a7890ce5782b5eaf86abdef1": "3bee329b9f243d80b721470213ac885d",
".git/objects/6a/458b1e79c2419ac1a7c4e97577370f6a8d45a7": "fe294b2278225cfd918c1dd316ea31ed",
".git/objects/6c/9d79f73e4d7a9e874cbfe0cea84e7ae41059a4": "63060509a60ceec539f7485edf962b9a",
".git/objects/6d/071a10db2ed76098314e65c9b9a08f2b0408db": "cffbf72fa90e0ed2321e3552c6c95405",
".git/objects/72/68748649a677eaef81ffe9a12845c892a42293": "1acd6d53eba2d3f646c547d70e83a877",
".git/objects/75/ce4592b5e4bc4005d44705f5418e5712bdd1b4": "08e8461f133c557c0b92dc1cf820a04c",
".git/objects/77/4bb8c19b8de4d159c1267fce7acf8e3282f620": "1eff48d9ed3e33578ba565d77e24ab05",
".git/objects/79/34575ee5d5eb34e54c13a03d9e5cf34a572033": "42ab5010600f06f1d8833c4dbd84dc4b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/24e0128ccd2a61c4ec33510cdaea39d2f393dc": "e6b989ed2c5a85b9a0013997de43791c",
".git/objects/87/35760b266adfd5f3948051403775ad70ea031c": "293aef2351a7efe09152b3fdd1e2b2a8",
".git/objects/87/5177c113f10e77dc18920bd02aa9bd576f3d29": "aac21f0bb0b06507e5f825ac377606cb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2df9b6129cfe000c132140efdcc9fa68ecfff3": "7f7a64f9bed57e1249ae4be80a4db13d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/3dd51fa5b517bb695c52e3bc2d3722995ddb34": "fdf41141ea9430fd3bb94c8e28ccd76a",
".git/objects/9f/50d3b021659a4a6ba44d3131c8c80578c6c481": "3ce74c08206598d0f36c3a9b2743489e",
".git/objects/9f/c1e923d1a9a7a226f410d007b168960ce2eb12": "ce694e4ce662cd649ca934bab5bfd4f8",
".git/objects/a0/19fc3fafc3c7afd442c52d9356a2d7c2ed43d1": "c430a4e110a22c3ea7be8391ab1bb53c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/4c7aa5643b2732c3b46b6d9a79a8b8a9e540c0": "976caa9b851a6909fc87cd21af70f88b",
".git/objects/a4/8fd23fcbdeda472ebcd59041b982238303b49d": "c5780c11e5e817f936344230058534dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/5317b11656b87b56369d2a6b826f86ef2736b0": "e36baf4aa89d42e60964e3afd859f038",
".git/objects/b4/f6a5de9e8f6d8db35daaefe888efb0278643d5": "63a67812597b8752b5b0053682586a51",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0990b0d03d3d21326ac0e6c652ab260a7a5d76": "d7c99a01278ebdb0b08d33b597cbbd89",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/c03509b89925baf9ca6ca740ed9b3e4a32b7f5": "9bd5cb744a70f826e433df14e9e3656f",
".git/objects/ca/499110bd215a10e72a19e8e6d0d9314da53f6f": "1ece27319897e916e3aca9d6b785cac5",
".git/objects/cd/25c76b43dee7559ce73249285cb546610aa3be": "e4fc8fae6910c4c8749a1639141c25b7",
".git/objects/d0/a2fdab919b9a8e3f31cec2a3007b981c167aa4": "ebe6084f29554a9a898f0aec3dd68051",
".git/objects/d2/0b2cff7d1d20e5ffd342cb4e2ab55517b45cc5": "d3d9bbaa75afa1bc902f4446042dcd6f",
".git/objects/d3/e89a5886976427332475c05ade9387799ad79f": "e00104d5e2dc318e45be90dd1672c4f5",
".git/objects/d5/24a7c049215621f7c3bc2d5a0bde215ab8dbc8": "f7c3ccbf2df4ad33673b6b174b458794",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/d11979c4490319f5891444155cb8525fb782b1": "002685db5f3eaaa92e33e7164a91848f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5153a1f1a18b100212a0d7c9d3b9c1278c8cfb": "930595a8eebf33a0bae39992692d9cf9",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/bd9f81ab0e4cb8d17d47d8d78bf36b427629cf": "5a052ed59df9837514671d84f601b063",
".git/objects/f1/b0cfdf490e95cdfba00628e0a99e401f5c9d5e": "dc145005bc5207a7bf57545b5fd1f00e",
".git/objects/f2/f6517a03cd2c474c5a95c5718dc4de7426ef57": "5bec22d1235343b436c4d16851238db5",
".git/objects/fb/e22786035e6d4634f34828cace7c1d0f6baedd": "f66609e4bb9f6eca79eda08afd7f94db",
".git/refs/heads/main": "9d156faf3006d788a3eb1428c6254810",
".git/refs/remotes/origin/main": "9d156faf3006d788a3eb1428c6254810",
"assets/AssetManifest.json": "25bdd70dcc17c1d29df69e9ed9dfd79f",
"assets/assets/assets/copy_icon.png": "12d03bb7741a97b63adc64bc11e071cd",
"assets/assets/assets/logo.png": "fb6cf5ccce6fc84b4e0858bfd43fdf39",
"assets/assets/assets/MetaMask_icon.png": "c2a7833c2a2525303f5b96c4c8362046",
"assets/assets/assets/wallet_icon.png": "dfb650a2fc831364923d8c9f8b770aad",
"assets/assets/copy_icon.png": "12d03bb7741a97b63adc64bc11e071cd",
"assets/assets/logo.png": "fb6cf5ccce6fc84b4e0858bfd43fdf39",
"assets/assets/MetaMask_icon.png": "c2a7833c2a2525303f5b96c4c8362046",
"assets/assets/wallet_icon.png": "dfb650a2fc831364923d8c9f8b770aad",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a0407bda16f9488e2a71c0c8d6e20d89",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52389e111d76784d11fe3a13acd5f9ef",
"/": "52389e111d76784d11fe3a13acd5f9ef",
"main.dart.js": "2edb5848f1deb655c400f9607b295c7d",
"manifest.json": "fdb4330f7d614bad34649192441f3b5c",
"styles.css": "d41d8cd98f00b204e9800998ecf8427e",
"todo.txt": "77882c565b471a95e00ed203d243a38d",
"version.json": "c62a242954a60d0409584ebc70d301df"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
