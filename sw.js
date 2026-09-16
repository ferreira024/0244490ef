const SHELL='sgo-shell-v5',RUNTIME='sgo-runtime-v5';
const APP=['./','./index.html','./manifest.webmanifest','https://unpkg.com/leaflet@1.9.4/dist/leaflet.css','https://unpkg.com/leaflet@1.9.4/dist/leaflet.js','https://unpkg.com/esri-leaflet@3.0.15/dist/esri-leaflet.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(SHELL).then(c=>Promise.allSettled(APP.map(x=>c.add(x)))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>![SHELL,RUNTIME].includes(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url);
 if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{caches.open(SHELL).then(c=>c.put('./index.html',r.clone()));return r}).catch(()=>caches.match('./index.html')));return}
 /* ANEPC: network-first para não servir ocorrências antigas como se fossem atuais. */
 if(u.hostname==='services-eu1.arcgis.com'){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));return}
 if(u.hostname.includes('cm-pvarzim.pt')){e.respondWith(fetch(e.request).then(r=>{caches.open(RUNTIME).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>caches.match(e.request)));return}
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{if(x.ok)caches.open(RUNTIME).then(c=>c.put(e.request,x.clone()));return x})));
});