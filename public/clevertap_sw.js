!function(n){"function"==typeof define&&define.amd?define(n):n()}((function(){"use strict";if(importScripts("https://d2r1yp2w7bby2u.cloudfront.net/js/localforage.min.js"),void 0===t)var n,t;function o(n,t,o){var e=t,c=!0;"action1"===n.action?(void 0!==o.notificationOptions.actions[0].deepLink&&(e+="&r="+encodeURIComponent(o.notificationOptions.actions[0].deepLink),c=!1),e+="&b="+encodeURIComponent("button1")):"action2"===n.action?(void 0!==o.notificationOptions.actions[1].deepLink&&(e+="&r="+encodeURIComponent(o.notificationOptions.actions[1].deepLink),c=!1),e+="&b="+encodeURIComponent("button2")):(void 0!==o.deepLink&&(e+="&r="+encodeURIComponent(o.deepLink),c=!1),e+="&b="+encodeURIComponent("button0")),c?i(e):clients.openWindow(e),n.notification.close()}self.addEventListener("install",(function(n){self.skipWaiting(),console.log("CT Service worker installed")})),self.addEventListener("activate",(function(n){console.log("CT Service worker activated")})),self.addEventListener("push",(function(o){console.log("Push event: ",o);var i,e=JSON.parse(o.data.text()),c=e.title,a=e.notificationOptions,d=a.data;void 0!==d&&(d.wzrk_id+="_".concat((new Date).getTime()),i=d.wzrk_id),void 0===i&&(i=c),localforage.setItem(i,o.data.text()).then((function(n){})).catch((function(n){console.log("Error in persisting")})),t=e.redirectPath,n=e;var r=e.raiseNotificationViewedPath;void 0!==r&&fetch(r,{mode:"no-cors"}),o.waitUntil(self.registration.showNotification(c,a))})),self.addEventListener("notificationclick",(function(i){var e,c=i.notification,a=c.data;null!=a&&(e=a.wzrk_id),void 0===e&&(e=c.title);var d=localforage.getItem(e).then((function(n){var t=JSON.parse(n),e=t.redirectPath;o(i,e,t)})).catch((function(e){o(i,t,n),console.log(e)}));i.waitUntil(d)}));var i=function(n){fetch(n+="&s=true",{mode:"no-cors"})}}));