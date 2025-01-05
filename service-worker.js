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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a93ce556fbba1924888bcd0d99db41d8"
  },
  {
    "url": "assets/css/0.styles.4e4c033c.css",
    "revision": "ecd4171b7f7f48cfc7b41518371c8fe0"
  },
  {
    "url": "assets/img/01-project.208f3b69.png",
    "revision": "208f3b6973b8b9680c4cf29d4de9be59"
  },
  {
    "url": "assets/img/02-folder.579c6a0e.png",
    "revision": "579c6a0e175fed85dac7fed2de85705d"
  },
  {
    "url": "assets/img/03-task.99bbf979.png",
    "revision": "99bbf9795e5a4fc7a1e22377b3295068"
  },
  {
    "url": "assets/img/04-duedate.63c31c82.png",
    "revision": "63c31c82493ebf6204dc34023098e28f"
  },
  {
    "url": "assets/img/05-milestone.7a977990.png",
    "revision": "7a977990212e9781635d3cdbf7e3be1c"
  },
  {
    "url": "assets/img/06-list.b9851ab1.png",
    "revision": "b9851ab1250c8db299b0a2ba6649feea"
  },
  {
    "url": "assets/img/07-timeline.70c2a079.png",
    "revision": "70c2a0798537725a0188e277e0589c1d"
  },
  {
    "url": "assets/img/high-level-architecture.6ba3394b.png",
    "revision": "6ba3394bba21456a4e8649c3e5d6a34d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2a84ea5f.js",
    "revision": "ea60706a50ccf1f35ca3bc4e8596dbab"
  },
  {
    "url": "assets/js/11.b4c45dea.js",
    "revision": "ba1b791edb1416a262602d144e241140"
  },
  {
    "url": "assets/js/12.755b89ee.js",
    "revision": "ebb192e2fe8a8a1b379875a757783aee"
  },
  {
    "url": "assets/js/13.5d1b7507.js",
    "revision": "af9f6772328ead28da74f9cc2a4b114e"
  },
  {
    "url": "assets/js/14.512e6de8.js",
    "revision": "4afef1311f70719f26bf8cf1062fdcbb"
  },
  {
    "url": "assets/js/15.9b188fa3.js",
    "revision": "dbfebb20367cba945873d22017cde819"
  },
  {
    "url": "assets/js/16.5f867fd7.js",
    "revision": "c9443d487ce6c2ac6896c788237edfc4"
  },
  {
    "url": "assets/js/17.568b072b.js",
    "revision": "d42fa1759d7f2c4da12122138cb7bdad"
  },
  {
    "url": "assets/js/18.f5d788d6.js",
    "revision": "ae2c58349adb16b753684dada202b8df"
  },
  {
    "url": "assets/js/19.3619a468.js",
    "revision": "7dfa237ca13ac37b100457ac5d4c29c1"
  },
  {
    "url": "assets/js/2.d6021d62.js",
    "revision": "d563e9cb1a1c82bd922977b970957ecf"
  },
  {
    "url": "assets/js/20.37d3088e.js",
    "revision": "c12bfa43bd66bc0be908f39e4649e876"
  },
  {
    "url": "assets/js/21.85be60f3.js",
    "revision": "765b4cb7ee614866df8e2ffc74c5a6ea"
  },
  {
    "url": "assets/js/22.a31ce47e.js",
    "revision": "a6815745a41f283c24dfcaadc2c659c3"
  },
  {
    "url": "assets/js/23.0fe5a42c.js",
    "revision": "9d400f071fb561c4cffb76a70f0160ea"
  },
  {
    "url": "assets/js/24.c5973020.js",
    "revision": "1d3be7cf4e46d2bb377bb3e3b990d643"
  },
  {
    "url": "assets/js/25.5f3be1dd.js",
    "revision": "05ca10e3f38aa3e72bd13e18f0a24d9c"
  },
  {
    "url": "assets/js/26.8a16368b.js",
    "revision": "3f055996ae71d6c40995e973556de49d"
  },
  {
    "url": "assets/js/27.7e01beda.js",
    "revision": "e814dcac8dae0311c64efbae1f40e535"
  },
  {
    "url": "assets/js/28.5c9bed7b.js",
    "revision": "d5a156770d6429d7b39e67daec078672"
  },
  {
    "url": "assets/js/29.aa69e3df.js",
    "revision": "11916484b0bcaff18185f0d7cffb8204"
  },
  {
    "url": "assets/js/3.2928bf87.js",
    "revision": "a228fc86500ebea48c880fbd15c09181"
  },
  {
    "url": "assets/js/30.d5057b1c.js",
    "revision": "b02f2d318e73467dddd3891bb550ef9c"
  },
  {
    "url": "assets/js/31.51960ab1.js",
    "revision": "b07e648021e7d3977e408b41c6aec8f5"
  },
  {
    "url": "assets/js/32.edf4f065.js",
    "revision": "8a922b83fff2f6a5088e53871c6491dd"
  },
  {
    "url": "assets/js/33.426ad6f4.js",
    "revision": "f7e5be686faa2fa9882581bb2e1930f5"
  },
  {
    "url": "assets/js/34.5ec6e5d9.js",
    "revision": "805f6e5ee714c053797498bcc754fff4"
  },
  {
    "url": "assets/js/35.cbd7e516.js",
    "revision": "b6bc110373e7befc8260e33d6c544c54"
  },
  {
    "url": "assets/js/36.272d6484.js",
    "revision": "89ade67ff0e142dff95a8b9f2a7bc03d"
  },
  {
    "url": "assets/js/37.c32d0a2f.js",
    "revision": "e3e40f3cfc6c2c074fc82f4918e3ba66"
  },
  {
    "url": "assets/js/38.c6b8fca8.js",
    "revision": "aed0bd34cb8f586580e338093b06462a"
  },
  {
    "url": "assets/js/39.a3507c6a.js",
    "revision": "18dba577e737ceabd7190240baddaa2d"
  },
  {
    "url": "assets/js/4.62ce3bb3.js",
    "revision": "571a5d7224f2b277da6df31f983d1d0a"
  },
  {
    "url": "assets/js/40.31957ca9.js",
    "revision": "730ad1604498bafba80fe0b4d9ab5fc3"
  },
  {
    "url": "assets/js/41.4220fe86.js",
    "revision": "40c74f19658fc98ee9f854fc735f6b29"
  },
  {
    "url": "assets/js/42.ace76760.js",
    "revision": "00faf1d05bf8efd64ef4942770d562e1"
  },
  {
    "url": "assets/js/43.7de7f90e.js",
    "revision": "4f8f960f5756d43aee412977209e2dbc"
  },
  {
    "url": "assets/js/44.407a6a6b.js",
    "revision": "dc2c4cdd62b68b48963b14fb10b6e5c8"
  },
  {
    "url": "assets/js/45.71c888bc.js",
    "revision": "3a5ab8e586578ac6001f4f2ff9fc226c"
  },
  {
    "url": "assets/js/46.b51e3204.js",
    "revision": "65555a8812d6d152a914b78381812642"
  },
  {
    "url": "assets/js/47.5bbb72a0.js",
    "revision": "ffebda03aa1495af6f1d8fbb8aa29f32"
  },
  {
    "url": "assets/js/48.c916144b.js",
    "revision": "14da36e66d17be78ab9e62c4f1b342cc"
  },
  {
    "url": "assets/js/49.2ca6ec34.js",
    "revision": "091d6401c3bafb74af0f0b1b84f09050"
  },
  {
    "url": "assets/js/5.8db11327.js",
    "revision": "52e7d6804dda8f5ee743ba8be4c2d250"
  },
  {
    "url": "assets/js/50.6798b8c1.js",
    "revision": "bc0b182fcaa3104f97b98e62a2b0fbc4"
  },
  {
    "url": "assets/js/51.1874ce59.js",
    "revision": "6c4441d38d6d6f5b9ca48246d54c6879"
  },
  {
    "url": "assets/js/52.5f161167.js",
    "revision": "193a92974e6b1c92846b71d8b221ceb8"
  },
  {
    "url": "assets/js/53.42322872.js",
    "revision": "9e4cb598f3f910ebb93356f7b937042e"
  },
  {
    "url": "assets/js/54.cb2cdaf5.js",
    "revision": "1ec735c4980939104e4710bb637ec6dc"
  },
  {
    "url": "assets/js/55.243f0d4a.js",
    "revision": "3d3a9c6b39b032b768c6a5a6e5267ee7"
  },
  {
    "url": "assets/js/56.08764fad.js",
    "revision": "d8be578bb9751234a37a5f60d107e31b"
  },
  {
    "url": "assets/js/57.34db2155.js",
    "revision": "ce19e1d30044fafa756a81030e519bb9"
  },
  {
    "url": "assets/js/58.f52219a6.js",
    "revision": "4d048949d3cdc6bcdcb353e1921dbdda"
  },
  {
    "url": "assets/js/59.f9bc3e92.js",
    "revision": "6785b8a8a025888cad0cd616f8907c86"
  },
  {
    "url": "assets/js/6.91290b5a.js",
    "revision": "dd94bb72290e61bd81b55a22e543c833"
  },
  {
    "url": "assets/js/60.861da9fd.js",
    "revision": "3075285816d0d9a8a0c2cacae5566216"
  },
  {
    "url": "assets/js/61.b9799428.js",
    "revision": "e2da0c732f3e7026292dfe52765b2cba"
  },
  {
    "url": "assets/js/62.5369b9a0.js",
    "revision": "24b50aa885f5087657a09ea98c5b3a15"
  },
  {
    "url": "assets/js/7.c49ad4b9.js",
    "revision": "db2ca19bf20b678eca2359b2e76ae9aa"
  },
  {
    "url": "assets/js/8.6cb4751f.js",
    "revision": "8697ef11f76d2fb1007b8a030747557a"
  },
  {
    "url": "assets/js/9.2634d8b6.js",
    "revision": "0eabb0b877d49038d25c15d2a7165f7f"
  },
  {
    "url": "assets/js/app.91329631.js",
    "revision": "e9e790788d84c2f704f16dff23be0f88"
  },
  {
    "url": "assignments/api-design.html",
    "revision": "56f108ad06727b60084acd9ce85a5147"
  },
  {
    "url": "assignments/architecture.html",
    "revision": "909dde40bfc73107e23dc7486730bd95"
  },
  {
    "url": "assignments/ari-poster.html",
    "revision": "a9ba1ea7ac9873091381dd24f0580bed"
  },
  {
    "url": "assignments/bug-fix.html",
    "revision": "b0b44650ebcb49592fa5f3a3ab30aa92"
  },
  {
    "url": "assignments/data-structures.html",
    "revision": "deb4160fced2f0d6483d765a1e973447"
  },
  {
    "url": "assignments/deployment.html",
    "revision": "21d9567578ef71f557b265b5602e7079"
  },
  {
    "url": "assignments/dev-demos.html",
    "revision": "33a8f037cc676f76220927923d8356eb"
  },
  {
    "url": "assignments/features.html",
    "revision": "cf85f70ce8a0ac2e0845779379991df4"
  },
  {
    "url": "assignments/final-code.html",
    "revision": "87ec92ab9cdffd8e93cb70663f86b327"
  },
  {
    "url": "assignments/full-visual-design.html",
    "revision": "049c1a59519987f2c5aa3f0572864e2a"
  },
  {
    "url": "assignments/gantt.html",
    "revision": "c148ce1e294724810688df192a6260a1"
  },
  {
    "url": "assignments/identity.html",
    "revision": "540f57aeff4b21d2e7fe078610b78156"
  },
  {
    "url": "assignments/index.html",
    "revision": "fa1c916b7d6d59ae9661de0dddf4b5ce"
  },
  {
    "url": "assignments/information-architecture.html",
    "revision": "532501c870f0282270f1f8a04abf5746"
  },
  {
    "url": "assignments/interactive-wireframe.html",
    "revision": "ec21c80f1708c30c08a849263de58588"
  },
  {
    "url": "assignments/mid-present.html",
    "revision": "bda3fbbb009aa2cac199e49fd95691b8"
  },
  {
    "url": "assignments/mid-term-client-presentation.html",
    "revision": "3048b08f1764a44e372a5a9a7210a70a"
  },
  {
    "url": "assignments/mockup.html",
    "revision": "68c51a6ad3f23a624dcd6a0077c59948"
  },
  {
    "url": "assignments/order.html",
    "revision": "c108a0be948ed515dc2b665492046571"
  },
  {
    "url": "assignments/paper-prototype.html",
    "revision": "e60e0f52211f4cea963fdfb18f7a8fa7"
  },
  {
    "url": "assignments/personas.html",
    "revision": "7745f4c07be41c1144508968878f6a15"
  },
  {
    "url": "assignments/pitches.html",
    "revision": "114bb68629a0470d8f8860db4a9bfa03"
  },
  {
    "url": "assignments/poc.html",
    "revision": "451034bd90346f1c279e43107a3ced6c"
  },
  {
    "url": "assignments/product-research.html",
    "revision": "c7e8116184a6985cc044301e5f9128fb"
  },
  {
    "url": "assignments/reaction.html",
    "revision": "eb712c9fb41966d7edc1de6a7c9deb4c"
  },
  {
    "url": "assignments/responses.html",
    "revision": "af49ac88b0741e6694b43601495450ad"
  },
  {
    "url": "assignments/team-contract.html",
    "revision": "b747a840843e36b478a07d736ebb45ae"
  },
  {
    "url": "assignments/tech-research.html",
    "revision": "cdc447110df091180f07ab0ea61d14cd"
  },
  {
    "url": "assignments/test-documents.html",
    "revision": "51b58814ac48d4f8862dc91697c3ed0b"
  },
  {
    "url": "assignments/test-results.html",
    "revision": "91b229726f399cb663f1b0b6c47e291d"
  },
  {
    "url": "assignments/testing.html",
    "revision": "b2da7d87e36d24bb93342fbd0aca3e7f"
  },
  {
    "url": "assignments/ui-wireframe.html",
    "revision": "0c82c61b8822d0c96acc59aa426caa62"
  },
  {
    "url": "assignments/usage-scenarios.html",
    "revision": "d0238a0287b852b707521fe31184544f"
  },
  {
    "url": "assignments/user-research.html",
    "revision": "64eef5147dc5bc23b28948ca5f991780"
  },
  {
    "url": "assignments/visual-design-concept.html",
    "revision": "616f3398fd0a02b010f4905f657256c6"
  },
  {
    "url": "assignments/visual-design.html",
    "revision": "390ff44eacf91d7cabbbb3131c5c9054"
  },
  {
    "url": "assignments/wireframes.html",
    "revision": "1b61d2b1ffe355e89fe9fd78ba3bee74"
  },
  {
    "url": "HeadshotPlaceholder.png",
    "revision": "dd905cc985945c4b067ad8e177bbefe0"
  },
  {
    "url": "hero.png",
    "revision": "a77ff0e74d076093d400c27e493f4974"
  },
  {
    "url": "index.html",
    "revision": "3cf922f609cad5a971eaa6128286ea44"
  },
  {
    "url": "modules/design-prototyping/index.html",
    "revision": "9454cf9823b466c8e57c90aabe3ee400"
  },
  {
    "url": "modules/design-prototyping/workbench.html",
    "revision": "24769a3072b5e4428626954a31fadd96"
  },
  {
    "url": "modules/development-testing/index.html",
    "revision": "49c639893c046ce64c3d84c65519f0b7"
  },
  {
    "url": "modules/finalizing-hand-off/index.html",
    "revision": "6c4eaf4aadd45ba573882e5b4fd63dd1"
  },
  {
    "url": "modules/research-planning/agile-2.html",
    "revision": "b1f84d7f2e09b4bde444f98846586498"
  },
  {
    "url": "modules/research-planning/agile-3.html",
    "revision": "ff2d3fd7ee81840b283ebe555ae3dc01"
  },
  {
    "url": "modules/research-planning/agile.html",
    "revision": "2f437ffd5834d81822cae3bb5be11683"
  },
  {
    "url": "modules/research-planning/index.html",
    "revision": "69ad2a40810877526598c1b651875504"
  },
  {
    "url": "modules/research-planning/questions.html",
    "revision": "8b14b418439b1f90a91a69f22fb9ec51"
  },
  {
    "url": "modules/research-planning/service-design.html",
    "revision": "6454a5602c65d808bfeba6ee34bde566"
  },
  {
    "url": "modules/research-planning/wrike.html",
    "revision": "28bee065f5c94f1b86a4459224debe75"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "e4d5c049d5fced1910280906a26cd793"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "b5018142ebc762526289fadc232841dd"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "d9d4eba72810b94edcb747efb8094b0f"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "8987028b1944455c270244674ed1d073"
  },
  {
    "url": "overview/contacts.html",
    "revision": "361ebbcac80e37eb5e9490907aedc184"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "18e8fe55168906acf4d078ceabec59f4"
  },
  {
    "url": "overview/index.html",
    "revision": "999028a9bd6547f9584d5d8e13238f3d"
  },
  {
    "url": "steve-griffith.jpeg",
    "revision": "3fb81c0d91a190afe01fd27de65080f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
