var search=function(){"use strict";var e,r,t,n=(e=function(e,r){var t=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();e.exports=r=t.fetch,t.fetch&&(r.default=t.fetch.bind(t)),r.Headers=t.Headers,r.Request=t.Request,r.Response=t.Response},e(r={exports:{}},r.exports),r.exports);t=n,window.swiftTypeSearch=function(e,r,n){var o={engine_key:"wv4pczb-fro-K3xZczof",per_page:10,page:r||1,facets:{page:["post-type"]},q:e,filters:n};return t("https://search-api.swiftype.com/api/v1/public/engines/search.json",{headers:{"content-type":"application/json",pragma:"no-cache","x-swiftype-integration":"search-ui","x-swiftype-integration-version":"1.3.2"},referrer:"https://neo4j.com/",referrerPolicy:"no-referrer-when-downgrade",body:JSON.stringify(o),method:"POST",mode:"cors",credentials:"same-origin"}).then((function(e){return e.json()}))};return{}}();