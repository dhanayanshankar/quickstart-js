!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t=t||self).firebase)}(this,function(Ht){"use strict";try{(function(){Ht=Ht&&Ht.hasOwnProperty("default")?Ht.default:Ht;var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};var s=function(){return(s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function u(o,s,a,c){return new(a=a||Promise)(function(t,e){function r(t){try{i(c.next(t))}catch(t){e(t)}}function n(t){try{i(c.throw(t))}catch(t){e(t)}}function i(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(r,n)}i((c=c.apply(o,s||[])).next())})}function w(r,n){var i,o,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&e[0]?o.return:e[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,e[1])).done)return s;switch(o=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(r,a)}catch(t){e=[6,t],o=0}finally{i=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function n(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(n=o.next()).done;)s.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}Object.defineProperty(t.prototype,"ENCODED_VALS",{get:function(){return this.ENCODED_VALS_BASE+"+/="},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ENCODED_VALS_WEBSAFE",{get:function(){return this.ENCODED_VALS_BASE+"-_."},enumerable:!0,configurable:!0}),t.prototype.encodeByteArray=function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<t.length;i+=3){var o=t[i],s=i+1<t.length,a=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=o>>2,h=(3&o)<<4|a>>4,l=(15&a)<<2|u>>6,p=63&u;c||(p=64,s||(l=64)),n.push(r[f],r[h],r[l],r[p])}return n.join("")},t.prototype.encodeString=function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){for(var e=[],r=0,n=0;n<t.length;n++){var i=t.charCodeAt(n);i<128?e[r++]=i:(i<2048?e[r++]=i>>6|192:(55296==(64512&i)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++n)),e[r++]=i>>18|240,e[r++]=i>>12&63|128):e[r++]=i>>12|224,e[r++]=i>>6&63|128),e[r++]=63&i|128)}return e}(t),e)},t.prototype.decodeString=function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],r=0,n=0;r<t.length;){var i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(191<i&&i<224){var o=t[r++];e[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(239<i&&i<365){var s=((7&i)<<18|(63&(o=t[r++]))<<12|(63&(a=t[r++]))<<6|63&t[r++])-65536;e[n++]=String.fromCharCode(55296+(s>>10)),e[n++]=String.fromCharCode(56320+(1023&s))}else{o=t[r++];var a=t[r++];e[n++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},t.prototype.decodeStringToByteArray=function(t,e){this.init_();for(var r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<t.length;){var o=r[t.charAt(i++)],s=i<t.length?r[t.charAt(i)]:0,a=++i<t.length?r[t.charAt(i)]:64,c=++i<t.length?r[t.charAt(i)]:64;if(++i,null==o||null==s||null==a||null==c)throw Error();var u=o<<2|s>>4;if(n.push(u),64!==a){var f=s<<4&240|a>>2;if(n.push(f),64!==c){var h=a<<6&192|c;n.push(h)}}}return n},t.prototype.init_=function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t)>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}};function t(){this.byteToCharMap_=null,this.charToByteMap_=null,this.byteToCharMapWebSafe_=null,this.charToByteMapWebSafe_=null,this.ENCODED_VALS_BASE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",this.HAS_NATIVE_SUPPORT="function"==typeof atob}var e,i,o,d=(o=Error,r(e=c,i=o),void(e.prototype=null===i?Object.create(i):(a.prototype=i.prototype,new a)),c);function a(){this.constructor=e}function c(t,e){var r=o.call(this,e)||this;return r.code=t,r.name="FirebaseError",Object.setPrototypeOf(r,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,f.prototype.create),r}var f=(h.prototype.create=function(t){for(var e,r,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var o=n[0]||{},s=this.service+"/"+t,a=this.errors[t],c=a?function(t,n){return t.replace(g,function(t,e){var r=n[e];return null!=r?r.toString():"<"+e+"?>"})}(a,o):"Error",u=this.serviceName+": "+c+" ("+s+").",f=new d(s,u);try{for(var h=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}(Object.keys(o)),l=h.next();!l.done;l=h.next()){var p=l.value;"_"!==p.slice(-1)&&(p in f&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),f[p]=o[p])}}catch(t){e={error:t}}finally{try{l&&!l.done&&(r=h.return)&&r.call(h)}finally{if(e)throw e.error}}return f},h);function h(t,e,r){this.service=t,this.serviceName=e,this.errors=r}var g=/\{\$([^}]+)}/g;function l(r){return new Promise(function(t,e){r.onsuccess=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function p(r,n,i){var o,t=new Promise(function(t,e){l(o=r[n].apply(r,i)).then(t,e)});return t.request=o,t}function v(t,r,e){e.forEach(function(e){Object.defineProperty(t.prototype,e,{get:function(){return this[r][e]},set:function(t){this[r][e]=t}})})}function y(e,r,n,t){t.forEach(function(t){t in n.prototype&&(e.prototype[t]=function(){return p(this[r],t,arguments)})})}function m(e,r,n,t){t.forEach(function(t){t in n.prototype&&(e.prototype[t]=function(){return this[r][t].apply(this[r],arguments)})})}function b(e,r,n,t){t.forEach(function(t){t in n.prototype&&(e.prototype[t]=function(){return function(t,e,r){var n=p(t,e,r);return n.then(function(t){if(t)return new S(t,n.request)})}(this[r],t,arguments)})})}function _(t){this._index=t}function S(t,e){this._cursor=t,this._request=e}function T(t){this._store=t}function E(r){this._tx=r,this.complete=new Promise(function(t,e){r.oncomplete=function(){t()},r.onerror=function(){e(r.error)},r.onabort=function(){e(r.error)}})}function C(t,e,r){this._db=t,this.oldVersion=e,this.transaction=new E(r)}function A(t){this._db=t}v(_,"_index",["name","keyPath","multiEntry","unique"]),y(_,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),b(_,"_index",IDBIndex,["openCursor","openKeyCursor"]),v(S,"_cursor",["direction","key","primaryKey","value"]),y(S,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(r){r in IDBCursor.prototype&&(S.prototype[r]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[r].apply(e._cursor,t),l(e._request).then(function(t){if(t)return new S(t,e._request)})})})}),T.prototype.createIndex=function(){return new _(this._store.createIndex.apply(this._store,arguments))},T.prototype.index=function(){return new _(this._store.index.apply(this._store,arguments))},v(T,"_store",["name","keyPath","indexNames","autoIncrement"]),y(T,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),b(T,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),m(T,"_store",IDBObjectStore,["deleteIndex"]),E.prototype.objectStore=function(){return new T(this._tx.objectStore.apply(this._tx,arguments))},v(E,"_tx",["objectStoreNames","mode"]),m(E,"_tx",IDBTransaction,["abort"]),C.prototype.createObjectStore=function(){return new T(this._db.createObjectStore.apply(this._db,arguments))},v(C,"_db",["name","version","objectStoreNames"]),m(C,"_db",IDBDatabase,["deleteObjectStore","close"]),A.prototype.transaction=function(){return new E(this._db.transaction.apply(this._db,arguments))},v(A,"_db",["name","version","objectStoreNames"]),m(A,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[T,_].forEach(function(t){i in t.prototype&&(t.prototype[i.replace("open","iterate")]=function(){var t=function(t){return Array.prototype.slice.call(t)}(arguments),e=t[t.length-1],r=this._store||this._index,n=r[i].apply(r,t.slice(0,-1));n.onsuccess=function(){e(n.result)}})})}),[_,T].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,r){var n=this,i=[];return new Promise(function(e){n.iterateCursor(t,function(t){t?(i.push(t.value),void 0===r||i.length!=r?t.continue():e(i)):e(i)})})})});var M,I=1e4,P="w:0.2.0",O="FIS_v2",k="https://firebaseinstallations.googleapis.com/v1",j=36e5,D=((M={})["missing-app-config-values"]="Missing App configuration values.",M["create-installation-failed"]="Could not register Firebase Installation.",M["generate-token-failed"]="Could not generate Auth Token.",M["not-registered"]="Firebase Installation is not registered.",M["installation-not-found"]="Firebase Installation not found.",M["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',M["app-offline"]="Could not process request. Application offline.",M["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",M),F=new f("installations","Installations",D);function N(t){return t instanceof d&&t.code.includes("request-failed")}function L(t){if(!t||!t.options)throw F.create("missing-app-config-values");var e=t.name,r=t.options,n=r.projectId,i=r.apiKey,o=r.appId;if(!(e&&n&&i&&o))throw F.create("missing-app-config-values");return{appName:e,projectId:n,apiKey:i,appId:o}}function x(t){var e=t.projectId;return k+"/projects/"+e+"/installations"}function B(t){return{token:t.token,requestStatus:2,expiresIn:function(t){return Number(t.replace("s","000"))}(t.expiresIn),creationTime:Date.now()}}function q(n,i){return u(this,void 0,void 0,function(){var e,r;return w(this,function(t){switch(t.label){case 0:return[4,i.json()];case 1:return e=t.sent(),r=e.error,[2,F.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}})})}function V(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function K(t,e){var r=e.refreshToken,n=V(t);return n.append("Authorization",function(t){return O+" "+t}(r)),n}function R(r){return u(this,void 0,void 0,function(){var e;return w(this,function(t){switch(t.label){case 0:return[4,r()];case 1:return 500<=(e=t.sent()).status&&e.status<600?[2,r()]:[2,e]}})})}function $(e){return new Promise(function(t){setTimeout(t,e)})}function W(t){return btoa(String.fromCharCode.apply(String,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(n(arguments[e]));return t}(t))).replace(/\+/g,"-").replace(/\//g,"_")}var U=/^[cdef][\w-]{21}$/,z="";function H(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=function(t){return W(t).substr(0,22)}(t);return U.test(e)?e:z}catch(t){return z}}var G="firebase-installations-database",J=1,X="firebase-installations-store",Y=null;function Q(){return Y=Y||function(t,e,r){var n=p(indexedDB,"open",[t,e]),i=n.request;return i&&(i.onupgradeneeded=function(t){r&&r(new C(i.result,t.oldVersion,i.transaction))}),n.then(function(t){return new A(t)})}(G,J,function(t){switch(t.oldVersion){case 0:t.createObjectStore(X)}})}function Z(i,o){return u(this,void 0,void 0,function(){var e,r,n;return w(this,function(t){switch(t.label){case 0:return e=rt(i),[4,Q()];case 1:return r=t.sent(),[4,(n=r.transaction(X,"readwrite")).objectStore(X).put(o,e)];case 2:return t.sent(),[4,n.complete];case 3:return t.sent(),[2,o]}})})}function tt(i){return u(this,void 0,void 0,function(){var e,r,n;return w(this,function(t){switch(t.label){case 0:return e=rt(i),[4,Q()];case 1:return r=t.sent(),[4,(n=r.transaction(X,"readwrite")).objectStore(X).delete(e)];case 2:return t.sent(),[4,n.complete];case 3:return t.sent(),[2]}})})}function et(a,c){return u(this,void 0,void 0,function(){var e,r,n,i,o,s;return w(this,function(t){switch(t.label){case 0:return e=rt(a),[4,Q()];case 1:return r=t.sent(),n=r.transaction(X,"readwrite"),[4,(i=n.objectStore(X)).get(e)];case 2:return o=t.sent(),(s=c(o))===o?[2,s]:void 0!==s?[3,4]:[4,i.delete(e)];case 3:return t.sent(),[3,6];case 4:return[4,i.put(s,e)];case 5:t.sent(),t.label=6;case 6:return[4,n.complete];case 7:return t.sent(),[2,s]}})})}function rt(t){return t.appName+"!"+t.appId}function nt(i){return u(this,void 0,void 0,function(){var n,e,r;return w(this,function(t){switch(t.label){case 0:return[4,et(i,function(t){var e=function(t){var e=t||{fid:H(),registrationStatus:0};if(ot(e))return{fid:e.fid,registrationStatus:0};return e}(t),r=function(t,e){{if(0!==e.registrationStatus)return 1===e.registrationStatus?{installationEntry:e,registrationPromise:function(r){return u(this,void 0,void 0,function(){var e;return w(this,function(t){switch(t.label){case 0:return[4,it(r)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,$(100)];case 3:return t.sent(),[4,it(r)];case 4:return e=t.sent(),[3,2];case 5:if(0===e.registrationStatus)throw F.create("create-installation-failed");return[2,e]}})})}(t)}:{installationEntry:e};if(!navigator.onLine){var r=Promise.reject(F.create("app-offline"));return{installationEntry:e,registrationPromise:r}}var n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=function(n,i){return u(this,void 0,void 0,function(){var e,r;return w(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,7]),[4,function(a,t){var c=t.fid;return u(this,void 0,void 0,function(){var e,r,n,i,o,s;return w(this,function(t){switch(t.label){case 0:return e=x(a),r=V(a),n={fid:c,authVersion:O,appId:a.appId,sdkVersion:P},i={method:"POST",headers:r,body:JSON.stringify(n)},[4,R(function(){return fetch(e,i)})];case 1:return(o=t.sent()).ok?[4,o.json()]:[3,3];case 2:return s=t.sent(),[2,{fid:s.fid||c,registrationStatus:2,refreshToken:s.refreshToken,authToken:B(s.authToken)}];case 3:return[4,q("Create Installation",o)];case 4:throw t.sent()}})})}(n,i)];case 1:return e=t.sent(),[2,Z(n,e)];case 2:return N(r=t.sent())&&409===r.serverCode?[4,tt(n)]:[3,4];case 3:return t.sent(),[3,6];case 4:return[4,Z(n,{fid:i.fid,registrationStatus:0})];case 5:t.sent(),t.label=6;case 6:throw r;case 7:return[2]}})})}(t,n);return{installationEntry:n,registrationPromise:i}}}(i,e);return n=r.registrationPromise,r.installationEntry})];case 1:return(e=t.sent()).fid!==z?[3,3]:(r={},[4,n]);case 2:return[2,(r.installationEntry=t.sent(),r)];case 3:return[2,{installationEntry:e,registrationPromise:n}]}})})}function it(t){return et(t,function(t){if(!t)throw F.create("installation-not-found");return ot(t)?{fid:t.fid,registrationStatus:0}:t})}function ot(t){return 1===t.registrationStatus&&t.registrationTime+I<Date.now()}function st(a,c){return u(this,void 0,void 0,function(){var e,r,n,i,o,s;return w(this,function(t){switch(t.label){case 0:return e=function(t,e){var r=e.fid;return x(t)+"/"+r+"/authTokens:generate"}(a,c),r=K(a,c),n={installation:{sdkVersion:P}},i={method:"POST",headers:r,body:JSON.stringify(n)},[4,R(function(){return fetch(e,i)})];case 1:return(o=t.sent()).ok?[4,o.json()]:[3,3];case 2:return s=t.sent(),[2,B(s)];case 3:return[4,q("Generate Auth Token",o)];case 4:throw t.sent()}})})}function at(i){return u(this,void 0,void 0,function(){var n,e,r;return w(this,function(t){switch(t.label){case 0:return[4,et(i,function(t){if(!ut(t))throw F.create("not-registered");var e=t.authToken;if(function(t){return 2===t.requestStatus&&!function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+j}(t)}(e))return t;if(1===e.requestStatus)return n=function(n){return u(this,void 0,void 0,function(){var e,r;return w(this,function(t){switch(t.label){case 0:return[4,ct(n)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,$(100)];case 3:return t.sent(),[4,ct(n)];case 4:return e=t.sent(),[3,2];case 5:if(0===(r=e.authToken).requestStatus)throw F.create("generate-token-failed");return[2,r]}})})}(i),t;if(!navigator.onLine)throw F.create("app-offline");var r=function(t){var e={requestStatus:1,requestTime:Date.now()};return s({},t,{authToken:e})}(t);return n=function(i,o){return u(this,void 0,void 0,function(){var e,r,n;return w(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,8]),[4,st(i,o)];case 1:return e=t.sent(),n=s({},o,{authToken:e}),[4,Z(i,n)];case 2:return t.sent(),[2,e];case 3:return!N(r=t.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,tt(i)];case 4:return t.sent(),[3,7];case 5:return n=s({},o,{authToken:{requestStatus:0}}),[4,Z(i,n)];case 6:t.sent(),t.label=7;case 7:throw r;case 8:return[2]}})})}(i,r),r})];case 1:return e=t.sent(),n?[4,n]:[3,3];case 2:return r=t.sent(),[3,4];case 3:r=e.authToken,t.label=4;case 4:return[2,r.token]}})})}function ct(t){return et(t,function(t){if(!ut(t))throw F.create("not-registered");return function(t){return 1===t.requestStatus&&t.requestTime+I<Date.now()}(t.authToken)?s({},t,{authToken:{requestStatus:0}}):t})}function ut(t){return void 0!==t&&2===t.registrationStatus}function ft(r){return u(this,void 0,void 0,function(){var e;return w(this,function(t){switch(t.label){case 0:return[4,function(i){return u(this,void 0,void 0,function(){var e,r,n;return w(this,function(t){switch(t.label){case 0:return[4,nt(i)];case 1:return e=t.sent(),r=e.installationEntry,(n=e.registrationPromise)?[4,n]:[3,3];case 2:return t.sent(),[3,4];case 3:if(2!==r.registrationStatus)throw F.create("create-installation-failed");t.label=4;case 4:return[2]}})})}(e=L(r))];case 1:return t.sent(),[2,at(e)]}})})}function ht(o,s){return u(this,void 0,void 0,function(){var e,r,n,i;return w(this,function(t){switch(t.label){case 0:return e=function(t,e){var r=e.fid;return x(t)+"/"+r}(o,s),r=K(o,s),n={method:"DELETE",headers:r},[4,R(function(){return fetch(e,n)})];case 1:return(i=t.sent()).ok?[3,3]:[4,q("Delete Installation",i)];case 2:throw t.sent();case 3:return[2]}})})}Ht.INTERNAL.registerService("installations",function(t){return L(t),{app:t,getId:function(){return function(o){return u(this,void 0,void 0,function(){var e,r,n,i;return w(this,function(t){switch(t.label){case 0:return[4,nt(e=L(o))];case 1:return r=t.sent(),n=r.installationEntry,(i=r.registrationPromise)&&i.catch(function(){}),2===n.registrationStatus&&at(e).catch(function(){}),[2,n.fid]}})})}(t)},getToken:function(){return ft(t)},delete:function(){return function(n){return u(this,void 0,void 0,function(){var e,r;return w(this,function(t){switch(t.label){case 0:return[4,et(e=L(n),function(t){if(!t||0!==t.registrationStatus)return t})];case 1:if(!(r=t.sent()))return[3,6];if(1!==r.registrationStatus)return[3,2];throw F.create("delete-pending-registration");case 2:if(2!==r.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw F.create("app-offline");case 3:return[4,ht(e,r)];case 4:return t.sent(),[4,tt(e)];case 5:t.sent(),t.label=6;case 6:return[2]}})})}(t)}}});var lt=function(t,e){return(lt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};var pt,dt,gt,vt=(gt=Error,lt(pt=mt,dt=gt),void(pt.prototype=null===dt?Object.create(dt):(yt.prototype=dt.prototype,new yt)),mt);function yt(){this.constructor=pt}function mt(t,e){var r=gt.call(this,e)||this;return r.code=t,r.name="FirebaseError",Object.setPrototypeOf(r,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,bt.prototype.create),r}var bt=(_t.prototype.create=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=e[0]||{},i=this.service+"/"+t,o=this.errors[t],s=o?function(t,n){return t.replace(wt,function(t,e){var r=n[e];return null!=r?r.toString():"<"+e+"?>"})}(o,n):"Error",a=this.serviceName+": "+s+" ("+i+").",c=new vt(i,a),u=0,f=Object.keys(n);u<f.length;u++){var h=f[u];"_"!==h.slice(-1)&&(h in c&&console.warn('Overwriting FirebaseError base field "'+h+'" can cause unexpected behavior.'),c[h]=n[h])}return c},_t);function _t(t,e,r){this.service=t,this.serviceName=e,this.errors=r}var wt=/\{\$([^}]+)}/g;var St,Tt=(Et.prototype.fetch=function(s){return u(this,void 0,void 0,function(){var e,r,n,i,o;return w(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=t.sent(),r=e[0],(n=e[1])&&function(t,e){return!!e&&Date.now()-e<=t}(s.cacheMaxAgeMillis,r)?[2,n]:(s.eTag=n&&n.eTag,[4,this.client.fetch(s)]);case 2:return i=t.sent(),o=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===i.status&&o.push(this.storage.setLastSuccessfulFetchResponse(i)),[4,Promise.all(o)];case 3:return t.sent(),[2,i]}})})},Et);function Et(t,e,r){this.client=t,this.storage=e,this.storageCache=r}var Ct=((St={})["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",St["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",St["registration-api-key"]="Undefined API key. Check Firebase app initialization.",St["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",St["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",St["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",St["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",St["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",St["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",St["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',St["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',St["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",St["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",St),At=new bt("remoteconfig","Remote Config",Ct);var Mt=(It.prototype.fetch=function(_){return u(this,void 0,void 0,function(){var e,r,n,i,o,s,a,c,u,f,h,l,p,d,g,v,y,m,b;return w(this,function(t){switch(t.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:e=t.sent(),r=e[0],n=e[1],i=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=i+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch",s={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":_.eTag||"*","X-Goog-Api-Key":this.apiKey},a={sdk_version:this.sdkVersion,app_instance_id:r,app_instance_id_token:n,app_id:this.appId,language_code:_.languageCode},c={method:"POST",headers:s,body:JSON.stringify(a)},u=fetch(o,c),f=new Promise(function(t,e){_.signal.addEventListener(function(){var t=new Error("The operation was aborted.");t.name="AbortError",e(t)})}),t.label=2;case 2:return t.trys.push([2,5,,6]),[4,Promise.race([u,f])];case 3:return t.sent(),[4,u];case 4:return h=t.sent(),[3,6];case 5:throw l=t.sent(),p="fetch-client-network","AbortError"===l.name&&(p="fetch-timeout"),At.create(p,{originalErrorMessage:l.message});case 6:if(d=h.status,g=h.headers.get("ETag")||void 0,200!==h.status)return[3,11];m=void 0,t.label=7;case 7:return t.trys.push([7,9,,10]),[4,h.json()];case 8:return m=t.sent(),[3,10];case 9:throw b=t.sent(),At.create("fetch-client-parse",{originalErrorMessage:b.message});case 10:v=m.entries,y=m.state,t.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===y?d=500:"NO_CHANGE"===y?d=304:"NO_TEMPLATE"!==y&&"EMPTY_CONFIG"!==y||(v={}),304!==d&&200!==d)throw At.create("fetch-status",{httpStatus:d});return[2,{status:d,eTag:g,config:v}]}})})},It);function It(t,e,r,n,i,o){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=r,this.projectId=n,this.apiKey=i,this.appId=o}var Pt=(Ot.prototype.addEventListener=function(t){this.listeners.push(t)},Ot.prototype.abort=function(){this.listeners.forEach(function(t){return t()})},Ot);function Ot(){this.listeners=[]}var kt=["1","true","t","yes","y","on"],jt=(Dt.prototype.asString=function(){return this._value},Dt.prototype.asBoolean=function(){return"static"!==this._source&&0<=kt.indexOf(this._value.toLowerCase())},Dt.prototype.asNumber=function(){if("static"===this._source)return 0;var t=Number(this._value);return isNaN(t)&&(t=0),t},Dt.prototype.getSource=function(){return this._source},Dt);function Dt(t,e){void 0===e&&(e=""),this._source=t,this._value=e}var Ft=(Object.defineProperty(Nt.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!0,configurable:!0}),Object.defineProperty(Nt.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!0,configurable:!0}),Nt.prototype.activate=function(){return u(this,void 0,void 0,function(){var e,r,n;return w(this,function(t){switch(t.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return e=t.sent(),r=e[0],n=e[1],r&&r.config&&r.eTag&&r.eTag!==n?[4,Promise.all([this._storageCache.setActiveConfig(r.config),this._storage.setActiveConfigEtag(r.eTag)])]:[2,!1];case 2:return t.sent(),[2,!0]}})})},Nt.prototype.ensureInitialized=function(){return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage()),this._initializePromise},Nt.prototype.fetch=function(){return u(this,void 0,void 0,function(){var e=this;return w(this,function(t){return[2,new Promise(function(o,s){return u(e,void 0,void 0,function(){var e,r,n,i=this;return w(this,function(t){switch(t.label){case 0:e=new Pt,setTimeout(function(){return u(i,void 0,void 0,function(){return w(this,function(t){return e.abort(),[2]})})},this.settings.fetchTimeoutMillis),t.label=1;case 1:return t.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:e,languageCode:function(t){return void 0===t&&(t=navigator),t.languages&&t.languages[0]||t.language}()})];case 2:return t.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return t.sent(),o(),[3,6];case 4:return r=t.sent(),n=function(t,e){return t instanceof vt&&t.code.includes(e)}(r,"fetch-throttle")?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(n)];case 5:return t.sent(),s(r),[3,6];case 6:return[2]}})})})]})})},Nt.prototype.fetchAndActivate=function(){return u(this,void 0,void 0,function(){return w(this,function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}})})},Nt.prototype.getAll=function(){var r=this;return function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),Object.keys(s({},t,e))}(this._storageCache.getActiveConfig(),this.defaultConfig).reduce(function(t,e){return t[e]=r.getValue(e),t},{})},Nt.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},Nt.prototype.getNumber=function(t){return this.getValue(t).asNumber()},Nt.prototype.getString=function(t){return this.getValue(t).asString()},Nt.prototype.getValue=function(t){var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new jt("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new jt("default",String(this.defaultConfig[t])):new jt("static")},Nt);function Nt(t,e,r,n){this.app=t,this._client=e,this._storageCache=r,this._storage=n,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}function Lt(t,e){var r=t.target.error||void 0;return At.create(e,{originalErrorMessage:r&&r.message})}var xt="app_namespace_store",Bt="firebase_remote_config",qt=1;var Vt=(Kt.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},Kt.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},Kt.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},Kt.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},Kt.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},Kt.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},Kt.prototype.getActiveConfig=function(){return this.get("active_config")},Kt.prototype.setActiveConfig=function(t){return this.set("active_config",t)},Kt.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},Kt.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},Kt.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},Kt.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},Kt.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},Kt.prototype.get=function(o){return u(this,void 0,void 0,function(){var n,i=this;return w(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return n=t.sent(),[2,new Promise(function(r,e){var t=n.transaction([xt],"readonly").objectStore(xt).get([i.appId,i.appName,i.namespace,o]);t.onerror=function(t){e(Lt(t,"storage-get"))},t.onsuccess=function(t){var e=t.target.result;r(e?e.value:void 0)}})]}})})},Kt.prototype.set=function(o,s){return u(this,void 0,void 0,function(){var n,i=this;return w(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return n=t.sent(),[2,new Promise(function(t,e){var r=n.transaction([xt],"readwrite").objectStore(xt).put({appId:i.appId,appName:i.appName,namespace:i.namespace,key:o,value:s});r.onerror=function(t){e(Lt(t,"storage-set"))},r.onsuccess=function(){t()}})]}})})},Kt.prototype.delete=function(o){return u(this,void 0,void 0,function(){var n,i=this;return w(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return n=t.sent(),[2,new Promise(function(t,e){var r=n.transaction([xt],"readwrite").objectStore(xt).delete([i.appId,i.appName,i.namespace,o]);r.onerror=function(t){e(Lt(t,"storage-delete"))},r.onsuccess=function(){t()}})]}})})},Kt.prototype.clear=function(){return u(this,void 0,void 0,function(){return w(this,function(t){switch(t.label){case 0:return[4,this.openDbPromise];case 1:return t.sent().transaction([xt],"readwrite").objectStore(xt).clear(),[2]}})})},Kt);function Kt(t,e,r,n){void 0===n&&(n=new Promise(function(e,r){var t=indexedDB.open(Bt,qt);t.onerror=function(t){r(Lt(t,"storage-open"))},t.onsuccess=function(t){e(t.target.result)},t.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(xt,{keyPath:["appId","appName","namespace","key"]})}}})),this.appId=t,this.appName=e,this.namespace=r,this.openDbPromise=n}var Rt=($t.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},$t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},$t.prototype.getActiveConfig=function(){return this.activeConfig},$t.prototype.loadFromStorage=function(){return u(this,void 0,void 0,function(){var e,r,n,i,o,s;return w(this,function(t){switch(t.label){case 0:return e=this.storage.getLastFetchStatus(),r=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),[4,e];case 1:return(i=t.sent())&&(this.lastFetchStatus=i),[4,r];case 2:return(o=t.sent())&&(this.lastSuccessfulFetchTimestampMillis=o),[4,n];case 3:return(s=t.sent())&&(this.activeConfig=s),[2]}})})},$t.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},$t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},$t.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},$t);function $t(t){this.storage=t}var Wt,Ut=(zt.prototype.fetch=function(r){return u(this,void 0,void 0,function(){var e;return w(this,function(t){switch(t.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=t.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(r,e)]}})})},zt.prototype.attemptFetch=function(i,t){var o=t.throttleEndTimeMillis,s=t.backoffCount;return u(this,void 0,void 0,function(){var e,r,n;return w(this,function(t){switch(t.label){case 0:return[4,function(i,o){return new Promise(function(t,e){var r=Math.max(o-Date.now(),0),n=setTimeout(t,r);i.addEventListener(function(){clearTimeout(n),e(At.create("fetch-throttle",{throttleEndTimeMillis:o}))})})}(i.signal,o)];case 1:t.sent(),t.label=2;case 2:return t.trys.push([2,5,,7]),[4,this.client.fetch(i)];case 3:return e=t.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return t.sent(),[2,e];case 5:if(!function(t){if(!(t instanceof vt))return!1;var e=Number(t.httpStatus);return 429===e||500===e||503===e||504===e}(r=t.sent()))throw r;return n={throttleEndTimeMillis:Date.now()+function(t){var e=1e3*Math.pow(2,t),r=Math.round(.5*e*(Math.random()-.5)*2);return Math.min(144e5,e+r)}(s),backoffCount:s+1},[4,this.storage.setThrottleMetadata(n)];case 6:return t.sent(),[2,this.attemptFetch(i,n)];case 7:return[2]}})})},zt);function zt(t,e){this.client=t,this.storage=e}(Wt=Ht).INTERNAL.registerService("remoteConfig",function(t,e,r){if("undefined"==typeof window)throw At.create("registration-window");var n=t.options,i=n.projectId,o=n.apiKey,s=n.appId;if(!i)throw At.create("registration-project-id");if(!o)throw At.create("registration-api-key");if(!s)throw At.create("registration-app-id");r=r||"firebase";var a=new Vt(s,t.name,r),c=new Rt(a),u=new Mt(t.installations(),Wt.SDK_VERSION,r,i,o,s),f=new Ut(u,a),h=new Tt(f,a,c),l=new Ft(t,h,c,a);return l.ensureInitialized(),l},void 0,void 0,!0)}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-remote-config - be sure to load firebase-app.js first.")}});