if(!self.define){let e,d={};const c=(c,a)=>(c=new URL(c+".js",a).href,d[c]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=d,document.head.appendChild(e)}else e=c,importScripts(c),d()})).then((()=>{let e=d[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(d[i])return;let s={};const r=e=>c(e,i),b={module:{uri:i},exports:s,require:r};d[i]=Promise.all(a.map((e=>b[e]||r(e)))).then((e=>(f(...e),s)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/binaries/stremio_core_web_bg.wasm",revision:"9f0d1799795da5be5808dd6d83870cec"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/scripts/main.js",revision:"f848decf9e3ec18ae38ed53e88c1f002"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/scripts/worker.js",revision:"46b864d6032d0ee3f480423e77a5c60f"},{url:"6a636c979975d92f8e9263ed1c2ccbd1d90919fe/styles/main.css",revision:"84f22b9a9de80c8d41888aec7acf449d"},{url:"index.html",revision:"418f8bcc7343d1a5f7ba5bb714a0d4b5"}],{})}));
//# sourceMappingURL=service-worker.js.map
