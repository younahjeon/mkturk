(self.webpackChunkmkfiles=self.webpackChunkmkfiles||[]).push([[410],{67228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},22858:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},23646:(e,t,n)=>{var r=n(67228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},34575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},93913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},59713:e=>{e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},67154:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},46860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},13884:e=>{e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw i}}return s}},e.exports.default=e.exports,e.exports.__esModule=!0},80521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},98206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},63038:(e,t,n)=>{var r=n(22858),i=n(13884),s=n(60379),o=n(80521);e.exports=function(e,t){return r(e)||i(e,t)||s(e,t)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},319:(e,t,n)=>{var r=n(23646),i=n(46860),s=n(60379),o=n(98206);e.exports=function(e){return r(e)||i(e)||s(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},60379:(e,t,n)=>{var r=n(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},87757:(e,t,n)=>{e.exports=n(35666)},94258:(e,t,n)=>{"use strict";n.d(t,{ZR:()=>s.ZR,Jn:()=>C,l4:()=>l,H9:()=>p,Vr:()=>f,Af:()=>d,Z8:()=>y,lz:()=>h,qX:()=>g,Xd:()=>m,wN:()=>v,P2:()=>S,Mq:()=>I,C6:()=>_,ZF:()=>A,TP:()=>E,KN:()=>M,Ub:()=>D});var r=n(48886),i=n(76934),s=n(74444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const a="@firebase/app",c=new i.Yd("@firebase/app"),l="[DEFAULT]",u={[a]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,h=new Map;function p(e,t){try{e.container.addComponent(t)}catch(n){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function f(e,t){e.container.addOrOverwriteComponent(t)}function m(e){const t=e.name;if(h.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;h.set(t,e);for(const t of d.values())p(t,e);return!0}function g(e,t){return e.container.getProvider(t)}function v(e,t,n=l){g(e,t).clearInstance(n)}function y(){h.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},x=new s.LL("app","Firebase",b);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="9.1.1";function A(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:l,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw x.create("bad-app-name",{appName:String(i)});const o=d.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw x.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const e of h.values())a.addComponent(e);const c=new w(e,n,a);return d.set(i,c),c}function I(e=l){const t=d.get(e);if(!t)throw x.create("no-app",{appName:e});return t}function _(){return Array.from(d.values())}async function S(e){const t=e.name;d.has(t)&&(d.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function M(e,t,n){var i;let s=null!==(i=u[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void c.warn(e.join(" "))}m(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function E(e,t){if(null!==e&&"function"!=typeof e)throw x.create("invalid-log-argument");(0,i.Am)(e,t)}function D(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T;m(new r.wA("platform-logger",(e=>new o(e)),"PRIVATE")),M(a,"0.7.2",T),M("fire-js","")},48886:(e,t,n)=>{"use strict";n.d(t,{wA:()=>l,H0:()=>h});function r(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}Object.create;function s(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function a(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var c=n(74444),l=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),u="[DEFAULT]",d=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new c.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:u})}catch(e){}try{for(var r=s(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var a=o(i.value,2),c=a[0],l=a[1],d=this.normalizeInstanceIdentifier(c);try{var h=this.getOrInitializeService({instanceIdentifier:d});l.resolve(h)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=u),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(a(a([],o(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),o(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=u),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=u),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:i});try{for(var l=s(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var d=o(u.value,2),h=d[0],p=d[1];a===this.normalizeInstanceIdentifier(h)&&p.resolve(c)}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return c},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var o=s(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===u?void 0:t),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(e){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=u),this.component?this.component.multipleInstances?e:u:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();var h=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new d(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},76934:(e,t,n)=>{"use strict";n.d(t,{in:()=>i,Yd:()=>l,Ub:()=>u,Am:()=>d});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},74444:(e,t,n)=>{"use strict";n.d(t,{BH:()=>a,LL:()=>b,ZR:()=>y,tV:()=>o,Sg:()=>c,ne:()=>M,vZ:()=>C,pd:()=>S,m9:()=>T,z$:()=>l,ru:()=>d,d:()=>p,xb:()=>w,w1:()=>f,hl:()=>v,uI:()=>u,b$:()=>h,G6:()=>g,Mn:()=>m,xO:()=>I,zd:()=>_});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;a||(h=64,s||(d=64)),r.push(n[l],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){return function(e){const t=r(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")},o=function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function u(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function d(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function h(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return l().indexOf("Electron/")>=0}function f(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return l().indexOf("MSAppHost/")>=0}function g(){return!function(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v(){return"object"==typeof indexedDB}class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(x,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new y(r,o,n)}}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function C(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(A(n)&&A(s)){if(!C(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function A(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function _(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function S(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){const n=new E(e,t);return n.subscribe.bind(n)}class E{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(e){return e&&e._delegate?e._delegate:e}},61977:function(e,t){var n;
/**
 * @license Complex.js v2.0.15 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/!function(r){"use strict";var i=function(e){return.5*(Math.exp(e)+Math.exp(-e))},s=function(e){return.5*(Math.exp(e)-Math.exp(-e))},o=function(){throw SyntaxError("Invalid Param")};function a(e,t){var n=Math.abs(e),r=Math.abs(t);return 0===e?Math.log(r):0===t?Math.log(n):n<3e3&&r<3e3?.5*Math.log(e*e+t*t):Math.log(e/Math.cos(Math.atan2(t,e)))}function c(e,t){if(!(this instanceof c))return new c(e,t);var n=function(e,t){var n={re:0,im:0};if(null==e)n.re=n.im=0;else if(void 0!==t)n.re=e,n.im=t;else switch(typeof e){case"object":if("im"in e&&"re"in e)n.re=e.re,n.im=e.im;else if("abs"in e&&"arg"in e){if(!Number.isFinite(e.abs)&&Number.isFinite(e.arg))return c.INFINITY;n.re=e.abs*Math.cos(e.arg),n.im=e.abs*Math.sin(e.arg)}else if("r"in e&&"phi"in e){if(!Number.isFinite(e.r)&&Number.isFinite(e.phi))return c.INFINITY;n.re=e.r*Math.cos(e.phi),n.im=e.r*Math.sin(e.phi)}else 2===e.length?(n.re=e[0],n.im=e[1]):o();break;case"string":n.im=n.re=0;var r=e.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),i=1,s=0;null===r&&o();for(var a=0;a<r.length;a++){var l=r[a];" "===l||"\t"===l||"\n"===l||("+"===l?i++:"-"===l?s++:"i"===l||"I"===l?(i+s===0&&o()," "===r[a+1]||isNaN(r[a+1])?n.im+=parseFloat((s%2?"-":"")+"1"):(n.im+=parseFloat((s%2?"-":"")+r[a+1]),a++),i=s=0):((i+s===0||isNaN(l))&&o(),"i"===r[a+1]||"I"===r[a+1]?(n.im+=parseFloat((s%2?"-":"")+l),a++):n.re+=parseFloat((s%2?"-":"")+l),i=s=0))}i+s>0&&o();break;case"number":n.im=0,n.re=e;break;default:o()}return isNaN(n.re)||isNaN(n.im),n}(e,t);this.re=n.re,this.im=n.im}c.prototype={re:0,im:0,sign:function(){var e=this.abs();return new c(this.re/e,this.im/e)},add:function(e,t){var n=new c(e,t);return this.isInfinite()&&n.isInfinite()?c.NAN:this.isInfinite()||n.isInfinite()?c.INFINITY:new c(this.re+n.re,this.im+n.im)},sub:function(e,t){var n=new c(e,t);return this.isInfinite()&&n.isInfinite()?c.NAN:this.isInfinite()||n.isInfinite()?c.INFINITY:new c(this.re-n.re,this.im-n.im)},mul:function(e,t){var n=new c(e,t);return this.isInfinite()&&n.isZero()||this.isZero()&&n.isInfinite()?c.NAN:this.isInfinite()||n.isInfinite()?c.INFINITY:0===n.im&&0===this.im?new c(this.re*n.re,0):new c(this.re*n.re-this.im*n.im,this.re*n.im+this.im*n.re)},div:function(e,t){var n=new c(e,t);if(this.isZero()&&n.isZero()||this.isInfinite()&&n.isInfinite())return c.NAN;if(this.isInfinite()||n.isZero())return c.INFINITY;if(this.isZero()||n.isInfinite())return c.ZERO;e=this.re,t=this.im;var r,i,s=n.re,o=n.im;return 0===o?new c(e/s,t/s):Math.abs(s)<Math.abs(o)?new c((e*(i=s/o)+t)/(r=s*i+o),(t*i-e)/r):new c((e+t*(i=o/s))/(r=o*i+s),(t-e*i)/r)},pow:function(e,t){var n=new c(e,t);if(e=this.re,t=this.im,n.isZero())return c.ONE;if(0===n.im){if(0===t&&e>0)return new c(Math.pow(e,n.re),0);if(0===e)switch((n.re%4+4)%4){case 0:return new c(Math.pow(t,n.re),0);case 1:return new c(0,Math.pow(t,n.re));case 2:return new c(-Math.pow(t,n.re),0);case 3:return new c(0,-Math.pow(t,n.re))}}if(0===e&&0===t&&n.re>0&&n.im>=0)return c.ZERO;var r=Math.atan2(t,e),i=a(e,t);return e=Math.exp(n.re*i-n.im*r),t=n.im*i+n.re*r,new c(e*Math.cos(t),e*Math.sin(t))},sqrt:function(){var e,t,n=this.re,r=this.im,i=this.abs();if(n>=0){if(0===r)return new c(Math.sqrt(n),0);e=.5*Math.sqrt(2*(i+n))}else e=Math.abs(r)/Math.sqrt(2*(i-n));return t=n<=0?.5*Math.sqrt(2*(i-n)):Math.abs(r)/Math.sqrt(2*(i+n)),new c(e,r<0?-t:t)},exp:function(){var e=Math.exp(this.re);return this.im,new c(e*Math.cos(this.im),e*Math.sin(this.im))},expm1:function(){var e=this.re,t=this.im;return new c(Math.expm1(e)*Math.cos(t)+function(e){var t=Math.PI/4;if(-t>e||e>t)return Math.cos(e)-1;var n=e*e;return n*(n*(n*(n*(n*(n*(n*(n/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-.5)}(t),Math.exp(e)*Math.sin(t))},log:function(){var e=this.re,t=this.im;return new c(a(e,t),Math.atan2(t,e))},abs:function(){return e=this.re,t=this.im,n=Math.abs(e),r=Math.abs(t),n<3e3&&r<3e3?Math.sqrt(n*n+r*r):(n<r?(n=r,r=e/t):r=t/e,n*Math.sqrt(1+r*r));var e,t,n,r},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var e=this.re,t=this.im;return new c(Math.sin(e)*i(t),Math.cos(e)*s(t))},cos:function(){var e=this.re,t=this.im;return new c(Math.cos(e)*i(t),-Math.sin(e)*s(t))},tan:function(){var e=2*this.re,t=2*this.im,n=Math.cos(e)+i(t);return new c(Math.sin(e)/n,s(t)/n)},cot:function(){var e=2*this.re,t=2*this.im,n=Math.cos(e)-i(t);return new c(-Math.sin(e)/n,s(t)/n)},sec:function(){var e=this.re,t=this.im,n=.5*i(2*t)+.5*Math.cos(2*e);return new c(Math.cos(e)*i(t)/n,Math.sin(e)*s(t)/n)},csc:function(){var e=this.re,t=this.im,n=.5*i(2*t)-.5*Math.cos(2*e);return new c(Math.sin(e)*i(t)/n,-Math.cos(e)*s(t)/n)},asin:function(){var e=this.re,t=this.im,n=new c(t*t-e*e+1,-2*e*t).sqrt(),r=new c(n.re-t,n.im+e).log();return new c(r.im,-r.re)},acos:function(){var e=this.re,t=this.im,n=new c(t*t-e*e+1,-2*e*t).sqrt(),r=new c(n.re-t,n.im+e).log();return new c(Math.PI/2-r.im,r.re)},atan:function(){var e=this.re,t=this.im;if(0===e){if(1===t)return new c(0,1/0);if(-1===t)return new c(0,-1/0)}var n=e*e+(1-t)*(1-t),r=new c((1-t*t-e*e)/n,-2*e/n).log();return new c(-.5*r.im,.5*r.re)},acot:function(){var e=this.re,t=this.im;if(0===t)return new c(Math.atan2(1,e),0);var n=e*e+t*t;return 0!==n?new c(e/n,-t/n).atan():new c(0!==e?e/0:0,0!==t?-t/0:0).atan()},asec:function(){var e=this.re,t=this.im;if(0===e&&0===t)return new c(0,1/0);var n=e*e+t*t;return 0!==n?new c(e/n,-t/n).acos():new c(0!==e?e/0:0,0!==t?-t/0:0).acos()},acsc:function(){var e=this.re,t=this.im;if(0===e&&0===t)return new c(Math.PI/2,1/0);var n=e*e+t*t;return 0!==n?new c(e/n,-t/n).asin():new c(0!==e?e/0:0,0!==t?-t/0:0).asin()},sinh:function(){var e=this.re,t=this.im;return new c(s(e)*Math.cos(t),i(e)*Math.sin(t))},cosh:function(){var e=this.re,t=this.im;return new c(i(e)*Math.cos(t),s(e)*Math.sin(t))},tanh:function(){var e=2*this.re,t=2*this.im,n=i(e)+Math.cos(t);return new c(s(e)/n,Math.sin(t)/n)},coth:function(){var e=2*this.re,t=2*this.im,n=i(e)-Math.cos(t);return new c(s(e)/n,-Math.sin(t)/n)},csch:function(){var e=this.re,t=this.im,n=Math.cos(2*t)-i(2*e);return new c(-2*s(e)*Math.cos(t)/n,2*i(e)*Math.sin(t)/n)},sech:function(){var e=this.re,t=this.im,n=Math.cos(2*t)+i(2*e);return new c(2*i(e)*Math.cos(t)/n,-2*s(e)*Math.sin(t)/n)},asinh:function(){var e=this.im;this.im=-this.re,this.re=e;var t=this.asin();return this.re=-this.im,this.im=e,e=t.re,t.re=-t.im,t.im=e,t},acosh:function(){var e=this.acos();if(e.im<=0){var t=e.re;e.re=-e.im,e.im=t}else{t=e.im;e.im=-e.re,e.re=t}return e},atanh:function(){var e=this.re,t=this.im,n=e>1&&0===t,r=1-e,i=1+e,s=r*r+t*t,o=0!==s?new c((i*r-t*t)/s,(t*r+i*t)/s):new c(-1!==e?e/0:0,0!==t?t/0:0),l=o.re;return o.re=a(o.re,o.im)/2,o.im=Math.atan2(o.im,l)/2,n&&(o.im=-o.im),o},acoth:function(){var e=this.re,t=this.im;if(0===e&&0===t)return new c(0,Math.PI/2);var n=e*e+t*t;return 0!==n?new c(e/n,-t/n).atanh():new c(0!==e?e/0:0,0!==t?-t/0:0).atanh()},acsch:function(){var e=this.re,t=this.im;if(0===t)return new c(0!==e?Math.log(e+Math.sqrt(e*e+1)):1/0,0);var n=e*e+t*t;return 0!==n?new c(e/n,-t/n).asinh():new c(0!==e?e/0:0,0!==t?-t/0:0).asinh()},asech:function(){var e=this.re,t=this.im;if(this.isZero())return c.INFINITY;var n=e*e+t*t;return 0!==n?new c(e/n,-t/n).acosh():new c(0!==e?e/0:0,0!==t?-t/0:0).acosh()},inverse:function(){if(this.isZero())return c.INFINITY;if(this.isInfinite())return c.ZERO;var e=this.re,t=this.im,n=e*e+t*t;return new c(e/n,-t/n)},conjugate:function(){return new c(this.re,-this.im)},neg:function(){return new c(-this.re,-this.im)},ceil:function(e){return e=Math.pow(10,e||0),new c(Math.ceil(this.re*e)/e,Math.ceil(this.im*e)/e)},floor:function(e){return e=Math.pow(10,e||0),new c(Math.floor(this.re*e)/e,Math.floor(this.im*e)/e)},round:function(e){return e=Math.pow(10,e||0),new c(Math.round(this.re*e)/e,Math.round(this.im*e)/e)},equals:function(e,t){var n=new c(e,t);return Math.abs(n.re-this.re)<=c.EPSILON&&Math.abs(n.im-this.im)<=c.EPSILON},clone:function(){return new c(this.re,this.im)},toString:function(){var e=this.re,t=this.im,n="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(e)<c.EPSILON&&(e=0),Math.abs(t)<c.EPSILON&&(t=0),0===t?n+e:(0!==e?(n+=e,n+=" ",t<0?(t=-t,n+="-"):n+="+",n+=" "):t<0&&(t=-t,n+="-"),1!==t&&(n+=t),n+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return 0===this.im?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return 0===this.im&&0===this.re},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}},c.ZERO=new c(0,0),c.ONE=new c(1,0),c.I=new c(0,1),c.PI=new c(Math.PI,0),c.E=new c(Math.E,0),c.INFINITY=new c(1/0,1/0),c.NAN=new c(NaN,NaN),c.EPSILON=1e-15,void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},93776:function(e,t,n){var r;!function(i){"use strict";var s,o,a,c=9e15,l=1e9,u="0123456789abcdef",d="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",h="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",p={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-c,maxE:c,crypto:!1},f=!0,m="[DecimalError] ",g=m+"Invalid argument: ",v=m+"Precision limit exceeded",y=m+"crypto unavailable",b="[object Decimal]",x=Math.floor,w=Math.pow,C=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,A=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,I=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,_=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,S=1e7,M=d.length-1,E=h.length-1,D={toStringTag:b};function T(e){var t,n,r,i=e.length-1,s="",o=e[0];if(i>0){for(s+=o,t=1;t<i;t++)(n=7-(r=e[t]+"").length)&&(s+=H(n)),s+=r;(n=7-(r=(o=e[t])+"").length)&&(s+=H(n))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function N(e,t,n){if(e!==~~e||e<t||e>n)throw Error(g+e)}function O(e,t,n,r){var i,s,o,a;for(s=e[0];s>=10;s/=10)--t;return--t<0?(t+=7,i=0):(i=Math.ceil((t+1)/7),t%=7),s=w(10,7-t),a=e[i]%s|0,null==r?t<3?(0==t?a=a/100|0:1==t&&(a=a/10|0),o=n<4&&99999==a||n>3&&49999==a||5e4==a||0==a):o=(n<4&&a+1==s||n>3&&a+1==s/2)&&(e[i+1]/s/100|0)==w(10,t-2)-1||(a==s/2||0==a)&&0==(e[i+1]/s/100|0):t<4?(0==t?a=a/1e3|0:1==t?a=a/100|0:2==t&&(a=a/10|0),o=(r||n<4)&&9999==a||!r&&n>3&&4999==a):o=((r||n<4)&&a+1==s||!r&&n>3&&a+1==s/2)&&(e[i+1]/s/1e3|0)==w(10,t-3)-1,o}function P(e,t,n){for(var r,i,s=[0],o=0,a=e.length;o<a;){for(i=s.length;i--;)s[i]*=t;for(s[0]+=u.indexOf(e.charAt(o++)),r=0;r<s.length;r++)s[r]>n-1&&(void 0===s[r+1]&&(s[r+1]=0),s[r+1]+=s[r]/n|0,s[r]%=n)}return s.reverse()}D.absoluteValue=D.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),k(e)},D.ceil=function(){return k(new this.constructor(this),this.e+1,2)},D.clampedTo=D.clamp=function(e,t){var n=this,r=n.constructor;if(e=new r(e),t=new r(t),!e.s||!t.s)return new r(NaN);if(e.gt(t))throw Error(g+t);return n.cmp(e)<0?e:n.cmp(t)>0?t:new r(n)},D.comparedTo=D.cmp=function(e){var t,n,r,i,s=this,o=s.d,a=(e=new s.constructor(e)).d,c=s.s,l=e.s;if(!o||!a)return c&&l?c!==l?c:o===a?0:!o^c<0?1:-1:NaN;if(!o[0]||!a[0])return o[0]?c:a[0]?-l:0;if(c!==l)return c;if(s.e!==e.e)return s.e>e.e^c<0?1:-1;for(t=0,n=(r=o.length)<(i=a.length)?r:i;t<n;++t)if(o[t]!==a[t])return o[t]>a[t]^c<0?1:-1;return r===i?0:r>i^c<0?1:-1},D.cosine=D.cos=function(){var e,t,n=this,r=n.constructor;return n.d?n.d[0]?(e=r.precision,t=r.rounding,r.precision=e+Math.max(n.e,n.sd())+7,r.rounding=1,n=function(e,t){var n,r,i;if(t.isZero())return t;(r=t.d.length)<32?i=(1/Y(4,n=Math.ceil(r/3))).toString():(n=16,i="2.3283064365386962890625e-10");e.precision+=n,t=X(e,1,t.times(i),new e(1));for(var s=n;s--;){var o=t.times(t);t=o.times(o).minus(o).times(8).plus(1)}return e.precision-=n,t}(r,J(r,n)),r.precision=e,r.rounding=t,k(2==a||3==a?n.neg():n,e,t,!0)):new r(1):new r(NaN)},D.cubeRoot=D.cbrt=function(){var e,t,n,r,i,s,o,a,c,l,u=this,d=u.constructor;if(!u.isFinite()||u.isZero())return new d(u);for(f=!1,(s=u.s*w(u.s*u,1/3))&&Math.abs(s)!=1/0?r=new d(s.toString()):(n=T(u.d),(s=((e=u.e)-n.length+1)%3)&&(n+=1==s||-2==s?"0":"00"),s=w(n,1/3),e=x((e+1)/3)-(e%3==(e<0?-1:2)),(r=new d(n=s==1/0?"5e"+e:(n=s.toExponential()).slice(0,n.indexOf("e")+1)+e)).s=u.s),o=(e=d.precision)+3;;)if(l=(c=(a=r).times(a).times(a)).plus(u),r=R(l.plus(u).times(a),l.plus(c),o+2,1),T(a.d).slice(0,o)===(n=T(r.d)).slice(0,o)){if("9999"!=(n=n.slice(o-3,o+1))&&(i||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(k(r,e+1,1),t=!r.times(r).times(r).eq(u));break}if(!i&&(k(a,e+1,0),a.times(a).times(a).eq(u))){r=a;break}o+=4,i=1}return f=!0,k(r,e,d.rounding,t)},D.decimalPlaces=D.dp=function(){var e,t=this.d,n=NaN;if(t){if(n=7*((e=t.length-1)-x(this.e/7)),e=t[e])for(;e%10==0;e/=10)n--;n<0&&(n=0)}return n},D.dividedBy=D.div=function(e){return R(this,new this.constructor(e))},D.dividedToIntegerBy=D.divToInt=function(e){var t=this.constructor;return k(R(this,new t(e),0,1,1),t.precision,t.rounding)},D.equals=D.eq=function(e){return 0===this.cmp(e)},D.floor=function(){return k(new this.constructor(this),this.e+1,3)},D.greaterThan=D.gt=function(e){return this.cmp(e)>0},D.greaterThanOrEqualTo=D.gte=function(e){var t=this.cmp(e);return 1==t||0===t},D.hyperbolicCosine=D.cosh=function(){var e,t,n,r,i,s=this,o=s.constructor,a=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return a;n=o.precision,r=o.rounding,o.precision=n+Math.max(s.e,s.sd())+4,o.rounding=1,(i=s.d.length)<32?t=(1/Y(4,e=Math.ceil(i/3))).toString():(e=16,t="2.3283064365386962890625e-10"),s=X(o,1,s.times(t),new o(1),!0);for(var c,l=e,u=new o(8);l--;)c=s.times(s),s=a.minus(c.times(u.minus(c.times(u))));return k(s,o.precision=n,o.rounding=r,!0)},D.hyperbolicSine=D.sinh=function(){var e,t,n,r,i=this,s=i.constructor;if(!i.isFinite()||i.isZero())return new s(i);if(t=s.precision,n=s.rounding,s.precision=t+Math.max(i.e,i.sd())+4,s.rounding=1,(r=i.d.length)<3)i=X(s,2,i,i,!0);else{e=(e=1.4*Math.sqrt(r))>16?16:0|e,i=X(s,2,i=i.times(1/Y(5,e)),i,!0);for(var o,a=new s(5),c=new s(16),l=new s(20);e--;)o=i.times(i),i=i.times(a.plus(o.times(c.times(o).plus(l))))}return s.precision=t,s.rounding=n,k(i,t,n,!0)},D.hyperbolicTangent=D.tanh=function(){var e,t,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(e=r.precision,t=r.rounding,r.precision=e+7,r.rounding=1,R(n.sinh(),n.cosh(),r.precision=e,r.rounding=t)):new r(n.s)},D.inverseCosine=D.acos=function(){var e,t=this,n=t.constructor,r=t.abs().cmp(1),i=n.precision,s=n.rounding;return-1!==r?0===r?t.isNeg()?j(n,i,s):new n(0):new n(NaN):t.isZero()?j(n,i+4,s).times(.5):(n.precision=i+6,n.rounding=1,t=t.asin(),e=j(n,i+4,s).times(.5),n.precision=i,n.rounding=s,e.minus(t))},D.inverseHyperbolicCosine=D.acosh=function(){var e,t,n=this,r=n.constructor;return n.lte(1)?new r(n.eq(1)?0:NaN):n.isFinite()?(e=r.precision,t=r.rounding,r.precision=e+Math.max(Math.abs(n.e),n.sd())+4,r.rounding=1,f=!1,n=n.times(n).minus(1).sqrt().plus(n),f=!0,r.precision=e,r.rounding=t,n.ln()):new r(n)},D.inverseHyperbolicSine=D.asinh=function(){var e,t,n=this,r=n.constructor;return!n.isFinite()||n.isZero()?new r(n):(e=r.precision,t=r.rounding,r.precision=e+2*Math.max(Math.abs(n.e),n.sd())+6,r.rounding=1,f=!1,n=n.times(n).plus(1).sqrt().plus(n),f=!0,r.precision=e,r.rounding=t,n.ln())},D.inverseHyperbolicTangent=D.atanh=function(){var e,t,n,r,i=this,s=i.constructor;return i.isFinite()?i.e>=0?new s(i.abs().eq(1)?i.s/0:i.isZero()?i:NaN):(e=s.precision,t=s.rounding,r=i.sd(),Math.max(r,e)<2*-i.e-1?k(new s(i),e,t,!0):(s.precision=n=r-i.e,i=R(i.plus(1),new s(1).minus(i),n+e,1),s.precision=e+4,s.rounding=1,i=i.ln(),s.precision=e,s.rounding=t,i.times(.5))):new s(NaN)},D.inverseSine=D.asin=function(){var e,t,n,r,i=this,s=i.constructor;return i.isZero()?new s(i):(t=i.abs().cmp(1),n=s.precision,r=s.rounding,-1!==t?0===t?((e=j(s,n+4,r).times(.5)).s=i.s,e):new s(NaN):(s.precision=n+6,s.rounding=1,i=i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(),s.precision=n,s.rounding=r,i.times(2)))},D.inverseTangent=D.atan=function(){var e,t,n,r,i,s,o,a,c,l=this,u=l.constructor,d=u.precision,h=u.rounding;if(l.isFinite()){if(l.isZero())return new u(l);if(l.abs().eq(1)&&d+4<=E)return(o=j(u,d+4,h).times(.25)).s=l.s,o}else{if(!l.s)return new u(NaN);if(d+4<=E)return(o=j(u,d+4,h).times(.5)).s=l.s,o}for(u.precision=a=d+10,u.rounding=1,e=n=Math.min(28,a/7+2|0);e;--e)l=l.div(l.times(l).plus(1).sqrt().plus(1));for(f=!1,t=Math.ceil(a/7),r=1,c=l.times(l),o=new u(l),i=l;-1!==e;)if(i=i.times(c),s=o.minus(i.div(r+=2)),i=i.times(c),void 0!==(o=s.plus(i.div(r+=2))).d[t])for(e=t;o.d[e]===s.d[e]&&e--;);return n&&(o=o.times(2<<n-1)),f=!0,k(o,u.precision=d,u.rounding=h,!0)},D.isFinite=function(){return!!this.d},D.isInteger=D.isInt=function(){return!!this.d&&x(this.e/7)>this.d.length-2},D.isNaN=function(){return!this.s},D.isNegative=D.isNeg=function(){return this.s<0},D.isPositive=D.isPos=function(){return this.s>0},D.isZero=function(){return!!this.d&&0===this.d[0]},D.lessThan=D.lt=function(e){return this.cmp(e)<0},D.lessThanOrEqualTo=D.lte=function(e){return this.cmp(e)<1},D.logarithm=D.log=function(e){var t,n,r,i,s,o,a,c,l=this,u=l.constructor,d=u.precision,h=u.rounding;if(null==e)e=new u(10),t=!0;else{if(n=(e=new u(e)).d,e.s<0||!n||!n[0]||e.eq(1))return new u(NaN);t=e.eq(10)}if(n=l.d,l.s<0||!n||!n[0]||l.eq(1))return new u(n&&!n[0]?-1/0:1!=l.s?NaN:n?0:1/0);if(t)if(n.length>1)s=!0;else{for(i=n[0];i%10==0;)i/=10;s=1!==i}if(f=!1,o=$(l,a=d+5),r=t?F(u,a+10):$(e,a),O((c=R(o,r,a,1)).d,i=d,h))do{if(o=$(l,a+=10),r=t?F(u,a+10):$(e,a),c=R(o,r,a,1),!s){+T(c.d).slice(i+1,i+15)+1==1e14&&(c=k(c,d+1,0));break}}while(O(c.d,i+=10,h));return f=!0,k(c,d,h)},D.minus=D.sub=function(e){var t,n,r,i,s,o,a,c,l,u,d,h,p=this,m=p.constructor;if(e=new m(e),!p.d||!e.d)return p.s&&e.s?p.d?e.s=-e.s:e=new m(e.d||p.s!==e.s?p:NaN):e=new m(NaN),e;if(p.s!=e.s)return e.s=-e.s,p.plus(e);if(l=p.d,h=e.d,a=m.precision,c=m.rounding,!l[0]||!h[0]){if(h[0])e.s=-e.s;else{if(!l[0])return new m(3===c?-0:0);e=new m(p)}return f?k(e,a,c):e}if(n=x(e.e/7),u=x(p.e/7),l=l.slice(),s=u-n){for((d=s<0)?(t=l,s=-s,o=h.length):(t=h,n=u,o=l.length),s>(r=Math.max(Math.ceil(a/7),o)+2)&&(s=r,t.length=1),t.reverse(),r=s;r--;)t.push(0);t.reverse()}else{for((d=(r=l.length)<(o=h.length))&&(o=r),r=0;r<o;r++)if(l[r]!=h[r]){d=l[r]<h[r];break}s=0}for(d&&(t=l,l=h,h=t,e.s=-e.s),o=l.length,r=h.length-o;r>0;--r)l[o++]=0;for(r=h.length;r>s;){if(l[--r]<h[r]){for(i=r;i&&0===l[--i];)l[i]=S-1;--l[i],l[r]+=S}l[r]-=h[r]}for(;0===l[--o];)l.pop();for(;0===l[0];l.shift())--n;return l[0]?(e.d=l,e.e=B(l,n),f?k(e,a,c):e):new m(3===c?-0:0)},D.modulo=D.mod=function(e){var t,n=this,r=n.constructor;return e=new r(e),!n.d||!e.s||e.d&&!e.d[0]?new r(NaN):!e.d||n.d&&!n.d[0]?k(new r(n),r.precision,r.rounding):(f=!1,9==r.modulo?(t=R(n,e.abs(),0,3,1)).s*=e.s:t=R(n,e,0,r.modulo,1),t=t.times(e),f=!0,n.minus(t))},D.naturalExponential=D.exp=function(){return W(this)},D.naturalLogarithm=D.ln=function(){return $(this)},D.negated=D.neg=function(){var e=new this.constructor(this);return e.s=-e.s,k(e)},D.plus=D.add=function(e){var t,n,r,i,s,o,a,c,l,u,d=this,h=d.constructor;if(e=new h(e),!d.d||!e.d)return d.s&&e.s?d.d||(e=new h(e.d||d.s===e.s?d:NaN)):e=new h(NaN),e;if(d.s!=e.s)return e.s=-e.s,d.minus(e);if(l=d.d,u=e.d,a=h.precision,c=h.rounding,!l[0]||!u[0])return u[0]||(e=new h(d)),f?k(e,a,c):e;if(s=x(d.e/7),r=x(e.e/7),l=l.slice(),i=s-r){for(i<0?(n=l,i=-i,o=u.length):(n=u,r=s,o=l.length),i>(o=(s=Math.ceil(a/7))>o?s+1:o+1)&&(i=o,n.length=1),n.reverse();i--;)n.push(0);n.reverse()}for((o=l.length)-(i=u.length)<0&&(i=o,n=u,u=l,l=n),t=0;i;)t=(l[--i]=l[i]+u[i]+t)/S|0,l[i]%=S;for(t&&(l.unshift(t),++r),o=l.length;0==l[--o];)l.pop();return e.d=l,e.e=B(l,r),f?k(e,a,c):e},D.precision=D.sd=function(e){var t,n=this;if(void 0!==e&&e!==!!e&&1!==e&&0!==e)throw Error(g+e);return n.d?(t=z(n.d),e&&n.e+1>t&&(t=n.e+1)):t=NaN,t},D.round=function(){var e=this,t=e.constructor;return k(new t(e),e.e+1,t.rounding)},D.sine=D.sin=function(){var e,t,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(e=r.precision,t=r.rounding,r.precision=e+Math.max(n.e,n.sd())+7,r.rounding=1,n=function(e,t){var n,r=t.d.length;if(r<3)return t.isZero()?t:X(e,2,t,t);n=(n=1.4*Math.sqrt(r))>16?16:0|n,t=t.times(1/Y(5,n)),t=X(e,2,t,t);for(var i,s=new e(5),o=new e(16),a=new e(20);n--;)i=t.times(t),t=t.times(s.plus(i.times(o.times(i).minus(a))));return t}(r,J(r,n)),r.precision=e,r.rounding=t,k(a>2?n.neg():n,e,t,!0)):new r(NaN)},D.squareRoot=D.sqrt=function(){var e,t,n,r,i,s,o=this,a=o.d,c=o.e,l=o.s,u=o.constructor;if(1!==l||!a||!a[0])return new u(!l||l<0&&(!a||a[0])?NaN:a?o:1/0);for(f=!1,0==(l=Math.sqrt(+o))||l==1/0?(((t=T(a)).length+c)%2==0&&(t+="0"),l=Math.sqrt(t),c=x((c+1)/2)-(c<0||c%2),r=new u(t=l==1/0?"5e"+c:(t=l.toExponential()).slice(0,t.indexOf("e")+1)+c)):r=new u(l.toString()),n=(c=u.precision)+3;;)if(r=(s=r).plus(R(o,s,n+2,1)).times(.5),T(s.d).slice(0,n)===(t=T(r.d)).slice(0,n)){if("9999"!=(t=t.slice(n-3,n+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(k(r,c+1,1),e=!r.times(r).eq(o));break}if(!i&&(k(s,c+1,0),s.times(s).eq(o))){r=s;break}n+=4,i=1}return f=!0,k(r,c,u.rounding,e)},D.tangent=D.tan=function(){var e,t,n=this,r=n.constructor;return n.isFinite()?n.isZero()?new r(n):(e=r.precision,t=r.rounding,r.precision=e+10,r.rounding=1,(n=n.sin()).s=1,n=R(n,new r(1).minus(n.times(n)).sqrt(),e+10,0),r.precision=e,r.rounding=t,k(2==a||4==a?n.neg():n,e,t,!0)):new r(NaN)},D.times=D.mul=function(e){var t,n,r,i,s,o,a,c,l,u=this,d=u.constructor,h=u.d,p=(e=new d(e)).d;if(e.s*=u.s,!(h&&h[0]&&p&&p[0]))return new d(!e.s||h&&!h[0]&&!p||p&&!p[0]&&!h?NaN:h&&p?0*e.s:e.s/0);for(n=x(u.e/7)+x(e.e/7),(c=h.length)<(l=p.length)&&(s=h,h=p,p=s,o=c,c=l,l=o),s=[],r=o=c+l;r--;)s.push(0);for(r=l;--r>=0;){for(t=0,i=c+r;i>r;)a=s[i]+p[r]*h[i-r-1]+t,s[i--]=a%S|0,t=a/S|0;s[i]=(s[i]+t)%S|0}for(;!s[--o];)s.pop();return t?++n:s.shift(),e.d=s,e.e=B(s,n),f?k(e,d.precision,d.rounding):e},D.toBinary=function(e,t){return Q(this,2,e,t)},D.toDecimalPlaces=D.toDP=function(e,t){var n=this,r=n.constructor;return n=new r(n),void 0===e?n:(N(e,0,l),void 0===t?t=r.rounding:N(t,0,8),k(n,e+n.e+1,t))},D.toExponential=function(e,t){var n,r=this,i=r.constructor;return void 0===e?n=L(r,!0):(N(e,0,l),void 0===t?t=i.rounding:N(t,0,8),n=L(r=k(new i(r),e+1,t),!0,e+1)),r.isNeg()&&!r.isZero()?"-"+n:n},D.toFixed=function(e,t){var n,r,i=this,s=i.constructor;return void 0===e?n=L(i):(N(e,0,l),void 0===t?t=s.rounding:N(t,0,8),n=L(r=k(new s(i),e+i.e+1,t),!1,e+r.e+1)),i.isNeg()&&!i.isZero()?"-"+n:n},D.toFraction=function(e){var t,n,r,i,s,o,a,c,l,u,d,h,p=this,m=p.d,v=p.constructor;if(!m)return new v(p);if(l=n=new v(1),r=c=new v(0),o=(s=(t=new v(r)).e=z(m)-p.e-1)%7,t.d[0]=w(10,o<0?7+o:o),null==e)e=s>0?t:l;else{if(!(a=new v(e)).isInt()||a.lt(l))throw Error(g+a);e=a.gt(t)?s>0?t:l:a}for(f=!1,a=new v(T(m)),u=v.precision,v.precision=s=7*m.length*2;d=R(a,t,0,1,1),1!=(i=n.plus(d.times(r))).cmp(e);)n=r,r=i,i=l,l=c.plus(d.times(i)),c=i,i=t,t=a.minus(d.times(i)),a=i;return i=R(e.minus(n),r,0,1,1),c=c.plus(i.times(l)),n=n.plus(i.times(r)),c.s=l.s=p.s,h=R(l,r,s,1).minus(p).abs().cmp(R(c,n,s,1).minus(p).abs())<1?[l,r]:[c,n],v.precision=u,f=!0,h},D.toHexadecimal=D.toHex=function(e,t){return Q(this,16,e,t)},D.toNearest=function(e,t){var n=this,r=n.constructor;if(n=new r(n),null==e){if(!n.d)return n;e=new r(1),t=r.rounding}else{if(e=new r(e),void 0===t?t=r.rounding:N(t,0,8),!n.d)return e.s?n:e;if(!e.d)return e.s&&(e.s=n.s),e}return e.d[0]?(f=!1,n=R(n,e,0,t,1).times(e),f=!0,k(n)):(e.s=n.s,n=e),n},D.toNumber=function(){return+this},D.toOctal=function(e,t){return Q(this,8,e,t)},D.toPower=D.pow=function(e){var t,n,r,i,s,o,a=this,c=a.constructor,l=+(e=new c(e));if(!(a.d&&e.d&&a.d[0]&&e.d[0]))return new c(w(+a,l));if((a=new c(a)).eq(1))return a;if(r=c.precision,s=c.rounding,e.eq(1))return k(a,r,s);if((t=x(e.e/7))>=e.d.length-1&&(n=l<0?-l:l)<=9007199254740991)return i=U(c,a,n,r),e.s<0?new c(1).div(i):k(i,r,s);if((o=a.s)<0){if(t<e.d.length-1)return new c(NaN);if(0==(1&e.d[t])&&(o=1),0==a.e&&1==a.d[0]&&1==a.d.length)return a.s=o,a}return(t=0!=(n=w(+a,l))&&isFinite(n)?new c(n+"").e:x(l*(Math.log("0."+T(a.d))/Math.LN10+a.e+1)))>c.maxE+1||t<c.minE-1?new c(t>0?o/0:0):(f=!1,c.rounding=a.s=1,n=Math.min(12,(t+"").length),(i=W(e.times($(a,r+n)),r)).d&&O((i=k(i,r+5,1)).d,r,s)&&(t=r+10,+T((i=k(W(e.times($(a,t+n)),t),t+5,1)).d).slice(r+1,r+15)+1==1e14&&(i=k(i,r+1,0))),i.s=o,f=!0,c.rounding=s,k(i,r,s))},D.toPrecision=function(e,t){var n,r=this,i=r.constructor;return void 0===e?n=L(r,r.e<=i.toExpNeg||r.e>=i.toExpPos):(N(e,1,l),void 0===t?t=i.rounding:N(t,0,8),n=L(r=k(new i(r),e,t),e<=r.e||r.e<=i.toExpNeg,e)),r.isNeg()&&!r.isZero()?"-"+n:n},D.toSignificantDigits=D.toSD=function(e,t){var n=this.constructor;return void 0===e?(e=n.precision,t=n.rounding):(N(e,1,l),void 0===t?t=n.rounding:N(t,0,8)),k(new n(this),e,t)},D.toString=function(){var e=this,t=e.constructor,n=L(e,e.e<=t.toExpNeg||e.e>=t.toExpPos);return e.isNeg()&&!e.isZero()?"-"+n:n},D.truncated=D.trunc=function(){return k(new this.constructor(this),this.e+1,1)},D.valueOf=D.toJSON=function(){var e=this,t=e.constructor,n=L(e,e.e<=t.toExpNeg||e.e>=t.toExpPos);return e.isNeg()?"-"+n:n};var R=function(){function e(e,t,n){var r,i=0,s=e.length;for(e=e.slice();s--;)r=e[s]*t+i,e[s]=r%n|0,i=r/n|0;return i&&e.unshift(i),e}function t(e,t,n,r){var i,s;if(n!=r)s=n>r?1:-1;else for(i=s=0;i<n;i++)if(e[i]!=t[i]){s=e[i]>t[i]?1:-1;break}return s}function n(e,t,n,r){for(var i=0;n--;)e[n]-=i,i=e[n]<t[n]?1:0,e[n]=i*r+e[n]-t[n];for(;!e[0]&&e.length>1;)e.shift()}return function(r,i,s,a,c,l){var u,d,h,p,f,m,g,v,y,b,w,C,A,I,_,M,E,D,T,N,O=r.constructor,P=r.s==i.s?1:-1,R=r.d,L=i.d;if(!(R&&R[0]&&L&&L[0]))return new O(r.s&&i.s&&(R?!L||R[0]!=L[0]:L)?R&&0==R[0]||!L?0*P:P/0:NaN);for(l?(f=1,d=r.e-i.e):(l=S,f=7,d=x(r.e/f)-x(i.e/f)),T=L.length,E=R.length,b=(y=new O(P)).d=[],h=0;L[h]==(R[h]||0);h++);if(L[h]>(R[h]||0)&&d--,null==s?(I=s=O.precision,a=O.rounding):I=c?s+(r.e-i.e)+1:s,I<0)b.push(1),m=!0;else{if(I=I/f+2|0,h=0,1==T){for(p=0,L=L[0],I++;(h<E||p)&&I--;h++)_=p*l+(R[h]||0),b[h]=_/L|0,p=_%L|0;m=p||h<E}else{for((p=l/(L[0]+1)|0)>1&&(L=e(L,p,l),R=e(R,p,l),T=L.length,E=R.length),M=T,C=(w=R.slice(0,T)).length;C<T;)w[C++]=0;(N=L.slice()).unshift(0),D=L[0],L[1]>=l/2&&++D;do{p=0,(u=t(L,w,T,C))<0?(A=w[0],T!=C&&(A=A*l+(w[1]||0)),(p=A/D|0)>1?(p>=l&&(p=l-1),1==(u=t(g=e(L,p,l),w,v=g.length,C=w.length))&&(p--,n(g,T<v?N:L,v,l))):(0==p&&(u=p=1),g=L.slice()),(v=g.length)<C&&g.unshift(0),n(w,g,C,l),-1==u&&(u=t(L,w,T,C=w.length))<1&&(p++,n(w,T<C?N:L,C,l)),C=w.length):0===u&&(p++,w=[0]),b[h++]=p,u&&w[0]?w[C++]=R[M]||0:(w=[R[M]],C=1)}while((M++<E||void 0!==w[0])&&I--);m=void 0!==w[0]}b[0]||b.shift()}if(1==f)y.e=d,o=m;else{for(h=1,p=b[0];p>=10;p/=10)h++;y.e=h+d*f-1,k(y,c?s+y.e+1:s,a,m)}return y}}();function k(e,t,n,r){var i,s,o,a,c,l,u,d,h,p=e.constructor;e:if(null!=t){if(!(d=e.d))return e;for(i=1,a=d[0];a>=10;a/=10)i++;if((s=t-i)<0)s+=7,o=t,c=(u=d[h=0])/w(10,i-o-1)%10|0;else if((h=Math.ceil((s+1)/7))>=(a=d.length)){if(!r)break e;for(;a++<=h;)d.push(0);u=c=0,i=1,o=(s%=7)-7+1}else{for(u=a=d[h],i=1;a>=10;a/=10)i++;c=(o=(s%=7)-7+i)<0?0:u/w(10,i-o-1)%10|0}if(r=r||t<0||void 0!==d[h+1]||(o<0?u:u%w(10,i-o-1)),l=n<4?(c||r)&&(0==n||n==(e.s<0?3:2)):c>5||5==c&&(4==n||r||6==n&&(s>0?o>0?u/w(10,i-o):0:d[h-1])%10&1||n==(e.s<0?8:7)),t<1||!d[0])return d.length=0,l?(t-=e.e+1,d[0]=w(10,(7-t%7)%7),e.e=-t||0):d[0]=e.e=0,e;if(0==s?(d.length=h,a=1,h--):(d.length=h+1,a=w(10,7-s),d[h]=o>0?(u/w(10,i-o)%w(10,o)|0)*a:0),l)for(;;){if(0==h){for(s=1,o=d[0];o>=10;o/=10)s++;for(o=d[0]+=a,a=1;o>=10;o/=10)a++;s!=a&&(e.e++,d[0]==S&&(d[0]=1));break}if(d[h]+=a,d[h]!=S)break;d[h--]=0,a=1}for(s=d.length;0===d[--s];)d.pop()}return f&&(e.e>p.maxE?(e.d=null,e.e=NaN):e.e<p.minE&&(e.e=0,e.d=[0])),e}function L(e,t,n){if(!e.isFinite())return q(e);var r,i=e.e,s=T(e.d),o=s.length;return t?(n&&(r=n-o)>0?s=s.charAt(0)+"."+s.slice(1)+H(r):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(e.e<0?"e":"e+")+e.e):i<0?(s="0."+H(-i-1)+s,n&&(r=n-o)>0&&(s+=H(r))):i>=o?(s+=H(i+1-o),n&&(r=n-i-1)>0&&(s=s+"."+H(r))):((r=i+1)<o&&(s=s.slice(0,r)+"."+s.slice(r)),n&&(r=n-o)>0&&(i+1===o&&(s+="."),s+=H(r))),s}function B(e,t){var n=e[0];for(t*=7;n>=10;n/=10)t++;return t}function F(e,t,n){if(t>M)throw f=!0,n&&(e.precision=n),Error(v);return k(new e(d),t,1,!0)}function j(e,t,n){if(t>E)throw Error(v);return k(new e(h),t,n,!0)}function z(e){var t=e.length-1,n=7*t+1;if(t=e[t]){for(;t%10==0;t/=10)n--;for(t=e[0];t>=10;t/=10)n++}return n}function H(e){for(var t="";e--;)t+="0";return t}function U(e,t,n,r){var i,s=new e(1),o=Math.ceil(r/7+4);for(f=!1;;){if(n%2&&ee((s=s.times(t)).d,o)&&(i=!0),0===(n=x(n/2))){n=s.d.length-1,i&&0===s.d[n]&&++s.d[n];break}ee((t=t.times(t)).d,o)}return f=!0,s}function G(e){return 1&e.d[e.d.length-1]}function V(e,t,n){for(var r,i=new e(t[0]),s=0;++s<t.length;){if(!(r=new e(t[s])).s){i=r;break}i[n](r)&&(i=r)}return i}function W(e,t){var n,r,i,s,o,a,c,l=0,u=0,d=0,h=e.constructor,p=h.rounding,m=h.precision;if(!e.d||!e.d[0]||e.e>17)return new h(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:NaN);for(null==t?(f=!1,c=m):c=t,a=new h(.03125);e.e>-2;)e=e.times(a),d+=5;for(c+=r=Math.log(w(2,d))/Math.LN10*2+5|0,n=s=o=new h(1),h.precision=c;;){if(s=k(s.times(e),c,1),n=n.times(++u),T((a=o.plus(R(s,n,c,1))).d).slice(0,c)===T(o.d).slice(0,c)){for(i=d;i--;)o=k(o.times(o),c,1);if(null!=t)return h.precision=m,o;if(!(l<3&&O(o.d,c-r,p,l)))return k(o,h.precision=m,p,f=!0);h.precision=c+=10,n=s=a=new h(1),u=0,l++}o=a}}function $(e,t){var n,r,i,s,o,a,c,l,u,d,h,p=1,m=e,g=m.d,v=m.constructor,y=v.rounding,b=v.precision;if(m.s<0||!g||!g[0]||!m.e&&1==g[0]&&1==g.length)return new v(g&&!g[0]?-1/0:1!=m.s?NaN:g?0:m);if(null==t?(f=!1,u=b):u=t,v.precision=u+=10,r=(n=T(g)).charAt(0),!(Math.abs(s=m.e)<15e14))return l=F(v,u+2,b).times(s+""),m=$(new v(r+"."+n.slice(1)),u-10).plus(l),v.precision=b,null==t?k(m,b,y,f=!0):m;for(;r<7&&1!=r||1==r&&n.charAt(1)>3;)r=(n=T((m=m.times(e)).d)).charAt(0),p++;for(s=m.e,r>1?(m=new v("0."+n),s++):m=new v(r+"."+n.slice(1)),d=m,c=o=m=R(m.minus(1),m.plus(1),u,1),h=k(m.times(m),u,1),i=3;;){if(o=k(o.times(h),u,1),T((l=c.plus(R(o,new v(i),u,1))).d).slice(0,u)===T(c.d).slice(0,u)){if(c=c.times(2),0!==s&&(c=c.plus(F(v,u+2,b).times(s+""))),c=R(c,new v(p),u,1),null!=t)return v.precision=b,c;if(!O(c.d,u-10,y,a))return k(c,v.precision=b,y,f=!0);v.precision=u+=10,l=o=m=R(d.minus(1),d.plus(1),u,1),h=k(m.times(m),u,1),i=a=1}c=l,i+=2}}function q(e){return String(e.s*e.s/0)}function Z(e,t){var n,r,i;for((n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),r=0;48===t.charCodeAt(r);r++);for(i=t.length;48===t.charCodeAt(i-1);--i);if(t=t.slice(r,i)){if(i-=r,e.e=n=n-r-1,e.d=[],r=(n+1)%7,n<0&&(r+=7),r<i){for(r&&e.d.push(+t.slice(0,r)),i-=7;r<i;)e.d.push(+t.slice(r,r+=7));r=7-(t=t.slice(r)).length}else r-=i;for(;r--;)t+="0";e.d.push(+t),f&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function K(e,t){var n,r,i,o,a,c,l,u,d;if(t.indexOf("_")>-1){if(t=t.replace(/(\d)_(?=\d)/g,"$1"),_.test(t))return Z(e,t)}else if("Infinity"===t||"NaN"===t)return+t||(e.s=NaN),e.e=NaN,e.d=null,e;if(A.test(t))n=16,t=t.toLowerCase();else if(C.test(t))n=2;else{if(!I.test(t))throw Error(g+t);n=8}for((o=t.search(/p/i))>0?(l=+t.slice(o+1),t=t.substring(2,o)):t=t.slice(2),a=(o=t.indexOf("."))>=0,r=e.constructor,a&&(o=(c=(t=t.replace(".","")).length)-o,i=U(r,new r(n),o,2*o)),o=d=(u=P(t,n,S)).length-1;0===u[o];--o)u.pop();return o<0?new r(0*e.s):(e.e=B(u,d),e.d=u,f=!1,a&&(e=R(e,i,4*c)),l&&(e=e.times(Math.abs(l)<54?w(2,l):s.pow(2,l))),f=!0,e)}function X(e,t,n,r,i){var s,o,a,c,l=e.precision,u=Math.ceil(l/7);for(f=!1,c=n.times(n),a=new e(r);;){if(o=R(a.times(c),new e(t++*t++),l,1),a=i?r.plus(o):r.minus(o),r=R(o.times(c),new e(t++*t++),l,1),void 0!==(o=a.plus(r)).d[u]){for(s=u;o.d[s]===a.d[s]&&s--;);if(-1==s)break}s=a,a=r,r=o,o=s}return f=!0,o.d.length=u+1,o}function Y(e,t){for(var n=e;--t;)n*=e;return n}function J(e,t){var n,r=t.s<0,i=j(e,e.precision,1),s=i.times(.5);if((t=t.abs()).lte(s))return a=r?4:1,t;if((n=t.divToInt(i)).isZero())a=r?3:2;else{if((t=t.minus(n.times(i))).lte(s))return a=G(n)?r?2:3:r?4:1,t;a=G(n)?r?1:4:r?3:2}return t.minus(i).abs()}function Q(e,t,n,r){var i,s,a,c,d,h,p,f,m,g=e.constructor,v=void 0!==n;if(v?(N(n,1,l),void 0===r?r=g.rounding:N(r,0,8)):(n=g.precision,r=g.rounding),e.isFinite()){for(v?(i=2,16==t?n=4*n-3:8==t&&(n=3*n-2)):i=t,(a=(p=L(e)).indexOf("."))>=0&&(p=p.replace(".",""),(m=new g(1)).e=p.length-a,m.d=P(L(m),10,i),m.e=m.d.length),s=d=(f=P(p,10,i)).length;0==f[--d];)f.pop();if(f[0]){if(a<0?s--:((e=new g(e)).d=f,e.e=s,f=(e=R(e,m,n,r,0,i)).d,s=e.e,h=o),a=f[n],c=i/2,h=h||void 0!==f[n+1],h=r<4?(void 0!==a||h)&&(0===r||r===(e.s<0?3:2)):a>c||a===c&&(4===r||h||6===r&&1&f[n-1]||r===(e.s<0?8:7)),f.length=n,h)for(;++f[--n]>i-1;)f[n]=0,n||(++s,f.unshift(1));for(d=f.length;!f[d-1];--d);for(a=0,p="";a<d;a++)p+=u.charAt(f[a]);if(v){if(d>1)if(16==t||8==t){for(a=16==t?4:3,--d;d%a;d++)p+="0";for(d=(f=P(p,i,t)).length;!f[d-1];--d);for(a=1,p="1.";a<d;a++)p+=u.charAt(f[a])}else p=p.charAt(0)+"."+p.slice(1);p=p+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)p="0"+p;p="0."+p}else if(++s>d)for(s-=d;s--;)p+="0";else s<d&&(p=p.slice(0,s)+"."+p.slice(s))}else p=v?"0p+0":"0";p=(16==t?"0x":2==t?"0b":8==t?"0o":"")+p}else p=q(e);return e.s<0?"-"+p:p}function ee(e,t){if(e.length>t)return e.length=t,!0}function te(e){return new this(e).abs()}function ne(e){return new this(e).acos()}function re(e){return new this(e).acosh()}function ie(e,t){return new this(e).plus(t)}function se(e){return new this(e).asin()}function oe(e){return new this(e).asinh()}function ae(e){return new this(e).atan()}function ce(e){return new this(e).atanh()}function le(e,t){e=new this(e),t=new this(t);var n,r=this.precision,i=this.rounding,s=r+4;return e.s&&t.s?e.d||t.d?!t.d||e.isZero()?(n=t.s<0?j(this,r,i):new this(0)).s=e.s:!e.d||t.isZero()?(n=j(this,s,1).times(.5)).s=e.s:t.s<0?(this.precision=s,this.rounding=1,n=this.atan(R(e,t,s,1)),t=j(this,s,1),this.precision=r,this.rounding=i,n=e.s<0?n.minus(t):n.plus(t)):n=this.atan(R(e,t,s,1)):(n=j(this,s,1).times(t.s>0?.25:.75)).s=e.s:n=new this(NaN),n}function ue(e){return new this(e).cbrt()}function de(e){return k(e=new this(e),e.e+1,2)}function he(e,t,n){return new this(e).clamp(t,n)}function pe(e){if(!e||"object"!=typeof e)throw Error(m+"Object expected");var t,n,r,i=!0===e.defaults,s=["precision",1,l,"rounding",0,8,"toExpNeg",-c,0,"toExpPos",0,c,"maxE",0,c,"minE",-c,0,"modulo",0,9];for(t=0;t<s.length;t+=3)if(n=s[t],i&&(this[n]=p[n]),void 0!==(r=e[n])){if(!(x(r)===r&&r>=s[t+1]&&r<=s[t+2]))throw Error(g+n+": "+r);this[n]=r}if(n="crypto",i&&(this[n]=p[n]),void 0!==(r=e[n])){if(!0!==r&&!1!==r&&0!==r&&1!==r)throw Error(g+n+": "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(y);this[n]=!0}else this[n]=!1}return this}function fe(e){return new this(e).cos()}function me(e){return new this(e).cosh()}function ge(e,t){return new this(e).div(t)}function ve(e){return new this(e).exp()}function ye(e){return k(e=new this(e),e.e+1,3)}function be(){var e,t,n=new this(0);for(f=!1,e=0;e<arguments.length;)if((t=new this(arguments[e++])).d)n.d&&(n=n.plus(t.times(t)));else{if(t.s)return f=!0,new this(1/0);n=t}return f=!0,n.sqrt()}function xe(e){return e instanceof s||e&&e.toStringTag===b||!1}function we(e){return new this(e).ln()}function Ce(e,t){return new this(e).log(t)}function Ae(e){return new this(e).log(2)}function Ie(e){return new this(e).log(10)}function _e(){return V(this,arguments,"lt")}function Se(){return V(this,arguments,"gt")}function Me(e,t){return new this(e).mod(t)}function Ee(e,t){return new this(e).mul(t)}function De(e,t){return new this(e).pow(t)}function Te(e){var t,n,r,i,s=0,o=new this(1),a=[];if(void 0===e?e=this.precision:N(e,1,l),r=Math.ceil(e/7),this.crypto)if(crypto.getRandomValues)for(t=crypto.getRandomValues(new Uint32Array(r));s<r;)(i=t[s])>=429e7?t[s]=crypto.getRandomValues(new Uint32Array(1))[0]:a[s++]=i%1e7;else{if(!crypto.randomBytes)throw Error(y);for(t=crypto.randomBytes(r*=4);s<r;)(i=t[s]+(t[s+1]<<8)+(t[s+2]<<16)+((127&t[s+3])<<24))>=214e7?crypto.randomBytes(4).copy(t,s):(a.push(i%1e7),s+=4);s=r/4}else for(;s<r;)a[s++]=1e7*Math.random()|0;for(e%=7,(r=a[--s])&&e&&(i=w(10,7-e),a[s]=(r/i|0)*i);0===a[s];s--)a.pop();if(s<0)n=0,a=[0];else{for(n=-1;0===a[0];n-=7)a.shift();for(r=1,i=a[0];i>=10;i/=10)r++;r<7&&(n-=7-r)}return o.e=n,o.d=a,o}function Ne(e){return k(e=new this(e),e.e+1,this.rounding)}function Oe(e){return(e=new this(e)).d?e.d[0]?e.s:0*e.s:e.s||NaN}function Pe(e){return new this(e).sin()}function Re(e){return new this(e).sinh()}function ke(e){return new this(e).sqrt()}function Le(e,t){return new this(e).sub(t)}function Be(){var e=0,t=arguments,n=new this(t[e]);for(f=!1;n.s&&++e<t.length;)n=n.plus(t[e]);return f=!0,k(n,this.precision,this.rounding)}function Fe(e){return new this(e).tan()}function je(e){return new this(e).tanh()}function ze(e){return k(e=new this(e),e.e+1,1)}s=function e(t){var n,r,i;function s(e){var t,n,r,i=this;if(!(i instanceof s))return new s(e);if(i.constructor=s,xe(e))return i.s=e.s,void(f?!e.d||e.e>s.maxE?(i.e=NaN,i.d=null):e.e<s.minE?(i.e=0,i.d=[0]):(i.e=e.e,i.d=e.d.slice()):(i.e=e.e,i.d=e.d?e.d.slice():e.d));if("number"===(r=typeof e)){if(0===e)return i.s=1/e<0?-1:1,i.e=0,void(i.d=[0]);if(e<0?(e=-e,i.s=-1):i.s=1,e===~~e&&e<1e7){for(t=0,n=e;n>=10;n/=10)t++;return void(f?t>s.maxE?(i.e=NaN,i.d=null):t<s.minE?(i.e=0,i.d=[0]):(i.e=t,i.d=[e]):(i.e=t,i.d=[e]))}return 0*e!=0?(e||(i.s=NaN),i.e=NaN,void(i.d=null)):Z(i,e.toString())}if("string"!==r)throw Error(g+e);return 45===(n=e.charCodeAt(0))?(e=e.slice(1),i.s=-1):(43===n&&(e=e.slice(1)),i.s=1),_.test(e)?Z(i,e):K(i,e)}if(s.prototype=D,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=pe,s.clone=e,s.isDecimal=xe,s.abs=te,s.acos=ne,s.acosh=re,s.add=ie,s.asin=se,s.asinh=oe,s.atan=ae,s.atanh=ce,s.atan2=le,s.cbrt=ue,s.ceil=de,s.clamp=he,s.cos=fe,s.cosh=me,s.div=ge,s.exp=ve,s.floor=ye,s.hypot=be,s.ln=we,s.log=Ce,s.log10=Ie,s.log2=Ae,s.max=_e,s.min=Se,s.mod=Me,s.mul=Ee,s.pow=De,s.random=Te,s.round=Ne,s.sign=Oe,s.sin=Pe,s.sinh=Re,s.sqrt=ke,s.sub=Le,s.sum=Be,s.tan=Fe,s.tanh=je,s.trunc=ze,void 0===t&&(t={}),t&&!0!==t.defaults)for(i=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],n=0;n<i.length;)t.hasOwnProperty(r=i[n++])||(t[r]=this[r]);return s.config(t),s}(p),s.prototype.constructor=s,s.default=s.Decimal=s,d=new s(d),h=new s(h),void 0===(r=function(){return s}.call(t,n,t,e))||(e.exports=r)}()},77928:e=>{"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n={"{":"\\{","}":"\\}","\\":"\\textbackslash{}","#":"\\#",$:"\\$","%":"\\%","&":"\\&","^":"\\textasciicircum{}",_:"\\_","~":"\\textasciitilde{}"},r={"–":"\\--","—":"\\---"," ":"~","\t":"\\qquad{}","\r\n":"\\newline{}","\n":"\\newline{}"},i=function(e,n){return t({},e,n)};e.exports=function(e){for(var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=s.preserveFormatting,a=void 0!==o&&o,c=s.escapeMapFn,l=void 0===c?i:c,u=String(e),d="",h=l(t({},n),a?t({},r):{}),p=Object.keys(h),f=function(){var e=!1;p.forEach((function(t,n){e||u.length>=t.length&&u.slice(0,t.length)===t&&(d+=h[p[n]],u=u.slice(t.length,u.length),e=!0)})),e||(d+=u.slice(0,1),u=u.slice(1,u.length))};u;)f();return d}},93162:function(e,t,n){var r,i,s;i=[],r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){c(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(e,t,n){var a=o.URL||o.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?s(c):i(c.href)?r(e,t,n):s(c,c.target="_blank")):(c.href=a.createObjectURL(e),setTimeout((function(){a.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,o),n);else if(i(e))r(e,n,o);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){s(a)}))}}:function(e,t,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var s="application/octet-stream"===e.type,c=/constructor/i.test(o.HTMLElement)||o.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||a)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},u.readAsDataURL(e)}else{var d=o.URL||o.webkitURL,h=d.createObjectURL(e);i?i.location=h:location.href=h,i=null,setTimeout((function(){d.revokeObjectURL(h)}),4e4)}});o.saveAs=c.saveAs=c,e.exports=c},void 0===(s="function"==typeof r?r.apply(t,i):r)||(e.exports=s)},15503:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FirebaseError:()=>r.ZR,SDK_VERSION:()=>r.Jn,_DEFAULT_ENTRY_NAME:()=>r.l4,_addComponent:()=>r.H9,_addOrOverwriteComponent:()=>r.Vr,_apps:()=>r.Af,_clearComponents:()=>r.Z8,_components:()=>r.lz,_getProvider:()=>r.qX,_registerComponent:()=>r.Xd,_removeServiceInstance:()=>r.wN,deleteApp:()=>r.P2,getApp:()=>r.Mq,getApps:()=>r.C6,initializeApp:()=>r.ZF,onLog:()=>r.TP,registerVersion:()=>r.KN,setLogLevel:()=>r.Ub});var r=n(94258);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)("firebase","9.1.1","app")},40494:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ActionCodeOperation:()=>h,ActionCodeURL:()=>ke,AuthCredential:()=>Se,AuthErrorCodes:()=>v,EmailAuthCredential:()=>Te,EmailAuthProvider:()=>Be,FacebookAuthProvider:()=>He,FactorId:()=>c,GithubAuthProvider:()=>Ge,GoogleAuthProvider:()=>Ue,OAuthCredential:()=>Oe,OAuthProvider:()=>ze,OperationType:()=>d,PhoneAuthCredential:()=>Re,PhoneAuthProvider:()=>kn,PhoneMultiFactorGenerator:()=>Er,ProviderId:()=>l,RecaptchaVerifier:()=>En,SAMLAuthProvider:()=>We,SignInMethod:()=>u,TwitterAuthProvider:()=>$e,applyActionCode:()=>ft,browserLocalPersistence:()=>Jt,browserPopupRedirectResolver:()=>Sr,browserSessionPersistence:()=>en,checkActionCode:()=>mt,confirmPasswordReset:()=>pt,connectAuthEmulator:()=>Ae,createUserWithEmailAndPassword:()=>vt,debugErrorMap:()=>f,deleteUser:()=>Ut,fetchSignInMethodsForEmail:()=>Ct,getAdditionalUserInfo:()=>kt,getAuth:()=>Nr,getIdToken:()=>q,getIdTokenResult:()=>Z,getMultiFactorResolver:()=>Wt,getRedirectResult:()=>tr,inMemoryPersistence:()=>oe,indexedDBLocalPersistence:()=>gn,initializeAuth:()=>T,isSignInWithEmailLink:()=>xt,linkWithCredential:()=>ot,linkWithPhoneNumber:()=>Nn,linkWithPopup:()=>Wn,linkWithRedirect:()=>er,multiFactor:()=>Zt,onAuthStateChanged:()=>Ft,onIdTokenChanged:()=>Bt,parseActionCodeURL:()=>Le,prodErrorMap:()=>m,reauthenticateWithCredential:()=>at,reauthenticateWithPhoneNumber:()=>On,reauthenticateWithPopup:()=>Vn,reauthenticateWithRedirect:()=>Qn,reload:()=>te,sendEmailVerification:()=>At,sendPasswordResetEmail:()=>ht,sendSignInLinkToEmail:()=>bt,setPersistence:()=>Lt,signInAnonymously:()=>Xe,signInWithCredential:()=>st,signInWithCustomToken:()=>ct,signInWithEmailAndPassword:()=>yt,signInWithEmailLink:()=>wt,signInWithPhoneNumber:()=>Tn,signInWithPopup:()=>Gn,signInWithRedirect:()=>Jn,signOut:()=>Ht,unlink:()=>et,updateCurrentUser:()=>zt,updateEmail:()=>St,updatePassword:()=>Mt,updatePhoneNumber:()=>Rn,updateProfile:()=>_t,useDeviceLanguage:()=>jt,verifyBeforeUpdateEmail:()=>It,verifyPasswordResetCode:()=>gt});var r=n(74444),i=n(94258);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n(76934),a=n(48886);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={PHONE:"phone"},l={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},d={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},h={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function p(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},m=p,g=new r.LL("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),v={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},y=new o.Yd("@firebase/auth");function b(e,...t){y.logLevel<=o.in.ERROR&&y.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,...t){throw I(e,...t)}function w(e,...t){return I(e,...t)}function C(e,t,n){const i=Object.assign(Object.assign({},m()),{[t]:n});return new r.LL("auth","Firebase",i).create(t,{appName:e.name})}function A(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&x(e,"argument-error"),C(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return g.create(e,...t)}function _(e,t,...n){if(!e)throw I(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw b(t),new Error(t)}function M(e,t){e||S(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=new Map;function D(e){M(e instanceof Function,"Expected a class definition");let t=E.get(e);return t?(M(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,E.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!=t?t:{}))return e;x(e,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===P()||"https:"===P()}function P(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,M(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(O()||(0,r.ru)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){M(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},F=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function z(e,t,n,i,s={}){return H(e,s,(()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=new(L.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),L.fetch()(G(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function H(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},B),t);try{const t=new V(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw W(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw W(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw W(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw C(e,a,o);x(e,a)}}catch(t){if(t instanceof r.ZR)throw t;x(e,"network-request-failed")}}async function U(e,t,n,r,i={}){const s=await z(e,t,n,r,i);return"mfaPendingCredential"in s&&x(e,"multi-factor-auth-required",{serverResponse:s}),s}function G(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?k(e.config,i):`${e.config.apiScheme}://${i}`}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(w(this.auth,"timeout"))),F.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function W(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t=!1){return(0,r.m9)(e).getIdToken(t)}async function Z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=X(i);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:$(K(s.auth_time)),issuedAtTime:$(K(s.iat)),expirationTime:$(K(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function K(e){return 1e3*Number(e)}function X(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return b("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(b("Failed to decode base64 JWT payload"),null)}catch(e){return b("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Y(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Y(e,async function(e,t){return z(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));_(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(l=e.providerData,u=a,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const d=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==c?void 0:c.length)),p=!!d&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,f)}async function te(e){const t=(0,r.m9)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(void 0!==e.idToken,"internal-error"),_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=X(e);return _(t,"internal-error"),_(void 0!==t.exp,"internal-error"),_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await H(e,{},(()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=G(e,i,"/v1/token",`key=${s}`);return L.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ne;return n&&(_("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(_("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(_("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ne,this.toJSON())}_performRefresh(){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Y(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Z(this,e)}reload(){return te(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Y(this,async function(e,t){return z(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:x,providerData:w,stsTokenManager:C}=t;_(y&&C,e,"internal-error");const A=ne.fromJSON(this.name,C);_("string"==typeof y,e,"internal-error"),re(u,e.name),re(d,e.name),_("boolean"==typeof b,e,"internal-error"),_("boolean"==typeof x,e,"internal-error"),re(h,e.name),re(p,e.name),re(f,e.name),re(m,e.name),re(g,e.name),re(v,e.name);const I=new ie({uid:y,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:x,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:A,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(I.providerData=w.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new ne;r.updateFromServerResponse(t);const i=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const oe=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,i),this.fullPersistenceKey=ae("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(D(oe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||D(oe);const s=ae(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=ie._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new ce(i,e,n)):new ce(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(fe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ue(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function fe(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ve(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)}function ye(e=(0,r.z$)()){return ve(e)||fe(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ce(this),this.idTokenSubscription=new Ce(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=g,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=D(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await ce.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(_(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(D(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&D(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[D(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=be(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function we(e){return(0,r.m9)(e)}class Ce{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ae(e,t,n){const r=we(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Ie(t),{host:o,port:a}=function(e){const t=Ie(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:_e(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:_e(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),function(e){function t(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"==typeof window||"undefined"==typeof document||e||("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i)}function Ie(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _e(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Se{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return z(e,"POST","/v1/accounts:resetPassword",j(e,t))}async function Ee(e,t){return z(e,"POST","/v1/accounts:update",t)}async function De(e,t){return z(e,"POST","/v1/accounts:sendOobCode",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te extends Se{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Te(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Te(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",j(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",j(e,t))}(e,{email:this._email,oobCode:this._password});default:x(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ee(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",j(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:x(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Se{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Oe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):x("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Oe(n,r);return Object.assign(o,i),o}_getIdTokenResponse(e){return Ne(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ne(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ne(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re extends Se{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Re({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Re({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,t));if(n.temporaryProof)throw W(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Pe)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Re({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),l=null!==(t=c.apiKey)&&void 0!==t?t:null,u=null!==(n=c.oobCode)&&void 0!==n?n:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);_(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=(0,r.zd)((0,r.pd)(e)).link,n=t?(0,r.zd)((0,r.pd)(t)).deep_link_id:null,i=(0,r.zd)((0,r.pd)(e)).deep_link_id;return(i?(0,r.zd)((0,r.pd)(i)).link:null)||i||n||t||e}(e);try{return new ke(t)}catch(e){return null}}}function Le(e){return ke.parseLink(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(){this.providerId=Be.PROVIDER_ID}static credential(e,t){return Te._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ke.parseLink(t);return _(n,"argument-error"),Te._fromEmailAndCode(e,n.code,n.tenantId)}}Be.PROVIDER_ID="password",Be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Fe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ze extends je{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return _("providerId"in t&&"signInMethod"in t,"argument-error"),Oe._fromParams(t)}credential(e){return this._credential(e)}_credential(e){return _(e.idToken||e.accessToken,"argument-error"),Oe._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ze.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ze.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!(n||r||t||i))return null;if(!o)return null;try{return new ze(o)._credential({idToken:t,accessToken:n,rawNonce:s,pendingToken:i})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends je{constructor(){super("facebook.com")}static credential(e){return Oe._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return He.credential(e.oauthAccessToken)}catch(e){return null}}}He.FACEBOOK_SIGN_IN_METHOD="facebook.com",He.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue extends je{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Oe._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ue.credential(t,n)}catch(e){return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com",Ue.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge extends je{constructor(){super("github.com")}static credential(e){return Oe._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ge.credential(e.oauthAccessToken)}catch(e){return null}}}Ge.GITHUB_SIGN_IN_METHOD="github.com",Ge.PROVIDER_ID="github.com";class Ve extends Se{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Ne(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ne(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ne(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Ve(n,i):null}static _create(e,t){return new Ve(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Fe{constructor(e){_(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return We.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return We.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ve.fromJSON(e);return _(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ve._create(n,t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends je{constructor(){super("twitter.com")}static credential(e,t){return Oe._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return $e.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qe(e,t){return U(e,"POST","/v1/accounts:signUp",j(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e.TWITTER_SIGN_IN_METHOD="twitter.com",$e.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ie._fromIdTokenResponse(e,n,r),s=Ke(n);return new Ze({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ke(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ke(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e){var t;const n=we(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ze({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await qe(n,{returnSecureToken:!0}),i=await Ze._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Ye.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Ye(e,t,n,r)}}function Je(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ye._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){const n=(0,r.m9)(e);await nt(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return z(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Qe(i||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function tt(e,t,n=!1){const r=await Y(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}async function nt(e,t,n){await ee(t);const r=!1===e?"provider-already-linked":"no-such-provider";_(Qe(t.providerData).has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Y(e,Je(r,i,t,e),n);_(s.idToken,r,"internal-error");const o=X(s.idToken);_(o,r,"internal-error");const{sub:a}=o;return _(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&x(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n=!1){const r="signIn",i=await Je(e,r,t),s=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function st(e,t){return it(we(e),t)}async function ot(e,t){const n=(0,r.m9)(e);return await nt(!1,n,t.providerId),tt(n,t)}async function at(e,t){return rt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ct(e,t){const n=we(e),r=await async function(e,t){return U(e,"POST","/v1/accounts:signInWithCustomToken",j(e,t))}(n,{token:t,returnSecureToken:!0}),i=await Ze._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?ut._fromServerResponse(e,t):x(e,"internal-error")}}class ut extends lt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new ut(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,t,n){var r;_((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),_(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t,n){const i=(0,r.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&dt(i,s,n),await async function(e,t){return De(e,t)}(i,s)}async function pt(e,t,n){await Me((0,r.m9)(e),{oobCode:t,newPassword:n})}async function ft(e,t){await async function(e,t){return z(e,"POST","/v1/accounts:update",j(e,t))}((0,r.m9)(e),{oobCode:t})}async function mt(e,t){const n=(0,r.m9)(e),i=await Me(n,{oobCode:t}),s=i.requestType;switch(_(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_(i.mfaInfo,n,"internal-error");default:_(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=lt._fromServerResponse(we(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function gt(e,t){const{data:n}=await mt((0,r.m9)(e),t);return n.email}async function vt(e,t,n){const r=we(e),i=await qe(r,{returnSecureToken:!0,email:t,password:n}),s=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function yt(e,t,n){return st((0,r.m9)(e),Be.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(e,t,n){const i=(0,r.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};_(n.handleCodeInApp,i,"argument-error"),n&&dt(i,s,n),await async function(e,t){return De(e,t)}(i,s)}function xt(e,t){const n=ke.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}async function wt(e,t,n){const i=(0,r.m9)(e),s=Be.credentialWithLink(t,n||N());return _(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),st(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(e,t){const n={identifier:t,continueUri:O()?N():"http://localhost"},{signinMethods:i}=await async function(e,t){return z(e,"POST","/v1/accounts:createAuthUri",j(e,t))}((0,r.m9)(e),n);return i||[]}async function At(e,t){const n=(0,r.m9)(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&dt(n.auth,i,t);const{email:s}=await async function(e,t){return De(e,t)}(n.auth,i);s!==e.email&&await e.reload()}async function It(e,t,n){const i=(0,r.m9)(e),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&dt(i.auth,s,n);const{email:o}=await async function(e,t){return De(e,t)}(i.auth,s);o!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _t(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Y(i,async function(e,t){return z(e,"POST","/v1/accounts:update",t)}(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function St(e,t){return Et((0,r.m9)(e),t,null)}function Mt(e,t){return Et((0,r.m9)(e),null,t)}async function Et(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const s=await Y(e,Ee(r,i));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Tt extends Dt{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Nt extends Dt{constructor(e,t){super(e,"facebook.com",t)}}class Ot extends Tt{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class Pt extends Dt{constructor(e,t){super(e,"google.com",t)}}class Rt extends Tt{constructor(e,t,n){super(e,"twitter.com",t,n)}}function kt(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r)return new Dt(s,"anonymous"!==r&&"custom"!==r?r:null)}if(!r)return null;switch(r){case"facebook.com":return new Nt(s,i);case"github.com":return new Ot(s,i);case"google.com":return new Pt(s,i);case"twitter.com":return new Rt(s,i,e.screenName||null);case"custom":case"anonymous":return new Dt(s,null);default:return new Dt(s,r,i)}}(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e,t){return(0,r.m9)(e).setPersistence(t)}function Bt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function Ft(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function jt(e){(0,r.m9)(e).useDeviceLanguage()}function zt(e,t){return(0,r.m9)(e).updateCurrentUser(t)}function Ht(e){return(0,r.m9)(e).signOut()}async function Ut(e){return(0,r.m9)(e).delete()}class Gt{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new Gt("enroll",e)}static _fromMfaPendingCredential(e){return new Gt("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Gt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Gt._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=we(e),r=(t.serverResponse.mfaInfo||[]).map((e=>lt._fromServerResponse(n,e)));_(t.serverResponse.mfaPendingCredential,n,"internal-error");const i=Gt._fromMfaPendingCredential(t.serverResponse.mfaPendingCredential);return new Vt(i,r,(async e=>{const r=await e._process(n,i);delete t.serverResponse.mfaInfo,delete t.serverResponse.mfaPendingCredential;const s=Object.assign(Object.assign({},t.serverResponse),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Ze._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return _(t.user,n,"internal-error"),Ze._forOperation(t.user,t.operationType,s);default:x(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Wt(e,t){var n;const i=(0,r.m9)(e),s=t;return _(t.operationType,i,"argument-error"),_(null===(n=s.serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Vt._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>lt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new $t(e)}async getSession(){return Gt._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await Y(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken(),r=await Y(this.user,(i=this.user.auth,s={idToken:n,mfaEnrollmentId:t},z(i,"POST","/v2/accounts/mfaEnrollment:withdraw",j(i,s))));var i,s;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==e.code)throw e}}}const qt=new WeakMap;function Zt(e){const t=(0,r.m9)(e);return qt.has(t)||qt.set(t,$t._fromUser(t)),qt.get(t)}const Kt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kt,"1"),this.storage.removeItem(Kt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Xt{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,r.z$)();return de(e)||ve(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ye(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,r.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yt.type="LOCAL";const Jt=Yt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Xt{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qt.type="SESSION";const en=Qt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new tn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.receivers=[];class rn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=nn("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(){return void 0!==sn().WorkerGlobalScope&&"function"==typeof sn().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an="firebaseLocalStorageDb",cn="firebaseLocalStorage",ln="fbase_key";class un{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function dn(e,t){return e.transaction([cn],t?"readwrite":"readonly").objectStore(cn)}function hn(){const e=indexedDB.open(an,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(cn,{keyPath:ln})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(cn)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(an);return new un(e).toPromise()}(),t(await hn()))}))}))}async function pn(e,t,n){const r=dn(e,!0).put({[ln]:t,value:n});return new un(r).toPromise()}function fn(e,t){const n=dn(e,!0).delete(t);return new un(n).toPromise()}class mn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await hn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return on()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(on()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new rn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hn();return await pn(e,Kt,"1"),await fn(e,Kt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>pn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=dn(e,!1).get(t),r=await new un(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>fn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=dn(e,!1).getAll();return new un(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}mn.type="LOCAL";const gn=mn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function yn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=1e12;class xn{constructor(e){this.auth=e,this.counter=bn,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new wn(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||bn;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||bn;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||bn;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class wn{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;_(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const Cn=yn("rcb"),An=new R(3e4,6e4);class In{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!sn().grecaptcha}load(e,t=""){return _(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(sn().grecaptcha):new Promise(((n,i)=>{const s=sn().setTimeout((()=>{i(w(e,"network-request-failed"))}),An.get());sn()[Cn]=()=>{sn().clearTimeout(s),delete sn()[Cn];const r=sn().grecaptcha;if(!r)return void i(w(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};vn(`https://www.google.com/recaptcha/api.js??${(0,r.xO)({onload:Cn,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(s),i(w(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!sn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class _n{async load(e){return new xn(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="recaptcha",Mn={theme:"light",type:"image"};class En{constructor(e,t=Object.assign({},Mn),n){this.parameters=t,this.type=Sn,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=we(n),this.isInvisible="invisible"===this.parameters.size,_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;_(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _n:new In,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){_(!this.parameters.sitekey,this.auth,"argument-error"),_(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=sn()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){_(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_(O()&&!on(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await z(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);_(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class Dn{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Re._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Tn(e,t,n){const i=we(e),s=await Pn(i,t,(0,r.m9)(n));return new Dn(s,(e=>st(i,e)))}async function Nn(e,t,n){const i=(0,r.m9)(e);await nt(!1,i,"phone");const s=await Pn(i.auth,t,(0,r.m9)(n));return new Dn(s,(e=>ot(i,e)))}async function On(e,t,n){const i=(0,r.m9)(e),s=await Pn(i.auth,t,(0,r.m9)(n));return new Dn(s,(e=>at(i,e)))}async function Pn(e,t,n){var r;const i=await n.verify();try{let s;if(_("string"==typeof i,e,"argument-error"),_(n.type===Sn,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_("enroll"===t.type,e,"internal-error");const n=await function(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:start",j(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_(n,e,"missing-multi-factor-info");const o=await function(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:start",j(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return z(e,"POST","/v1/accounts:sendVerificationCode",j(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Rn(e,t){await tt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.providerId=kn.PROVIDER_ID,this.auth=we(e)}verifyPhoneNumber(e,t){return Pn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Re._fromVerification(e,t)}static credentialFromResult(e){const t=e;return kn.credentialFromTaggedObject(t)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Re._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ln(e,t){return t?D(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn.PROVIDER_ID="phone",kn.PHONE_SIGN_IN_METHOD="phone";class Bn extends Se{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ne(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ne(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ne(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fn(e){return it(e.auth,new Bn(e),e.bypassAuthState)}function jn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),rt(n,new Bn(e),e.bypassAuthState)}async function zn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),tt(n,new Bn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fn;case"linkViaPopup":case"linkViaRedirect":return zn;case"reauthViaPopup":case"reauthViaRedirect":return jn;default:x(this.auth,"internal-error")}}resolve(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new R(2e3,1e4);async function Gn(e,t,n){const r=we(e);A(e,t,Fe);const i=Ln(r,n);return new $n(r,"signInViaPopup",t,i).executeNotNull()}async function Vn(e,t,n){const i=(0,r.m9)(e);A(i.auth,t,Fe);const s=Ln(i.auth,n);return new $n(i.auth,"reauthViaPopup",t,s,i).executeNotNull()}async function Wn(e,t,n){const i=(0,r.m9)(e);A(i.auth,t,Fe);const s=Ln(i.auth,n);return new $n(i.auth,"linkViaPopup",t,s,i).executeNotNull()}class $n extends Hn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){M(1===this.filter.length,"Popup operations only handle one event");const e=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Un.get())};e()}}$n.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qn=new Map;class Zn extends Hn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=qn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Yn(t),r="true"===await Xn(e)._get(n);return await Xn(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}qn.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Kn(e,t){return Xn(e)._set(Yn(t),"true")}function Xn(e){return D(e._redirectPersistence)}function Yn(e){return ae("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e,t,n){return async function(e,t,n){const r=we(e);A(e,t,Fe);const i=Ln(r,n);return await Kn(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function Qn(e,t,n){return async function(e,t,n){const i=(0,r.m9)(e);A(i.auth,t,Fe);const s=Ln(i.auth,n);await Kn(s,i.auth);const o=await rr(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}(e,t,n)}function er(e,t,n){return async function(e,t,n){const i=(0,r.m9)(e);A(i.auth,t,Fe);const s=Ln(i.auth,n);await nt(!1,i,t.providerId),await Kn(s,i.auth);const o=await rr(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}(e,t,n)}async function tr(e,t){return await we(e)._initializationPromise,nr(e,t,!1)}async function nr(e,t,n=!1){const r=we(e),i=Ln(r,t),s=new Zn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function rr(e){const t=nn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return or(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!or(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(sr(e))}saveEventToCache(e){this.cachedEventUids.add(sr(e)),this.lastProcessedEventTime=Date.now()}}function sr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function or({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ar=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cr=/^https?/;async function lr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return z(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ur(e))return}catch(e){}x(e,"unauthorized-domain")}function ur(e){const t=N(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!cr.test(n))return!1;if(ar.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new R(3e4,6e4);function hr(){const e=sn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let pr=null;function fr(e){return pr=pr||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){hr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hr(),n(w(e,"network-request-failed"))},timeout:dr.get()})}if(null===(i=null===(r=sn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=sn().gapi)||void 0===s?void 0:s.load)){const t=yn("iframefcb");return sn()[t]=()=>{gapi.load?o():n(w(e,"network-request-failed"))},vn(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw pr=null,e}))}(e),pr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new R(5e3,15e3),gr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},vr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yr(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=vr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const br={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class xr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function wr(e,t,n,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},br),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.z$)().toLowerCase();n&&(c=he(u)?"_blank":n),ue(u)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,r.z$)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new xr(null);const h=window.open(t||"",c,d);_(h,e,"popup-blocked");try{h.focus()}catch(e){}return new xr(h)}const Cr="__/auth/handler",Ar="emulator/auth/handler";function Ir(e,t,n,s,o,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof Fe){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof je){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const e of Object.keys(l))void 0===l[e]&&delete l[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Cr}`;return k(e,Ar)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,r.xO)(l).slice(1)}`}const _r="webStorageSupport";const Sr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=en,this._completeRedirectFn=nr}async _openPopup(e,t,n,r){var i;M(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return wr(e,Ir(e,t,n,N(),r),nn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Ir(e,t,n,N(),r),sn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(M(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await fr(e),n=sn().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:yr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),s=sn().setTimeout((()=>{r(i)}),mr.get());function o(){sn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new ir(e);return t.register("authEvent",(t=>{_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_r,{type:_r},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),x(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ye()||de()||ve()}};class Mr extends class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Mr(e)}_finalizeEnroll(e,t,n){return function(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:finalize",j(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:finalize",j(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Er{constructor(){}static assertion(e){return Mr._fromCredential(e)}}Er.FACTOR_ID="phone";var Dr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");return t.isInitialized()?t.getImmediate():T(e,{popupRedirectResolver:Sr,persistence:[gn,Jt,en]})}Dr="Browser",(0,i.Xd)(new a.wA("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{_(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),_(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Dr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:be(Dr)},s=new xe(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(D);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>(e=>new Tr(e))(we(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)("@firebase/auth","0.18.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Dr))},81591:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AbstractUserDataWriter:()=>Cp,Bytes:()=>yh,CACHE_SIZE_UNLIMITED:()=>Qd,CollectionReference:()=>Vd,DocumentReference:()=>Ud,DocumentSnapshot:()=>Yh,FieldPath:()=>gh,FieldValue:()=>bh,Firestore:()=>eh,FirestoreError:()=>Pr,GeoPoint:()=>xh,LoadBundleTask:()=>Jd,Query:()=>Gd,QueryConstraint:()=>rp,QueryDocumentSnapshot:()=>Jh,QuerySnapshot:()=>Qh,SnapshotMetadata:()=>Xh,Timestamp:()=>qr,Transaction:()=>Up,WriteBatch:()=>_p,_DatabaseId:()=>Td,_DocumentKey:()=>mi,_EmptyCredentialsProvider:()=>Lr,_FieldPath:()=>ti,_cast:()=>Bd,_debugAssert:()=>Tr,_isBase64Available:()=>ri,_logWarn:()=>Sr,_validateIsNotUsedTogether:()=>Pd,addDoc:()=>Bp,arrayRemove:()=>qp,arrayUnion:()=>$p,clearIndexedDbPersistence:()=>ch,collection:()=>Wd,collectionGroup:()=>$d,connectFirestoreEmulator:()=>Hd,deleteDoc:()=>Lp,deleteField:()=>Vp,disableNetwork:()=>dh,doc:()=>qd,documentId:()=>vh,enableIndexedDbPersistence:()=>sh,enableMultiTabIndexedDbPersistence:()=>oh,enableNetwork:()=>uh,endAt:()=>vp,endBefore:()=>gp,ensureFirestoreConfigured:()=>rh,executeWrite:()=>zp,getDoc:()=>Mp,getDocFromCache:()=>Dp,getDocFromServer:()=>Tp,getDocs:()=>Np,getDocsFromCache:()=>Op,getDocsFromServer:()=>Pp,getFirestore:()=>nh,increment:()=>Zp,initializeFirestore:()=>th,limit:()=>up,limitToLast:()=>dp,loadBundle:()=>ph,namedQuery:()=>fh,onSnapshot:()=>Fp,onSnapshotsInSync:()=>jp,orderBy:()=>cp,query:()=>ip,queryEqual:()=>Kd,refEqual:()=>Zd,runTransaction:()=>Gp,serverTimestamp:()=>Wp,setDoc:()=>Rp,setLogLevel:()=>Ar,snapshotEqual:()=>tp,startAfter:()=>fp,startAt:()=>pp,terminate:()=>hh,updateDoc:()=>kp,waitForPendingWrites:()=>lh,where:()=>op,writeBatch:()=>Kp});var r,i=n(94258),s=n(48886),o=n(76934),a=n(74444),c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},l={},u=u||{},d=c||self;function h(){}function p(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function y(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return(b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y).apply(null,arguments)}function x(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function w(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function C(){this.s=this.s,this.o=this.o}var A={};C.prototype.s=!1,C.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++g)}(this);delete A[e]}},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},_=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"==typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function S(e){return Array.prototype.concat.apply([],arguments)}function M(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function E(e){return/^[\s\xa0]*$/.test(e)}var D,T=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function N(e,t){return-1!=e.indexOf(t)}function O(e,t){return e<t?-1:e>t?1:0}e:{var P=d.navigator;if(P){var R=P.userAgent;if(R){D=R;break e}}D=""}function k(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function L(e){const t={};for(const n in e)t[n]=e[n];return t}var B="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<B.length;t++)n=B[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function j(e){return j[" "](e),e}j[" "]=h;var z,H,U=N(D,"Opera"),G=N(D,"Trident")||N(D,"MSIE"),V=N(D,"Edge"),W=V||G,$=N(D,"Gecko")&&!(N(D.toLowerCase(),"webkit")&&!N(D,"Edge"))&&!(N(D,"Trident")||N(D,"MSIE"))&&!N(D,"Edge"),q=N(D.toLowerCase(),"webkit")&&!N(D,"Edge");function Z(){var e=d.document;return e?e.documentMode:void 0}e:{var K="",X=(H=D,$?/rv:([^\);]+)(\)|;)/.exec(H):V?/Edge\/([\d\.]+)/.exec(H):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(H):q?/WebKit\/(\S+)/.exec(H):U?/(?:Version)[ \/]?(\S+)/.exec(H):void 0);if(X&&(K=X?X[1]:""),G){var Y=Z();if(null!=Y&&Y>parseFloat(K)){z=String(Y);break e}}z=K}var J,Q={};function ee(){return function(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=T(String(z)).split("."),n=T("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=O(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||O(0==i[2].length,0==s[2].length)||O(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&G){var te=Z();J=te||(parseInt(z,10)||void 0)}else J=void 0;var ne=J,re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",h,t),d.removeEventListener("test",h,t)}catch(e){}return e}();function ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function se(e,t){if(ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($){e:{try{j(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:oe[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&se.Z.h.call(this)}}ie.prototype.h=function(){this.defaultPrevented=!0},w(se,ie);var oe={2:"touch",3:"pen",4:"mouse"};se.prototype.h=function(){se.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ae="closure_listenable_"+(1e6*Math.random()|0),ce=0;function le(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ce,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function de(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function pe(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}de.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=pe(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new le(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),me={};function ge(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ge(e,t[s],n,r,i);return null}return n=_e(n),e&&e[ae]?e.N(t,n,f(r)?!!r.capture:!!r,i):ve(e,t,n,!1,r,i)}function ve(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,a=Ae(e);if(a||(e[fe]=a=new de(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Ce;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)re||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(we(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);return null}return n=_e(n),e&&e[ae]?e.O(t,n,f(r)?!!r.capture:!!r,i):ve(e,t,n,!0,r,i)}function be(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);else r=f(r)?!!r.capture:!!r,n=_e(n),e&&e[ae]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=pe(s=e.g[t],n,r,i))&&(ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ae(e))&&(t=e.g[t.toString()],e=-1,t&&(e=pe(t,n,r,i)),(n=-1<e?t[e]:null)&&xe(n))}function xe(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ae])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(we(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ae(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function we(e){return e in me?me[e]:me[e]="on"+e}function Ce(e,t){if(e.ca)e=!0;else{t=new se(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&xe(e),e=n.call(r,t)}return e}function Ae(e){return(e=e[fe])instanceof de?e:null}var Ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"==typeof e?e:(e[Ie]||(e[Ie]=function(t){return e.handleEvent(t)}),e[Ie])}function Se(){C.call(this),this.i=new de(this),this.P=this,this.I=null}function Me(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new ie(t,e);else if(t instanceof ie)t.target=t.target||e;else{var i=t;F(t=new ie(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ee(o,r,!0,t)&&i}if(i=Ee(o=t.g=e,r,!0,t)&&i,i=Ee(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=Ee(o=t.g=n[s],r,!1,t)&&i}function Ee(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}w(Se,C),Se.prototype[ae]=!0,Se.prototype.removeEventListener=function(e,t,n,r){be(this,e,t,n,r)},Se.prototype.M=function(){if(Se.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},Se.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Se.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var De=d.JSON.stringify;function Te(){var e=Be;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ne,Oe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Pe),(e=>e.reset()));class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Re(e){d.setTimeout((()=>{throw e}),0)}function ke(e,t){Ne||function(){var e=d.Promise.resolve(void 0);Ne=function(){e.then(Fe)}}(),Le||(Ne(),Le=!0),Be.add(e,t)}var Le=!1,Be=new class{constructor(){this.h=this.g=null}add(e,t){const n=Oe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Fe(){for(var e;e=Te();){try{e.h.call(e.g)}catch(e){Re(e)}var t=Oe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Le=!1}function je(e,t){Se.call(this),this.h=e||1,this.g=t||d,this.j=b(this.kb,this),this.l=Date.now()}function ze(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function He(e,t,n){if("function"==typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Ue(e){e.g=He((()=>{e.g=null,e.i&&(e.i=!1,Ue(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}w(je,Se),(r=je.prototype).da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Me(this,"tick"),this.da&&(ze(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){je.Z.M.call(this),ze(this),delete this.g};class Ge extends C{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ue(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(e){C.call(this),this.h=e,this.g={}}w(Ve,C);var We=[];function $e(e,t,n,r){Array.isArray(n)||(n&&(We[0]=n.toString()),n=We);for(var i=0;i<n.length;i++){var s=ge(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function qe(e){k(e.g,(function(e,t){this.g.hasOwnProperty(t)&&xe(e)}),e),e.g={}}function Ze(){this.g=!0}function Ke(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return De(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Ve.prototype.M=function(){Ve.Z.M.call(this),qe(this)},Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ze.prototype.Aa=function(){this.g=!1},Ze.prototype.info=function(){};var Xe={},Ye=null;function Je(){return Ye=Ye||new Se}function Qe(e){ie.call(this,Xe.Ma,e)}function et(e){const t=Je();Me(t,new Qe(t,e))}function tt(e,t){ie.call(this,Xe.STAT_EVENT,e),this.stat=t}function nt(e){const t=Je();Me(t,new tt(t,e))}function rt(e,t){ie.call(this,Xe.Na,e),this.size=t}function it(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}Xe.Ma="serverreachability",w(Qe,ie),Xe.STAT_EVENT="statevent",w(tt,ie),Xe.Na="timingevent",w(rt,ie);var st={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ot={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function at(){}function ct(e){return e.h||(e.h=e.i())}function lt(){}at.prototype.h=null;var ut,dt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ht(){ie.call(this,"d")}function pt(){ie.call(this,"c")}function ft(){}function mt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ve(this),this.P=vt,e=W?125:void 0,this.W=new je(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new gt}function gt(){this.i=null,this.g="",this.h=!1}w(ht,ie),w(pt,ie),w(ft,at),ft.prototype.g=function(){return new XMLHttpRequest},ft.prototype.i=function(){return{}},ut=new ft;var vt=45e3,yt={},bt={};function xt(e,t,n){e.K=1,e.v=Gt(Bt(t)),e.s=n,e.U=!0,wt(e,null)}function wt(e,t){e.F=Date.now(),_t(e),e.A=Bt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),nn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new gt,e.g=rr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ge(b(e.Ia,e,e.g),e.O)),$e(e.V,e.g,"readystatechange",e.gb),t=e.H?L(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),et(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");o=2<=d.length&&"type"==d[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Ct(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function At(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=It(e,n),r==bt){4==t&&(e.o=4,nt(14),i=!1),Ke(e.j,e.m,null,"[Incomplete Response]");break}if(r==yt){e.o=4,nt(15),Ke(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ke(e.j,e.m,r,null),Tt(e,r)}Ct(e)&&r!=bt&&r!=yt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,nt(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kn(t),t.L=!0,nt(11))):(Ke(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),Et(e))}function It(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?bt:(n=Number(t.substring(n,r)),isNaN(n)?yt:(r+=1)+n>t.length?bt:(t=t.substr(r,n),e.C=r+n,t))}function _t(e){e.Y=Date.now()+e.P,St(e,e.P)}function St(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=it(b(e.eb,e),t)}function Mt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Et(e){0==e.l.G||e.I||Jn(e.l,e)}function Dt(e){Mt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,ze(e.W),qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Tt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||ln(n.i,e)))if(n.I=e.N,!e.J&&ln(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Yn(n),zn(n)}Zn(n),nt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=it(b(n.ab,n),6e3));if(1>=cn(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else er(n,11)}else if((e.J||n.g==e)&&Yn(n),!E(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(N(e,"spdy")||N(e,"quic")||N(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(un(s,s.h),s.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Ut(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=nr(r,r.H?r.la:null,r.W),o.J){dn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Mt(a),_t(a)),r.g=o}else qn(r);0<n.l.length&&Gn(n)}else"stop"!=l[0]&&"close"!=l[0]||er(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?er(n,7):jn(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}et(4)}catch(e){}}function Nt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"==typeof e)_(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(p(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Ot(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Ot)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Pt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Rt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)Rt(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Rt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(r=mt.prototype).setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Rn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const u=Rn(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||W||this.g&&(this.h.h||this.g.ga()||kn(this.g)))){this.I||4!=u||7==t||et(8==t||0>=h?3:2),Mt(this);var n=this.g.ba();this.N=n;t:if(Ct(this)){var r=kn(this.g);e="";var i=r.length,s=4==Rn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Dt(this),Et(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,nt(12),Dt(this),Et(this);break e}Ke(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Tt(this,n)}this.U?(At(this,u,o),W&&this.i&&3==u&&($e(this.V,this.W,"tick",this.fb),this.W.start())):(Ke(this.j,this.m,o,null),Tt(this,o)),4==u&&Dt(this),this.i&&!this.I&&(4==u?Jn(this.l,this):(this.i=!1,_t(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Dt(this),Et(this)}}}catch(e){}},r.fb=function(){if(this.g){var e=Rn(this.g),t=this.g.ga();this.C<t.length&&(Mt(this),At(this,e,t),this.i&&4!=e&&_t(this))}},r.cancel=function(){this.I=!0,Dt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(et(3),nt(17)),Dt(this),this.o=2,Et(this)):St(this,this.Y-e)},(r=Ot.prototype).R=function(){Pt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Pt(this),this.g.concat()},r.get=function(e,t){return Rt(this.h,e)?this.h[e]:t},r.set=function(e,t){Rt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var kt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Lt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Lt){this.g=void 0!==t?t:e.g,Ft(this,e.j),this.s=e.s,jt(this,e.i),zt(this,e.m),this.l=e.l,t=e.h;var n=new Jt;n.i=t.i,t.g&&(n.g=new Ot(t.g),n.h=t.h),Ht(this,n),this.o=e.o}else e&&(n=String(e).match(kt))?(this.g=!!t,Ft(this,n[1]||"",!0),this.s=Vt(n[2]||""),jt(this,n[3]||"",!0),zt(this,n[4]),this.l=Vt(n[5]||"",!0),Ht(this,n[6]||"",!0),this.o=Vt(n[7]||"")):(this.g=!!t,this.h=new Jt(null,this.g))}function Bt(e){return new Lt(e)}function Ft(e,t,n){e.j=n?Vt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function jt(e,t,n){e.i=n?Vt(t,!0):t}function zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ht(e,t,n){t instanceof Jt?(e.h=t,function(e,t){t&&!e.j&&(Qt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(en(this,t),nn(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Wt(t,Xt)),e.h=new Jt(t,e.g))}function Ut(e,t,n){e.h.set(t,n)}function Gt(e){return Ut(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Vt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Wt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,$t),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function $t(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Lt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Wt(t,qt,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Wt(t,qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Wt(n,"/"==n.charAt(0)?Kt:Zt,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Wt(n,Yt)),e.join("")};var qt=/[#\/\?@]/g,Zt=/[#\?:]/g,Kt=/[#\?]/g,Xt=/[#\?@]/g,Yt=/#/g;function Jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Qt(e){e.g||(e.g=new Ot,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function en(e,t){Qt(e),t=rn(e,t),Rt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Rt((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Pt(e)))}function tn(e,t){return Qt(e),t=rn(e,t),Rt(e.g.h,t)}function nn(e,t,n){en(e,t),0<n.length&&(e.i=null,e.g.set(rn(e,t),M(n)),e.h+=n.length)}function rn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(r=Jt.prototype).add=function(e,t){Qt(this),this.i=null,e=rn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Qt(this),this.g.forEach((function(n,r){_(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){Qt(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){Qt(this);var t=[];if("string"==typeof e)tn(this,e)&&(t=S(t,this.g.get(rn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=S(t,e[n])}return t},r.set=function(e,t){return Qt(this),this.i=null,tn(this,e=rn(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};function sn(e){this.l=e||on,d.PerformanceNavigationTiming?e=0<(e=d.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var on=10;function an(e){return!!e.h||!!e.g&&e.g.size>=e.j}function cn(e){return e.h?1:e.g?e.g.size:0}function ln(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function un(e,t){e.g?e.g.add(t):e.h=t}function dn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function hn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return M(e.i)}function pn(){}function fn(){this.g=new pn}function mn(e,t,n){const r=n||"";try{Nt(e,(function(e,n){let i=e;f(e)&&(i=De(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function gn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function vn(e){this.l=e.$b||null,this.j=e.ib||!1}function yn(e,t){Se.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=bn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}sn.prototype.cancel=function(){if(this.i=hn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},pn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},pn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},w(vn,at),vn.prototype.g=function(){return new yn(this.l,this.j)},vn.prototype.i=function(e){return function(){return e}}({}),w(yn,Se);var bn=0;function xn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function wn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cn(e)}function Cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(r=yn.prototype).open=function(e,t){if(this.readyState!=bn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,wn(this)),this.readyState=bn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?wn(this):Cn(this),3==this.readyState&&xn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,wn(this))},r.Ta=function(e){this.g&&(this.response=e,wn(this))},r.ha=function(){this.g&&wn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(yn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var An=d.JSON.parse;function In(e){Se.call(this),this.headers=new Ot,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_n,this.K=this.L=!1}w(In,Se);var _n="",Sn=/^https?$/i,Mn=["POST","PUT"];function En(e){return"content-type"==e.toLowerCase()}function Dn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Tn(e),On(e)}function Tn(e){e.D||(e.D=!0,Me(e,"complete"),Me(e,"error"))}function Nn(e){if(e.h&&void 0!==u&&(!e.C[1]||4!=Rn(e)||2!=e.ba()))if(e.v&&4==Rn(e))He(e.Fa,0,e);else if(Me(e,"readystatechange"),4==Rn(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(kt)[1]||null;if(!i&&d.self&&d.self.location){var s=d.self.location.protocol;i=s.substr(0,s.length-1)}r=!Sn.test(i?i.toLowerCase():"")}n=r}if(n)Me(e,"complete"),Me(e,"success");else{e.m=6;try{var o=2<Rn(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Tn(e)}}finally{On(e)}}}function On(e,t){if(e.g){Pn(e);const n=e.g,r=e.C[0]?h:null;e.g=null,e.C=null,t||Me(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Pn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Rn(e){return e.g?e.g.readyState:0}function kn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case _n:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ln(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return k(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ut(e,t,n))}function Bn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Fn(e){this.za=0,this.l=[],this.h=new Ze,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Bn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Bn("baseRetryDelayMs",5e3,e),this.$a=Bn("retryDelaySeedMs",1e4,e),this.Ya=Bn("forwardChannelMaxRetries",2,e),this.ra=Bn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new sn(e&&e.concurrentRequestLimit),this.Ca=new fn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function jn(e){if(Hn(e),3==e.G){var t=e.V++,n=Bt(e.F);Ut(n,"SID",e.J),Ut(n,"RID",t),Ut(n,"TYPE","terminate"),Wn(e,n),(t=new mt(e,e.h,t,void 0)).K=2,t.v=Gt(Bt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=rr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),_t(t)}tr(e)}function zn(e){e.g&&(Kn(e),e.g.cancel(),e.g=null)}function Hn(e){zn(e),e.u&&(d.clearTimeout(e.u),e.u=null),Yn(e),e.i.cancel(),e.m&&("number"==typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Un(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&Gn(e)}function Gn(e){an(e.i)||e.m||(e.m=!0,ke(e.Ha,e),e.C=0)}function Vn(e,t){var n;n=t?t.m:e.V++;const r=Bt(e.F);Ut(r,"SID",e.J),Ut(r,"RID",n),Ut(r,"AID",e.U),Wn(e,r),e.o&&e.s&&Ln(r,e.o,e.s),n=new mt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=$n(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),un(e.i,n),xt(n,r,t)}function Wn(e,t){e.j&&Nt({},(function(e,n){Ut(t,n,e)}))}function $n(e,t,n){n=Math.min(e.l.length,n);var r=e.j?b(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{mn(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function qn(e){e.g||e.u||(e.Y=1,ke(e.Ga,e),e.A=0)}function Zn(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=it(b(e.Ga,e),Qn(e,e.A)),e.A++,!0)}function Kn(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function Xn(e){e.g=new mt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Bt(e.oa);Ut(t,"RID","rpc"),Ut(t,"SID",e.J),Ut(t,"CI",e.N?"0":"1"),Ut(t,"AID",e.U),Wn(e,t),Ut(t,"TYPE","xmlhttp"),e.o&&e.s&&Ln(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Gt(Bt(t)),n.s=null,n.U=!0,wt(n,e)}function Yn(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function Jn(e,t){var n=null;if(e.g==t){Yn(e),Kn(e),e.g=null;var r=2}else{if(!ln(e.i,t))return;n=t.D,dn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Me(r=Je(),new rt(r,n,t,i)),Gn(e)}else qn(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(cn(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=it(b(e.Ha,e,t),Qn(e,e.C)),e.C++,0)))}(e,t)||2==r&&Zn(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:er(e,5);break;case 4:er(e,10);break;case 3:er(e,6);break;default:er(e,2)}}function Qn(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function er(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=b(e.jb,e);n||(n=new Lt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Ft(n,"https"),Gt(n)),function(e,t){const n=new Ze;if(d.Image){const r=new Image;r.onload=x(gn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=x(gn,n,r,"TestLoadImage: error",!1,t),r.onabort=x(gn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=x(gn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else nt(2);e.G=0,e.j&&e.j.va(t),tr(e),Hn(e)}function tr(e){e.G=0,e.I=-1,e.j&&(0==hn(e.i).length&&0==e.l.length||(e.i.i.length=0,M(e.l),e.l.length=0),e.j.ua())}function nr(e,t,n){let r=function(e){return e instanceof Lt?Bt(e):new Lt(e,void 0)}(n);if(""!=r.i)t&&jt(r,t+"."+r.i),zt(r,r.m);else{const e=d.location;r=function(e,t,n,r){var i=new Lt(null,void 0);return e&&Ft(i,e),t&&jt(i,t),n&&zt(i,n),r&&(i.l=r),i}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&k(e.aa,(function(e,t){Ut(r,t,e)})),t=e.D,n=e.sa,t&&n&&Ut(r,t,n),Ut(r,"VER",e.ma),Wn(e,r),r}function rr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new In(new vn({ib:!0})):new In(e.qa)).L=e.H,t}function ir(){}function sr(){if(G&&!(10<=Number(ne)))throw Error("Environmental error: no available transport.")}function or(e,t){Se.call(this),this.g=new Fn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!E(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!E(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new lr(this)}function ar(e){ht.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function cr(){pt.call(this),this.status=1}function lr(e){this.g=e}(r=In.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ut.g(),this.C=this.u?ct(this.u):ct(ut),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Dn(this,e)}e=n||"";const i=new Ot(this.headers);r&&Nt(r,(function(e,t){i.set(t,e)})),r=function(e){e:{var t=En;const n=e.length,r="string"==typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=d.FormData&&e instanceof d.FormData,!(0<=I(Mn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pn(this),0<this.B&&((this.K=function(e){return G&&ee()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=He(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Dn(this,e)}},r.pa=function(){void 0!==u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Me(this,"complete"),Me(this,"abort"),On(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),On(this,!0)),In.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Nn(this):this.cb())},r.cb=function(){Nn(this)},r.ba=function(){try{return 2<Rn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),An(t)}},r.Da=function(){return this.m},r.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=Fn.prototype).ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new mt(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=L(s),F(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=$n(this,i,t),Ut(n=Bt(this.F),"RID",e),Ut(n,"CVER",22),this.D&&Ut(n,"X-HTTP-Session-Id",this.D),Wn(this,n),this.o&&s&&Ln(n,this.o,s),un(this.i,i),this.Ra&&Ut(n,"TYPE","init"),this.ja?(Ut(n,"$req",t),Ut(n,"SID","null"),i.$=!0,xt(i,n,null)):xt(i,n,t),this.G=2}}else 3==this.G&&(e?Vn(this,e):0==this.l.length||an(this.i)||Vn(this))},r.Ga=function(){if(this.u=null,Xn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=it(b(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,nt(10),zn(this),Xn(this))},r.ab=function(){null!=this.v&&(this.v=null,zn(this),Zn(this),nt(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),nt(2)):(this.h.info("Failed to ping google.com"),nt(1))},(r=ir.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},sr.prototype.g=function(e,t){return new or(e,t)},w(or,Se),or.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),ke(b(e.hb,e,t))),nt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=nr(e,null,e.W),Gn(e)},or.prototype.close=function(){jn(this.g)},or.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Un(this.g,t)}else this.v?((t={}).__data__=De(e),Un(this.g,t)):Un(this.g,e)},or.prototype.M=function(){this.g.j=null,delete this.j,jn(this.g),delete this.g,or.Z.M.call(this)},w(ar,ht),w(cr,pt),w(lr,ir),lr.prototype.xa=function(){Me(this.g,"a")},lr.prototype.wa=function(e){Me(this.g,new ar(e))},lr.prototype.va=function(e){Me(this.g,new cr(e))},lr.prototype.ua=function(){Me(this.g,"b")},sr.prototype.createWebChannel=sr.prototype.g,or.prototype.send=or.prototype.u,or.prototype.open=or.prototype.m,or.prototype.close=or.prototype.close,st.NO_ERROR=0,st.TIMEOUT=8,st.HTTP_ERROR=6,ot.COMPLETE="complete",lt.EventType=dt,dt.OPEN="a",dt.CLOSE="b",dt.ERROR="c",dt.MESSAGE="d",Se.prototype.listen=Se.prototype.N,In.prototype.listenOnce=In.prototype.O,In.prototype.getLastError=In.prototype.La,In.prototype.getLastErrorCode=In.prototype.Da,In.prototype.getStatus=In.prototype.ba,In.prototype.getResponseJson=In.prototype.Qa,In.prototype.getResponseText=In.prototype.ga,In.prototype.send=In.prototype.ea;var ur=l.createWebChannelTransport=function(){return new sr},dr=l.getStatEventTarget=function(){return Je()},hr=l.ErrorCode=st,pr=l.EventType=ot,fr=l.Event=Xe,mr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},gr=l.FetchXmlHttpFactory=vn,vr=l.WebChannel=lt,yr=l.XhrIo=In;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}br.UNAUTHENTICATED=new br(null),br.GOOGLE_CREDENTIALS=new br("google-credentials-uid"),br.FIRST_PARTY=new br("first-party-uid"),br.MOCK_USER=new br("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let xr="9.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new o.Yd("@firebase/firestore");function Cr(){return wr.logLevel}function Ar(e){wr.setLogLevel(e)}function Ir(e,...t){if(wr.logLevel<=o.in.DEBUG){const n=t.map(Mr);wr.debug(`Firestore (${xr}): ${e}`,...n)}}function _r(e,...t){if(wr.logLevel<=o.in.ERROR){const n=t.map(Mr);wr.error(`Firestore (${xr}): ${e}`,...n)}}function Sr(e,...t){if(wr.logLevel<=o.in.WARN){const n=t.map(Mr);wr.warn(`Firestore (${xr}): ${e}`,...n)}}function Mr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e="Unexpected state"){const t=`FIRESTORE (${xr}) INTERNAL ASSERTION FAILED: `+e;throw _r(t),new Error(t)}function Dr(e,t){e||Er()}function Tr(e,t){e||Er()}function Nr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pr extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class Lr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(br.UNAUTHENTICATED)))}shutdown(){}}class Br{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Fr{constructor(e){this.t=e,this.currentUser=br.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rr,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Ir("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ir("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ir("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Dr("string"==typeof t.accessToken),new kr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Dr(null===e||"string"==typeof e),new br(e)}}class jr{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=br.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class zr{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new jr(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(br.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hr.T=-1;class Gr{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Ur(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Vr(e,t){return e<t?-1:e>t?1:0}function Wr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function $r(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Pr(Or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Pr(Or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Pr(Or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Pr(Or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qr.fromMillis(Date.now())}static fromDate(e){return qr.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new qr(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Vr(this.nanoseconds,e.nanoseconds):Vr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Zr(e)}static min(){return new Zr(new qr(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Xr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Yr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,n){void 0===t?t=0:t>e.length&&Er(),void 0===n?n=e.length-t:n>e.length-t&&Er(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Jr.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jr?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Qr extends Jr{construct(e,t,n){return new Qr(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Pr(Or.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Qr(t)}static emptyPath(){return new Qr([])}}const ei=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ti extends Jr{construct(e,t,n){return new ti(e,t,n)}static isValidIdentifier(e){return ei.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ti.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ti(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Pr(Or.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Pr(Or.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Pr(Or.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Pr(Or.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ti(t)}static emptyPath(){return new ti([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.fields=e,e.sort(ti.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ii(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ii(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Vr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ii.EMPTY_BYTE_STRING=new ii("");const si=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oi(e){if(Dr(!!e),"string"==typeof e){let t=0;const n=si.exec(e);if(Dr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ai(e.seconds),nanos:ai(e.nanos)}}function ai(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ci(e){return"string"==typeof e?ii.fromBase64String(e):ii.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ui(e){const t=e.mapValue.fields.__previous_value__;return li(t)?ui(t):t}function di(e){const t=oi(e.mapValue.fields.__local_write_time__.timestampValue);return new qr(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(e){return null==e}function pi(e){return 0===e&&1/e==-1/0}function fi(e){return"number"==typeof e&&Number.isInteger(e)&&!pi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.path=e}static fromPath(e){return new mi(Qr.fromString(e))}static fromName(e){return new mi(Qr.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Qr.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Qr.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new mi(new Qr(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?li(e)?4:10:Er()}function vi(e,t){const n=gi(e);if(n!==gi(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return di(e).isEqual(di(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=oi(e.timestampValue),r=oi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ci(e.bytesValue).isEqual(ci(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ai(e.geoPointValue.latitude)===ai(t.geoPointValue.latitude)&&ai(e.geoPointValue.longitude)===ai(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ai(e.integerValue)===ai(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ai(e.doubleValue),r=ai(t.doubleValue);return n===r?pi(n)===pi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Wr(e.arrayValue.values||[],t.arrayValue.values||[],vi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Kr(n)!==Kr(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!vi(n[e],r[e])))return!1;return!0}(e,t);default:return Er()}}function yi(e,t){return void 0!==(e.values||[]).find((e=>vi(e,t)))}function bi(e,t){const n=gi(e),r=gi(t);if(n!==r)return Vr(n,r);switch(n){case 0:return 0;case 1:return Vr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ai(e.integerValue||e.doubleValue),r=ai(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return xi(e.timestampValue,t.timestampValue);case 4:return xi(di(e),di(t));case 5:return Vr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ci(e),r=ci(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Vr(n[e],r[e]);if(0!==t)return t}return Vr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Vr(ai(e.latitude),ai(t.latitude));return 0!==n?n:Vr(ai(e.longitude),ai(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=bi(n[e],r[e]);if(t)return t}return Vr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Vr(r[e],s[e]);if(0!==t)return t;const o=bi(n[r[e]],i[s[e]]);if(0!==o)return o}return Vr(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Er()}}function xi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Vr(e,t);const n=oi(e),r=oi(t),i=Vr(n.seconds,r.seconds);return 0!==i?i:Vr(n.nanos,r.nanos)}function wi(e){return Ci(e)}function Ci(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=oi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ci(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,mi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ci(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Ci(e.fields[i])}`;return n+"}"}(e.mapValue):Er();var t,n}function Ai(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ii(e){return!!e&&"integerValue"in e}function _i(e){return!!e&&"arrayValue"in e}function Si(e){return!!e&&"nullValue"in e}function Mi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ei(e){return!!e&&"mapValue"in e}function Di(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Xr(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Di(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Di(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.value=e}static empty(){return new Ti({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ei(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Di(t)}setAll(e){let t=ti.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Di(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ei(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ei(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Xr(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Ti(Di(this.value))}}function Ni(e){const t=[];return Xr(e.fields,((e,n)=>{const r=new ti([e]);if(Ei(n)){const e=Ni(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ni(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Oi{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Oi(e,0,Zr.min(),Ti.empty(),0)}static newFoundDocument(e,t,n){return new Oi(e,1,t,n,0)}static newNoDocument(e,t){return new Oi(e,2,t,Ti.empty(),0)}static newUnknownDocument(e,t){return new Oi(e,3,t,Ti.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ti.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ti.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Oi&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Oi(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function Ri(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Pi(e,t,n,r,i,s,o)}function ki(e){const t=Nr(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+wi(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),hi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Zi(t.startAt)),t.endAt&&(e+="|ub:",e+=Zi(t.endAt)),t.A=e}return t.A}function Li(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Xi(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!vi(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ji(e.startAt,t.startAt)&&Ji(e.endAt,t.endAt)}function Bi(e){return mi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Fi extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new ji(e,t,n):"array-contains"===t?new Gi(e,n):"in"===t?new Vi(e,n):"not-in"===t?new Wi(e,n):"array-contains-any"===t?new $i(e,n):new Fi(e,t,n)}static R(e,t,n){return"in"===t?new zi(e,n):new Hi(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(bi(t,this.value)):null!==t&&gi(this.value)===gi(t)&&this.P(bi(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Er()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ji extends Fi{constructor(e,t,n){super(e,t,n),this.key=mi.fromName(n.referenceValue)}matches(e){const t=mi.comparator(e.key,this.key);return this.P(t)}}class zi extends Fi{constructor(e,t){super(e,"in",t),this.keys=Ui("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Hi extends Fi{constructor(e,t){super(e,"not-in",t),this.keys=Ui("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ui(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>mi.fromName(e.referenceValue)))}class Gi extends Fi{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _i(t)&&yi(t.arrayValue,this.value)}}class Vi extends Fi{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&yi(this.value.arrayValue,t)}}class Wi extends Fi{constructor(e,t){super(e,"not-in",t)}matches(e){if(yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!yi(this.value.arrayValue,t)}}class $i extends Fi{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_i(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>yi(this.value.arrayValue,e)))}}class qi{constructor(e,t){this.position=e,this.before=t}}function Zi(e){return`${e.before?"b":"a"}:${e.position.map((e=>wi(e))).join(",")}`}class Ki{constructor(e,t="asc"){this.field=e,this.dir=t}}function Xi(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Yi(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?mi.comparator(mi.fromName(o.referenceValue),n.key):bi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function Ji(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!vi(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function es(e,t,n,r,i,s,o,a){return new Qi(e,t,n,r,i,s,o,a)}function ts(e){return new Qi(e)}function ns(e){return!hi(e.limit)&&"F"===e.limitType}function rs(e){return!hi(e.limit)&&"L"===e.limitType}function is(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ss(e){for(const t of e.filters)if(t.v())return t.field;return null}function os(e){return null!==e.collectionGroup}function as(e){const t=Nr(e);if(null===t.V){t.V=[];const e=ss(t),n=is(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new Ki(e)),t.V.push(new Ki(ti.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new Ki(ti.keyField(),e))}}}return t.V}function cs(e){const t=Nr(e);if(!t.S)if("F"===t.limitType)t.S=Ri(t.path,t.collectionGroup,as(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of as(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Ki(n.field,t))}const n=t.endAt?new qi(t.endAt.position,!t.endAt.before):null,r=t.startAt?new qi(t.startAt.position,!t.startAt.before):null;t.S=Ri(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.S}function ls(e,t,n){return new Qi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function us(e,t){return Li(cs(e),cs(t))&&e.limitType===t.limitType}function ds(e){return`${ki(cs(e))}|lt:${e.limitType}`}function hs(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${wi(t.value)}`;var t})).join(", ")}]`),hi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+Zi(e.startAt)),e.endAt&&(t+=", endAt: "+Zi(e.endAt)),`Target(${t})`}(cs(e))}; limitType=${e.limitType})`}function ps(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):mi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!Yi(e.startAt,as(e),t))&&(!e.endAt||!Yi(e.endAt,as(e),t))}(e,t)}function fs(e){return(t,n)=>{let r=!1;for(const i of as(e)){const e=ms(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ms(e,t,n){const r=e.field.isKeyField()?mi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?bi(r,i):Er()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Er()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pi(t)?"-0":t}}function vs(e){return{integerValue:""+e}}function ys(e,t){return fi(t)?vs(t):gs(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this._=void 0}}function xs(e,t,n){return e instanceof As?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Is?_s(e,t):e instanceof Ss?Ms(e,t):function(e,t){const n=Cs(e,t),r=Ds(n)+Ds(e.C);return Ii(n)&&Ii(e.C)?vs(r):gs(e.N,r)}(e,t)}function ws(e,t,n){return e instanceof Is?_s(e,t):e instanceof Ss?Ms(e,t):n}function Cs(e,t){return e instanceof Es?Ii(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class As extends bs{}class Is extends bs{constructor(e){super(),this.elements=e}}function _s(e,t){const n=Ts(t);for(const t of e.elements)n.some((e=>vi(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Ss extends bs{constructor(e){super(),this.elements=e}}function Ms(e,t){let n=Ts(t);for(const t of e.elements)n=n.filter((e=>!vi(e,t)));return{arrayValue:{values:n}}}class Es extends bs{constructor(e,t){super(),this.N=e,this.C=t}}function Ds(e){return ai(e.integerValue||e.doubleValue)}function Ts(e){return _i(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.field=e,this.transform=t}}class Os{constructor(e,t){this.version=e,this.transformResults=t}}class Ps{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ps}static exists(e){return new Ps(void 0,e)}static updateTime(e){return new Ps(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rs(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ks{}function Ls(e,t,n){e instanceof Hs?function(e,t,n){const r=e.value.clone(),i=Vs(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Us?function(e,t,n){if(!Rs(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Vs(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Gs(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Bs(e,t,n){e instanceof Hs?function(e,t,n){if(!Rs(e.precondition,t))return;const r=e.value.clone(),i=Ws(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(zs(t),r).setHasLocalMutations()}(e,t,n):e instanceof Us?function(e,t,n){if(!Rs(e.precondition,t))return;const r=Ws(e.fieldTransforms,n,t),i=t.data;i.setAll(Gs(e)),i.setAll(r),t.convertToFoundDocument(zs(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Rs(e.precondition,t)&&t.convertToNoDocument(Zr.min())}(e,t)}function Fs(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Cs(r.transform,e||null);null!=i&&(null==n&&(n=Ti.empty()),n.set(r.field,i))}return n||null}function js(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Wr(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Is&&t instanceof Is||e instanceof Ss&&t instanceof Ss?Wr(e.elements,t.elements,vi):e instanceof Es&&t instanceof Es?vi(e.C,t.C):e instanceof As&&t instanceof As}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function zs(e){return e.isFoundDocument()?e.version:Zr.min()}class Hs extends ks{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Us extends ks{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Gs(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Vs(e,t,n){const r=new Map;Dr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,ws(o,a,n[i]))}return r}function Ws(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,xs(e,s,t))}return r}class $s extends ks{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class qs extends ks{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ks,Xs;function Ys(e){switch(e){default:return Er();case Or.CANCELLED:case Or.UNKNOWN:case Or.DEADLINE_EXCEEDED:case Or.RESOURCE_EXHAUSTED:case Or.INTERNAL:case Or.UNAVAILABLE:case Or.UNAUTHENTICATED:return!1;case Or.INVALID_ARGUMENT:case Or.NOT_FOUND:case Or.ALREADY_EXISTS:case Or.PERMISSION_DENIED:case Or.FAILED_PRECONDITION:case Or.ABORTED:case Or.OUT_OF_RANGE:case Or.UNIMPLEMENTED:case Or.DATA_LOSS:return!0}}function Js(e){if(void 0===e)return _r("GRPC error has no .code"),Or.UNKNOWN;switch(e){case Ks.OK:return Or.OK;case Ks.CANCELLED:return Or.CANCELLED;case Ks.UNKNOWN:return Or.UNKNOWN;case Ks.DEADLINE_EXCEEDED:return Or.DEADLINE_EXCEEDED;case Ks.RESOURCE_EXHAUSTED:return Or.RESOURCE_EXHAUSTED;case Ks.INTERNAL:return Or.INTERNAL;case Ks.UNAVAILABLE:return Or.UNAVAILABLE;case Ks.UNAUTHENTICATED:return Or.UNAUTHENTICATED;case Ks.INVALID_ARGUMENT:return Or.INVALID_ARGUMENT;case Ks.NOT_FOUND:return Or.NOT_FOUND;case Ks.ALREADY_EXISTS:return Or.ALREADY_EXISTS;case Ks.PERMISSION_DENIED:return Or.PERMISSION_DENIED;case Ks.FAILED_PRECONDITION:return Or.FAILED_PRECONDITION;case Ks.ABORTED:return Or.ABORTED;case Ks.OUT_OF_RANGE:return Or.OUT_OF_RANGE;case Ks.UNIMPLEMENTED:return Or.UNIMPLEMENTED;case Ks.DATA_LOSS:return Or.DATA_LOSS;default:return Er()}}(Xs=Ks||(Ks={}))[Xs.OK=0]="OK",Xs[Xs.CANCELLED=1]="CANCELLED",Xs[Xs.UNKNOWN=2]="UNKNOWN",Xs[Xs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xs[Xs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xs[Xs.NOT_FOUND=5]="NOT_FOUND",Xs[Xs.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xs[Xs.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xs[Xs.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xs[Xs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xs[Xs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xs[Xs.ABORTED=10]="ABORTED",Xs[Xs.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xs[Xs.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xs[Xs.INTERNAL=13]="INTERNAL",Xs[Xs.UNAVAILABLE=14]="UNAVAILABLE",Xs[Xs.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(e,t){this.comparator=e,this.root=t||to.EMPTY}insert(e,t){return new Qs(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,to.BLACK,null,null))}remove(e){return new Qs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,to.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eo(this.root,e,this.comparator,!0)}}class eo{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class to{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:to.RED,this.left=null!=r?r:to.EMPTY,this.right=null!=i?i:to.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new to(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return to.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return to.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,to.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,to.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Er();if(this.right.isRed())throw Er();const e=this.left.check();if(e!==this.right.check())throw Er();return e+(this.isRed()?0:1)}}to.EMPTY=null,to.RED=!0,to.BLACK=!1,to.EMPTY=new class{constructor(){this.size=0}get key(){throw Er()}get value(){throw Er()}get color(){throw Er()}get left(){throw Er()}get right(){throw Er()}copy(e,t,n,r,i){return this}insert(e,t,n){return new to(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(e){this.comparator=e,this.data=new Qs(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ro(this.data.getIterator())}getIteratorFrom(e){return new ro(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof no))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new no(this.comparator);return t.data=e,t}}class ro{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new Qs(mi.comparator);function so(){return io}const oo=new Qs(mi.comparator);function ao(){return oo}const co=new Qs(mi.comparator);function lo(){return co}const uo=new no(mi.comparator);function ho(...e){let t=uo;for(const n of e)t=t.add(n);return t}const po=new no(Vr);function fo(){return po}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,go.createSynthesizedTargetChangeForCurrentChange(e,t)),new mo(Zr.min(),n,fo(),so(),ho())}}class go{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new go(ii.EMPTY_BYTE_STRING,t,ho(),ho(),ho())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t,n,r){this.k=e,this.removedTargetIds=t,this.key=n,this.$=r}}class yo{constructor(e,t){this.targetId=e,this.O=t}}class bo{constructor(e,t,n=ii.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class xo{constructor(){this.F=0,this.M=Ao(),this.L=ii.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ho(),t=ho(),n=ho();return this.M.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Er()}})),new go(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=Ao()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class wo{constructor(e){this.tt=e,this.et=new Map,this.nt=so(),this.st=Co(),this.it=new no(Vr)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ct(e){this.forEachTarget(e,(t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:Er()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach(((e,n)=>{this.ht(n)&&t(n)}))}ft(e){const t=e.targetId,n=e.O.count,r=this.dt(t);if(r){const e=r.target;if(Bi(e))if(0===n){const n=new mi(e.path);this.at(t,n,Oi.newNoDocument(n,Zr.min()))}else Dr(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&Bi(i.target)){const t=new mi(i.target.path);null!==this.nt.get(t)||this.gt(r,t)||this.at(r,t,Oi.newNoDocument(t,e))}n.K&&(t.set(r,n.W()),n.G())}}));let n=ho();this.st.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.dt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new mo(e,t,this.it,this.nt,n);return this.nt=so(),this.st=Co(),this.it=new no(Vr),r}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}at(e,t,n){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,t)?r.H(t,1):r.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new xo,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new no(Vr),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||Ir("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new xo),this.tt.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function Co(){return new Qs(mi.comparator)}function Ao(){return new Qs(mi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io={asc:"ASCENDING",desc:"DESCENDING"},_o={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class So{constructor(e,t){this.databaseId=e,this.D=t}}function Mo(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eo(e,t){return e.D?t.toBase64():t.toUint8Array()}function Do(e,t){return Mo(e,t.toTimestamp())}function To(e){return Dr(!!e),Zr.fromTimestamp(function(e){const t=oi(e);return new qr(t.seconds,t.nanos)}(e))}function No(e,t){return function(e){return new Qr(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Oo(e){const t=Qr.fromString(e);return Dr(na(t)),t}function Po(e,t){return No(e.databaseId,t.path)}function Ro(e,t){const n=Oo(t);if(n.get(1)!==e.databaseId.projectId)throw new Pr(Or.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Pr(Or.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new mi(Fo(n))}function ko(e,t){return No(e.databaseId,t)}function Lo(e){const t=Oo(e);return 4===t.length?Qr.emptyPath():Fo(t)}function Bo(e){return new Qr(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Fo(e){return Dr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function jo(e,t,n){return{name:Po(e,t),fields:n.value.mapValue.fields}}function zo(e,t,n){const r=Ro(e,t.name),i=To(t.updateTime),s=new Ti({mapValue:{fields:t.fields}}),o=Oi.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Ho(e,t){let n;if(t instanceof Hs)n={update:jo(e,t.key,t.value)};else if(t instanceof $s)n={delete:Po(e,t.key)};else if(t instanceof Us)n={update:jo(e,t.key,t.data),updateMask:ta(t.fieldMask)};else{if(!(t instanceof qs))return Er();n={verify:Po(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof As)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Is)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ss)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Es)return{fieldPath:t.field.canonicalString(),increment:n.C};throw Er()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Do(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Er()}(e,t.precondition)),n}function Uo(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Ps.updateTime(To(e.updateTime)):void 0!==e.exists?Ps.exists(e.exists):Ps.none()}(t.currentDocument):Ps.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Dr("REQUEST_TIME"===t.setToServerValue),n=new As;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Is(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Ss(e)}else"increment"in t?n=new Es(e,t.increment):Er();const r=ti.fromServerFormat(t.fieldPath);return new Ns(r,n)}(e,t))):[];if(t.update){t.update.name;const i=Ro(e,t.update.name),s=new Ti({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new ni(t.map((e=>ti.fromServerFormat(e))))}(t.updateMask);return new Us(i,s,e,n,r)}return new Hs(i,s,n,r)}if(t.delete){const r=Ro(e,t.delete);return new $s(r,n)}if(t.verify){const r=Ro(e,t.verify);return new qs(r,n)}return Er()}function Go(e,t){return{documents:[ko(e,t.path)]}}function Vo(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ko(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ko(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Mi(e.value))return{unaryFilter:{field:Yo(e.field),op:"IS_NAN"}};if(Si(e.value))return{unaryFilter:{field:Yo(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Mi(e.value))return{unaryFilter:{field:Yo(e.field),op:"IS_NOT_NAN"}};if(Si(e.value))return{unaryFilter:{field:Yo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yo(e.field),op:Xo(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Yo(e.field),direction:Ko(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.D||hi(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=qo(t.startAt)),t.endAt&&(n.structuredQuery.endAt=qo(t.endAt)),n}function Wo(e){let t=Lo(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Dr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=$o(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Ki(Jo(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,hi(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Zo(n.startAt));let l=null;return n.endAt&&(l=Zo(n.endAt)),es(t,i,o,s,a,"F",c,l)}function $o(e){return e?void 0!==e.unaryFilter?[ea(e)]:void 0!==e.fieldFilter?[Qo(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>$o(e))).reduce(((e,t)=>e.concat(t))):Er():[]}function qo(e){return{before:e.before,values:e.position}}function Zo(e){const t=!!e.before,n=e.values||[];return new qi(n,t)}function Ko(e){return Io[e]}function Xo(e){return _o[e]}function Yo(e){return{fieldPath:e.canonicalString()}}function Jo(e){return ti.fromServerFormat(e.fieldPath)}function Qo(e){return Fi.create(Jo(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Er()}}(e.fieldFilter.op),e.fieldFilter.value)}function ea(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Jo(e.unaryFilter.field);return Fi.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Jo(e.unaryFilter.field);return Fi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jo(e.unaryFilter.field);return Fi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jo(e.unaryFilter.field);return Fi.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Er()}}function ta(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function na(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=sa(t)),t=ia(e.get(n),t);return sa(t)}function ia(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function sa(e){return e+""}function oa(e){const t=e.length;if(Dr(t>=2),2===t)return Dr(""===e.charAt(0)&&""===e.charAt(1)),Qr.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Er(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Er()}s=t+2}return new Qr(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class ca{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}ca.store="owner",ca.key="owner";class la{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}la.store="mutationQueues",la.keyPath="userId";class ua{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ua.store="mutations",ua.keyPath="batchId",ua.userMutationsIndex="userMutationsIndex",ua.userMutationsKeyPath=["userId","batchId"];class da{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,ra(t)]}static key(e,t,n){return[e,ra(t),n]}}da.store="documentMutations",da.PLACEHOLDER=new da;class ha{constructor(e,t){this.path=e,this.readTime=t}}class pa{constructor(e,t){this.path=e,this.version=t}}class fa{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}fa.store="remoteDocuments",fa.readTimeIndex="readTimeIndex",fa.readTimeIndexPath="readTime",fa.collectionReadTimeIndex="collectionReadTimeIndex",fa.collectionReadTimeIndexPath=["parentPath","readTime"];class ma{constructor(e){this.byteSize=e}}ma.store="remoteDocumentGlobal",ma.key="remoteDocumentGlobalKey";class ga{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}ga.store="targets",ga.keyPath="targetId",ga.queryTargetsIndexName="queryTargetsIndex",ga.queryTargetsKeyPath=["canonicalId","targetId"];class va{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}va.store="targetDocuments",va.keyPath=["targetId","path"],va.documentTargetsIndex="documentTargetsIndex",va.documentTargetsKeyPath=["path","targetId"];class ya{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}ya.key="targetGlobalKey",ya.store="targetGlobal";class ba{constructor(e,t){this.collectionId=e,this.parent=t}}ba.store="collectionParents",ba.keyPath=["collectionId","parent"];class xa{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}xa.store="clientMetadata",xa.keyPath="clientId";class wa{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}wa.store="bundles",wa.keyPath="bundleId";class Ca{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}Ca.store="namedQueries",Ca.keyPath="name";const Aa=[la.store,ua.store,da.store,fa.store,ga.store,ca.store,ya.store,va.store,xa.store,ma.store,ba.store,wa.store,Ca.store],Ia="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _a{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Er(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Sa(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Sa?t:Sa.resolve(t)}catch(e){return Sa.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Sa.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Sa.reject(t)}static resolve(e){return new Sa(((t,n)=>{t(e)}))}static reject(e){return new Sa(((t,n)=>{n(e)}))}static waitFor(e){return new Sa(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Sa.resolve(!1);for(const n of e)t=t.next((e=>e?Sa.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.Tt=new Rr,this.transaction.oncomplete=()=>{this.Tt.resolve()},this.transaction.onabort=()=>{t.error?this.Tt.reject(new Ta(e,t.error)):this.Tt.resolve()},this.transaction.onerror=t=>{const n=ka(t.target.error);this.Tt.reject(new Ta(e,n))}}static open(e,t,n,r){try{return new Ma(t,e.transaction(r,n))}catch(e){throw new Ta(t,e)}}get It(){return this.Tt.promise}abort(e){e&&this.Tt.reject(e),this.aborted||(Ir("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new Oa(t)}}class Ea{constructor(e,t,n){this.name=e,this.version=t,this.At=n,12.2===Ea.Rt((0,a.z$)())&&_r("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Ir("SimpleDb","Removing database:",e),Pa(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!(0,a.hl)())return!1;if(Ea.Pt())return!0;const e=(0,a.z$)(),t=Ea.Rt(e),n=0<t&&t<10,r=Ea.vt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static Pt(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.env)||void 0===e?void 0:e.Vt)}static St(e,t){return e.store(t)}static Rt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(e){return this.db||(Ir("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Ta(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Pr(Or.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Pr(Or.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ta(e,r))},r.onupgradeneeded=e=>{Ir("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.At.Ct(t,r.transaction,e.oldVersion,this.version).next((()=>{Ir("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Nt&&(this.db.onversionchange=e=>this.Nt(e)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Dt(e);const t=Ma.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).catch((e=>(t.abort(e),Sa.reject(e)))).toPromise();return s.catch((()=>{})),await t.It,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(Ir("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Da{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return Pa(this.kt.delete())}}class Ta extends Pr{constructor(e,t){super(Or.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Na(e){return"IndexedDbTransactionError"===e.name}class Oa{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Ir("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Ir("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Pa(n)}add(e){return Ir("SimpleDb","ADD",this.store.name,e,e),Pa(this.store.add(e))}get(e){return Pa(this.store.get(e)).next((t=>(void 0===t&&(t=null),Ir("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Ir("SimpleDb","DELETE",this.store.name,e),Pa(this.store.delete(e))}count(){return Ir("SimpleDb","COUNT",this.store.name),Pa(this.store.count())}Lt(e,t){const n=this.cursor(this.options(e,t)),r=[];return this.Bt(n,((e,t)=>{r.push(t)})).next((()=>r))}Ut(e,t){Ir("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.qt=!1;const r=this.cursor(n);return this.Bt(r,((e,t,n)=>n.delete()))}Kt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Bt(r,t)}jt(e){const t=this.cursor({});return new Sa(((n,r)=>{t.onerror=e=>{const t=ka(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Bt(e,t){const n=[];return new Sa(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Da(i),o=t(i.primaryKey,i.value,s);if(o instanceof Sa){const e=o.catch((e=>(s.done(),Sa.reject(e))));n.push(e)}s.isDone?r():null===s.Ft?i.continue():i.continue(s.Ft)}})).next((()=>Sa.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.qt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Pa(e){return new Sa(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=ka(e.target.error);n(t)}}))}let Ra=!1;function ka(e){const t=Ea.Rt((0,a.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Pr("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ra||(Ra=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends _a{constructor(e,t){super(),this.Qt=e,this.currentSequenceNumber=t}}function Ba(e,t){const n=Nr(e);return Ea.St(n.Qt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Ls(r,e,n[t])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Bs(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Bs(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(Zr.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ho())}isEqual(e){return this.batchId===e.batchId&&Wr(this.mutations,e.mutations,((e,t)=>js(e,t)))&&Wr(this.baseMutations,e.baseMutations,((e,t)=>js(e,t)))}}class ja{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Dr(e.mutations.length===n.length);let r=lo();const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new ja(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,n,r,i=Zr.min(),s=Zr.min(),o=ii.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new za(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new za(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new za(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.Wt=e}}function Ua(e,t){if(t.document)return zo(e.Wt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=mi.fromSegments(t.noDocument.path),n=qa(t.noDocument.readTime),r=Oi.newNoDocument(e,n);return t.hasCommittedMutations?r.setHasCommittedMutations():r}if(t.unknownDocument){const e=mi.fromSegments(t.unknownDocument.path),n=qa(t.unknownDocument.version);return Oi.newUnknownDocument(e,n)}return Er()}function Ga(e,t,n){const r=Va(n),i=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n=function(e,t){return{name:Po(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Mo(e,t.version.toTimestamp())}}(e.Wt,t),s=t.hasCommittedMutations;return new fa(null,null,n,s,r,i)}if(t.isNoDocument()){const e=t.key.path.toArray(),n=$a(t.version),s=t.hasCommittedMutations;return new fa(null,new ha(e,n),null,s,r,i)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=$a(t.version);return new fa(new pa(e,n),null,null,!0,r,i)}return Er()}function Va(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Wa(e){const t=new qr(e[0],e[1]);return Zr.fromTimestamp(t)}function $a(e){const t=e.toTimestamp();return new aa(t.seconds,t.nanoseconds)}function qa(e){const t=new qr(e.seconds,e.nanoseconds);return Zr.fromTimestamp(t)}function Za(e,t){const n=(t.baseMutations||[]).map((t=>Uo(e.Wt,t)));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map((t=>Uo(e.Wt,t))),i=qr.fromMillis(t.localWriteTimeMs);return new Fa(t.batchId,i,n,r)}function Ka(e){const t=qa(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?qa(e.lastLimboFreeSnapshotVersion):Zr.min();let r;var i;return void 0!==e.query.documents?(Dr(1===(i=e.query).documents.length),r=cs(ts(Lo(i.documents[0])))):r=function(e){return cs(Wo(e))}(e.query),new za(r,e.targetId,0,e.lastListenSequenceNumber,t,n,ii.fromBase64String(e.resumeToken))}function Xa(e,t){const n=$a(t.snapshotVersion),r=$a(t.lastLimboFreeSnapshotVersion);let i;i=Bi(t.target)?Go(e.Wt,t.target):Vo(e.Wt,t.target);const s=t.resumeToken.toBase64();return new ga(t.targetId,ki(t.target),n,s,t.sequenceNumber,r,i)}function Ya(e){const t=Wo({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ls(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{getBundleMetadata(e,t){return Qa(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:qa(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Qa(e).put({bundleId:(n=t).id,createTime:$a(To(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return ec(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Ya(t.bundledQuery),readTime:qa(t.readTime)};var t}))}saveNamedQuery(e,t){return ec(e).put(function(e){return{name:e.name,readTime:$a(To(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Qa(e){return Ba(e,wa.store)}function ec(e){return Ba(e,Ca.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.Gt=new nc}addToCollectionParentIndex(e,t){return this.Gt.add(t),Sa.resolve()}getCollectionParents(e,t){return Sa.resolve(this.Gt.getEntries(t))}}class nc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new no(Qr.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new no(Qr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.zt=new nc}addToCollectionParentIndex(e,t){if(!this.zt.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.zt.add(t)}));const i={collectionId:n,parent:ra(r)};return ic(e).put(i)}return Sa.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[$r(t),""],!1,!0);return ic(e).Lt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(oa(r.parent))}return n}))}}function ic(e){return Ba(e,ba.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class oc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new oc(e,oc.DEFAULT_COLLECTION_PERCENTILE,oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e,t,n){const r=e.store(ua.store),i=e.store(da.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Kt({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Dr(1===a)})));const l=[];for(const e of n.mutations){const r=da.key(t,e.key.path,n.batchId);s.push(i.delete(r)),l.push(e.key)}return Sa.waitFor(s).next((()=>l))}function cc(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Er();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oc.DEFAULT_COLLECTION_PERCENTILE=10,oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oc.DEFAULT=new oc(41943040,oc.DEFAULT_COLLECTION_PERCENTILE,oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oc.DISABLED=new oc(-1,0,0);class lc{constructor(e,t,n,r){this.userId=e,this.N=t,this.Ht=n,this.referenceDelegate=r,this.Jt={}}static Yt(e,t,n,r){Dr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new lc(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return dc(e).Kt({index:ua.userMutationsIndex,range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=hc(e),s=dc(e);return s.add({}).next((o=>{Dr("number"==typeof o);const a=new Fa(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Ho(e.Wt,t))),i=n.mutations.map((t=>Ho(e.Wt,t)));return new ua(t,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.N,this.userId,a),l=[];let u=new no(((e,t)=>Vr(e.canonicalString(),t.canonicalString())));for(const e of r){const t=da.key(this.userId,e.key.path,o);u=u.add(e.key.path.popLast()),l.push(s.put(c)),l.push(i.put(t,da.PLACEHOLDER))}return u.forEach((t=>{l.push(this.Ht.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Jt[o]=a.keys()})),Sa.waitFor(l).next((()=>a))}))}lookupMutationBatch(e,t){return dc(e).get(t).next((e=>e?(Dr(e.userId===this.userId),Za(this.N,e)):null))}Xt(e,t){return this.Jt[t]?Sa.resolve(this.Jt[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Jt[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return dc(e).Kt({index:ua.userMutationsIndex,range:r},((e,t,r)=>{t.userId===this.userId&&(Dr(t.batchId>=n),i=Za(this.N,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return dc(e).Kt({index:ua.userMutationsIndex,range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return dc(e).Lt(ua.userMutationsIndex,t).next((e=>e.map((e=>Za(this.N,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=da.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return hc(e).Kt({range:r},((n,r,s)=>{const[o,a,c]=n,l=oa(a);if(o===this.userId&&t.path.isEqual(l))return dc(e).get(c).next((e=>{if(!e)throw Er();Dr(e.userId===this.userId),i.push(Za(this.N,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new no(Vr);const r=[];return t.forEach((t=>{const i=da.prefixForPath(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=hc(e).Kt({range:s},((e,r,i)=>{const[s,o,a]=e,c=oa(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Sa.waitFor(r).next((()=>this.Zt(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=da.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new no(Vr);return hc(e).Kt({range:s},((e,t,i)=>{const[s,a,c]=e,l=oa(a);s===this.userId&&n.isPrefixOf(l)?l.length===r&&(o=o.add(c)):i.done()})).next((()=>this.Zt(e,o)))}Zt(e,t){const n=[],r=[];return t.forEach((t=>{r.push(dc(e).get(t).next((e=>{if(null===e)throw Er();Dr(e.userId===this.userId),n.push(Za(this.N,e))})))})),Sa.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return ac(e.Qt,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.te(t.batchId)})),Sa.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Sa.resolve();const n=IDBKeyRange.lowerBound(da.prefixForUser(this.userId)),r=[];return hc(e).Kt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=oa(e[1]);r.push(t)}else n.done()})).next((()=>{Dr(0===r.length)}))}))}containsKey(e,t){return uc(e,this.userId,t)}ee(e){return pc(e).get(this.userId).next((e=>e||new la(this.userId,-1,"")))}}function uc(e,t,n){const r=da.prefixForPath(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return hc(e).Kt({range:s,qt:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function dc(e){return Ba(e,ua.store)}function hc(e){return Ba(e,da.store)}function pc(e){return Ba(e,la.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new fc(0)}static ie(){return new fc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.referenceDelegate=e,this.N=t}allocateTargetId(e){return this.re(e).next((t=>{const n=new fc(t.highestTargetId);return t.highestTargetId=n.next(),this.oe(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.re(e).next((e=>Zr.fromTimestamp(new qr(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.re(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.re(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.oe(e,r))))}addTargetData(e,t){return this.ae(e,t).next((()=>this.re(e).next((n=>(n.targetCount+=1,this.ce(t,n),this.oe(e,n))))))}updateTargetData(e,t){return this.ae(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>gc(e).delete(t.targetId))).next((()=>this.re(e))).next((t=>(Dr(t.targetCount>0),t.targetCount-=1,this.oe(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return gc(e).Kt(((s,o)=>{const a=Ka(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Sa.waitFor(i))).next((()=>r))}forEachTarget(e,t){return gc(e).Kt(((e,n)=>{const r=Ka(n);t(r)}))}re(e){return vc(e).get(ya.key).next((e=>(Dr(null!==e),e)))}oe(e,t){return vc(e).put(ya.key,t)}ae(e,t){return gc(e).put(Xa(this.N,t))}ce(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.re(e).next((e=>e.targetCount))}getTargetData(e,t){const n=ki(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return gc(e).Kt({range:r,index:ga.queryTargetsIndexName},((e,n,r)=>{const s=Ka(n);Li(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=yc(e);return t.forEach((t=>{const s=ra(t.path);r.push(i.put(new va(n,s))),r.push(this.referenceDelegate.addReference(e,n,t))})),Sa.waitFor(r)}removeMatchingKeys(e,t,n){const r=yc(e);return Sa.forEach(t,(t=>{const i=ra(t.path);return Sa.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=yc(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=yc(e);let i=ho();return r.Kt({range:n,qt:!0},((e,t,n)=>{const r=oa(e[1]),s=new mi(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=ra(t.path),r=IDBKeyRange.bound([n],[$r(n)],!1,!0);let i=0;return yc(e).Kt({index:va.documentTargetsIndex,qt:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}Et(e,t){return gc(e).get(t).next((e=>e?Ka(e):null))}}function gc(e){return Ba(e,ga.store)}function vc(e){return Ba(e,ya.store)}function yc(e){return Ba(e,va.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(e){if(e.code!==Or.FAILED_PRECONDITION||e.message!==Ia)throw e;Ir("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc([e,t],[n,r]){const i=Vr(e,n);return 0===i?Vr(t,r):i}class wc{constructor(e){this.ue=e,this.buffer=new no(xc),this.he=0}le(){return++this.he}fe(e){const t=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();xc(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Cc{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.de=!1,this.we=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(e){const t=this.de?3e5:6e4;Ir("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Na(e)?Ir("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await bc(e)}await this._e(e)}))}}class Ac{constructor(e,t){this.me=e,this.params=t}calculateTargetCount(e,t){return this.me.ge(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Sa.resolve(Hr.T);const n=new wc(t);return this.me.forEachTarget(e,(e=>n.fe(e.sequenceNumber))).next((()=>this.me.ye(e,(e=>n.fe(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.me.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.me.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Ir("LruGarbageCollector","Garbage collection skipped; disabled"),Sa.resolve(sc)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Ir("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sc):this.pe(e,t)))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,t){let n,r,i,s,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Ir("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(l=Date.now(),Cr()<=o.in.DEBUG&&Ir("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(a-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(l-c)+"ms\n"+`Total Duration: ${l-u}ms`),Sa.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Ac(e,t)}(this,t)}ge(e){const t=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Ee(e){let t=0;return this.ye(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ye(e,t){return this.Te(e,((e,n)=>t(n)))}addReference(e,t,n){return _c(e,n)}removeReference(e,t,n){return _c(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return _c(e,t)}Ie(e,t){return function(e,t){let n=!1;return pc(e).jt((r=>uc(e,r,t).next((e=>(e&&(n=!0),Sa.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Te(e,((s,o)=>{if(o<=t){const t=this.Ie(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s),yc(e).delete([0,ra(s.path)]))))}));r.push(t)}})).next((()=>Sa.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return _c(e,t)}Te(e,t){const n=yc(e);let r,i=Hr.T;return n.Kt({index:va.documentTargetsIndex},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==Hr.T&&t(new mi(oa(r)),i),i=o,r=s):i=Hr.T})).next((()=>{i!==Hr.T&&t(new mi(oa(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function _c(e,t){return yc(e).put(function(e,t){return new va(0,ra(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){Xr(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Yr(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.changes=new Sc((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Zr.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Oi.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Sa.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.N=e,this.Ht=t}addEntry(e,t,n){return Nc(e).put(Oc(t),n)}removeEntry(e,t){const n=Nc(e),r=Oc(t);return n.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Ae(e,n))))}getEntry(e,t){return Nc(e).get(Oc(t)).next((e=>this.Re(t,e)))}be(e,t){return Nc(e).get(Oc(t)).next((e=>({document:this.Re(t,e),size:cc(e)})))}getEntries(e,t){let n=so();return this.Pe(e,t,((e,t)=>{const r=this.Re(e,t);n=n.insert(e,r)})).next((()=>n))}ve(e,t){let n=so(),r=new Qs(mi.comparator);return this.Pe(e,t,((e,t)=>{const i=this.Re(e,t);n=n.insert(e,i),r=r.insert(e,cc(t))})).next((()=>({documents:n,Ve:r})))}Pe(e,t,n){if(t.isEmpty())return Sa.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let s=i.getNext();return Nc(e).Kt({range:r},((e,t,r)=>{const o=mi.fromSegments(e);for(;s&&mi.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,t),s=i.hasNext()?i.getNext():null),s?r.Mt(s.path.toArray()):r.done()})).next((()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null}))}getDocumentsMatchingQuery(e,t,n){let r=so();const i=t.path.length+1,s={};if(n.isEqual(Zr.min())){const e=t.path.toArray();s.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),r=Va(n);s.range=IDBKeyRange.lowerBound([e,r],!0),s.index=fa.collectionReadTimeIndex}return Nc(e).Kt(s,((e,n,s)=>{if(e.length!==i)return;const o=Ua(this.N,n);t.path.isPrefixOf(o.key.path)?ps(t,o)&&(r=r.insert(o.key,o)):s.done()})).next((()=>r))}newChangeBuffer(e){return new Dc(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Tc(e).get(ma.key).next((e=>(Dr(!!e),e)))}Ae(e,t){return Tc(e).put(ma.key,t)}Re(e,t){if(t){const e=Ua(this.N,t);if(!e.isNoDocument()||!e.version.isEqual(Zr.min()))return e}return Oi.newInvalidDocument(e)}}class Dc extends Mc{constructor(e,t){super(),this.Se=e,this.trackRemovals=t,this.De=new Sc((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new no(((e,t)=>Vr(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.De.get(i);if(s.document.isValidDocument()){const a=Ga(this.Se.N,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=cc(a);n+=c-o,t.push(this.Se.addEntry(e,i,a))}else if(n-=o,this.trackRemovals){const n=Ga(this.Se.N,Oi.newNoDocument(i,Zr.min()),this.getReadTime(i));t.push(this.Se.addEntry(e,i,n))}else t.push(this.Se.removeEntry(e,i))})),r.forEach((n=>{t.push(this.Se.Ht.addToCollectionParentIndex(e,n))})),t.push(this.Se.updateMetadata(e,n)),Sa.waitFor(t)}getFromCache(e,t){return this.Se.be(e,t).next((e=>(this.De.set(t,e.size),e.document)))}getAllFromCache(e,t){return this.Se.ve(e,t).next((({documents:e,Ve:t})=>(t.forEach(((e,t)=>{this.De.set(e,t)})),e)))}}function Tc(e){return Ba(e,ma.store)}function Nc(e){return Ba(e,fa.store)}function Oc(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.N=e}Ct(e,t,n,r){Dr(n<r&&n>=0&&r<=11);const i=new Ma("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore(ca.store)}(e),function(e){e.createObjectStore(la.store,{keyPath:la.keyPath}),e.createObjectStore(ua.store,{keyPath:ua.keyPath,autoIncrement:!0}).createIndex(ua.userMutationsIndex,ua.userMutationsKeyPath,{unique:!0}),e.createObjectStore(da.store)}(e),Rc(e),function(e){e.createObjectStore(fa.store)}(e));let s=Sa.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(va.store),e.deleteObjectStore(ga.store),e.deleteObjectStore(ya.store)}(e),Rc(e)),s=s.next((()=>function(e){const t=e.store(ya.store),n=new ya(0,0,Zr.min().toTimestamp(),0);return t.put(ya.key,n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store(ua.store).Lt().next((n=>{e.deleteObjectStore(ua.store),e.createObjectStore(ua.store,{keyPath:ua.keyPath,autoIncrement:!0}).createIndex(ua.userMutationsIndex,ua.userMutationsKeyPath,{unique:!0});const r=t.store(ua.store),i=n.map((e=>r.put(e)));return Sa.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore(xa.store,{keyPath:xa.keyPath})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Ce(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore(ma.store)}(e),this.Ne(i))))),n<7&&r>=7&&(s=s.next((()=>this.xe(i)))),n<8&&r>=8&&(s=s.next((()=>this.ke(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(fa.store);t.createIndex(fa.readTimeIndex,fa.readTimeIndexPath,{unique:!1}),t.createIndex(fa.collectionReadTimeIndex,fa.collectionReadTimeIndexPath,{unique:!1})}(t)}))),n<10&&r>=10&&(s=s.next((()=>this.$e(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore(wa.store,{keyPath:wa.keyPath})}(e),function(e){e.createObjectStore(Ca.store,{keyPath:Ca.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}))),s}Ne(e){let t=0;return e.store(fa.store).Kt(((e,n)=>{t+=cc(n)})).next((()=>{const n=new ma(t);return e.store(ma.store).put(ma.key,n)}))}Ce(e){const t=e.store(la.store),n=e.store(ua.store);return t.Lt().next((t=>Sa.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Lt(ua.userMutationsIndex,r).next((n=>Sa.forEach(n,(n=>{Dr(n.userId===t.userId);const r=Za(this.N,n);return ac(e,t.userId,r).next((()=>{}))}))))}))))}xe(e){const t=e.store(va.store),n=e.store(fa.store);return e.store(ya.store).get(ya.key).next((e=>{const r=[];return n.Kt(((n,i)=>{const s=new Qr(n),o=function(e){return[0,ra(e)]}(s);r.push(t.get(o).next((n=>n?Sa.resolve():(n=>t.put(new va(0,ra(n),e.highestListenSequenceNumber)))(s))))})).next((()=>Sa.waitFor(r)))}))}ke(e,t){e.createObjectStore(ba.store,{keyPath:ba.keyPath});const n=t.store(ba.store),r=new nc,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ra(r)})}};return t.store(fa.store).Kt({qt:!0},((e,t)=>{const n=new Qr(e);return i(n.popLast())})).next((()=>t.store(da.store).Kt({qt:!0},(([e,t,n],r)=>{const s=oa(t);return i(s.popLast())}))))}$e(e){const t=e.store(ga.store);return t.Kt(((e,n)=>{const r=Ka(n),i=Xa(this.N,r);return t.put(i)}))}}function Rc(e){e.createObjectStore(va.store,{keyPath:va.keyPath}).createIndex(va.documentTargetsIndex,va.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(ga.store,{keyPath:ga.keyPath}).createIndex(ga.queryTargetsIndexName,ga.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(ya.store)}const kc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Lc{constructor(e,t,n,r,i,s,o,a,c,l){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Oe=i,this.window=s,this.document=o,this.Fe=c,this.Me=l,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=e=>Promise.resolve(),!Lc.bt())throw new Pr(Or.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ic(this,r),this.We=t+"main",this.N=new Ha(a),this.Ge=new Ea(this.We,11,new Pc(this.N)),this.ze=new mc(this.referenceDelegate,this.N),this.Ht=new rc,this.He=function(e,t){return new Ec(e,t)}(this.N,this.Ht),this.Je=new Ja,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===l&&_r("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Pr(Or.FAILED_PRECONDITION,kc);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.ze.getHighestSequenceNumber(e)))})).then((e=>{this.Le=new Hr(e,this.Fe)})).then((()=>{this.Be=!0})).catch((e=>(this.Ge&&this.Ge.close(),Promise.reject(e))))}nn(e){return this.Qe=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget((async()=>{this.started&&await this.Xe()})))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Fc(e).put(new xa(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next((()=>{if(this.isPrimary)return this.sn(e).next((e=>{e||(this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.Qe(!1))))}))})).next((()=>this.rn(e))).next((t=>this.isPrimary&&!t?this.on(e).next((()=>!1)):!!t&&this.an(e).next((()=>!0)))))).catch((e=>{if(Na(e))return Ir("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Ir("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable((()=>this.Qe(e))),this.isPrimary=e}))}sn(e){return Bc(e).get(ca.key).next((e=>Sa.resolve(this.cn(e))))}un(e){return Fc(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ba(e,xa.store);return t.Lt().next((e=>{const n=this.fn(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Sa.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.Ye)for(const t of e)this.Ye.removeItem(this.dn(t.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Xe().then((()=>this.hn())).then((()=>this.en()))))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?Sa.resolve(!0):Bc(e).get(ca.key).next((t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)){if(this.cn(t)&&this.networkEnabled)return!0;if(!this.cn(t)){if(!t.allowTabSynchronization)throw new Pr(Or.FAILED_PRECONDITION,kc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Fc(e).Lt().next((e=>void 0===this.fn(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Ir("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[ca.store,xa.store],(e=>{const t=new La(e,Hr.T);return this.on(t).next((()=>this.un(t)))})),this.Ge.close(),this.yn()}fn(e,t){return e.filter((e=>this.ln(e.updateTimeMs,t)&&!this.wn(e.clientId)))}pn(){return this.runTransaction("getActiveClients","readonly",(e=>Fc(e).Lt().next((e=>this.fn(e,18e5).map((e=>e.clientId))))))}get started(){return this.Be}getMutationQueue(e){return lc.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,t,n){Ir("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite";let i;return this.Ge.runTransaction(e,r,Aa,(r=>(i=new La(r,this.Le?this.Le.next():Hr.T),"readwrite-primary"===t?this.sn(i).next((e=>!!e||this.rn(i))).next((t=>{if(!t)throw _r(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable((()=>this.Qe(!1))),new Pr(Or.FAILED_PRECONDITION,Ia);return n(i)})).next((e=>this.an(i).next((()=>e)))):this.En(i).next((()=>n(i)))))).then((e=>(i.raiseOnCommittedEvent(),e)))}En(e){return Bc(e).get(ca.key).next((e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)&&!this.cn(e)&&!(this.Me||this.allowTabSynchronization&&e.allowTabSynchronization))throw new Pr(Or.FAILED_PRECONDITION,kc)}))}an(e){const t=new ca(this.clientId,this.allowTabSynchronization,Date.now());return Bc(e).put(ca.key,t)}static bt(){return Ea.bt()}on(e){const t=Bc(e);return t.get(ca.key).next((e=>this.cn(e)?(Ir("IndexedDbPersistence","Releasing primary lease."),t.delete(ca.key)):Sa.resolve()))}ln(e,t){const n=Date.now();return!(e<n-t||e>n&&(_r(`Detected an update time that is in the future: ${e} > ${n}`),1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe())))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ue=()=>{this._n(),(0,a.G6)()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var t;try{const n=null!==(null===(t=this.Ye)||void 0===t?void 0:t.getItem(this.dn(e)));return Ir("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return _r("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){_r("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(e){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Bc(e){return Ba(e,ca.store)}function Fc(e){return Ba(e,xa.store)}function jc(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class zc{constructor(e,t){this.progress=e,this.Tn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Rn(e,t,n)))}Rn(e,t,n){return this.He.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const e of t)e.applyToLocalView(n)}))}Pn(e,t){return this.He.getEntries(e,t).next((t=>this.vn(e,t).next((()=>t))))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return mi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Vn(e,t.path):os(t)?this.Sn(e,t,n):this.Dn(e,t,n)}Vn(e,t){return this.An(e,new mi(t)).next((e=>{let t=ao();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Sn(e,t,n){const r=t.collectionGroup;let i=ao();return this.Ht.getCollectionParents(e,r).next((s=>Sa.forEach(s,(s=>{const o=function(e,t){return new Qi(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Dn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Dn(e,t,n){let r,i;return this.He.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Cn(e,i,r).next((e=>{r=e;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Oi.newInvalidDocument(n),r=r.insert(n,i)),Bs(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{ps(t,n)||(r=r.remove(e))})),r)))}Cn(e,t,n){let r=ho();for(const e of t)for(const t of e.mutations)t instanceof Us&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=r}static kn(e,t){let n=ho(),r=ho();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Uc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(Zr.min())?this.Fn(e,t):this.On.Pn(e,r).next((i=>{const s=this.Mn(t,i);return(ns(t)||rs(t))&&this.Ln(t.limitType,s,r,n)?this.Fn(e,t):(Cr()<=o.in.DEBUG&&Ir("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),hs(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Mn(e,t){let n=new no(fs(e));return t.forEach(((t,r)=>{ps(e,r)&&(n=n.add(r))})),n}Ln(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return Cr()<=o.in.DEBUG&&Ir("QueryEngine","Using full collection scan to execute query:",hs(t)),this.On.getDocumentsMatchingQuery(e,t,Zr.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,n,r){this.persistence=e,this.Bn=t,this.N=r,this.Un=new Qs(Vr),this.qn=new Sc((e=>ki(e)),Li),this.Kn=Zr.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Hc(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Un)))}}function Wc(e,t,n,r){return new Vc(e,t,n,r)}async function $c(e,t){const n=Nr(e);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.In.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new Hc(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=ho();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.Pn(e,o).next((e=>({Wn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function qc(e){const t=Nr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.ze.getLastRemoteSnapshotVersion(e)))}function Zc(e,t,n,r,i){let s=ho();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=so();return n.forEach(((n,o)=>{const a=e.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(Zr.min())?(t.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),s=s.insert(n,o)):Ir("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}function Kc(e,t){const n=Nr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t))))}function Xc(e,t){const n=Nr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.ze.getTargetData(e,t).next((i=>i?(r=i,Sa.resolve(r)):n.ze.allocateTargetId(e).next((i=>(r=new za(t,i,0,e.currentSequenceNumber),n.ze.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Un.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e}))}async function Yc(e,t,n){const r=Nr(e),i=r.Un.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Na(e))throw e;Ir("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Un=r.Un.remove(t),r.qn.delete(i.target)}function Jc(e,t,n){const r=Nr(e);let i=Zr.min(),s=ho();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Nr(e),i=r.qn.get(n);return void 0!==i?Sa.resolve(r.Un.get(i)):r.ze.getTargetData(t,n)}(r,e,cs(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Bn.getDocumentsMatchingQuery(e,t,n?i:Zr.min(),n?s:ho()))).next((e=>({documents:e,Gn:s})))))}function Qc(e,t){const n=Nr(e),r=Nr(n.ze),i=n.Un.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Et(e,t).next((e=>e?e.target:null))))}function el(e){const t=Nr(e);return t.persistence.runTransaction("Get new document changes","readonly",(e=>function(e,t,n){const r=Nr(e);let i=so(),s=Va(n);const o=Nc(t),a=IDBKeyRange.lowerBound(s,!0);return o.Kt({index:fa.readTimeIndex,range:a},((e,t)=>{const n=Ua(r.N,t);i=i.insert(n.key,n),s=t.readTime})).next((()=>({Tn:i,readTime:Wa(s)})))}(t.jn,e,t.Kn))).then((({Tn:e,readTime:n})=>(t.Kn=n,e)))}async function tl(e,t,n=ho()){const r=await Xc(e,cs(Ya(t.bundledQuery))),i=Nr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=To(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Je.saveNamedQuery(e,t);const o=r.withResumeToken(ii.EMPTY_BYTE_STRING,s);return i.Un=i.Un.insert(o.targetId,o),i.ze.updateTargetData(e,o).next((()=>i.ze.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.ze.addMatchingKeys(e,n,r.targetId))).next((()=>i.Je.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return Sa.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:To(n.createTime)}),Sa.resolve()}getNamedQuery(e,t){return Sa.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:Ya(e.bundledQuery),readTime:To(e.readTime)}}(t)),Sa.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.Zn=new no(il.ts),this.es=new no(il.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new il(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new il(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}cs(e){const t=new mi(new Qr([])),n=new il(t,e),r=new il(t,e+1),i=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),i.push(e.key)})),i}us(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new mi(new Qr([])),n=new il(t,e),r=new il(t,e+1);let i=ho();return this.es.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new il(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class il{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return mi.comparator(e.key,t.key)||Vr(e.ls,t.ls)}static ns(e,t){return Vr(e.ls,t.ls)||mi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new no(il.ts)}checkEmpty(e){return Sa.resolve(0===this.In.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Fa(i,t,n,r);this.In.push(s);for(const t of r)this.ds=this.ds.add(new il(t.key,i)),this.Ht.addToCollectionParentIndex(e,t.key.path.popLast());return Sa.resolve(s)}lookupMutationBatch(e,t){return Sa.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this._s(n),i=r<0?0:r;return Sa.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Sa.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return Sa.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new il(t,0),r=new il(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(e=>{const t=this.ws(e.ls);i.push(t)})),Sa.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new no(Vr);return t.forEach((e=>{const t=new il(e,0),r=new il(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),Sa.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;mi.isDocumentKey(i)||(i=i.child(""));const s=new il(new mi(i),0);let o=new no(Vr);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),s),Sa.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this.ws(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Dr(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return Sa.forEach(t.mutations,(r=>{const i=new il(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}te(e){}containsKey(e,t){const n=new il(t,0),r=this.ds.firstAfterOrEqual(n);return Sa.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,Sa.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Qs(mi.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Sa.resolve(n?n.document.clone():Oi.newInvalidDocument(t))}getEntries(e,t){let n=so();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Oi.newInvalidDocument(e))})),Sa.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=so();const i=new mi(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||ps(t,i)&&(r=r.insert(i.key,i.clone()))}return Sa.resolve(r)}Es(e,t){return Sa.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new al(this)}getSize(e){return Sa.resolve(this.size)}}class al extends Mc{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.Se.addEntry(e,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),Sa.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.persistence=e,this.Ts=new Sc((e=>ki(e)),Li),this.lastRemoteSnapshotVersion=Zr.min(),this.highestTargetId=0,this.Is=0,this.As=new rl,this.targetCount=0,this.Rs=fc.se()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),Sa.resolve()}getLastRemoteSnapshotVersion(e){return Sa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Sa.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Sa.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),Sa.resolve()}ae(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new fc(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,Sa.resolve()}updateTargetData(e,t){return this.ae(t),Sa.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,Sa.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Sa.waitFor(i).next((()=>r))}getTargetCount(e){return Sa.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return Sa.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),Sa.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Sa.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),Sa.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return Sa.resolve(n)}containsKey(e,t){return Sa.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){this.bs={},this.Le=new Hr(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new cl(this),this.Ht=new tc,this.He=function(e,t){return new ol(e,t)}(this.Ht,(e=>this.referenceDelegate.Ps(e))),this.N=new Ha(t),this.Je=new nl(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new sl(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){Ir("MemoryPersistence","Starting transaction:",e);const r=new ul(this.Le.next());return this.referenceDelegate.vs(),n(r).next((e=>this.referenceDelegate.Vs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ss(e,t){return Sa.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class ul extends _a{constructor(e){super(),this.currentSequenceNumber=e}}class dl{constructor(e){this.persistence=e,this.Ds=new rl,this.Cs=null}static Ns(e){return new dl(e)}get xs(){if(this.Cs)return this.Cs;throw Er()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),Sa.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),Sa.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),Sa.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Sa.forEach(this.xs,(n=>{const r=mi.fromPath(n);return this.ks(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Cs=null,t.apply(e))))}updateLimboDocument(e,t){return this.ks(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}Ps(e){return 0}ks(e,t){return Sa.or([()=>Sa.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(e,t){return`firestore_clients_${e}_${t}`}function pl(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function fl(e,t){return`firestore_targets_${e}_${t}`}class ml{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static $s(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new Pr(r.error.code,r.error.message))),s?new ml(e,t,r.state,i):(_r("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class gl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static $s(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new Pr(n.error.code,n.error.message))),i?new gl(e,n.state,r):(_r("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=fo();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=fi(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new vl(e,i):(_r("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class yl{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new yl(t.clientId,t.onlineState):(_r("SharedClientState",`Failed to parse online state: ${e}`),null)}}class bl{constructor(){this.activeTargetIds=fo()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xl{constructor(e,t,n,r,i){this.window=e,this.Oe=t,this.persistenceKey=n,this.Ls=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Qs(Vr),this.started=!1,this.Ks=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.js=hl(this.persistenceKey,this.Ls),this.Qs=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new bl),this.Ws=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Hs=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.Js=function(e){return`firestore_bundle_loaded_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const t of e){if(t===this.Ls)continue;const e=this.getItem(hl(this.persistenceKey,t));if(e){const n=vl.$s(t,e);n&&(this.qs=this.qs.insert(n.clientId,n))}}this.Ys();const t=this.storage.getItem(this.Hs);if(t){const e=this.Xs(t);e&&this.Zs(e)}for(const e of this.Ks)this.Us(e);this.Ks=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let t=!1;return this.qs.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,t,n){this.ei(e,t,n),this.ni(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(fl(this.persistenceKey,e));if(n){const r=gl.$s(e,n);r&&(t=r.state)}}return this.si.Fs(e),this.Ys(),t}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(fl(this.persistenceKey,e))}updateQueryState(e,t,n){this.ii(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.ni(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Ir("SharedClientState","READ",e,t),t}setItem(e,t){Ir("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Ir("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const t=e;if(t.storageArea===this.storage){if(Ir("SharedClientState","EVENT",t.key,t.newValue),t.key===this.js)return void _r("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.Ws.test(t.key)){if(null==t.newValue){const e=this.ai(t.key);return this.ci(e,null)}{const e=this.ui(t.key,t.newValue);if(e)return this.ci(e.clientId,e)}}else if(this.Gs.test(t.key)){if(null!==t.newValue){const e=this.hi(t.key,t.newValue);if(e)return this.li(e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.fi(t.key,t.newValue);if(e)return this.di(e)}}else if(t.key===this.Hs){if(null!==t.newValue){const e=this.Xs(t.newValue);if(e)return this.Zs(e)}}else if(t.key===this.Qs){const e=function(e){let t=Hr.T;if(null!=e)try{const n=JSON.parse(e);Dr("number"==typeof n),t=n}catch(e){_r("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Hr.T&&this.sequenceNumberHandler(e)}else if(t.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(t)}))}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,t,n){const r=new ml(this.currentUser,e,t,n),i=pl(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Os())}ni(e){const t=pl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}ri(e){const t={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(t))}ii(e,t,n){const r=fl(this.persistenceKey,e),i=new gl(e,t,n);this.setItem(r,i.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const t=this.Ws.exec(e);return t?t[1]:null}ui(e,t){const n=this.ai(e);return vl.$s(n,t)}hi(e,t){const n=this.Gs.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return ml.$s(new br(i),r,t)}fi(e,t){const n=this.zs.exec(e),r=Number(n[1]);return gl.$s(r,t)}Xs(e){return yl.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);Ir("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,t){const n=t?this.qs.insert(e,t):this.qs.remove(e),r=this.ti(this.qs),i=this.ti(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.gi(s,o).then((()=>{this.qs=n}))}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let t=fo();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class wl{constructor(){this.yi=new bl,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new bl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){Ir("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){Ir("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,r){const i=this.Bi(e,t);Ir("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(e,i,s,n).then((e=>(Ir("RestConnection","Received: ",e),e)),(t=>{throw Sr("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}Ki(e,t,n,r){return this.Li(e,t,n,r)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+xr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=Il[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,r){return new Promise(((i,s)=>{const o=new yr;o.listenOnce(pr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case hr.NO_ERROR:const t=o.getResponseJson();Ir("Connection","XHR received:",JSON.stringify(t)),i(t);break;case hr.TIMEOUT:Ir("Connection",'RPC "'+e+'" timed out'),s(new Pr(Or.DEADLINE_EXCEEDED,"Request time out"));break;case hr.HTTP_ERROR:const n=o.getStatus();if(Ir("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Or).indexOf(t)>=0?t:Or.UNKNOWN}(e.status);s(new Pr(t,e.message))}else s(new Pr(Or.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Pr(Or.UNAVAILABLE,"Connection failed."));break;default:Er()}}finally{Ir("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=ur(),i=dr(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new gr({})),this.Ui(s.initMessageHeaders,t),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");Ir("Connection","Creating WebChannel: "+o,s);const c=r.createWebChannel(o,s);let l=!1,u=!1;const d=new _l({vi:e=>{u?Ir("Connection","Not sending because WebChannel is closed:",e):(l||(Ir("Connection","Opening WebChannel transport."),c.open(),l=!0),Ir("Connection","WebChannel sending:",e),c.send(e))},Vi:()=>c.close()}),h=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return h(c,vr.EventType.OPEN,(()=>{u||Ir("Connection","WebChannel transport opened.")})),h(c,vr.EventType.CLOSE,(()=>{u||(u=!0,Ir("Connection","WebChannel transport closed"),d.$i())})),h(c,vr.EventType.ERROR,(e=>{u||(u=!0,Sr("Connection","WebChannel transport errored:",e),d.$i(new Pr(Or.UNAVAILABLE,"The operation could not be completed")))})),h(c,vr.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];Dr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Ir("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Ks[e];if(void 0!==t)return Js(t)}(e),n=i.message;void 0===t&&(t=Or.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,d.$i(new Pr(t,n)),c.close()}else Ir("Connection","WebChannel received:",n),d.Oi(n)}})),h(i,fr.STAT_EVENT,(e=>{e.stat===mr.PROXY?Ir("Connection","Detected buffering proxy"):e.stat===mr.NOPROXY&&Ir("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.ki()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(){return"undefined"!=typeof window?window:null}function El(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(e){return new So(e,!0)}class Tl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,t-n);r>0&&Ir("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),e()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t,n,r,i,s){this.Oe=e,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Tl(e,t)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this._r(),this.rr.cancel(),this.sr++,3!==e?this.rr.reset():t&&t.code===Or.RESOURCE_EXHAUSTED?(_r(t.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):t&&t.code===Or.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),t=this.sr;this.credentialsProvider.getToken().then((e=>{this.sr===t&&this.yr(e)}),(t=>{e((()=>{const e=new Pr(Or.UNKNOWN,"Fetching auth token failed: "+t.message);return this.pr(e)}))}))}yr(e){const t=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si((()=>{t((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((e=>{t((()=>this.pr(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(e){return Ir("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return t=>{this.Oe.enqueueAndForget((()=>this.sr===e?t():(Ir("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ol extends Nl{constructor(e,t,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,i),this.N=r}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Er()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.D?(Dr(void 0===t||"string"==typeof t),ii.fromBase64String(t||"")):(Dr(void 0===t||t instanceof Uint8Array),ii.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Or.UNKNOWN:Js(e.code);return new Pr(t,e.message||"")}(o);n=new bo(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ro(e,r.document.name),s=To(r.document.updateTime),o=new Ti({mapValue:{fields:r.document.fields}}),a=Oi.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new vo(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ro(e,r.document),s=r.readTime?To(r.readTime):Zr.min(),o=Oi.newNoDocument(i,s),a=r.removedTargetIds||[];n=new vo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ro(e,r.document),s=r.removedTargetIds||[];n=new vo([],s,i,null)}else{if(!("filter"in t))return Er();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Zs(r),s=e.targetId;n=new yo(s,i)}}return n}(this.N,e),n=function(e){if(!("targetChange"in e))return Zr.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Zr.min():t.readTime?To(t.readTime):Zr.min()}(e);return this.listener.Tr(t,n)}Ir(e){const t={};t.database=Bo(this.N),t.addTarget=function(e,t){let n;const r=t.target;return n=Bi(r)?{documents:Go(e,r)}:{query:Vo(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Eo(e,t.resumeToken):t.snapshotVersion.compareTo(Zr.min())>0&&(n.readTime=Mo(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Er()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,e);n&&(t.labels=n),this.wr(t)}Ar(e){const t={};t.database=Bo(this.N),t.removeTarget=e,this.wr(t)}}class Pl extends Nl{constructor(e,t,n,r,i){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(Dr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const t=function(e,t){return e&&e.length>0?(Dr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?To(e.updateTime):To(t);return n.isEqual(Zr.min())&&(n=To(t)),new Os(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=To(e.commitTime);return this.listener.vr(n,t)}return Dr(!e.writeResults||0===e.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Bo(this.N),this.wr(e)}Pr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Ho(this.N,e)))};this.wr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends class{}{constructor(e,t,n){super(),this.credentials=e,this.nr=t,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new Pr(Or.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Or.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new Pr(Or.UNKNOWN,e.toString())}))}Ki(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Or.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new Pr(Or.UNKNOWN,e.toString())}))}terminate(){this.Dr=!0}}class kl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(e){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,"Online"===e&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(_r(t),this.$r=!1):Ir("OnlineStateTracker",t)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((e=>{n.enqueueAndForget((async()=>{Wl(this)&&(Ir("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Nr(e);t.Kr.add(4),await Fl(t),t.Wr.set("Unknown"),t.Kr.delete(4),await Bl(t)}(this))}))})),this.Wr=new kl(n,r)}}async function Bl(e){if(Wl(e))for(const t of e.jr)await t(!0)}async function Fl(e){for(const t of e.jr)await t(!1)}function jl(e,t){const n=Nr(e);n.qr.has(t.targetId)||(n.qr.set(t.targetId,t),Vl(n)?Gl(n):cu(n).cr()&&Hl(n,t))}function zl(e,t){const n=Nr(e),r=cu(n);n.qr.delete(t),r.cr()&&Ul(n,t),0===n.qr.size&&(r.cr()?r.lr():Wl(n)&&n.Wr.set("Unknown"))}function Hl(e,t){e.Gr.Y(t.targetId),cu(e).Ir(t)}function Ul(e,t){e.Gr.Y(t),cu(e).Ar(t)}function Gl(e){e.Gr=new wo({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.qr.get(t)||null}),cu(e).start(),e.Wr.Or()}function Vl(e){return Wl(e)&&!cu(e).ar()&&e.qr.size>0}function Wl(e){return 0===Nr(e).Kr.size}function $l(e){e.Gr=void 0}async function ql(e){e.qr.forEach(((t,n)=>{Hl(e,t)}))}async function Zl(e,t){$l(e),Vl(e)?(e.Wr.Lr(t),Gl(e)):e.Wr.set("Unknown")}async function Kl(e,t,n){if(e.Wr.set("Online"),t instanceof bo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qr.delete(r),e.Gr.removeTarget(r))}(e,t)}catch(n){Ir("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Xl(e,n)}else if(t instanceof vo?e.Gr.rt(t):t instanceof yo?e.Gr.ft(t):e.Gr.ct(t),!n.isEqual(Zr.min()))try{const t=await qc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Gr._t(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.qr.get(r);i&&e.qr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.qr.get(t);if(!n)return;e.qr.set(t,n.withResumeToken(ii.EMPTY_BYTE_STRING,n.snapshotVersion)),Ul(e,t);const r=new za(n.target,t,1,n.sequenceNumber);Hl(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Ir("RemoteStore","Failed to raise snapshot:",t),await Xl(e,t)}}async function Xl(e,t,n){if(!Na(t))throw t;e.Kr.add(1),await Fl(e),e.Wr.set("Offline"),n||(n=()=>qc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Ir("RemoteStore","Retrying IndexedDB access"),await n(),e.Kr.delete(1),await Bl(e)}))}function Yl(e,t){return t().catch((n=>Xl(e,n,t)))}async function Jl(e){const t=Nr(e),n=lu(t);let r=t.Ur.length>0?t.Ur[t.Ur.length-1].batchId:-1;for(;Ql(t);)try{const e=await Kc(t.localStore,r);if(null===e){0===t.Ur.length&&n.lr();break}r=e.batchId,eu(t,e)}catch(e){await Xl(t,e)}tu(t)&&nu(t)}function Ql(e){return Wl(e)&&e.Ur.length<10}function eu(e,t){e.Ur.push(t);const n=lu(e);n.cr()&&n.br&&n.Pr(t.mutations)}function tu(e){return Wl(e)&&!lu(e).ar()&&e.Ur.length>0}function nu(e){lu(e).start()}async function ru(e){lu(e).Sr()}async function iu(e){const t=lu(e);for(const n of e.Ur)t.Pr(n.mutations)}async function su(e,t,n){const r=e.Ur.shift(),i=ja.from(r,t,n);await Yl(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Jl(e)}async function ou(e,t){t&&lu(e).br&&await async function(e,t){if(Ys(n=t.code)&&n!==Or.ABORTED){const n=e.Ur.shift();lu(e).hr(),await Yl(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Jl(e)}var n}(e,t),tu(e)&&nu(e)}async function au(e,t){const n=Nr(e);t?(n.Kr.delete(2),await Bl(n)):t||(n.Kr.add(2),await Fl(n),n.Wr.set("Unknown"))}function cu(e){return e.zr||(e.zr=function(e,t,n){const r=Nr(e);return r.Cr(),new Ol(t,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Si:ql.bind(null,e),Ci:Zl.bind(null,e),Tr:Kl.bind(null,e)}),e.jr.push((async t=>{t?(e.zr.hr(),Vl(e)?Gl(e):e.Wr.set("Unknown")):(await e.zr.stop(),$l(e))}))),e.zr}function lu(e){return e.Hr||(e.Hr=function(e,t,n){const r=Nr(e);return r.Cr(),new Pl(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:ru.bind(null,e),Ci:ou.bind(null,e),Vr:iu.bind(null,e),vr:su.bind(null,e)}),e.jr.push((async t=>{t?(e.Hr.hr(),await Jl(e)):(await e.Hr.stop(),e.Ur.length>0&&(Ir("RemoteStore",`Stopping write stream with ${e.Ur.length} pending writes`),e.Ur=[]))}))),e.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class uu{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new uu(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Pr(Or.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(e,t){if(_r("AsyncQueue",`${t}: ${e}`),Na(e))return new Pr(Or.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||mi.comparator(t.key,n.key):(e,t)=>mi.comparator(e.key,t.key),this.keyedMap=ao(),this.sortedSet=new Qs(this.comparator)}static emptySet(e){return new hu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new hu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.Jr=new Qs(mi.comparator)}track(e){const t=e.doc.key,n=this.Jr.get(t);n?0!==e.type&&3===n.type?this.Jr=this.Jr.insert(t,e):3===e.type&&1!==n.type?this.Jr=this.Jr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jr=this.Jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jr=this.Jr.remove(t):1===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):Er():this.Jr=this.Jr.insert(t,e)}Yr(){const e=[];return this.Jr.inorderTraversal(((t,n)=>{e.push(n)})),e}}class fu{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new fu(e,t,hu.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&us(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.Xr=void 0,this.listeners=[]}}class gu{constructor(){this.queries=new Sc((e=>ds(e)),us),this.onlineState="Unknown",this.Zr=new Set}}async function vu(e,t){const n=Nr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new mu),i)try{s.Xr=await n.onListen(r)}catch(e){const n=du(e,`Initialization of query '${hs(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.eo(n.onlineState),s.Xr&&t.no(s.Xr)&&wu(n)}async function yu(e,t){const n=Nr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function bu(e,t){const n=Nr(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.no(e)&&(r=!0);i.Xr=e}}r&&wu(n)}function xu(e,t,n){const r=Nr(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function wu(e){e.Zr.forEach((e=>{e.next()}))}class Cu{constructor(e,t,n){this.query=e,this.so=t,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new fu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.io?this.oo(e)&&(this.so.next(e),t=!0):this.ao(e,this.onlineState)&&(this.co(e),t=!0),this.ro=e,t}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let t=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),t=!0),t}ao(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.uo&&n||e.docs.isEmpty()&&"Offline"!==t)}oo(e){if(e.docChanges.length>0)return!0;const t=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}co(e){e=fu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t){this.payload=e,this.byteLength=t}ho(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.N=e}zn(e){return Ro(this.N,e)}Hn(e){return e.metadata.exists?zo(this.N,e.document,!1):Oi.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return To(e)}}class _u{constructor(e,t,n){this.lo=e,this.localStore=t,this.N=n,this.queries=[],this.documents=[],this.progress=Su(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}wo(e){const t=new Map,n=new Iu(this.N);for(const r of e)if(r.metadata.queries){const e=n.zn(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||ho()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=Nr(e);let s=ho(),o=so(),a=lo();for(const e of n){const n=t.zn(e.metadata.name);e.document&&(s=s.add(n)),o=o.insert(n,t.Hn(e)),a=a.insert(n,t.Jn(e.metadata.readTime))}const c=i.jn.newChangeBuffer({trackRemovals:!0}),l=await Xc(i,function(e){return cs(ts(Qr.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Zc(e,c,o,Zr.min(),a).next((t=>(c.apply(e),t))).next((t=>i.ze.removeMatchingKeysForTargetId(e,l.targetId).next((()=>i.ze.addMatchingKeys(e,s,l.targetId))).next((()=>i.Qn.vn(e,t))).next((()=>t))))))}(this.localStore,new Iu(this.N),this.documents,this.lo.id),t=this.wo(this.documents);for(const e of this.queries)await tl(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",new zc(Object.assign({},this.progress),e)}}function Su(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.key=e}}class Eu{constructor(e){this.key=e}}class Du{constructor(e,t){this.query=e,this._o=t,this.mo=null,this.current=!1,this.yo=ho(),this.mutatedKeys=ho(),this.po=fs(e),this.Eo=new hu(this.po)}get To(){return this._o}Io(e,t){const n=t?t.Ao:new pu,r=t?t.Eo:this.Eo;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=ns(this.query)&&r.size===this.query.limit?r.last():null,c=rs(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=ps(this.query,t)?t:null,d=!!l&&this.mutatedKeys.has(l.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;l&&u?l.data.isEqual(u.data)?d!==h&&(n.track({type:3,doc:u}),p=!0):this.Ro(l,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.po(u,a)>0||c&&this.po(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),p=!0):l&&!u&&(n.track({type:1,doc:l}),p=!0,(a||c)&&(o=!0)),p&&(u?(s=s.add(u),i=h?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),ns(this.query)||rs(this.query))for(;s.size>this.query.limit;){const e=ns(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const i=e.Ao.Yr();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Er()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.po(e.doc,t.doc))),this.bo(n);const s=t?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new fu(this.query,e.Eo,r,i,e.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new pu,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach((e=>this._o=this._o.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this._o=this._o.delete(e))),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=ho(),this.Eo.forEach((e=>{this.Vo(e.key)&&(this.yo=this.yo.add(e.key))}));const t=[];return e.forEach((e=>{this.yo.has(e)||t.push(new Eu(e))})),this.yo.forEach((n=>{e.has(n)||t.push(new Mu(n))})),t}So(e){this._o=e.Gn,this.yo=ho();const t=this.Io(e.documents);return this.applyChanges(t,!0)}Do(){return fu.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class Tu{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Nu{constructor(e){this.key=e,this.Co=!1}}class Ou{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new Sc((e=>ds(e)),us),this.ko=new Map,this.$o=new Set,this.Oo=new Qs(mi.comparator),this.Fo=new Map,this.Mo=new rl,this.Lo={},this.Bo=new Map,this.Uo=fc.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Pu(e,t){const n=sd(e);let r,i;const s=n.xo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const e=await Xc(n.localStore,cs(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Ru(n,t,r,"current"===s),n.isPrimaryClient&&jl(n.remoteStore,e)}return i}async function Ru(e,t,n,r){e.Ko=(t,n,r)=>async function(e,t,n,r){let i=t.view.Io(n);i.Ln&&(i=await Jc(e.localStore,t.query,!1).then((({documents:e})=>t.view.Io(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Wu(e,t.targetId,o.vo),o.snapshot}(e,t,n,r);const i=await Jc(e.localStore,t,!0),s=new Du(t,i.Gn),o=s.Io(i.documents),a=go.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Wu(e,n,c.vo);const l=new Tu(t,n,s);return e.xo.set(t,l),e.ko.has(n)?e.ko.get(n).push(t):e.ko.set(n,[t]),c.snapshot}async function ku(e,t){const n=Nr(e),r=n.xo.get(t),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((e=>!us(e,t)))),void n.xo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Yc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),zl(n.remoteStore,r.targetId),Gu(n,r.targetId)})).catch(bc)):(Gu(n,r.targetId),await Yc(n.localStore,r.targetId,!0))}async function Lu(e,t){const n=Nr(e);try{const e=await function(e,t){const n=Nr(e),r=t.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.ze.addMatchingKeys(e,t.addedDocuments,s))));const c=t.resumeToken;if(c.approximateByteSize()>0){const l=a.withResumeToken(c,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,l),function(e,t,n){return Dr(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(a,l,t)&&o.push(n.ze.updateTargetData(e,l))}}));let a=so();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Zc(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(Zr.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next((t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Sa.waitFor(o).next((()=>s.apply(e))).next((()=>n.Qn.vn(e,a))).next((()=>a))})).then((e=>(n.Un=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Fo.get(t);r&&(Dr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Co=!0:e.modifiedDocuments.size>0?Dr(r.Co):e.removedDocuments.size>0&&(Dr(r.Co),r.Co=!1))})),await Zu(n,e,t)}catch(e){await bc(e)}}function Bu(e,t,n){const r=Nr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Nr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.eo(t)&&(r=!0)})),r&&wu(n)}(r.eventManager,t),e.length&&r.No.Tr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Fu(e,t,n){const r=Nr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fo.get(t),s=i&&i.key;if(s){let e=new Qs(mi.comparator);e=e.insert(s,Oi.newNoDocument(s,Zr.min()));const n=ho().add(s),i=new mo(Zr.min(),new Map,new no(Vr),e,n);await Lu(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(t),qu(r)}else await Yc(r.localStore,t,!1).then((()=>Gu(r,t,n))).catch(bc)}async function ju(e,t){const n=Nr(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Nr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Sa.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Dr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.In.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.Pn(e,r)))}))}(n.localStore,t);Uu(n,r,null),Hu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zu(n,e)}catch(e){await bc(e)}}async function zu(e,t,n){const r=Nr(e);try{const e=await function(e,t){const n=Nr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.In.lookupMutationBatch(e,t).next((t=>(Dr(null!==t),r=t.keys(),n.In.removeMutationBatch(e,t)))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.Pn(e,r)))}))}(r.localStore,t);Uu(r,t,n),Hu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Zu(r,e)}catch(n){await bc(n)}}function Hu(e,t){(e.Bo.get(t)||[]).forEach((e=>{e.resolve()})),e.Bo.delete(t)}function Uu(e,t,n){const r=Nr(e);let i=r.Lo[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Lo[r.currentUser.toKey()]=i}}function Gu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ko.get(t))e.xo.delete(r),n&&e.No.jo(r,n);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach((t=>{e.Mo.containsKey(t)||Vu(e,t)}))}function Vu(e,t){e.$o.delete(t.path.canonicalString());const n=e.Oo.get(t);null!==n&&(zl(e.remoteStore,n),e.Oo=e.Oo.remove(t),e.Fo.delete(n),qu(e))}function Wu(e,t,n){for(const r of n)r instanceof Mu?(e.Mo.addReference(r.key,t),$u(e,r)):r instanceof Eu?(Ir("SyncEngine","Document no longer in limbo: "+r.key),e.Mo.removeReference(r.key,t),e.Mo.containsKey(r.key)||Vu(e,r.key)):Er()}function $u(e,t){const n=t.key,r=n.path.canonicalString();e.Oo.get(n)||e.$o.has(r)||(Ir("SyncEngine","New document in limbo: "+n),e.$o.add(r),qu(e))}function qu(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){const t=e.$o.values().next().value;e.$o.delete(t);const n=new mi(Qr.fromString(t)),r=e.Uo.next();e.Fo.set(r,new Nu(n)),e.Oo=e.Oo.insert(n,r),jl(e.remoteStore,new za(cs(ts(n.path)),r,2,Hr.T))}}async function Zu(e,t,n){const r=Nr(e),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((e,a)=>{o.push(r.Ko(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Uc.kn(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.No.Tr(i),await async function(e,t){const n=Nr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Sa.forEach(t,(t=>Sa.forEach(t.Nn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Sa.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Na(e))throw e;Ir("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,s))}async function Ku(e,t){const n=Nr(e);if(!n.currentUser.isEqual(t)){Ir("SyncEngine","User change. New user:",t.toKey());const e=await $c(n.localStore,t);n.currentUser=t,function(e,t){e.Bo.forEach((e=>{e.forEach((e=>{e.reject(new Pr(Or.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Bo.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Zu(n,e.Wn)}}function Xu(e,t){const n=Nr(e),r=n.Fo.get(t);if(r&&r.Co)return ho().add(r.key);{let e=ho();const r=n.ko.get(t);if(!r)return e;for(const t of r){const r=n.xo.get(t);e=e.unionWith(r.view.To)}return e}}async function Yu(e,t){const n=Nr(e),r=await Jc(n.localStore,t.query,!0),i=t.view.So(r);return n.isPrimaryClient&&Wu(n,t.targetId,i.vo),i}async function Ju(e){const t=Nr(e);return el(t.localStore).then((e=>Zu(t,e)))}async function Qu(e,t,n,r){const i=Nr(e),s=await function(e,t){const n=Nr(e),r=Nr(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Xt(e,t).next((t=>t?n.Qn.Pn(e,t):Sa.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Jl(i.remoteStore):"acknowledged"===n||"rejected"===n?(Uu(i,t,r||null),Hu(i,t),function(e,t){Nr(Nr(e).In).te(t)}(i.localStore,t)):Er(),await Zu(i,s)):Ir("SyncEngine","Cannot apply mutation batch with id: "+t)}async function ed(e,t,n){const r=Nr(e),i=[],s=[];for(const e of t){let t;const n=r.ko.get(e);if(n&&0!==n.length){t=await Xc(r.localStore,cs(n[0]));for(const e of n){const t=r.xo.get(e),n=await Yu(r,t);n.snapshot&&s.push(n.snapshot)}}else{const n=await Qc(r.localStore,e);t=await Xc(r.localStore,n),await Ru(r,td(n),e,!1)}i.push(t)}return r.No.Tr(s),i}function td(e){return es(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function nd(e){const t=Nr(e);return Nr(Nr(t.localStore).persistence).pn()}async function rd(e,t,n,r){const i=Nr(e);if(i.qo)Ir("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(t))switch(n){case"current":case"not-current":{const e=await el(i.localStore),r=mo.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Zu(i,e,r);break}case"rejected":await Yc(i.localStore,t,!0),Gu(i,t,r);break;default:Er()}}async function id(e,t,n){const r=sd(e);if(r.qo){for(const e of t){if(r.ko.has(e)){Ir("SyncEngine","Adding an already active target "+e);continue}const t=await Qc(r.localStore,e),n=await Xc(r.localStore,t);await Ru(r,td(t),n.targetId,!1),jl(r.remoteStore,n)}for(const e of n)r.ko.has(e)&&await Yc(r.localStore,e,!1).then((()=>{zl(r.remoteStore,e),Gu(r,e)})).catch(bc)}}function sd(e){const t=Nr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Lu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Fu.bind(null,t),t.No.Tr=bu.bind(null,t.eventManager),t.No.jo=xu.bind(null,t.eventManager),t}function od(e){const t=Nr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ju.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=zu.bind(null,t),t}class ad{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Dl(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return Wc(this.persistence,new Gc,e.initialUser,this.N)}Go(e){return new ll(dl.Ns,this.N)}Wo(e){return new wl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cd extends ad{constructor(e,t,n){super(),this.Jo=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await async function(e){const t=Nr(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",(e=>function(e){const t=Nc(e);let n=Zr.min();return t.Kt({index:fa.readTimeIndex,reverse:!0},((e,t,r)=>{t.readTime&&(n=Wa(t.readTime)),r.done()})).next((()=>n))}(e))).then((e=>{t.Kn=e}))}(this.localStore),await this.Jo.initialize(this,e),await od(this.Jo.syncEngine),await Jl(this.Jo.remoteStore),await this.persistence.nn((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}Ho(e){return Wc(this.persistence,new Gc,e.initialUser,this.N)}zo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new Cc(t,e.asyncQueue)}Go(e){const t=jc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?oc.withCacheSize(this.cacheSizeBytes):oc.DEFAULT;return new Lc(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ml(),El(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new wl}}class ld extends cd{constructor(e,t){super(e,t,!1),this.Jo=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Jo.syncEngine;this.sharedClientState instanceof xl&&(this.sharedClientState.syncEngine={_i:Qu.bind(null,t),mi:rd.bind(null,t),gi:id.bind(null,t),pn:nd.bind(null,t),wi:Ju.bind(null,t)},await this.sharedClientState.start()),await this.persistence.nn((async e=>{await async function(e,t){const n=Nr(e);if(sd(n),od(n),!0===t&&!0!==n.qo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await ed(n,e.toArray());n.qo=!0,await au(n.remoteStore,!0);for(const e of t)jl(n.remoteStore,e)}else if(!1===t&&!1!==n.qo){const e=[];let t=Promise.resolve();n.ko.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(Gu(n,i),Yc(n.localStore,i,!0)))),zl(n.remoteStore,i)})),await t,await ed(n,e),function(e){const t=Nr(e);t.Fo.forEach(((e,n)=>{zl(t.remoteStore,n)})),t.Mo.us(),t.Fo=new Map,t.Oo=new Qs(mi.comparator)}(n),n.qo=!1,await au(n.remoteStore,!1)}}(this.Jo.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}Wo(e){const t=Ml();if(!xl.bt(t))throw new Pr(Or.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=jc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new xl(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ud{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Bu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ku.bind(null,this.syncEngine),await au(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gu}createDatastore(e){const t=Dl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Sl(r));var r;return function(e,t,n){return new Rl(e,t,n)}(e.credentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Bu(this.syncEngine,e,0),s=Al.bt()?new Al:new Cl,new Ll(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Ou(e,t,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Nr(e);Ir("RemoteStore","RemoteStore shutting down."),t.Kr.add(5),await Fl(t),t.Qr.shutdown(),t.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,t){this.Zo=e,this.N=t,this.metadata=new Rr,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then((e=>{e&&e.ho()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(null===e)return null;const t=this.ta.decode(e),n=Number(t);isNaN(n)&&this.sa(`length string (${t}) is not valid number`);const r=await this.ia(n);return new Au(JSON.parse(r),e.length+n)}ra(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async na(){for(;this.ra()<0&&!await this.oa(););if(0===this.buffer.length)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const t=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Pr(Or.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Nr(e),r=Bo(n.N)+"/documents",i={documents:t.map((e=>Po(n.N,e)))},s=await n.Ki("BatchGetDocuments",r,i),o=new Map;s.forEach((e=>{const t=function(e,t){return"found"in t?function(e,t){Dr(!!t.found),t.found.name,t.found.updateTime;const n=Ro(e,t.found.name),r=To(t.found.updateTime),i=new Ti({mapValue:{fields:t.found.fields}});return Oi.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){Dr(!!t.missing),Dr(!!t.readTime);const n=Ro(e,t.missing),r=To(t.readTime);return Oi.newNoDocument(n,r)}(e,t):Er()}(n.N,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Dr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new $s(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=mi.fromPath(t);this.mutations.push(new qs(n,this.precondition(n)))})),await async function(e,t){const n=Nr(e),r=Bo(n.N)+"/documents",i={writes:t.map((e=>Ho(n.N,e)))};await n.Li("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Er();t=Zr.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Pr(Or.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Ps.updateTime(t):Ps.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Zr.min()))throw new Pr(Or.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ps.updateTime(t)}return Ps.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.aa=5,this.rr=new Tl(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi((async()=>{const e=new fd(this.datastore),t=this.ua(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.ha(e)}))))})).catch((e=>{this.ha(e)}))}))}ua(e){try{const t=this.updateFunction(e);return!hi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget((()=>(this.ca(),Promise.resolve())))):this.deferred.reject(e)}la(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Ys(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=br.UNAUTHENTICATED,this.clientId=Gr.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,(async e=>{Ir("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pr(Or.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=du(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function vd(e,t){e.asyncQueue.verifyOperationInProgress(),Ir("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await $c(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function yd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await bd(e);Ir("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=Nr(e);n.asyncQueue.verifyOperationInProgress(),Ir("RemoteStore","RemoteStore received new credentials");const r=Wl(n);n.Kr.add(3),await Fl(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Kr.delete(3),await Bl(n)}(t.remoteStore,e))),e.onlineComponents=t}async function bd(e){return e.offlineComponents||(Ir("FirestoreClient","Using default OfflineComponentProvider"),await vd(e,new ad)),e.offlineComponents}async function xd(e){return e.onlineComponents||(Ir("FirestoreClient","Using default OnlineComponentProvider"),await yd(e,new ud)),e.onlineComponents}function wd(e){return bd(e).then((e=>e.persistence))}function Cd(e){return bd(e).then((e=>e.localStore))}function Ad(e){return xd(e).then((e=>e.remoteStore))}function Id(e){return xd(e).then((e=>e.syncEngine))}async function _d(e){const t=await xd(e),n=t.eventManager;return n.onListen=Pu.bind(null,t.syncEngine),n.onUnlisten=ku.bind(null,t.syncEngine),n}function Sd(e,t,n={}){const r=new Rr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new hd({next:s=>{t.enqueueAndForget((()=>yu(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Pr(Or.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Pr(Or.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Cu(ts(n.path),s,{includeMetadataChanges:!0,uo:!0});return vu(e,o)}(await _d(e),e.asyncQueue,t,n,r))),r.promise}function Md(e,t,n={}){const r=new Rr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new hd({next:n=>{t.enqueueAndForget((()=>yu(e,o))),n.fromCache&&"server"===r.source?i.reject(new Pr(Or.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Cu(n,s,{includeMetadataChanges:!0,uo:!0});return vu(e,o)}(await _d(e),e.asyncQueue,t,n,r))),r.promise}function Ed(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new pd(e,t)}(function(e,t){if(e instanceof Uint8Array)return dd(e,t);if(e instanceof ArrayBuffer)return dd(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Dl(t));e.asyncQueue.enqueueAndForget((async()=>{!function(e,t,n){const r=Nr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Nr(e),r=To(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Je.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r));n._updateProgress(Su(r));const i=new _u(r,e.localStore,t.N);let s=await t.Qo();for(;s;){const e=await i.fo(s);e&&n._updateProgress(e),s=await t.Qo()}const o=await i.complete();await Zu(e,o.Tn,void 0),await function(e,t){const n=Nr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Je.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress)}catch(e){Sr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((()=>{r.sharedClientState.notifyBundleLoaded()}))}(await Id(e),i,r)}))}class Dd{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Td{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Td&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(e,t,n){if(!n)throw new Pr(Or.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Pd(e,t,n,r){if(!0===t&&!0===r)throw new Pr(Or.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Rd(e){if(!mi.isDocumentKey(e))throw new Pr(Or.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function kd(e){if(mi.isDocumentKey(e))throw new Pr(Or.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ld(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Er()}function Bd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Pr(Or.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ld(e);throw new Pr(Or.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Fd(e,t){if(t<=0)throw new Pr(Or.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Pr(Or.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Pr(Or.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Pd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jd({}),this._settingsFrozen=!1,e instanceof Td?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Pr(Or.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Td(e.options.projectId)}(e))}get app(){if(!this._app)throw new Pr(Or.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Pr(Or.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jd(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new Lr;switch(e.type){case"gapi":const t=e.client;return Dr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new zr(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Pr(Or.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Nd.get(e);t&&(Ir("ComponentProvider","Removing Datastore"),Nd.delete(e),t.terminate())}(this),Promise.resolve()}}function Hd(e,t,n,r={}){var i;const s=(e=Bd(e,zd))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Sr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=br.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Pr(Or.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new br(s)}e._credentials=new Br(new kr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vd(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ud(this.firestore,e,this._key)}}class Gd{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Gd(this.firestore,e,this._query)}}class Vd extends Gd{constructor(e,t,n){super(e,t,ts(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ud(this.firestore,null,new mi(e))}withConverter(e){return new Vd(this.firestore,e,this._path)}}function Wd(e,t,...n){if(e=(0,a.m9)(e),Od("collection","path",t),e instanceof zd){const r=Qr.fromString(t,...n);return kd(r),new Vd(e,null,r)}{if(!(e instanceof Ud||e instanceof Vd))throw new Pr(Or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Qr.fromString(t,...n));return kd(r),new Vd(e.firestore,null,r)}}function $d(e,t){if(e=Bd(e,zd),Od("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new Pr(Or.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Gd(e,null,function(e){return new Qi(Qr.emptyPath(),e)}(t))}function qd(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Gr.I()),Od("doc","path",t),e instanceof zd){const r=Qr.fromString(t,...n);return Rd(r),new Ud(e,null,new mi(r))}{if(!(e instanceof Ud||e instanceof Vd))throw new Pr(Or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Qr.fromString(t,...n));return Rd(r),new Ud(e.firestore,e instanceof Vd?e.converter:null,new mi(r))}}function Zd(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),(e instanceof Ud||e instanceof Vd)&&(t instanceof Ud||t instanceof Vd)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Kd(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),e instanceof Gd&&t instanceof Gd&&e.firestore===t.firestore&&us(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Xd{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Tl(this,"async_queue_retry"),this.Ea=()=>{const e=El();e&&Ir("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};const e=El();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const t=El();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise((()=>{}));const t=new Rr;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.da.push(e),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!Na(e))throw e;Ir("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(e){const t=this.fa.then((()=>(this.ga=!0,e().catch((e=>{throw this.ma=e,this.ga=!1,_r("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e})).then((e=>(this.ga=!1,e))))));return this.fa=t,t}enqueueAfterDelay(e,t,n){this.Ta(),this.pa.indexOf(e)>-1&&(t=0);const r=uu.createAndSchedule(this,e,t,n,(e=>this.Ra(e)));return this._a.push(r),r}Ta(){this.ma&&Er()}verifyOperationInProgress(){}async ba(){let e;do{e=this.fa,await e}while(e!==this.fa)}Pa(e){for(const t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.ba().then((()=>{this._a.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._a)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ba()}))}Va(e){this.pa.push(e)}Ra(e){const t=this._a.indexOf(e);this._a.splice(t,1)}}function Yd(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}class Jd{constructor(){this._progressObserver={},this._taskCompletionResolver=new Rr,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=-1;class eh extends zd{constructor(e,t){super(e,t),this.type="firestore",this._queue=new Xd,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ih(this),this._firestoreClient.terminate()}}function th(e,t){const n=(0,i.qX)(e,"firestore");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,a.vZ)(r,t))return e;throw new Pr(Or.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Pr(Or.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t})}function nh(e=(0,i.Mq)()){return(0,i.qX)(e,"firestore").getImmediate()}function rh(e){return e._firestoreClient||ih(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ih(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Dd(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new gd(e._credentials,e._queue,r)}function sh(e,t){mh(e=Bd(e,eh));const n=rh(e),r=e._freezeSettings(),i=new ud;return ah(n,i,new cd(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function oh(e){mh(e=Bd(e,eh));const t=rh(e),n=e._freezeSettings(),r=new ud;return ah(t,r,new ld(r,n.cacheSizeBytes))}function ah(e,t,n){const r=new Rr;return e.asyncQueue.enqueue((async()=>{try{await vd(e,n),await yd(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===Or.FAILED_PRECONDITION||e.code===Or.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}})).then((()=>r.promise))}function ch(e){if(e._initialized&&!e._terminated)throw new Pr(Or.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Rr;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Ea.bt())return Promise.resolve();const t=e+"main";await Ea.delete(t)}(jc(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function lh(e){return function(e){const t=new Rr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t){const n=Nr(e);Wl(n.remoteStore)||Ir("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Nr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.In.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Bo.get(e)||[];r.push(t),n.Bo.set(e,r)}catch(e){const n=du(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}(await Id(e),t))),t.promise}(rh(e=Bd(e,eh)))}function uh(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await wd(e),n=await Ad(e);return t.setNetworkEnabled(!0),function(e){const t=Nr(e);return t.Kr.delete(0),Bl(t)}(n)}))}(rh(e=Bd(e,eh)))}function dh(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await wd(e),n=await Ad(e);return t.setNetworkEnabled(!1),async function(e){const t=Nr(e);t.Kr.add(0),await Fl(t),t.Wr.set("Offline")}(n)}))}(rh(e=Bd(e,eh)))}function hh(e){return(0,i.wN)(e.app,"firestore"),e._delete()}function ph(e,t){const n=rh(e=Bd(e,eh)),r=new Jd;return Ed(n,e._databaseId,t,r),r}function fh(e,t){return function(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Nr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Je.getNamedQuery(e,t)))}(await Cd(e),t)))}(rh(e=Bd(e,eh)),t).then((t=>t?new Gd(e,null,t.query):null))}function mh(e){if(e._initialized||e._terminated)throw new Pr(Or.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Pr(Or.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ti(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function vh(){return new gh("__name__")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yh(ii.fromBase64String(e))}catch(e){throw new Pr(Or.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new yh(ii.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Pr(Or.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Pr(Or.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Vr(this._lat,e._lat)||Vr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=/^__.*__$/;class Ch{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Us(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hs(e,this.data,t,this.fieldTransforms)}}class Ah{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Us(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ih(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Er()}}class _h{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new _h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.ka(e),r}$a(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Wh(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(0===e.length)throw this.Fa("Document fields must not be empty");if(Ih(this.Da)&&wh.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class Sh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||Dl(e)}Ba(e,t,n,r=!1){return new _h({Da:e,methodName:t,La:n,path:ti.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Mh(e){const t=e._freezeSettings(),n=Dl(e._databaseId);return new Sh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Eh(e,t,n,r,i,s={}){const o=e.Ba(s.merge||s.mergeFields?2:0,t,n,i);Hh("Data must be an object, but it was:",o,r);const a=jh(r,o);let c,l;if(s.merge)c=new ni(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Uh(t,r,n);if(!o.contains(i))throw new Pr(Or.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);$h(e,i)||e.push(i)}c=new ni(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Ch(new Ti(a),c,l)}class Dh extends bh{_toFieldTransform(e){if(2!==e.Da)throw 1===e.Da?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dh}}function Th(e,t,n){return new _h({Da:3,La:t.settings.La,methodName:e._methodName,xa:n},t.databaseId,t.N,t.ignoreUndefinedProperties)}class Nh extends bh{_toFieldTransform(e){return new Ns(e.path,new As)}isEqual(e){return e instanceof Nh}}class Oh extends bh{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=Th(this,e,!0),n=this.Ua.map((e=>Fh(e,t))),r=new Is(n);return new Ns(e.path,r)}isEqual(e){return this===e}}class Ph extends bh{constructor(e,t){super(e),this.Ua=t}_toFieldTransform(e){const t=Th(this,e,!0),n=this.Ua.map((e=>Fh(e,t))),r=new Ss(n);return new Ns(e.path,r)}isEqual(e){return this===e}}class Rh extends bh{constructor(e,t){super(e),this.qa=t}_toFieldTransform(e){const t=new Es(e.N,ys(e.N,this.qa));return new Ns(e.path,t)}isEqual(e){return this===e}}function kh(e,t,n,r){const i=e.Ba(1,t,n);Hh("Data must be an object, but it was:",i,r);const s=[],o=Ti.empty();Xr(r,((e,r)=>{const c=Vh(t,e,n);r=(0,a.m9)(r);const l=i.$a(c);if(r instanceof Dh)s.push(c);else{const e=Fh(r,l);null!=e&&(s.push(c),o.set(c,e))}}));const c=new ni(s);return new Ah(o,c,i.fieldTransforms)}function Lh(e,t,n,r,i,s){const o=e.Ba(1,t,n),c=[Uh(t,r,n)],l=[i];if(s.length%2!=0)throw new Pr(Or.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)c.push(Uh(t,s[e])),l.push(s[e+1]);const u=[],d=Ti.empty();for(let e=c.length-1;e>=0;--e)if(!$h(u,c[e])){const t=c[e];let n=l[e];n=(0,a.m9)(n);const r=o.$a(t);if(n instanceof Dh)u.push(t);else{const e=Fh(n,r);null!=e&&(u.push(t),d.set(t,e))}}const h=new ni(u);return new Ah(d,h,o.fieldTransforms)}function Bh(e,t,n,r=!1){return Fh(n,e.Ba(r?4:3,t))}function Fh(e,t){if(zh(e=(0,a.m9)(e)))return Hh("Unsupported field value:",t,e),jh(e,t);if(e instanceof bh)return function(e,t){if(!Ih(t.Da))throw t.Fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Fa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xa&&4!==t.Da)throw t.Fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Fh(i,t.Oa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ys(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=qr.fromDate(e);return{timestampValue:Mo(t.N,n)}}if(e instanceof qr){const n=new qr(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Mo(t.N,n)}}if(e instanceof xh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof yh)return{bytesValue:Eo(t.N,e._byteString)};if(e instanceof Ud){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:No(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fa(`Unsupported field value: ${Ld(e)}`)}(e,t)}function jh(e,t){const n={};return Yr(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xr(e,((e,r)=>{const i=Fh(r,t.Na(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function zh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof qr||e instanceof xh||e instanceof yh||e instanceof Ud||e instanceof bh)}function Hh(e,t,n){if(!zh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Ld(n);throw"an object"===r?t.Fa(e+" a custom object"):t.Fa(e+" "+r)}}function Uh(e,t,n){if((t=(0,a.m9)(t))instanceof gh)return t._internalPath;if("string"==typeof t)return Vh(e,t);throw Wh("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Gh=new RegExp("[~\\*/\\[\\]]");function Vh(e,t,n){if(t.search(Gh)>=0)throw Wh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new gh(...t.split("."))._internalPath}catch(r){throw Wh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Wh(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Pr(Or.INVALID_ARGUMENT,a+e+c)}function $h(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ud(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Zh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Zh extends qh{data(){return super.data()}}function Kh(e,t){return"string"==typeof t?Vh(e,t):t instanceof gh?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yh extends qh{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Kh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Jh extends Yh{data(e={}){return super.data(e)}}class Qh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Xh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Jh(this._firestore,this._userDataWriter,n.key,n,new Xh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Pr(Or.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Jh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Xh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Jh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Xh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:ep(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ep(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Er()}}function tp(e,t){return e instanceof Yh&&t instanceof Yh?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Qh&&t instanceof Qh&&e._firestore===t._firestore&&Kd(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(e){if(rs(e)&&0===e.explicitOrderBy.length)throw new Pr(Or.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rp{}function ip(e,...t){for(const n of t)e=n._apply(e);return e}class sp extends rp{constructor(e,t,n){super(),this.Ka=e,this.ja=t,this.Qa=n,this.type="where"}_apply(e){const t=Mh(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Pr(Or.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){xp(o,s);const t=[];for(const n of o)t.push(bp(r,e,n));a={arrayValue:{values:t}}}else a=bp(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||xp(o,s),a=Bh(n,"where",o,"in"===s||"not-in"===s);const c=Fi.create(i,s,a);return function(e,t){if(t.v()){const n=ss(e);if(null!==n&&!n.isEqual(t.field))throw new Pr(Or.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=is(e);null!==r&&wp(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Pr(Or.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Pr(Or.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,0,t,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Gd(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Qi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function op(e,t,n){const r=t,i=Kh("where",e);return new sp(i,r,n)}class ap extends rp{constructor(e,t){super(),this.Ka=e,this.Wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Pr(Or.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Pr(Or.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ki(t,n);return function(e,t){if(null===is(e)){const n=ss(e);null!==n&&wp(e,n,t.field)}}(e,r),r}(e._query,this.Ka,this.Wa);return new Gd(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Qi(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function cp(e,t="asc"){const n=t,r=Kh("orderBy",e);return new ap(r,n)}class lp extends rp{constructor(e,t,n){super(),this.type=e,this.Ga=t,this.za=n}_apply(e){return new Gd(e.firestore,e.converter,ls(e._query,this.Ga,this.za))}}function up(e){return Fd("limit",e),new lp("limit",e,"F")}function dp(e){return Fd("limitToLast",e),new lp("limitToLast",e,"L")}class hp extends rp{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=yp(e,this.type,this.Ha,this.Ja);return new Gd(e.firestore,e.converter,function(e,t){return new Qi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function pp(...e){return new hp("startAt",e,!0)}function fp(...e){return new hp("startAfter",e,!1)}class mp extends rp{constructor(e,t,n){super(),this.type=e,this.Ha=t,this.Ja=n}_apply(e){const t=yp(e,this.type,this.Ha,this.Ja);return new Gd(e.firestore,e.converter,function(e,t){return new Qi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function gp(...e){return new mp("endBefore",e,!0)}function vp(...e){return new mp("endAt",e,!1)}function yp(e,t,n,r){if(n[0]=(0,a.m9)(n[0]),n[0]instanceof qh)return function(e,t,n,r,i){if(!r)throw new Pr(Or.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of as(e))if(n.field.isKeyField())s.push(Ai(t,r.key));else{const e=r.data.field(n.field);if(li(e))throw new Pr(Or.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new Pr(Or.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new qi(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Mh(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new Pr(Or.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const c=i[s];if(o[s].field.isKeyField()){if("string"!=typeof c)throw new Pr(Or.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!os(e)&&-1!==c.indexOf("/"))throw new Pr(Or.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=e.path.child(Qr.fromString(c));if(!mi.isDocumentKey(n))throw new Pr(Or.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new mi(n);a.push(Ai(t,i))}else{const e=Bh(n,r,c);a.push(e)}}return new qi(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function bp(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Pr(Or.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!os(t)&&-1!==n.indexOf("/"))throw new Pr(Or.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Qr.fromString(n));if(!mi.isDocumentKey(r))throw new Pr(Or.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ai(e,new mi(r))}if(n instanceof Ud)return Ai(e,n._key);throw new Pr(Or.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ld(n)}.`)}function xp(e,t){if(!Array.isArray(e)||0===e.length)throw new Pr(Or.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Pr(Or.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function wp(e,t,n){if(!n.isEqual(t))throw new Pr(Or.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{convertValue(e,t="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ai(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Er()}}convertObject(e,t){const n={};return Xr(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new xh(ai(e.latitude),ai(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ui(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const t=oi(e);return new qr(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Qr.fromString(e);Dr(na(n));const r=new Td(n.get(1),n.get(3)),i=new mi(n.popFirst(5));return r.isEqual(t)||_r(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Ip extends Cp{constructor(e){super(),this.firestore=e}convertBytes(e){return new yh(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ud(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Mh(e)}set(e,t,n){this._verifyNotCommitted();const r=Sp(e,this._firestore),i=Ap(r.converter,t,n),s=Eh(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Ps.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Sp(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof gh?Lh(this._dataReader,"WriteBatch.update",i._key,t,n,r):kh(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Ps.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Sp(e,this._firestore);return this._mutations=this._mutations.concat(new $s(t._key,Ps.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Pr(Or.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Sp(e,t){if((e=(0,a.m9)(e)).firestore!==t)throw new Pr(Or.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(e){e=Bd(e,Ud);const t=Bd(e.firestore,eh);return Sd(rh(t),e._key).then((n=>Hp(t,e,n)))}class Ep extends Cp{constructor(e){super(),this.firestore=e}convertBytes(e){return new yh(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ud(this.firestore,null,t)}}function Dp(e){e=Bd(e,Ud);const t=Bd(e.firestore,eh),n=rh(t),r=new Ep(t);return function(e,t){const n=new Rr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Nr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.Qn.An(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new Pr(Or.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=du(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Cd(e),t,n))),n.promise}(n,e._key).then((n=>new Yh(t,r,e._key,n,new Xh(null!==n&&n.hasLocalMutations,!0),e.converter)))}function Tp(e){e=Bd(e,Ud);const t=Bd(e.firestore,eh);return Sd(rh(t),e._key,{source:"server"}).then((n=>Hp(t,e,n)))}function Np(e){e=Bd(e,Gd);const t=Bd(e.firestore,eh),n=rh(t),r=new Ep(t);return np(e._query),Md(n,e._query).then((n=>new Qh(t,r,e,n)))}function Op(e){e=Bd(e,Gd);const t=Bd(e.firestore,eh),n=rh(t),r=new Ep(t);return function(e,t){const n=new Rr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Jc(e,t,!0),i=new Du(t,r.Gn),s=i.Io(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=du(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Cd(e),t,n))),n.promise}(n,e._query).then((n=>new Qh(t,r,e,n)))}function Pp(e){e=Bd(e,Gd);const t=Bd(e.firestore,eh),n=rh(t),r=new Ep(t);return Md(n,e._query,{source:"server"}).then((n=>new Qh(t,r,e,n)))}function Rp(e,t,n){e=Bd(e,Ud);const r=Bd(e.firestore,eh),i=Ap(e.converter,t,n);return zp(r,[Eh(Mh(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Ps.none())])}function kp(e,t,n,...r){e=Bd(e,Ud);const i=Bd(e.firestore,eh),s=Mh(i);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof gh?Lh(s,"updateDoc",e._key,t,n,r):kh(s,"updateDoc",e._key,t),zp(i,[o.toMutation(e._key,Ps.exists(!0))])}function Lp(e){return zp(Bd(e.firestore,eh),[new $s(e._key,Ps.none())])}function Bp(e,t){const n=Bd(e.firestore,eh),r=qd(e),i=Ap(e.converter,t);return zp(n,[Eh(Mh(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Ps.exists(!1))]).then((()=>r))}function Fp(e,...t){var n,r,i;e=(0,a.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Yd(t[o])||(s=t[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Yd(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,u,d;if(e instanceof Ud)u=Bd(e.firestore,eh),d=ts(e._key.path),l={next:n=>{t[o]&&t[o](Hp(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Bd(e,Gd);u=Bd(n.firestore,eh),d=n._query;const r=new Ep(u);l={next:e=>{t[o]&&t[o](new Qh(u,r,n,e))},error:t[o+1],complete:t[o+2]},np(e._query)}return function(e,t,n,r){const i=new hd(r),s=new Cu(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>vu(await _d(e),s))),()=>{i.Xo(),e.asyncQueue.enqueueAndForget((async()=>yu(await _d(e),s)))}}(rh(u),d,c,l)}function jp(e,t){return function(e,t){const n=new hd(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Nr(e).Zr.add(t),t.next()}(await _d(e),n))),()=>{n.Xo(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Nr(e).Zr.delete(t)}(await _d(e),n)))}}(rh(e=Bd(e,eh)),Yd(t)?t:{next:t})}function zp(e,t){return function(e,t){const n=new Rr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=od(e);try{const e=await function(e,t){const n=Nr(e),r=qr.now(),i=t.reduce(((e,t)=>e.add(t.key)),ho());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Qn.Pn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=Fs(e,s.get(e.key));null!=t&&o.push(new Us(e.key,t,Ni(t.value.mapValue),Ps.exists(!0)))}return n.In.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Lo[e.currentUser.toKey()];r||(r=new Qs(Vr)),r=r.insert(t,n),e.Lo[e.currentUser.toKey()]=r}(r,e.batchId,n),await Zu(r,e.changes),await Jl(r.remoteStore)}catch(e){const t=du(e,"Failed to persist write");n.reject(t)}}(await Id(e),t,n))),n.promise}(rh(e),t)}function Hp(e,t,n){const r=n.docs.get(t._key),i=new Ep(e);return new Yh(e,i,t._key,r,new Xh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Mh(e)}get(e){const t=Sp(e,this._firestore),n=new Ip(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Er();const r=e[0];if(r.isFoundDocument())return new qh(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new qh(this._firestore,n,t._key,null,t.converter);throw Er()}))}set(e,t,n){const r=Sp(e,this._firestore),i=Ap(r.converter,t,n),s=Eh(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Sp(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof gh?Lh(this._dataReader,"Transaction.update",i._key,t,n,r):kh(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Sp(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Sp(e,this._firestore),n=new Ep(this._firestore);return super.get(e).then((e=>new Yh(this._firestore,n,t._key,e._document,new Xh(!1,!1),t.converter)))}}function Gp(e,t){return function(e,t){const n=new Rr;return e.asyncQueue.enqueueAndForget((async()=>{const r=await function(e){return xd(e).then((e=>e.datastore))}(e);new md(e.asyncQueue,r,t,n).run()})),n.promise}(rh(e),(n=>t(new Up(e,n))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(){return new Dh("deleteField")}function Wp(){return new Nh("serverTimestamp")}function $p(...e){return new Oh("arrayUnion",e)}function qp(...e){return new Ph("arrayRemove",e)}function Zp(e){return new Rh("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(e){return rh(e=Bd(e,eh)),new _p(e,(t=>zp(e,t)))}!function(e){xr=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new eh(n,new Fr(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r}),"PUBLIC")),(0,i.KN)("@firebase/firestore","3.1.0",undefined)},31644:(e,t,n)=>{"use strict";n.r(t),n.d(t,{connectFunctionsEmulator:()=>b,getFunctions:()=>y,httpsCallable:()=>x});var r=n(94258),i=n(74444),s=n(48886);function o(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function a(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map((e=>a(e)));if("function"==typeof e||"object"==typeof e)return o(e,(e=>a(e)));throw new Error("Data cannot be encoded in JSON: "+e)}function c(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map((e=>c(e))):"function"==typeof e||"object"==typeof e?o(e,(e=>c(e))):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l="functions",u={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends i.ZR{constructor(e,t,n){super(`functions/${e}`,t||""),this.details=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((e=>this.auth=e),(()=>{})),this.messaging||t.get().then((e=>this.messaging=e),(()=>{})),this.appCheck||n.get().then((e=>this.appCheck=e),(()=>{}))}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p="us-central1";function f(e){return new Promise(((t,n)=>{setTimeout((()=>{n(new d("deadline-exceeded","deadline-exceeded"))}),e)}))}class m{constructor(e,t,n,r,i="us-central1",s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new h(t,n,r),this.cancelAllRequests=new Promise((e=>{this.deleteService=()=>Promise.resolve(e())}));try{const e=new URL(i);this.customDomain=e.origin,this.region=p}catch(e){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function g(e,t,n){return r=>async function(e,t,n,r){const i=e._url(t),s={data:n=a(n)},o={},l=await e.contextProvider.getContext();l.authToken&&(o.Authorization="Bearer "+l.authToken);l.messagingToken&&(o["Firebase-Instance-ID-Token"]=l.messagingToken);null!==l.appCheckToken&&(o["X-Firebase-AppCheck"]=l.appCheckToken);const h=r.timeout||7e4,p=await Promise.race([v(i,s,o,e.fetchImpl),f(h),e.cancelAllRequests]);if(!p)throw new d("cancelled","Firebase Functions instance was deleted.");const m=function(e,t){let n,r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r;try{const e=t&&t.error;if(e){const t=e.status;if("string"==typeof t){if(!u[t])return new d("internal","internal");r=u[t],i=t}const s=e.message;"string"==typeof s&&(i=s),n=e.details,void 0!==n&&(n=c(n))}}catch(e){}return"ok"===r?null:new d(r,i,n)}(p.status,p.json);if(m)throw m;if(!p.json)throw new d("internal","Response is not valid JSON object.");let g=p.json.data;void 0===g&&(g=p.json.result);if(void 0===g)throw new d("internal","Response is missing data field.");return{data:c(g)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,r,n||{})}async function v(e,t,n,r){let i;n["Content-Type"]="application/json";try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(e){return{status:0,json:null}}let s=null;try{s=await i.json()}catch(e){}return{status:i.status,json:s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(e=(0,r.Mq)(),t="us-central1"){return(0,r.qX)((0,i.m9)(e),l).getImmediate({identifier:t})}function b(e,t,n){!function(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}((0,i.m9)(e),t,n)}function x(e,t,n){return g((0,i.m9)(e),t,n)}var w;w=fetch.bind(self),(0,r.Xd)(new s.wA(l,((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("messaging-internal"),s=e.getProvider("app-check-internal");return new m(n,r,i,s,t,w)}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)("@firebase/functions","0.7.2")},5308:(e,t,n)=>{"use strict";n.r(t),n.d(t,{StringFormat:()=>O,_FbsBlob:()=>F,_Location:()=>x,_TaskEvent:()=>le,_TaskState:()=>ue,_UploadTask:()=>fe,_dataFromString:()=>R,_getChild:()=>je,_invalidArgument:()=>p,_invalidRootOperation:()=>m,connectStorageEmulator:()=>He,deleteObject:()=>Be,getDownloadURL:()=>Le,getMetadata:()=>Oe,getStorage:()=>ze,list:()=>Re,listAll:()=>ke,ref:()=>Fe,updateMetadata:()=>Pe,uploadBytes:()=>De,uploadBytesResumable:()=>Ne,uploadString:()=>Te});var r,i=n(94258),s=n(74444),o=n(48886);!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(r||(r={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com";class c extends s.ZR{constructor(e,t){super(l(e),`Firebase Storage: ${t} (${l(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}_codeEquals(e){return l(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function l(e){return"storage/"+e}function u(){return new c("unknown","An unknown error occurred, please check the error payload for server response.")}function d(){return new c("canceled","User canceled the upload/download.")}function h(){return new c("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function p(e){return new c("invalid-argument",e)}function f(){return new c("app-deleted","The Firebase app was deleted.")}function m(e){return new c("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function g(e,t){return new c("invalid-format","String does not match format '"+e+"': "+t)}function v(e){throw new c("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=r.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=r.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=r.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw v("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw v("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw v("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw v("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{createConnection(){return new y}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=x.makeFromUrl(e,t)}catch(t){return new x(e,"")}if(""===n.path)return n;throw new c("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),l=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<l.length;t++){const r=l[t],i=r.regex.exec(e);if(i){const e=i[r.indices.bucket];let t=i[r.indices.path];t||(t=""),n=new x(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new c("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class w{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){return"string"==typeof e||e instanceof String}function A(e){return I()&&e instanceof Blob}function I(){return"undefined"!=typeof Blob}function _(e,t,n,r){if(r<t)throw p(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw p(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function M(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t,n,r,i,s,o,a,c,l,u){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=s.slice(),this.callback_=o,this.errorCallback_=a,this.progressCallback_=l,this.timeout_=c,this.pool_=u,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=this;function t(t,n){const r=e.resolve_,i=e.reject_,s=n.connection;if(n.wasSuccessCode)try{const t=e.callback_(s,s.getResponseText());void 0!==t?r(t):r()}catch(e){i(e)}else if(null!==s){const t=u();t.serverResponse=s.getResponseText(),e.errorCallback_?i(e.errorCallback_(s,t)):i(t)}else if(n.canceled){i(e.appDelete_?f():d())}else{i(new c("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?t(0,new D(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=!1,o=0;function a(){return 2===o}let c=!1;function l(...e){c||(c=!0,t.apply(null,e))}function u(t){i=setTimeout((()=>{i=null,e(d,a())}),t)}function d(e,...t){if(c)return;if(e)return void l.call(null,e,...t);if(a()||s)return void l.call(null,e,...t);let n;r<64&&(r*=2),1===o?(o=2,n=0):n=1e3*(r+Math.random()),u(n)}let h=!1;function p(e){h||(h=!0,c||(null!==i?(e||(o=2),clearTimeout(i),u(0)):e||(o=1)))}return u(0),setTimeout((()=>{s=!0,p(!0)}),n),p}((function(t,n){if(n)return void t(!1,new D(!1,null,!0));const i=e.pool_.createConnection();function s(t){const n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}e.pendingConnection_=i,null!==e.progressCallback_&&i.addUploadProgressListener(s),i.send(e.url_,e.method_,e.body_,e.headers_).then((()=>{null!==e.progressCallback_&&i.removeUploadProgressListener(s),e.pendingConnection_=null;const n=i.getErrorCode()===r.NO_ERROR,o=i.getStatus();if(!n||e.isRetryStatusCode_(o)){const e=i.getErrorCode()===r.ABORT;return void t(!1,new D(!1,null,e))}const a=-1!==e.successCodes_.indexOf(o);t(!0,new D(a,i))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class D{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function N(...e){const t=T();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(I())return new Blob(e);throw new c("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class P{constructor(e,t){this.data=e,this.contentType=t||null}}function R(e,t){switch(e){case O.RAW:return new P(k(t));case O.BASE64:case O.BASE64URL:return new P(L(e,t));case O.DATA_URL:return new P(function(e){const t=new B(e);return t.base64?L(O.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw g(O.DATA_URL,"Malformed data URL.")}return k(t)}(t.rest)}(t),new B(t).contentType)}throw u()}function k(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function L(e,t){switch(e){case O.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw g(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case O.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw g(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw g(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class B{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw g(O.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class F{constructor(e,t){let n=0,r="";A(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(A(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.data_,e,t);return null===n?null:new F(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new F(n,!0)}}static getBlob(...e){if(I()){const t=e.map((e=>e instanceof F?e.data_:e));return new F(N.apply(null,t))}{const t=e.map((e=>C(e)?R(O.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new F(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){return t}class U{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||H}}let G=null;function V(){if(G)return G;const e=[];e.push(new U("bucket")),e.push(new U("generation")),e.push(new U("metageneration")),e.push(new U("name","fullPath",!0));const t=new U("name");t.xform=function(e,t){return function(e){return!C(e)||e.length<2?e:z(e)}(t)},e.push(t);const n=new U("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new U("timeCreated")),e.push(new U("updated")),e.push(new U("md5Hash",null,!0)),e.push(new U("cacheControl",null,!0)),e.push(new U("contentDisposition",null,!0)),e.push(new U("contentEncoding",null,!0)),e.push(new U("contentLanguage",null,!0)),e.push(new U("contentType",null,!0)),e.push(new U("metadata","customMetadata",!0)),G=e,G}function W(e,t,n){const r={type:"file"},i=n.length;for(let e=0;e<i;e++){const i=n[e];r[i.local]=i.xform(r,t[i.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new x(n,r);return t._makeStorageReference(i)}})}(r,e),r}function $(e,t,n){const r=j(t);if(null===r)return null;return W(e,r,n)}function q(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e,t,n){const r=j(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(const i of n.prefixes){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new x(t,n));r.prefixes.push(s)}if(n.items)for(const i of n.items){const n=e._makeStorageReference(new x(t,i.name));r.items.push(n)}return r}(e,t,r)}class K{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){if(!e)throw u()}function Y(e,t){return function(n,r){const i=$(e,r,t);return X(null!==i),i}}function J(e,t){return function(n,r){const i=$(e,r,t);return X(null!==i),function(e,t,n,r){const i=j(t);if(null===i)return null;if(!C(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((t=>{const i=e.bucket,s=e.fullPath;return S("/b/"+o(i)+"/o/"+o(s),n,r)+M({alt:"media",token:t})}))[0]}(i,r,e.host,e._protocol)}}function Q(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getResponseText().includes("Firebase App Check token is invalid")?new c("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new c("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new c("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new c("unauthorized","User does not have permission to access '"+i+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function ee(e){const t=Q(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new c("object-not-found","Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function te(e,t,n){const r=S(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new K(r,"GET",Y(e,n),i);return s.errorHandler=ee(t),s}function ne(e,t,n,r,i){const s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=S(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,c=new K(o,"GET",function(e,t){return function(n,r){const i=Z(e,t,r);return X(null!==i),i}}(e,t.bucket),a);return c.urlParams=s,c.errorHandler=Q(t),c}function re(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function ie(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const c=re(t,r,i),l="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+q(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",u="\r\n--"+a+"--",d=F.getBlob(l,r,u);if(null===d)throw h();const p={name:c.fullPath},f=S(s,e.host,e._protocol),m=e.maxUploadRetryTime,g=new K(f,"POST",Y(e,n),m);return g.urlParams=p,g.headers=o,g.body=d.uploadData(),g.errorHandler=Q(t),g}class se{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function oe(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){X(!1)}return X(!!n&&-1!==(t||["active"]).indexOf(n)),n}const ae=262144;function ce(e,t,n,r,i,s,o,a){const l=new se(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw new c("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const u=l.total-l.current;let d=u;i>0&&(d=Math.min(d,i));const p=l.current,f=p+d,m={"X-Goog-Upload-Command":d===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},g=r.slice(p,f);if(null===g)throw h();const v=t.maxUploadRetryTime,y=new K(n,"POST",(function(e,n){const i=oe(e,["active","final"]),o=l.current+d,a=r.size();let c;return c="final"===i?Y(t,s)(e,n):null,new se(o,a,"final"===i,c)}),v);return y.headers=m,y.body=g.uploadData(),y.progressCallback=a||null,y.errorHandler=Q(e),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le={STATE_CHANGED:"state_changed"},ue={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function de(e){switch(e){case"running":case"pausing":case"canceling":return ue.RUNNING;case"paused":return ue.PAUSED;case"success":return ue.SUCCESS;case"canceled":return ue.CANCELED;default:return ue.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=V(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=re(t,r,i),a={name:o.fullPath},c=S(s,e.host,e._protocol),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=q(o,n),d=e.maxUploadRetryTime,h=new K(c,"POST",(function(e){let t;oe(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){X(!1)}return X(C(t)),t}),d);return h.urlParams=a,h.headers=l,h.body=u,h.errorHandler=Q(t),h}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const i=e.maxUploadRetryTime,s=new K(n,"POST",(function(e){const t=oe(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){X(!1)}n||X(!1);const i=Number(n);return X(!isNaN(i)),new se(i,r.size(),"final"===t)}),i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=Q(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,t,n);this._request=i,i.getPromise().then((e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=ae*this._chunkMultiplier,t=new se(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=ce(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(s,r,i);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){ae*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=te(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=ie(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=d(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=de(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new he(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(de(this._state)){case ue.SUCCESS:pe(this._resolve.bind(null,this.snapshot))();break;case ue.CANCELED:case ue.ERROR:pe(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(de(this._state)){case ue.RUNNING:case ue.PAUSED:e.next&&pe(e.next.bind(e,this.snapshot))();break;case ue.SUCCESS:e.complete&&pe(e.complete.bind(e))();break;case ue.CANCELED:case ue.ERROR:default:e.error&&pe(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this._service=e,this._location=t instanceof x?t:x.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new me(e,t)}get root(){const e=new x(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return z(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new x(this._location.bucket,e);return new me(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw m(e)}}function ge(e,t,n){e._throwIfRoot("uploadBytes");const r=ie(e.storage,e._location,V(),new F(t,!0),n);return e.storage.makeRequestWithTokens(r).then((e=>e.getPromise())).then((t=>({metadata:t,ref:e})))}function ve(e){const t={prefixes:[],items:[]};return ye(e,t).then((()=>t))}async function ye(e,t,n){const r={pageToken:n},i=await be(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await ye(e,t,i.nextPageToken)}async function be(e,t){null!=t&&"number"==typeof t.maxResults&&_("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=ne(e.storage,e._location,"/",n.pageToken,n.maxResults);return(await e.storage.makeRequestWithTokens(r)).getPromise()}async function xe(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,r){const i=S(t.fullServerUrl(),e.host,e._protocol),s=q(n,r),o=e.maxOperationRetryTime,a=new K(i,"PATCH",Y(e,r),o);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=s,a.errorHandler=ee(t),a}(e.storage,e._location,t,V());return(await e.storage.makeRequestWithTokens(n)).getPromise()}async function we(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=S(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new K(r,"GET",J(e,n),i);return s.errorHandler=ee(t),s}(e.storage,e._location,V());return(await e.storage.makeRequestWithTokens(t)).getPromise().then((e=>{if(null===e)throw new c("no-download-url","The given file does not have any download URLs.");return e}))}async function Ce(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=S(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new K(n,"DELETE",(function(e,t){}),r);return i.successCodes=[200,204],i.errorHandler=ee(t),i}(e.storage,e._location);return(await e.storage.makeRequestWithTokens(t)).getPromise()}function Ae(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new x(e._location.bucket,n);return new me(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){if(e instanceof Me){const n=e;if(null==n._bucket)throw new c("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new me(n,n._bucket);return null!=t?Ie(r,t):r}return void 0!==t?Ae(e,t):e}function _e(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Me)return new me(e,t);throw p("To use ref(service, url), the first argument must be a Storage instance.")}return Ie(e,t)}function Se(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:x.makeFromBucketSpec(n,e)}class Me{constructor(e,t,n,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?x.makeFromBucketSpec(i,this._host):Se(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=x.makeFromBucketSpec(this._url,e):this._bucket=Se(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new me(this,e)}_makeRequest(e,t,n){if(this._deleted)return new w(f());{const r=function(e,t,n,r,i,s){const o=M(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new E(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(e){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n)}}const Ee="storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function De(e,t,n){return ge(e=(0,s.m9)(e),t,n)}function Te(e,t,n,r){return function(e,t,n=O.RAW,r){e._throwIfRoot("uploadString");const i=R(n,t),s=Object.assign({},r);return null==s.contentType&&null!=i.contentType&&(s.contentType=i.contentType),ge(e,i.data,s)}(e=(0,s.m9)(e),t,n,r)}function Ne(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new fe(e,new F(t),n)}(e=(0,s.m9)(e),t,n)}function Oe(e){return async function(e){e._throwIfRoot("getMetadata");const t=te(e.storage,e._location,V());return(await e.storage.makeRequestWithTokens(t)).getPromise()}(e=(0,s.m9)(e))}function Pe(e,t){return xe(e=(0,s.m9)(e),t)}function Re(e,t){return be(e=(0,s.m9)(e),t)}function ke(e){return ve(e=(0,s.m9)(e))}function Le(e){return we(e=(0,s.m9)(e))}function Be(e){return Ce(e=(0,s.m9)(e))}function Fe(e,t){return _e(e=(0,s.m9)(e),t)}function je(e,t){return Ae(e,t)}function ze(e=(0,i.Mq)(),t){e=(0,s.m9)(e);return(0,i.qX)(e,Ee).getImmediate({identifier:t})}function He(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:(0,s.Sg)(i,e.app.options.projectId))}(e,t,n,r)}function Ue(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Me(n,r,s,new b,t,i.Jn)}(0,i.Xd)(new o.wA(Ee,Ue,"PUBLIC").setMultipleInstances(!0)),(0,i.KN)("@firebase/storage","0.8.3")},85628:function(e,t){var n;
/**
 * @license Fraction.js v4.1.1 23/05/2021
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/!function(r){"use strict";var i={s:1,n:0,d:1};function s(e){function t(){var t=Error.apply(this,arguments);t.name=this.name=e,this.stack=t.stack,this.message=t.message}function n(){}return n.prototype=Error.prototype,t.prototype=new n,t}var o=p.DivisionByZero=s("DivisionByZero"),a=p.InvalidParameter=s("InvalidParameter");function c(e,t){return isNaN(e=parseInt(e,10))&&l(),e*t}function l(){throw new a}function u(e){for(var t={},n=e,r=2,i=4;i<=n;){for(;n%r==0;)n/=r,t[r]=(t[r]||0)+1;i+=1+2*r++}return n!==e?n>1&&(t[n]=(t[n]||0)+1):t[e]=(t[e]||0)+1,t}var d=function(e,t){var n,r=0,s=1,a=1,u=0,d=0,h=0,p=1,f=1,m=0,g=1,v=1,y=1,b=1e7;if(null==e);else if(void 0!==t)a=(r=e)*(s=t);else switch(typeof e){case"object":"d"in e&&"n"in e?(r=e.n,s=e.d,"s"in e&&(r*=e.s)):0 in e?(r=e[0],1 in e&&(s=e[1])):l(),a=r*s;break;case"number":if(e<0&&(a=e,e=-e),e%1==0)r=e;else if(e>0){for(e>=1&&(e/=f=Math.pow(10,Math.floor(1+Math.log(e)/Math.LN10)));g<=b&&y<=b;){if(e===(n=(m+v)/(g+y))){g+y<=b?(r=m+v,s=g+y):y>g?(r=v,s=y):(r=m,s=g);break}e>n?(m+=v,g+=y):(v+=m,y+=g),g>b?(r=v,s=y):(r=m,s=g)}r*=f}else(isNaN(e)||isNaN(t))&&(s=r=NaN);break;case"string":if(null===(g=e.match(/\d+|./g))&&l(),"-"===g[m]?(a=-1,m++):"+"===g[m]&&m++,g.length===m+1?d=c(g[m++],a):"."===g[m+1]||"."===g[m]?("."!==g[m]&&(u=c(g[m++],a)),(++m+1===g.length||"("===g[m+1]&&")"===g[m+3]||"'"===g[m+1]&&"'"===g[m+3])&&(d=c(g[m],a),p=Math.pow(10,g[m].length),m++),("("===g[m]&&")"===g[m+2]||"'"===g[m]&&"'"===g[m+2])&&(h=c(g[m+1],a),f=Math.pow(10,g[m+1].length)-1,m+=3)):"/"===g[m+1]||":"===g[m+1]?(d=c(g[m],a),p=c(g[m+2],1),m+=3):"/"===g[m+3]&&" "===g[m+1]&&(u=c(g[m],a),d=c(g[m+2],a),p=c(g[m+4],1),m+=5),g.length<=m){a=r=h+(s=p*f)*u+f*d;break}default:l()}if(0===s)throw new o;i.s=a<0?-1:1,i.n=Math.abs(r),i.d=Math.abs(s)};function h(e,t){if(!e)return t;if(!t)return e;for(;;){if(!(e%=t))return t;if(!(t%=e))return e}}function p(e,t){if(!(this instanceof p))return new p(e,t);d(e,t),e=p.REDUCE?h(i.d,i.n):1,this.s=i.s,this.n=i.n/e,this.d=i.d/e}p.REDUCE=1,p.prototype={s:1,n:0,d:1,abs:function(){return new p(this.n,this.d)},neg:function(){return new p(-this.s*this.n,this.d)},add:function(e,t){return d(e,t),new p(this.s*this.n*i.d+i.s*this.d*i.n,this.d*i.d)},sub:function(e,t){return d(e,t),new p(this.s*this.n*i.d-i.s*this.d*i.n,this.d*i.d)},mul:function(e,t){return d(e,t),new p(this.s*i.s*this.n*i.n,this.d*i.d)},div:function(e,t){return d(e,t),new p(this.s*i.s*this.n*i.d,this.d*i.n)},clone:function(){return new p(this)},mod:function(e,t){return isNaN(this.n)||isNaN(this.d)?new p(NaN):void 0===e?new p(this.s*this.n%this.d,1):(d(e,t),0===i.n&&0===this.d&&p(0,0),new p(this.s*(i.d*this.n)%(i.n*this.d),i.d*this.d))},gcd:function(e,t){return d(e,t),new p(h(i.n,this.n)*h(i.d,this.d),i.d*this.d)},lcm:function(e,t){return d(e,t),0===i.n&&0===this.n?new p:new p(i.n*this.n,h(i.n,this.n)*h(i.d,this.d))},ceil:function(e){return e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):new p(Math.ceil(e*this.s*this.n/this.d),e)},floor:function(e){return e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):new p(Math.floor(e*this.s*this.n/this.d),e)},round:function(e){return e=Math.pow(10,e||0),isNaN(this.n)||isNaN(this.d)?new p(NaN):new p(Math.round(e*this.s*this.n/this.d),e)},inverse:function(){return new p(this.s*this.d,this.n)},pow:function(e,t){if(d(e,t),1===i.d)return i.s<0?new p(Math.pow(this.s*this.d,i.n),Math.pow(this.n,i.n)):new p(Math.pow(this.s*this.n,i.n),Math.pow(this.d,i.n));if(this.s<0)return null;var n=u(this.n),r=u(this.d),s=1,o=1;for(var a in n)if("1"!==a){if("0"===a){s=0;break}if(n[a]*=i.n,n[a]%i.d!=0)return null;n[a]/=i.d,s*=Math.pow(a,n[a])}for(var a in r)if("1"!==a){if(r[a]*=i.n,r[a]%i.d!=0)return null;r[a]/=i.d,o*=Math.pow(a,r[a])}return i.s<0?new p(o,s):new p(s,o)},equals:function(e,t){return d(e,t),this.s*this.n*i.d==i.s*i.n*this.d},compare:function(e,t){d(e,t);var n=this.s*this.n*i.d-i.s*i.n*this.d;return(0<n)-(n<0)},simplify:function(e){if(isNaN(this.n)||isNaN(this.d))return this;var t=this.abs().toContinued();function n(e){return 1===e.length?new p(e[0]):n(e.slice(1)).inverse().add(e[0])}e=e||.001;for(var r=0;r<t.length;r++){var i=n(t.slice(0,r+1));if(i.sub(this.abs()).abs().valueOf()<e)return i.mul(this.s)}return this},divisible:function(e,t){return d(e,t),!(!(i.n*this.d)||this.n*i.d%(i.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(e){var t,n="",r=this.n,i=this.d;return this.s<0&&(n+="-"),1===i?n+=r:(e&&(t=Math.floor(r/i))>0&&(n+=t,n+=" ",r%=i),n+=r,n+="/",n+=i),n},toLatex:function(e){var t,n="",r=this.n,i=this.d;return this.s<0&&(n+="-"),1===i?n+=r:(e&&(t=Math.floor(r/i))>0&&(n+=t,r%=i),n+="\\frac{",n+=r,n+="}{",n+=i,n+="}"),n},toContinued:function(){var e,t=this.n,n=this.d,r=[];if(isNaN(t)||isNaN(n))return r;do{r.push(Math.floor(t/n)),e=t%n,t=n,n=e}while(1!==t);return r},toString:function(e){var t,n=this.n,r=this.d;if(isNaN(n)||isNaN(r))return"NaN";p.REDUCE||(n/=t=h(n,r),r/=t),e=e||15;var i=function(e,t){for(;t%2==0;t/=2);for(;t%5==0;t/=5);if(1===t)return 0;for(var n=10%t,r=1;1!==n;r++)if(n=10*n%t,r>2e3)return 0;return r}(0,r),s=function(e,t,n){for(var r=1,i=function(e,t,n){for(var r=1;t>0;e=e*e%n,t>>=1)1&t&&(r=r*e%n);return r}(10,n,t),s=0;s<300;s++){if(r===i)return s;r=10*r%t,i=10*i%t}return 0}(0,r,i),o=-1===this.s?"-":"";if(o+=n/r|0,n%=r,(n*=10)&&(o+="."),i){for(var a=s;a--;)o+=n/r|0,n%=r,n*=10;o+="(";for(a=i;a--;)o+=n/r|0,n%=r,n*=10;o+=")"}else for(a=e;n&&a--;)o+=n/r|0,n%=r,n*=10;return o}},void 0===(n=function(){return p}.apply(t,[]))||(e.exports=n)}()},63228:e=>{e.exports=function e(t,n){"use strict";var r,i,s=/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,o=/(^[ ]*|[ ]*$)/g,a=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,c=/^0x[0-9a-f]+$/i,l=/^0/,u=function(t){return e.insensitive&&(""+t).toLowerCase()||""+t},d=u(t).replace(o,"")||"",h=u(n).replace(o,"")||"",p=d.replace(s,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),f=h.replace(s,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),m=parseInt(d.match(c),16)||1!==p.length&&d.match(a)&&Date.parse(d),g=parseInt(h.match(c),16)||m&&h.match(a)&&Date.parse(h)||null;if(g){if(m<g)return-1;if(m>g)return 1}for(var v=0,y=Math.max(p.length,f.length);v<y;v++){if(r=!(p[v]||"").match(l)&&parseFloat(p[v])||p[v]||0,i=!(f[v]||"").match(l)&&parseFloat(f[v])||f[v]||0,isNaN(r)!==isNaN(i))return isNaN(r)?1:-1;if(typeof r!=typeof i&&(r+="",i+=""),r<i)return-1;if(r>i)return 1}return 0}},13807:e=>{
/*!
 * jsoneditor.js
 *
 * @brief
 * JSONEditor is a web-based tool to view, edit, format, and validate JSON.
 * It has various modes such as a tree editor, a code editor, and a plain text
 * editor.
 *
 * Supported browsers: Chrome, Firefox, Safari, Opera, Internet Explorer 8+
 *
 * @license
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * Copyright (c) 2011-2021 Jos de Jong, http://jsoneditoronline.org
 *
 * @author  Jos de Jong, <wjosdejong@gmail.com>
 * @version 9.5.6
 * @date    2021-09-22
 */
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
!function(e){"use strict";function t(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t.length>1){t[0]=t[0].slice(0,-1);for(var r=t.length-1,i=1;i<r;++i)t[i]=t[i].slice(1,-1);return t[r]=t[r].slice(1),t.join("")}return t[0]}function n(e){return"(?:"+e+")"}function r(e){return void 0===e?"undefined":null===e?"null":Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()}function i(e){return e.toUpperCase()}function s(e){return null!=e?e instanceof Array?e:"number"!=typeof e.length||e.split||e.setInterval||e.call?[e]:Array.prototype.slice.call(e):[]}function o(e,t){var n=e;if(t)for(var r in t)n[r]=t[r];return n}function a(e){var r="[A-Za-z]",i="[0-9]",s=t(i,"[A-Fa-f]"),o=n(n("%[EFef]"+s+"%"+s+s+"%"+s+s)+"|"+n("%[89A-Fa-f]"+s+"%"+s+s)+"|"+n("%"+s+s)),a="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",c=t("[\\:\\/\\?\\#\\[\\]\\@]",a),l=e?"[\\uE000-\\uF8FF]":"[]",u=t(r,i,"[\\-\\.\\_\\~]",e?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]"),d=n(r+t(r,i,"[\\+\\-\\.]")+"*"),h=n(n(o+"|"+t(u,a,"[\\:]"))+"*"),p=(n(n("25[0-5]")+"|"+n("2[0-4]"+i)+"|"+n("1"+i+i)+"|"+n("[1-9]"+i)+"|"+i),n(n("25[0-5]")+"|"+n("2[0-4]"+i)+"|"+n("1"+i+i)+"|"+n("0?[1-9]"+i)+"|0?0?"+i)),f=n(p+"\\."+p+"\\."+p+"\\."+p),m=n(s+"{1,4}"),g=n(n(m+"\\:"+m)+"|"+f),v=n(n(m+"\\:")+"{6}"+g),y=n("\\:\\:"+n(m+"\\:")+"{5}"+g),b=n(n(m)+"?\\:\\:"+n(m+"\\:")+"{4}"+g),x=n(n(n(m+"\\:")+"{0,1}"+m)+"?\\:\\:"+n(m+"\\:")+"{3}"+g),w=n(n(n(m+"\\:")+"{0,2}"+m)+"?\\:\\:"+n(m+"\\:")+"{2}"+g),C=n(n(n(m+"\\:")+"{0,3}"+m)+"?\\:\\:"+m+"\\:"+g),A=n(n(n(m+"\\:")+"{0,4}"+m)+"?\\:\\:"+g),I=n(n(n(m+"\\:")+"{0,5}"+m)+"?\\:\\:"+m),_=n(n(n(m+"\\:")+"{0,6}"+m)+"?\\:\\:"),S=n([v,y,b,x,w,C,A,I,_].join("|")),M=n(n(u+"|"+o)+"+"),E=(n(S+"\\%25"+M),n(S+n("\\%25|\\%(?!"+s+"{2})")+M)),D=n("[vV]"+s+"+\\."+t(u,a,"[\\:]")+"+"),T=n("\\["+n(E+"|"+S+"|"+D)+"\\]"),N=n(n(o+"|"+t(u,a))+"*"),O=n(T+"|"+f+"(?!"+N+")|"+N),P=n(i+"*"),R=n(n(h+"@")+"?"+O+n("\\:"+P)+"?"),k=n(o+"|"+t(u,a,"[\\:\\@]")),L=n(k+"*"),B=n(k+"+"),F=n(n(o+"|"+t(u,a,"[\\@]"))+"+"),j=n(n("\\/"+L)+"*"),z=n("\\/"+n(B+j)+"?"),H=n(F+j),U=n(B+j),G="(?!"+k+")",V=(n(j+"|"+z+"|"+H+"|"+U+"|"+G),n(n(k+"|"+t("[\\/\\?]",l))+"*")),W=n(n(k+"|[\\/\\?]")+"*"),$=n(n("\\/\\/"+R+j)+"|"+z+"|"+U+"|"+G),q=n(d+"\\:"+$+n("\\?"+V)+"?"+n("\\#"+W)+"?"),Z=n(n("\\/\\/"+R+j)+"|"+z+"|"+H+"|"+G),K=n(Z+n("\\?"+V)+"?"+n("\\#"+W)+"?");return n(q+"|"+K),n(d+"\\:"+$+n("\\?"+V)+"?"),n(n("\\/\\/("+n("("+h+")@")+"?("+O+")"+n("\\:("+P+")")+"?)")+"?("+j+"|"+z+"|"+U+"|"+G+")"),n("\\?("+V+")"),n("\\#("+W+")"),n(n("\\/\\/("+n("("+h+")@")+"?("+O+")"+n("\\:("+P+")")+"?)")+"?("+j+"|"+z+"|"+H+"|"+G+")"),n("\\?("+V+")"),n("\\#("+W+")"),n(n("\\/\\/("+n("("+h+")@")+"?("+O+")"+n("\\:("+P+")")+"?)")+"?("+j+"|"+z+"|"+U+"|"+G+")"),n("\\?("+V+")"),n("\\#("+W+")"),n("("+h+")@"),n("\\:("+P+")"),{NOT_SCHEME:new RegExp(t("[^]",r,i,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(t("[^\\%\\:]",u,a),"g"),NOT_HOST:new RegExp(t("[^\\%\\[\\]\\:]",u,a),"g"),NOT_PATH:new RegExp(t("[^\\%\\/\\:\\@]",u,a),"g"),NOT_PATH_NOSCHEME:new RegExp(t("[^\\%\\/\\@]",u,a),"g"),NOT_QUERY:new RegExp(t("[^\\%]",u,a,"[\\:\\@\\/\\?]",l),"g"),NOT_FRAGMENT:new RegExp(t("[^\\%]",u,a,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(t("[^]",u,a),"g"),UNRESERVED:new RegExp(u,"g"),OTHER_CHARS:new RegExp(t("[^\\%]",u,c),"g"),PCT_ENCODED:new RegExp(o,"g"),IPV4ADDRESS:new RegExp("^("+f+")$"),IPV6ADDRESS:new RegExp("^\\[?("+S+")"+n(n("\\%25|\\%(?!"+s+"{2})")+"("+M+")")+"?\\]?$")}}var c=a(!1),l=a(!0),u=function(){function e(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},h=2147483647,p=36,f=1,m=26,g=38,v=700,y=72,b=128,x="-",w=/^xn--/,C=/[^\0-\x7E]/,A=/[\x2E\u3002\uFF0E\uFF61]/g,I={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},_=p-f,S=Math.floor,M=String.fromCharCode;function E(e){throw new RangeError(I[e])}function D(e,t){for(var n=[],r=e.length;r--;)n[r]=t(e[r]);return n}function T(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+D((e=e.replace(A,".")).split("."),t).join(".")}function N(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);56320==(64512&s)?t.push(((1023&i)<<10)+(1023&s)+65536):(t.push(i),n--)}else t.push(i)}return t}var O=function(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:p},P=function(e,t){return e+22+75*(e<26)-((0!=t)<<5)},R=function(e,t,n){var r=0;for(e=n?S(e/v):e>>1,e+=S(e/t);e>_*m>>1;r+=p)e=S(e/_);return S(r+(_+1)*e/(e+g))},k=function(e){var t=[],n=e.length,r=0,i=b,s=y,o=e.lastIndexOf(x);o<0&&(o=0);for(var a=0;a<o;++a)e.charCodeAt(a)>=128&&E("not-basic"),t.push(e.charCodeAt(a));for(var c=o>0?o+1:0;c<n;){for(var l=r,u=1,d=p;;d+=p){c>=n&&E("invalid-input");var g=O(e.charCodeAt(c++));(g>=p||g>S((h-r)/u))&&E("overflow"),r+=g*u;var v=d<=s?f:d>=s+m?m:d-s;if(g<v)break;var w=p-v;u>S(h/w)&&E("overflow"),u*=w}var C=t.length+1;s=R(r-l,C,0==l),S(r/C)>h-i&&E("overflow"),i+=S(r/C),r%=C,t.splice(r++,0,i)}return String.fromCodePoint.apply(String,t)},L=function e(t){var n=[],r=(t=N(t)).length,i=b,s=0,o=y,a=!0,c=!1,l=void 0;try{for(var u,d=t[Symbol.iterator]();!(a=(u=d.next()).done);a=!0){var g=u.value;g<128&&n.push(M(g))}}catch(e){c=!0,l=e}finally{try{!a&&d.return&&d.return()}finally{if(c)throw l}}var v=n.length,w=v;for(v&&n.push(x);w<r;){var C=h,A=!0,I=!1,_=void 0;try{for(var D,T=t[Symbol.iterator]();!(A=(D=T.next()).done);A=!0){var O=D.value;O>=i&&O<C&&(C=O)}}catch(e){I=!0,_=e}finally{try{!A&&T.return&&T.return()}finally{if(I)throw _}}var k=w+1;C-i>S((h-s)/k)&&E("overflow"),s+=(C-i)*k,i=C;var L=!0,B=!1,F=void 0;try{for(var j,z=t[Symbol.iterator]();!(L=(j=z.next()).done);L=!0){var H=j.value;if(H<i&&++s>h&&E("overflow"),H==i){for(var U=s,G=p;;G+=p){var V=G<=o?f:G>=o+m?m:G-o;if(U<V)break;var W=U-V,$=p-V;n.push(M(P(V+W%$,0))),U=S(W/$)}n.push(M(P(U,0))),o=R(s,k,w==v),s=0,++w}}}catch(e){B=!0,F=e}finally{try{!L&&z.return&&z.return()}finally{if(B)throw F}}++s,++i}return n.join("")},B={version:"2.1.0",ucs2:{decode:N,encode:function(e){return String.fromCodePoint.apply(String,d(e))}},decode:k,encode:L,toASCII:function(e){return T(e,(function(e){return C.test(e)?"xn--"+L(e):e}))},toUnicode:function(e){return T(e,(function(e){return w.test(e)?k(e.slice(4).toLowerCase()):e}))}},F={};function j(e){var t=e.charCodeAt(0);return t<16?"%0"+t.toString(16).toUpperCase():t<128?"%"+t.toString(16).toUpperCase():t<2048?"%"+(t>>6|192).toString(16).toUpperCase()+"%"+(63&t|128).toString(16).toUpperCase():"%"+(t>>12|224).toString(16).toUpperCase()+"%"+(t>>6&63|128).toString(16).toUpperCase()+"%"+(63&t|128).toString(16).toUpperCase()}function z(e){for(var t="",n=0,r=e.length;n<r;){var i=parseInt(e.substr(n+1,2),16);if(i<128)t+=String.fromCharCode(i),n+=3;else if(i>=194&&i<224){if(r-n>=6){var s=parseInt(e.substr(n+4,2),16);t+=String.fromCharCode((31&i)<<6|63&s)}else t+=e.substr(n,6);n+=6}else if(i>=224){if(r-n>=9){var o=parseInt(e.substr(n+4,2),16),a=parseInt(e.substr(n+7,2),16);t+=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}else t+=e.substr(n,9);n+=9}else t+=e.substr(n,3),n+=3}return t}function H(e,t){function n(e){var n=z(e);return n.match(t.UNRESERVED)?n:e}return e.scheme&&(e.scheme=String(e.scheme).replace(t.PCT_ENCODED,n).toLowerCase().replace(t.NOT_SCHEME,"")),void 0!==e.userinfo&&(e.userinfo=String(e.userinfo).replace(t.PCT_ENCODED,n).replace(t.NOT_USERINFO,j).replace(t.PCT_ENCODED,i)),void 0!==e.host&&(e.host=String(e.host).replace(t.PCT_ENCODED,n).toLowerCase().replace(t.NOT_HOST,j).replace(t.PCT_ENCODED,i)),void 0!==e.path&&(e.path=String(e.path).replace(t.PCT_ENCODED,n).replace(e.scheme?t.NOT_PATH:t.NOT_PATH_NOSCHEME,j).replace(t.PCT_ENCODED,i)),void 0!==e.query&&(e.query=String(e.query).replace(t.PCT_ENCODED,n).replace(t.NOT_QUERY,j).replace(t.PCT_ENCODED,i)),void 0!==e.fragment&&(e.fragment=String(e.fragment).replace(t.PCT_ENCODED,n).replace(t.NOT_FRAGMENT,j).replace(t.PCT_ENCODED,i)),e}function U(e){return e.replace(/^0*(.*)/,"$1")||"0"}function G(e,t){var n=e.match(t.IPV4ADDRESS)||[],r=u(n,2)[1];return r?r.split(".").map(U).join("."):e}function V(e,t){var n=e.match(t.IPV6ADDRESS)||[],r=u(n,3),i=r[1],s=r[2];if(i){for(var o=i.toLowerCase().split("::").reverse(),a=u(o,2),c=a[0],l=a[1],d=l?l.split(":").map(U):[],h=c.split(":").map(U),p=t.IPV4ADDRESS.test(h[h.length-1]),f=p?7:8,m=h.length-f,g=Array(f),v=0;v<f;++v)g[v]=d[v]||h[m+v]||"";p&&(g[f-1]=G(g[f-1],t));var y=g.reduce((function(e,t,n){if(!t||"0"===t){var r=e[e.length-1];r&&r.index+r.length===n?r.length++:e.push({index:n,length:1})}return e}),[]),b=y.sort((function(e,t){return t.length-e.length}))[0],x=void 0;if(b&&b.length>1){var w=g.slice(0,b.index),C=g.slice(b.index+b.length);x=w.join(":")+"::"+C.join(":")}else x=g.join(":");return s&&(x+="%"+s),x}return e}var W=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,$=void 0==="".match(/(){0}/)[1];function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={},r=!1!==t.iri?l:c;"suffix"===t.reference&&(e=(t.scheme?t.scheme+":":"")+"//"+e);var i=e.match(W);if(i){$?(n.scheme=i[1],n.userinfo=i[3],n.host=i[4],n.port=parseInt(i[5],10),n.path=i[6]||"",n.query=i[7],n.fragment=i[8],isNaN(n.port)&&(n.port=i[5])):(n.scheme=i[1]||void 0,n.userinfo=-1!==e.indexOf("@")?i[3]:void 0,n.host=-1!==e.indexOf("//")?i[4]:void 0,n.port=parseInt(i[5],10),n.path=i[6]||"",n.query=-1!==e.indexOf("?")?i[7]:void 0,n.fragment=-1!==e.indexOf("#")?i[8]:void 0,isNaN(n.port)&&(n.port=e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?i[4]:void 0)),n.host&&(n.host=V(G(n.host,r),r)),void 0!==n.scheme||void 0!==n.userinfo||void 0!==n.host||void 0!==n.port||n.path||void 0!==n.query?void 0===n.scheme?n.reference="relative":void 0===n.fragment?n.reference="absolute":n.reference="uri":n.reference="same-document",t.reference&&"suffix"!==t.reference&&t.reference!==n.reference&&(n.error=n.error||"URI is not a "+t.reference+" reference.");var s=F[(t.scheme||n.scheme||"").toLowerCase()];if(t.unicodeSupport||s&&s.unicodeSupport)H(n,r);else{if(n.host&&(t.domainHost||s&&s.domainHost))try{n.host=B.toASCII(n.host.replace(r.PCT_ENCODED,z).toLowerCase())}catch(e){n.error=n.error||"Host's domain name can not be converted to ASCII via punycode: "+e}H(n,c)}s&&s.parse&&s.parse(n,t)}else n.error=n.error||"URI can not be parsed.";return n}function Z(e,t){var n=!1!==t.iri?l:c,r=[];return void 0!==e.userinfo&&(r.push(e.userinfo),r.push("@")),void 0!==e.host&&r.push(V(G(String(e.host),n),n).replace(n.IPV6ADDRESS,(function(e,t,n){return"["+t+(n?"%25"+n:"")+"]"}))),"number"!=typeof e.port&&"string"!=typeof e.port||(r.push(":"),r.push(String(e.port))),r.length?r.join(""):void 0}var K=/^\.\.?\//,X=/^\/\.(\/|$)/,Y=/^\/\.\.(\/|$)/,J=/^\/?(?:.|\n)*?(?=\/|$)/;function Q(e){for(var t=[];e.length;)if(e.match(K))e=e.replace(K,"");else if(e.match(X))e=e.replace(X,"/");else if(e.match(Y))e=e.replace(Y,"/"),t.pop();else if("."===e||".."===e)e="";else{var n=e.match(J);if(!n)throw new Error("Unexpected dot segment condition");var r=n[0];e=e.slice(r.length),t.push(r)}return t.join("")}function ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.iri?l:c,r=[],i=F[(t.scheme||e.scheme||"").toLowerCase()];if(i&&i.serialize&&i.serialize(e,t),e.host)if(n.IPV6ADDRESS.test(e.host));else if(t.domainHost||i&&i.domainHost)try{e.host=t.iri?B.toUnicode(e.host):B.toASCII(e.host.replace(n.PCT_ENCODED,z).toLowerCase())}catch(n){e.error=e.error||"Host's domain name can not be converted to "+(t.iri?"Unicode":"ASCII")+" via punycode: "+n}H(e,n),"suffix"!==t.reference&&e.scheme&&(r.push(e.scheme),r.push(":"));var s=Z(e,t);if(void 0!==s&&("suffix"!==t.reference&&r.push("//"),r.push(s),e.path&&"/"!==e.path.charAt(0)&&r.push("/")),void 0!==e.path){var o=e.path;t.absolutePath||i&&i.absolutePath||(o=Q(o)),void 0===s&&(o=o.replace(/^\/\//,"/%2F")),r.push(o)}return void 0!==e.query&&(r.push("?"),r.push(e.query)),void 0!==e.fragment&&(r.push("#"),r.push(e.fragment)),r.join("")}function te(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={};return arguments[3]||(e=q(ee(e,n),n),t=q(ee(t,n),n)),!(n=n||{}).tolerant&&t.scheme?(r.scheme=t.scheme,r.userinfo=t.userinfo,r.host=t.host,r.port=t.port,r.path=Q(t.path||""),r.query=t.query):(void 0!==t.userinfo||void 0!==t.host||void 0!==t.port?(r.userinfo=t.userinfo,r.host=t.host,r.port=t.port,r.path=Q(t.path||""),r.query=t.query):(t.path?("/"===t.path.charAt(0)?r.path=Q(t.path):(void 0===e.userinfo&&void 0===e.host&&void 0===e.port||e.path?e.path?r.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+t.path:r.path=t.path:r.path="/"+t.path,r.path=Q(r.path)),r.query=t.query):(r.path=e.path,void 0!==t.query?r.query=t.query:r.query=e.query),r.userinfo=e.userinfo,r.host=e.host,r.port=e.port),r.scheme=e.scheme),r.fragment=t.fragment,r}function ne(e,t,n){var r=o({scheme:"null"},n);return ee(te(q(e,r),q(t,r),r,!0),r)}function re(e,t){return"string"==typeof e?e=ee(q(e,t),t):"object"===r(e)&&(e=q(ee(e,t),t)),e}function ie(e,t,n){return"string"==typeof e?e=ee(q(e,n),n):"object"===r(e)&&(e=ee(e,n)),"string"==typeof t?t=ee(q(t,n),n):"object"===r(t)&&(t=ee(t,n)),e===t}function se(e,t){return e&&e.toString().replace(t&&t.iri?l.ESCAPE:c.ESCAPE,j)}function oe(e,t){return e&&e.toString().replace(t&&t.iri?l.PCT_ENCODED:c.PCT_ENCODED,z)}var ae={scheme:"http",domainHost:!0,parse:function(e,t){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e},serialize:function(e,t){var n="https"===String(e.scheme).toLowerCase();return e.port!==(n?443:80)&&""!==e.port||(e.port=void 0),e.path||(e.path="/"),e}},ce={scheme:"https",domainHost:ae.domainHost,parse:ae.parse,serialize:ae.serialize};function le(e){return"boolean"==typeof e.secure?e.secure:"wss"===String(e.scheme).toLowerCase()}var ue={scheme:"ws",domainHost:!0,parse:function(e,t){var n=e;return n.secure=le(n),n.resourceName=(n.path||"/")+(n.query?"?"+n.query:""),n.path=void 0,n.query=void 0,n},serialize:function(e,t){if(e.port!==(le(e)?443:80)&&""!==e.port||(e.port=void 0),"boolean"==typeof e.secure&&(e.scheme=e.secure?"wss":"ws",e.secure=void 0),e.resourceName){var n=e.resourceName.split("?"),r=u(n,2),i=r[0],s=r[1];e.path=i&&"/"!==i?i:void 0,e.query=s,e.resourceName=void 0}return e.fragment=void 0,e}},de={scheme:"wss",domainHost:ue.domainHost,parse:ue.parse,serialize:ue.serialize},he={},pe="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",fe="[0-9A-Fa-f]",me=n(n("%[EFef]"+fe+"%"+fe+fe+"%"+fe+fe)+"|"+n("%[89A-Fa-f]"+fe+"%"+fe+fe)+"|"+n("%"+fe+fe)),ge="[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",ve=t("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",'[\\"\\\\]'),ye="[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",be=new RegExp(pe,"g"),xe=new RegExp(me,"g"),we=new RegExp(t("[^]",ge,"[\\.]",'[\\"]',ve),"g"),Ce=new RegExp(t("[^]",pe,ye),"g"),Ae=Ce;function Ie(e){var t=z(e);return t.match(be)?t:e}var _e={scheme:"mailto",parse:function e(t,n){var r=t,i=r.to=r.path?r.path.split(","):[];if(r.path=void 0,r.query){for(var s=!1,o={},a=r.query.split("&"),c=0,l=a.length;c<l;++c){var u=a[c].split("=");switch(u[0]){case"to":for(var d=u[1].split(","),h=0,p=d.length;h<p;++h)i.push(d[h]);break;case"subject":r.subject=oe(u[1],n);break;case"body":r.body=oe(u[1],n);break;default:s=!0,o[oe(u[0],n)]=oe(u[1],n)}}s&&(r.headers=o)}r.query=void 0;for(var f=0,m=i.length;f<m;++f){var g=i[f].split("@");if(g[0]=oe(g[0]),n.unicodeSupport)g[1]=oe(g[1],n).toLowerCase();else try{g[1]=B.toASCII(oe(g[1],n).toLowerCase())}catch(e){r.error=r.error||"Email address's domain name can not be converted to ASCII via punycode: "+e}i[f]=g.join("@")}return r},serialize:function e(t,n){var r=t,o=s(t.to);if(o){for(var a=0,c=o.length;a<c;++a){var l=String(o[a]),u=l.lastIndexOf("@"),d=l.slice(0,u).replace(xe,Ie).replace(xe,i).replace(we,j),h=l.slice(u+1);try{h=n.iri?B.toUnicode(h):B.toASCII(oe(h,n).toLowerCase())}catch(e){r.error=r.error||"Email address's domain name can not be converted to "+(n.iri?"Unicode":"ASCII")+" via punycode: "+e}o[a]=d+"@"+h}r.path=o.join(",")}var p=t.headers=t.headers||{};t.subject&&(p.subject=t.subject),t.body&&(p.body=t.body);var f=[];for(var m in p)p[m]!==he[m]&&f.push(m.replace(xe,Ie).replace(xe,i).replace(Ce,j)+"="+p[m].replace(xe,Ie).replace(xe,i).replace(Ae,j));return f.length&&(r.query=f.join("&")),r}},Se=/^([^\:]+)\:(.*)/,Me={scheme:"urn",parse:function(e,t){var n=e.path&&e.path.match(Se),r=e;if(n){var i=t.scheme||r.scheme||"urn",s=n[1].toLowerCase(),o=n[2],a=i+":"+(t.nid||s),c=F[a];r.nid=s,r.nss=o,r.path=void 0,c&&(r=c.parse(r,t))}else r.error=r.error||"URN can not be parsed.";return r},serialize:function(e,t){var n=t.scheme||e.scheme||"urn",r=e.nid,i=n+":"+(t.nid||r),s=F[i];s&&(e=s.serialize(e,t));var o=e,a=e.nss;return o.path=(r||t.nid)+":"+a,o}},Ee=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,De={scheme:"urn:uuid",parse:function(e,t){var n=e;return n.uuid=n.nss,n.nss=void 0,t.tolerant||n.uuid&&n.uuid.match(Ee)||(n.error=n.error||"UUID is not valid."),n},serialize:function(e,t){var n=e;return n.nss=(e.uuid||"").toLowerCase(),n}};F[ae.scheme]=ae,F[ce.scheme]=ce,F[ue.scheme]=ue,F[de.scheme]=de,F[_e.scheme]=_e,F[Me.scheme]=Me,F[De.scheme]=De,e.SCHEMES=F,e.pctEncChar=j,e.pctDecChars=z,e.parse=q,e.removeDotSegments=Q,e.serialize=ee,e.resolveComponents=te,e.resolve=ne,e.normalize=re,e.equal=ie,e.escapeComponent=se,e.unescapeComponent=oe,Object.defineProperty(e,"__esModule",{value:!0})}(t)},4049:function(e){e.exports=function(){"use strict";var e=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n=function(){function e(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();String.prototype.startsWith=String.prototype.startsWith||function(e){return 0===this.indexOf(e)},String.prototype.padStart=String.prototype.padStart||function(e,t){for(var n=this;n.length<e;)n=t+n;return n};var r={cb:"0f8ff",tqw:"aebd7",q:"-ffff",qmrn:"7fffd4",zr:"0ffff",bg:"5f5dc",bsq:"e4c4",bck:"---",nch:"ebcd",b:"--ff",bvt:"8a2be2",brwn:"a52a2a",brw:"deb887",ctb:"5f9ea0",hrt:"7fff-",chcT:"d2691e",cr:"7f50",rnw:"6495ed",crns:"8dc",crms:"dc143c",cn:"-ffff",Db:"--8b",Dcn:"-8b8b",Dgnr:"b8860b",Dgr:"a9a9a9",Dgrn:"-64-",Dkhk:"bdb76b",Dmgn:"8b-8b",Dvgr:"556b2f",Drng:"8c-",Drch:"9932cc",Dr:"8b--",Dsmn:"e9967a",Dsgr:"8fbc8f",DsTb:"483d8b",DsTg:"2f4f4f",Dtrq:"-ced1",Dvt:"94-d3",ppnk:"1493",pskb:"-bfff",mgr:"696969",grb:"1e90ff",rbrc:"b22222",rwht:"af0",stg:"228b22",chs:"-ff",gnsb:"dcdcdc",st:"8f8ff",g:"d7-",gnr:"daa520",gr:"808080",grn:"-8-0",grnw:"adff2f",hnw:"0fff0",htpn:"69b4",nnr:"cd5c5c",ng:"4b-82",vr:"0",khk:"0e68c",vnr:"e6e6fa",nrb:"0f5",wngr:"7cfc-",mnch:"acd",Lb:"add8e6",Lcr:"08080",Lcn:"e0ffff",Lgnr:"afad2",Lgr:"d3d3d3",Lgrn:"90ee90",Lpnk:"b6c1",Lsmn:"a07a",Lsgr:"20b2aa",Lskb:"87cefa",LsTg:"778899",Lstb:"b0c4de",Lw:"e0",m:"-ff-",mgrn:"32cd32",nn:"af0e6",mgnt:"-ff",mrn:"8--0",mqm:"66cdaa",mmb:"--cd",mmrc:"ba55d3",mmpr:"9370db",msg:"3cb371",mmsT:"7b68ee","":"-fa9a",mtr:"48d1cc",mmvt:"c71585",mnLb:"191970",ntc:"5fffa",mstr:"e4e1",mccs:"e4b5",vjw:"dead",nv:"--80",c:"df5e6",v:"808-0",vrb:"6b8e23",rng:"a5-",rngr:"45-",rch:"da70d6",pgnr:"eee8aa",pgrn:"98fb98",ptrq:"afeeee",pvtr:"db7093",ppwh:"efd5",pchp:"dab9",pr:"cd853f",pnk:"c0cb",pm:"dda0dd",pwrb:"b0e0e6",prp:"8-080",cc:"663399",r:"--",sbr:"bc8f8f",rb:"4169e1",sbrw:"8b4513",smn:"a8072",nbr:"4a460",sgrn:"2e8b57",ssh:"5ee",snn:"a0522d",svr:"c0c0c0",skb:"87ceeb",sTb:"6a5acd",sTgr:"708090",snw:"afa",n:"-ff7f",stb:"4682b4",tn:"d2b48c",t:"-8080",thst:"d8bfd8",tmT:"6347",trqs:"40e0d0",vt:"ee82ee",whT:"5deb3",wht:"",hts:"5f5f5",w:"-",wgrn:"9acd32"};function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(t>0?e.toFixed(t).replace(/0+$/,"").replace(/\.$/,""):e.toString())||"0"}var s=function(){function s(t,r,i,o){e(this,s);var a=this;function c(e){if(e.startsWith("hsl")){var t=e.match(/([\-\d\.e]+)/g).map(Number),r=n(t,4),i=r[0],o=r[1],c=r[2],l=r[3];void 0===l&&(l=1),i/=360,o/=100,c/=100,a.hsla=[i,o,c,l]}else if(e.startsWith("rgb")){var u=e.match(/([\-\d\.e]+)/g).map(Number),d=n(u,4),h=d[0],p=d[1],f=d[2],m=d[3];void 0===m&&(m=1),a.rgba=[h,p,f,m]}else e.startsWith("#")?a.rgba=s.hexToRgb(e):a.rgba=s.nameToRgb(e)||s.hexToRgb(e)}if(void 0===t);else if(Array.isArray(t))this.rgba=t;else if(void 0===i){var l=t&&""+t;l&&c(l.toLowerCase())}else this.rgba=[t,r,i,void 0===o?1:o]}return t(s,[{key:"printRGB",value:function(e){var t=(e?this.rgba:this.rgba.slice(0,3)).map((function(e,t){return i(e,3===t?3:0)}));return e?"rgba("+t+")":"rgb("+t+")"}},{key:"printHSL",value:function(e){var t=[360,100,100,1],n=["","%","%",""],r=(e?this.hsla:this.hsla.slice(0,3)).map((function(e,r){return i(e*t[r],3===r?3:1)+n[r]}));return e?"hsla("+r+")":"hsl("+r+")"}},{key:"printHex",value:function(e){var t=this.hex;return e?t:t.substring(0,7)}},{key:"rgba",get:function(){if(this._rgba)return this._rgba;if(!this._hsla)throw new Error("No color is set");return this._rgba=s.hslToRgb(this._hsla)},set:function(e){3===e.length&&(e[3]=1),this._rgba=e,this._hsla=null}},{key:"rgbString",get:function(){return this.printRGB()}},{key:"rgbaString",get:function(){return this.printRGB(!0)}},{key:"hsla",get:function(){if(this._hsla)return this._hsla;if(!this._rgba)throw new Error("No color is set");return this._hsla=s.rgbToHsl(this._rgba)},set:function(e){3===e.length&&(e[3]=1),this._hsla=e,this._rgba=null}},{key:"hslString",get:function(){return this.printHSL()}},{key:"hslaString",get:function(){return this.printHSL(!0)}},{key:"hex",get:function(){var e=this.rgba.map((function(e,t){return t<3?e.toString(16):Math.round(255*e).toString(16)}));return"#"+e.map((function(e){return e.padStart(2,"0")})).join("")},set:function(e){this.rgba=s.hexToRgb(e)}}],[{key:"hexToRgb",value:function(e){var t=(e.startsWith("#")?e.slice(1):e).replace(/^(\w{3})$/,"$1F").replace(/^(\w)(\w)(\w)(\w)$/,"$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/,"$1FF");if(!t.match(/^([0-9a-fA-F]{8})$/))throw new Error("Unknown hex color; "+e);var n=t.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map((function(e){return parseInt(e,16)}));return n[3]=n[3]/255,n}},{key:"nameToRgb",value:function(e){var t=e.toLowerCase().replace("at","T").replace(/[aeiouyldf]/g,"").replace("ght","L").replace("rk","D").slice(-5,4),n=r[t];return void 0===n?n:s.hexToRgb(n.replace(/\-/g,"00").padStart(6,"f"))}},{key:"rgbToHsl",value:function(e){var t=n(e,4),r=t[0],i=t[1],s=t[2],o=t[3];r/=255,i/=255,s/=255;var a=Math.max(r,i,s),c=Math.min(r,i,s),l=void 0,u=void 0,d=(a+c)/2;if(a===c)l=u=0;else{var h=a-c;switch(u=d>.5?h/(2-a-c):h/(a+c),a){case r:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-r)/h+2;break;case s:l=(r-i)/h+4}l/=6}return[l,u,d,o]}},{key:"hslToRgb",value:function(e){var t=n(e,4),r=t[0],i=t[1],s=t[2],o=t[3],a=void 0,c=void 0,l=void 0;if(0===i)a=c=l=s;else{var u=function(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e},d=s<.5?s*(1+i):s+i-s*i,h=2*s-d;a=u(h,d,r+1/3),c=u(h,d,r),l=u(h,d,r-1/3)}var p=[255*a,255*c,255*l].map(Math.round);return p[3]=o,p}}]),s}(),o=function(){function n(){e(this,n),this._events=[]}return t(n,[{key:"add",value:function(e,t,n){e.addEventListener(t,n,!1),this._events.push({target:e,type:t,handler:n})}},{key:"remove",value:function(e,t,r){this._events=this._events.filter((function(i){var s=!0;return e&&e!==i.target&&(s=!1),t&&t!==i.type&&(s=!1),r&&r!==i.handler&&(s=!1),s&&n._doRemove(i.target,i.type,i.handler),!s}))}},{key:"destroy",value:function(){this._events.forEach((function(e){return n._doRemove(e.target,e.type,e.handler)})),this._events=[]}}],[{key:"_doRemove",value:function(e,t,n){e.removeEventListener(t,n,!1)}}]),n}();function a(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function c(e,t,n){var r=!1;function i(e,t,n){return Math.max(t,Math.min(e,n))}function s(e,s,o){if(o&&(r=!0),r){e.preventDefault();var a=t.getBoundingClientRect(),c=a.width,l=a.height,u=s.clientX,d=s.clientY,h=i(u-a.left,0,c),p=i(d-a.top,0,l);n(h/c,p/l)}}function o(e,t){1===(void 0===e.buttons?e.which:e.buttons)?s(e,e,t):r=!1}function a(e,t){1===e.touches.length?s(e,e.touches[0],t):r=!1}e.add(t,"mousedown",(function(e){o(e,!0)})),e.add(t,"touchstart",(function(e){a(e,!0)})),e.add(window,"mousemove",o),e.add(t,"touchmove",a),e.add(window,"mouseup",(function(e){r=!1})),e.add(t,"touchend",(function(e){r=!1})),e.add(t,"touchcancel",(function(e){r=!1}))}var l="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M1,0H0V1H2V2H1' fill='lightgrey'/%3E%3C/svg%3E\")",u=360,d="keydown",h="mousedown",p="focusin";function f(e,t){return(t||document).querySelector(e)}function m(e){e.preventDefault(),e.stopPropagation()}function g(e,t,n,r,i){e.add(t,d,(function(e){n.indexOf(e.key)>=0&&(i&&m(e),r(e))}))}var v=document.createElement("style");return v.textContent=".picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:'';display:block;width:100%;height:0;-webkit-box-ordinal-group:2;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_sl::before{content:'';display:block;padding-bottom:100%}.layout_default .picker_editor{-webkit-box-ordinal-group:2;order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{-webkit-box-ordinal-group:2;order:1;-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{-webkit-box-ordinal-group:2;order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px dodgerblue}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:whitesmoke;background-image:-webkit-gradient(linear, left bottom, left top, from(gainsboro), to(transparent));background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:-webkit-gradient(linear, left bottom, left top, from(transparent), to(gainsboro));background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:white}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid white;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:-webkit-gradient(linear, left top, right top, from(red), color-stop(yellow), color-stop(lime), color-stop(cyan), color-stop(blue), color-stop(magenta), to(red));background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:-webkit-gradient(linear, left top, left bottom, from(white), color-stop(50%, rgba(255,255,255,0))),-webkit-gradient(linear, left bottom, left top, from(black), color-stop(50%, rgba(0,0,0,0))),-webkit-gradient(linear, left top, right top, from(gray), to(rgba(128,128,128,0)));background-image:linear-gradient(180deg, white, rgba(255,255,255,0) 50%),linear-gradient(0deg, black, rgba(0,0,0,0) 50%),linear-gradient(90deg, gray, rgba(128,128,128,0))}.picker_alpha,.picker_sample{position:relative;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M1,0H0V1H2V2H1' fill='lightgrey'/%3E%3C/svg%3E\") left top/contain white;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:'';position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,0.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:\"\";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}",document.documentElement.firstElementChild.appendChild(v),function(){function n(t){e(this,n),this.settings={popup:"right",layout:"default",alpha:!0,editor:!0,editorFormat:"hex",cancelButton:!1,defaultColor:"#0cf"},this._events=new o,this.onChange=null,this.onDone=null,this.onOpen=null,this.onClose=null,this.setOptions(t)}return t(n,[{key:"setOptions",value:function(e){var t=this;if(e){var n=this.settings;if(e instanceof HTMLElement)n.parent=e;else{n.parent&&e.parent&&n.parent!==e.parent&&(this._events.remove(n.parent),this._popupInited=!1),o(e,n),e.onChange&&(this.onChange=e.onChange),e.onDone&&(this.onDone=e.onDone),e.onOpen&&(this.onOpen=e.onOpen),e.onClose&&(this.onClose=e.onClose);var r=e.color||e.colour;r&&this._setColor(r)}var i=n.parent;if(i&&n.popup&&!this._popupInited){var s=function(e){return t.openHandler(e)};this._events.add(i,"click",s),g(this._events,i,[" ","Spacebar","Enter"],s),this._popupInited=!0}else e.parent&&!n.popup&&this.show()}function o(e,t,n){for(var r in e)n&&n.indexOf(r)>=0||(t[r]=e[r])}}},{key:"openHandler",value:function(e){if(this.show()){e&&e.preventDefault(),this.settings.parent.style.pointerEvents="none";var t=e&&e.type===d?this._domEdit:this.domElement;setTimeout((function(){return t.focus()}),100),this.onOpen&&this.onOpen(this.colour)}}},{key:"closeHandler",value:function(e){var t=e&&e.type,n=!1;if(e)if(t===h||t===p){var r=(this.__containedEvent||0)+100;e.timeStamp>r&&(n=!0)}else m(e),n=!0;else n=!0;n&&this.hide()&&(this.settings.parent.style.pointerEvents="",t!==h&&this.settings.parent.focus(),this.onClose&&this.onClose(this.colour))}},{key:"movePopup",value:function(e,t){this.closeHandler(),this.setOptions(e),t&&this.openHandler()}},{key:"setColor",value:function(e,t){this._setColor(e,{silent:t})}},{key:"_setColor",value:function e(t,n){if("string"==typeof t&&(t=t.trim()),t){n=n||{};var r=void 0;try{r=new s(t)}catch(e){if(n.failSilently)return;throw e}if(!this.settings.alpha){var i=r.hsla;i[3]=1,r.hsla=i}this.colour=this.color=r,this._setHSLA(null,null,null,null,n)}}},{key:"setColour",value:function(e,t){this.setColor(e,t)}},{key:"show",value:function(){if(!this.settings.parent)return!1;if(this.domElement){var e=this._toggleDOM(!0);return this._setPosition(),e}var t=a(this.settings.template||'<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>');return this.domElement=t,this._domH=f(".picker_hue",t),this._domSL=f(".picker_sl",t),this._domA=f(".picker_alpha",t),this._domEdit=f(".picker_editor input",t),this._domSample=f(".picker_sample",t),this._domOkay=f(".picker_done button",t),this._domCancel=f(".picker_cancel button",t),t.classList.add("layout_"+this.settings.layout),this.settings.alpha||t.classList.add("no_alpha"),this.settings.editor||t.classList.add("no_editor"),this.settings.cancelButton||t.classList.add("no_cancel"),this._ifPopup((function(){return t.classList.add("popup")})),this._setPosition(),this.colour?this._updateUI():this._setColor(this.settings.defaultColor),this._bindEvents(),!0}},{key:"hide",value:function(){return this._toggleDOM(!1)}},{key:"destroy",value:function(){this._events.destroy(),this.domElement&&this.settings.parent.removeChild(this.domElement)}},{key:"_bindEvents",value:function(){var e=this,t=this,n=this.domElement,r=this._events;function i(e,t,n){r.add(e,t,n)}i(n,"click",(function(e){return e.preventDefault()})),c(r,this._domH,(function(e,n){return t._setHSLA(e)})),c(r,this._domSL,(function(e,n){return t._setHSLA(null,e,1-n)})),this.settings.alpha&&c(r,this._domA,(function(e,n){return t._setHSLA(null,null,null,1-n)}));var s=this._domEdit;i(s,"input",(function(e){t._setColor(this.value,{fromEditor:!0,failSilently:!0})})),i(s,"focus",(function(e){var t=this;t.selectionStart===t.selectionEnd&&t.select()})),this._ifPopup((function(){var t=function(t){return e.closeHandler(t)};i(window,h,t),i(window,p,t),g(r,n,["Esc","Escape"],t);var s=function(t){e.__containedEvent=t.timeStamp};i(n,h,s),i(n,p,s),i(e._domCancel,"click",t)}));var o=function(t){e._ifPopup((function(){return e.closeHandler(t)})),e.onDone&&e.onDone(e.colour)};i(this._domOkay,"click",o),g(r,n,["Enter"],o)}},{key:"_setPosition",value:function(){var e=this.settings.parent,t=this.domElement;e!==t.parentNode&&e.appendChild(t),this._ifPopup((function(n){"static"===getComputedStyle(e).position&&(e.style.position="relative");var r=!0===n?"popup_right":"popup_"+n;["popup_top","popup_bottom","popup_left","popup_right"].forEach((function(e){e===r?t.classList.add(e):t.classList.remove(e)})),t.classList.add(r)}))}},{key:"_setHSLA",value:function(e,t,n,r,i){i=i||{};var s=this.colour,o=s.hsla;[e,t,n,r].forEach((function(e,t){(e||0===e)&&(o[t]=e)})),s.hsla=o,this._updateUI(i),this.onChange&&!i.silent&&this.onChange(s)}},{key:"_updateUI",value:function(e){if(this.domElement){e=e||{};var t=this.colour,n=t.hsla,r="hsl("+n[0]*u+", 100%, 50%)",i=t.hslString,s=t.hslaString,o=this._domH,a=this._domSL,c=this._domA,d=f(".picker_selector",o),h=f(".picker_selector",a),p=f(".picker_selector",c);w(o,d,n[0]),this._domSL.style.backgroundColor=this._domH.style.color=r,w(a,h,n[1]),C(a,h,1-n[2]),a.style.color=i,C(c,p,1-n[3]);var m=i,g=m.replace("hsl","hsla").replace(")",", 0)"),v="linear-gradient("+[m,g]+")";if(this._domA.style.backgroundImage=v+", "+l,!e.fromEditor){var y=this.settings.editorFormat,b=this.settings.alpha,x=void 0;switch(y){case"rgb":x=t.printRGB(b);break;case"hsl":x=t.printHSL(b);break;default:x=t.printHex(b)}this._domEdit.value=x}this._domSample.style.color=s}function w(e,t,n){t.style.left=100*n+"%"}function C(e,t,n){t.style.top=100*n+"%"}}},{key:"_ifPopup",value:function(e,t){this.settings.parent&&this.settings.popup?e&&e(this.settings.popup):t&&t()}},{key:"_toggleDOM",value:function(e){var t=this.domElement;if(!t)return!1;var n=e?"":"none",r=t.style.display!==n;return r&&(t.style.display=n),r}}],[{key:"StyleElement",get:function(){return v}}]),n}()}()},402:function(e,t){"use strict";function n(e,t){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator");this.message=e+" (char "+t+")",this.char=t,this.stack=(new Error).stack}Object.defineProperty(t,"__esModule",{value:!0}),((t.default=n).prototype=new Error).constructor=Error},3860:function(e,t,n){e.exports=n(7490).default},7490:function(e,t,n){"use strict";t.default=function(e){b="",x=0,w=(y=e).charAt(0),C="",A=h,M();var t=A;if(T(),E(),""===C)return b;if(t===A&&S()){for(var n="";t===A&&S();)n+=b=(0,s.insertBeforeLastWhitespace)(b,","),b="",T(),E();return"[\n".concat(n).concat(b,"\n]")}throw new i.default("Unexpected characters",x-C.length)};var r,i=(r=n(402))&&r.__esModule?r:{default:r},s=n(9422),o=0,a=1,c=2,l=3,u=4,d=5,h=6,p={"":!0,"{":!0,"}":!0,"[":!0,"]":!0,":":!0,",":!0,"(":!0,")":!0,";":!0,"+":!0},f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},m={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},g={null:"null",true:"true",false:"false"},v={None:"null",True:"true",False:"false"},y="",b="",x=0,w="",C="",A=h;function I(){x++,w=y.charAt(x)}function _(){I(),"\\"===w&&I()}function S(){return A===o&&("["===C||"{"===C)||A===c||A===a||A===l}function M(){b+=C,A=h,C="",p[w]?(A=o,C=w,I()):function(){if((0,s.isDigit)(w)||"-"===w){if(A=a,"-"===w){if(C+=w,I(),!(0,s.isDigit)(w))throw new i.default("Invalid number, digit expected",x)}else"0"===w&&(C+=w,I());for(;(0,s.isDigit)(w);)C+=w,I();if("."===w){if(C+=w,I(),!(0,s.isDigit)(w))throw new i.default("Invalid number, digit expected",x);for(;(0,s.isDigit)(w);)C+=w,I()}if("e"===w||"E"===w){if(C+=w,I(),"+"!==w&&"-"!==w||(C+=w,I()),!(0,s.isDigit)(w))throw new i.default("Invalid number, digit expected",x);for(;(0,s.isDigit)(w);)C+=w,I()}}else"\\"===w&&'"'===y.charAt(x+1)?(I(),D(_)):D(I)}(),A===u&&(C=(0,s.normalizeWhitespace)(C),M()),A===d&&(A=h,C="",M())}function E(){","===C&&(C="",A=h,M())}function D(e){if((0,s.isQuote)(w)){var t=(0,s.normalizeQuote)(w),n=(0,s.isSingleQuote)(w)?s.isSingleQuote:s.isDoubleQuote;for(C+='"',A=c,e();""!==w&&!n(w);)if("\\"===w)if(e(),void 0!==f[w])C+="\\"+w,e();else if("u"===w){C+="\\u",e();for(var r=0;r<4;r++){if(!(0,s.isHex)(w))throw new i.default("Invalid unicode character",x-C.length);C+=w,e()}}else{if("'"!==w)throw new i.default('Invalid escape character "\\'+w+'"',x);C+="'",e()}else m[w]?C+=m[w]:C+='"'===w?'\\"':w,e();if((0,s.normalizeQuote)(w)!==t)throw new i.default("End of string expected",x-C.length);return C+='"',void e()}!function(){if((0,s.isAlpha)(w))for(A=l;(0,s.isAlpha)(w)||(0,s.isDigit)(w)||"$"===w;)C+=w,I();else!function(){if((0,s.isWhitespace)(w)||(0,s.isSpecialWhitespace)(w))for(A=u;(0,s.isWhitespace)(w)||(0,s.isSpecialWhitespace)(w);)C+=w,I();else!function(){if("/"!==w||"*"!==y[x+1])if("/"!==w||"/"!==y[x+1])!function(){for(A=h;""!==w;)C+=w,I();throw new i.default('Syntax error in part "'+C+'"',x-C.length)}();else for(A=d;""!==w&&"\n"!==w;)C+=w,I();else{for(A=d;""!==w&&("*"!==w||"*"===w&&"/"!==y[x+1]);)C+=w,I();"*"===w&&"/"===y[x+1]&&(C+=w,I(),C+=w,I())}}()}()}()}function T(){if(A!==o||"{"!==C)!function(){if(A!==o||"["!==C)!function(){if(A!==c)(A!==a?function(){if(A!==l)!function(){throw""===C?new i.default("Unexpected end of json string",x-C.length):new i.default("Value expected",x-C.length)}();else if(g[C])M();else{if(v[C])return C=v[C],M();var e=C,t=b.length;if(C="",M(),A===o&&"("===C)return C="",M(),T(),A===o&&")"===C&&(C="",M(),A===o&&";"===C&&(C="",M()));for(b=(0,s.insertAtIndex)(b,'"'.concat(e),t);A===l||A===a;)M();b+='"'}}:M)();else for(M();A===o&&"+"===C;){var e;C="",M(),A===c&&(e=b.lastIndexOf('"'),b=b.substring(0,e)+C.substring(1),C="",M())}}();else if(M(),A!==o||"]"!==C){for(;;)if(T(),A===o&&","===C){if(M(),A===o&&"]"===C){b=(0,s.stripLastOccurrence)(b,",");break}if(""===C){b=(0,s.stripLastOccurrence)(b,",");break}}else{if(!S())break;b=(0,s.insertBeforeLastWhitespace)(b,",")}A===o&&"]"===C?M():b=(0,s.insertBeforeLastWhitespace)(b,"]")}else M()}();else if(M(),A!==o||"}"!==C){for(;;){if(A!==l&&A!==a||(A=c,C='"'.concat(C,'"')),A!==c)throw new i.default("Object key expected",x-C.length);if(M(),A===o&&":"===C)M();else{if(!S())throw new i.default("Colon expected",x-C.length);b=(0,s.insertBeforeLastWhitespace)(b,":")}if(T(),A===o&&","===C){if(M(),A===o&&"}"===C){b=(0,s.stripLastOccurrence)(b,",");break}if(""===C){b=(0,s.stripLastOccurrence)(b,",");break}}else{if(A!==c&&A!==a&&A!==l)break;b=(0,s.insertBeforeLastWhitespace)(b,",")}}A===o&&"}"===C?M():b=(0,s.insertBeforeLastWhitespace)(b,"}")}else M()}},9422:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAlpha=function(e){return i.test(e)},t.isHex=function(e){return s.test(e)},t.isDigit=function(e){return o.test(e)},t.isWhitespace=a,t.isSpecialWhitespace=c,t.normalizeWhitespace=function(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+=c(r)?" ":r}return t},t.isQuote=function(e){return!0===n[e]||!0===r[e]},t.isSingleQuote=function(e){return!0===n[e]},t.isDoubleQuote=function(e){return!0===r[e]},t.normalizeQuote=function(e){return!0!==n[e]?!0!==r[e]?e:'"':"'"},t.stripLastOccurrence=function(e,t){return-1!==(t=e.lastIndexOf(t))?e.substring(0,t)+e.substring(t+1):e},t.insertBeforeLastWhitespace=function(e,t){var n=e.length;if(!a(e[n-1]))return e+t;for(;a(e[n-1]);)n--;return e.substring(0,n)+t+e.substring(n)},t.insertAtIndex=function(e,t,n){return e.substring(0,n)+t+e.substring(n)};var n={"'":!0,"‘":!0,"’":!0,"`":!0,"´":!0},r={'"':!0,"“":!0,"”":!0},i=/^[a-zA-Z_]$/,s=/^[0-9a-fA-F]$/,o=/^[0-9]$/;function a(e){return" "===e||"\t"===e||"\n"===e||"\r"===e}function c(e){return" "===e||" "<=e&&e<=" "||" "===e||" "===e||"　"===e}},894:function(e){"use strict";e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#","description":"Meta-schema for $data reference (JSON Schema extension proposal)","type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}')},7171:function(e){"use strict";e.exports=JSON.parse('{"id":"http://json-schema.org/draft-04/schema#","$schema":"http://json-schema.org/draft-04/schema#","description":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"positiveInteger":{"type":"integer","minimum":0},"positiveIntegerDefault0":{"allOf":[{"$ref":"#/definitions/positiveInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"minItems":1,"uniqueItems":true}},"type":"object","properties":{"id":{"type":"string"},"$schema":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":{},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"boolean","default":false},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"boolean","default":false},"maxLength":{"$ref":"#/definitions/positiveInteger"},"minLength":{"$ref":"#/definitions/positiveIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":{}},"maxItems":{"$ref":"#/definitions/positiveInteger"},"minItems":{"$ref":"#/definitions/positiveIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"maxProperties":{"$ref":"#/definitions/positiveInteger"},"minProperties":{"$ref":"#/definitions/positiveIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"anyOf":[{"type":"boolean"},{"$ref":"#"}],"default":{}},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"enum":{"type":"array","minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"dependencies":{"exclusiveMaximum":["maximum"],"exclusiveMinimum":["minimum"]},"default":{}}')},6273:function(e){"use strict";e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-06/schema#","$id":"http://json-schema.org/draft-06/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"title":{"type":"string"},"description":{"type":"string"},"default":{},"examples":{"type":"array","items":{}},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":{}},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":{},"enum":{"type":"array","minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":{}}')},6680:function(e){"use strict";e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"http://json-schema.org/draft-07/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":true,"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":true},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":true},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"propertyNames":{"format":"regex"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":true,"enum":{"type":"array","items":true,"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#"},"then":{"$ref":"#"},"else":{"$ref":"#"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":true}')}},n={},e.amdD=function(){throw new Error("define cannot be used indirect")},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},e(3161);function e(r){var i=n[r];return void 0!==i||(i=n[r]={id:r,loaded:!1,exports:{}},t[r].call(i.exports,i,i.exports,e),i.loaded=!0),i.exports}var t,n}()},83465:(e,t,n)=>{e=n.nmd(e);var r="__lodash_hash_undefined__",i=9007199254740991,s="[object Arguments]",o="[object Boolean]",a="[object Date]",c="[object Function]",l="[object GeneratorFunction]",u="[object Map]",d="[object Number]",h="[object Object]",p="[object Promise]",f="[object RegExp]",m="[object Set]",g="[object String]",v="[object Symbol]",y="[object WeakMap]",b="[object ArrayBuffer]",x="[object DataView]",w="[object Float32Array]",C="[object Float64Array]",A="[object Int8Array]",I="[object Int16Array]",_="[object Int32Array]",S="[object Uint8Array]",M="[object Uint8ClampedArray]",E="[object Uint16Array]",D="[object Uint32Array]",T=/\w*$/,N=/^\[object .+?Constructor\]$/,O=/^(?:0|[1-9]\d*)$/,P={};P[s]=P["[object Array]"]=P[b]=P[x]=P[o]=P[a]=P[w]=P[C]=P[A]=P[I]=P[_]=P[u]=P[d]=P[h]=P[f]=P[m]=P[g]=P[v]=P[S]=P[M]=P[E]=P[D]=!0,P["[object Error]"]=P[c]=P[y]=!1;var R="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,k="object"==typeof self&&self&&self.Object===Object&&self,L=R||k||Function("return this")(),B=t&&!t.nodeType&&t,F=B&&e&&!e.nodeType&&e,j=F&&F.exports===B;function z(e,t){return e.set(t[0],t[1]),e}function H(e,t){return e.add(t),e}function U(e,t,n,r){var i=-1,s=e?e.length:0;for(r&&s&&(n=e[++i]);++i<s;)n=t(n,e[i],i,e);return n}function G(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function V(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function W(e,t){return function(n){return e(t(n))}}function $(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}var q,Z=Array.prototype,K=Function.prototype,X=Object.prototype,Y=L["__core-js_shared__"],J=(q=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",Q=K.toString,ee=X.hasOwnProperty,te=X.toString,ne=RegExp("^"+Q.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=j?L.Buffer:void 0,ie=L.Symbol,se=L.Uint8Array,oe=W(Object.getPrototypeOf,Object),ae=Object.create,ce=X.propertyIsEnumerable,le=Z.splice,ue=Object.getOwnPropertySymbols,de=re?re.isBuffer:void 0,he=W(Object.keys,Object),pe=Fe(L,"DataView"),fe=Fe(L,"Map"),me=Fe(L,"Promise"),ge=Fe(L,"Set"),ve=Fe(L,"WeakMap"),ye=Fe(Object,"create"),be=Ge(pe),xe=Ge(fe),we=Ge(me),Ce=Ge(ge),Ae=Ge(ve),Ie=ie?ie.prototype:void 0,_e=Ie?Ie.valueOf:void 0;function Se(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Me(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Ee(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function De(e){this.__data__=new Me(e)}function Te(e,t){var n=We(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&$e(e)}(e)&&ee.call(e,"callee")&&(!ce.call(e,"callee")||te.call(e)==s)}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],r=n.length,i=!!r;for(var o in e)!t&&!ee.call(e,o)||i&&("length"==o||He(o,r))||n.push(o);return n}function Ne(e,t,n){var r=e[t];ee.call(e,t)&&Ve(r,n)&&(void 0!==n||t in e)||(e[t]=n)}function Oe(e,t){for(var n=e.length;n--;)if(Ve(e[n][0],t))return n;return-1}function Pe(e,t,n,r,i,p,y){var N;if(r&&(N=p?r(e,i,p,y):r(e)),void 0!==N)return N;if(!Ke(e))return e;var O=We(e);if(O){if(N=function(e){var t=e.length,n=e.constructor(t);t&&"string"==typeof e[0]&&ee.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!t)return function(e,t){var n=-1,r=e.length;t||(t=Array(r));for(;++n<r;)t[n]=e[n];return t}(e,N)}else{var R=ze(e),k=R==c||R==l;if(qe(e))return function(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}(e,t);if(R==h||R==s||k&&!p){if(G(e))return p?e:{};if(N=function(e){return"function"!=typeof e.constructor||Ue(e)?{}:(t=oe(e),Ke(t)?ae(t):{});var t}(k?{}:e),!t)return function(e,t){return Le(e,je(e),t)}(e,function(e,t){return e&&Le(t,Xe(t),e)}(N,e))}else{if(!P[R])return p?e:{};N=function(e,t,n,r){var i=e.constructor;switch(t){case b:return ke(e);case o:case a:return new i(+e);case x:return function(e,t){var n=t?ke(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,r);case w:case C:case A:case I:case _:case S:case M:case E:case D:return function(e,t){var n=t?ke(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}(e,r);case u:return function(e,t,n){return U(t?n(V(e),!0):V(e),z,new e.constructor)}(e,r,n);case d:case g:return new i(e);case f:return function(e){var t=new e.constructor(e.source,T.exec(e));return t.lastIndex=e.lastIndex,t}(e);case m:return function(e,t,n){return U(t?n($(e),!0):$(e),H,new e.constructor)}(e,r,n);case v:return s=e,_e?Object(_e.call(s)):{}}var s}(e,R,Pe,t)}}y||(y=new De);var L=y.get(e);if(L)return L;if(y.set(e,N),!O)var B=n?function(e){return function(e,t,n){var r=t(e);return We(e)?r:function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}(r,n(e))}(e,Xe,je)}(e):Xe(e);return function(e,t){for(var n=-1,r=e?e.length:0;++n<r&&!1!==t(e[n],n,e););}(B||e,(function(i,s){B&&(i=e[s=i]),Ne(N,s,Pe(i,t,n,r,s,e,y))})),N}function Re(e){return!(!Ke(e)||(t=e,J&&J in t))&&(Ze(e)||G(e)?ne:N).test(Ge(e));var t}function ke(e){var t=new e.constructor(e.byteLength);return new se(t).set(new se(e)),t}function Le(e,t,n,r){n||(n={});for(var i=-1,s=t.length;++i<s;){var o=t[i],a=r?r(n[o],e[o],o,n,e):void 0;Ne(n,o,void 0===a?e[o]:a)}return n}function Be(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function Fe(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return Re(n)?n:void 0}Se.prototype.clear=function(){this.__data__=ye?ye(null):{}},Se.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Se.prototype.get=function(e){var t=this.__data__;if(ye){var n=t[e];return n===r?void 0:n}return ee.call(t,e)?t[e]:void 0},Se.prototype.has=function(e){var t=this.__data__;return ye?void 0!==t[e]:ee.call(t,e)},Se.prototype.set=function(e,t){return this.__data__[e]=ye&&void 0===t?r:t,this},Me.prototype.clear=function(){this.__data__=[]},Me.prototype.delete=function(e){var t=this.__data__,n=Oe(t,e);return!(n<0)&&(n==t.length-1?t.pop():le.call(t,n,1),!0)},Me.prototype.get=function(e){var t=this.__data__,n=Oe(t,e);return n<0?void 0:t[n][1]},Me.prototype.has=function(e){return Oe(this.__data__,e)>-1},Me.prototype.set=function(e,t){var n=this.__data__,r=Oe(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},Ee.prototype.clear=function(){this.__data__={hash:new Se,map:new(fe||Me),string:new Se}},Ee.prototype.delete=function(e){return Be(this,e).delete(e)},Ee.prototype.get=function(e){return Be(this,e).get(e)},Ee.prototype.has=function(e){return Be(this,e).has(e)},Ee.prototype.set=function(e,t){return Be(this,e).set(e,t),this},De.prototype.clear=function(){this.__data__=new Me},De.prototype.delete=function(e){return this.__data__.delete(e)},De.prototype.get=function(e){return this.__data__.get(e)},De.prototype.has=function(e){return this.__data__.has(e)},De.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Me){var r=n.__data__;if(!fe||r.length<199)return r.push([e,t]),this;n=this.__data__=new Ee(r)}return n.set(e,t),this};var je=ue?W(ue,Object):function(){return[]},ze=function(e){return te.call(e)};function He(e,t){return!!(t=null==t?i:t)&&("number"==typeof e||O.test(e))&&e>-1&&e%1==0&&e<t}function Ue(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||X)}function Ge(e){if(null!=e){try{return Q.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ve(e,t){return e===t||e!=e&&t!=t}(pe&&ze(new pe(new ArrayBuffer(1)))!=x||fe&&ze(new fe)!=u||me&&ze(me.resolve())!=p||ge&&ze(new ge)!=m||ve&&ze(new ve)!=y)&&(ze=function(e){var t=te.call(e),n=t==h?e.constructor:void 0,r=n?Ge(n):void 0;if(r)switch(r){case be:return x;case xe:return u;case we:return p;case Ce:return m;case Ae:return y}return t});var We=Array.isArray;function $e(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}(e.length)&&!Ze(e)}var qe=de||function(){return!1};function Ze(e){var t=Ke(e)?te.call(e):"";return t==c||t==l}function Ke(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Xe(e){return $e(e)?Te(e):function(e){if(!Ue(e))return he(e);var t=[];for(var n in Object(e))ee.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)}e.exports=function(e){return Pe(e,!0,!0)}},62705:(e,t,n)=>{var r=n(55639).Symbol;e.exports=r},44239:(e,t,n)=>{var r=n(62705),i=n(89607),s=n(2333),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?i(e):s(e)}},31957:(e,t,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},85924:(e,t,n)=>{var r=n(5569)(Object.getPrototypeOf,Object);e.exports=r},89607:(e,t,n)=>{var r=n(62705),i=Object.prototype,s=i.hasOwnProperty,o=i.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=s.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var i=o.call(e);return r&&(t?e[a]=n:delete e[a]),i}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:e=>{e.exports=function(e,t){return function(n){return e(t(n))}}},55639:(e,t,n)=>{var r=n(31957),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")();e.exports=s},1469:e=>{var t=Array.isArray;e.exports=t},37005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},68630:(e,t,n)=>{var r=n(44239),i=n(85924),s=n(37005),o=Function.prototype,a=Object.prototype,c=o.toString,l=a.hasOwnProperty,u=c.call(Object);e.exports=function(e){if(!s(e)||"[object Object]"!=r(e))return!1;var t=i(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==u}},35666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),o=new E(r||[]);return s._invoke=function(e,t,n){var r=d;return function(i,s){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw s;return T()}for(n.method=i,n.arg=s;;){var o=n.delegate;if(o){var a=_(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?f:h,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,o),s}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",h="suspendedYield",p="executing",f="completed",m={};function g(){}function v(){}function y(){}var b={};c(b,s,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(D([])));w&&w!==n&&r.call(w,s)&&(b=w);var C=y.prototype=g.prototype=Object.create(b);function A(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(i,s,o,a){var c=u(e[i],e,s);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,a)}))}a(c.arg)}var i;this._invoke=function(e,r){function s(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(s,s):s()}}function _(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=u(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function D(e){if(e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:T}}function T(){return{value:t,done:!0}}return v.prototype=y,c(C,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,a,"GeneratorFunction")),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}},A(I.prototype),c(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new I(l(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},A(C),c(C,a,"Generator"),c(C,s,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=D,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;M(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:D(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},36377:(e,t,n)=>{var r=n(84832),i=n(68652),s=n(90801),o=n(92030),a=n(3618),c=n(89049),l=n(51971);l.alea=r,l.xor128=i,l.xorwow=s,l.xorshift7=o,l.xor4096=a,l.tychei=c,e.exports=l},84832:function(e,t,n){var r;!function(e,i,s){function o(e){var t,n=this,r=(t=4022871197,function(e){e=String(e);for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));r-=t=r>>>0,t=(r*=t)>>>0,t+=4294967296*(r-=t)}return 2.3283064365386963e-10*(t>>>0)});n.next=function(){var e=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1),r=null}function a(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function c(e,t){var n=new o(e),r=t&&t.state,i=n.next;return i.int32=function(){return 4294967296*n.next()|0},i.double=function(){return i()+11102230246251565e-32*(2097152*i()|0)},i.quick=i,r&&("object"==typeof r&&a(r,n),i.state=function(){return a(n,{})}),i}i&&i.exports?i.exports=c:n.amdD&&n.amdO?void 0===(r=function(){return c}.call(t,n,t,i))||(i.exports=r):this.alea=c}(0,e=n.nmd(e),n.amdD)},89049:function(e,t,n){var r;!function(e,i,s){function o(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function a(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function c(e,t){var n=new o(e),r=t&&t.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},i.int32=n.next,i.quick=i,r&&("object"==typeof r&&a(r,n),i.state=function(){return a(n,{})}),i}i&&i.exports?i.exports=c:n.amdD&&n.amdO?void 0===(r=function(){return c}.call(t,n,t,i))||(i.exports=r):this.tychei=c}(0,e=n.nmd(e),n.amdD)},68652:function(e,t,n){var r;!function(e,i,s){function o(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function a(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function c(e,t){var n=new o(e),r=t&&t.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},i.int32=n.next,i.quick=i,r&&("object"==typeof r&&a(r,n),i.state=function(){return a(n,{})}),i}i&&i.exports?i.exports=c:n.amdD&&n.amdO?void 0===(r=function(){return c}.call(t,n,t,i))||(i.exports=r):this.xor128=c}(0,e=n.nmd(e),n.amdD)},3618:function(e,t,n){var r;!function(e,i,s){function o(e){var t=this;t.next=function(){var e,n,r=t.w,i=t.X,s=t.i;return t.w=r=r+1640531527|0,n=i[s+34&127],e=i[s=s+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=i[s]=n^e,t.i=s,n+(r^r>>>16)|0},function(e,t){var n,r,i,s,o,a=[],c=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,c=Math.max(c,t.length)),i=0,s=-32;s<c;++s)t&&(r^=t.charCodeAt((s+32)%t.length)),0===s&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,s>=0&&(o=o+1640531527|0,i=0==(n=a[127&s]^=r+o)?i+1:0);for(i>=128&&(a[127&(t&&t.length||0)]=-1),i=127,s=512;s>0;--s)r=a[i+34&127],n=a[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,a[i]=r^n;e.w=o,e.X=a,e.i=i}(t,e)}function a(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function c(e,t){null==e&&(e=+new Date);var n=new o(e),r=t&&t.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},i.int32=n.next,i.quick=i,r&&(r.X&&a(r,n),i.state=function(){return a(n,{})}),i}i&&i.exports?i.exports=c:n.amdD&&n.amdO?void 0===(r=function(){return c}.call(t,n,t,i))||(i.exports=r):this.xor4096=c}(0,e=n.nmd(e),n.amdD)},92030:function(e,t,n){var r;!function(e,i,s){function o(e){var t=this;t.next=function(){var e,n,r=t.x,i=t.i;return e=r[i],n=(e^=e>>>7)^e<<24,n^=(e=r[i+1&7])^e>>>10,n^=(e=r[i+3&7])^e>>>3,n^=(e=r[i+4&7])^e<<7,e=r[i+7&7],n^=(e^=e<<13)^e<<9,r[i]=n,t.i=i+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function a(e,t){return t.x=e.x.slice(),t.i=e.i,t}function c(e,t){null==e&&(e=+new Date);var n=new o(e),r=t&&t.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},i.int32=n.next,i.quick=i,r&&(r.x&&a(r,n),i.state=function(){return a(n,{})}),i}i&&i.exports?i.exports=c:n.amdD&&n.amdO?void 0===(r=function(){return c}.call(t,n,t,i))||(i.exports=r):this.xorshift7=c}(0,e=n.nmd(e),n.amdD)},90801:function(e,t,n){var r;!function(e,i,s){function o(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function a(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function c(e,t){var n=new o(e),r=t&&t.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do{var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},i.int32=n.next,i.quick=i,r&&("object"==typeof r&&a(r,n),i.state=function(){return a(n,{})}),i}i&&i.exports?i.exports=c:n.amdD&&n.amdO?void 0===(r=function(){return c}.call(t,n,t,i))||(i.exports=r):this.xorwow=c}(0,e=n.nmd(e),n.amdD)},51971:function(e,t,n){var r;!function(i,s,o){var a,c=256,l=o.pow(c,6),u=o.pow(2,52),d=2*u,h=255;function p(e,t,n){var r=[],h=v(g((t=1==t?{entropy:!0}:t||{}).entropy?[e,y(s)]:null==e?function(){try{var e;return a&&(e=a.randomBytes)?e=e(c):(e=new Uint8Array(c),(i.crypto||i.msCrypto).getRandomValues(e)),y(e)}catch(e){var t=i.navigator,n=t&&t.plugins;return[+new Date,i,n,i.screen,y(s)]}}():e,3),r),p=new f(r),b=function(){for(var e=p.g(6),t=l,n=0;e<u;)e=(e+n)*c,t*=c,n=p.g(1);for(;e>=d;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return 0|p.g(4)},b.quick=function(){return p.g(4)/4294967296},b.double=b,v(y(p.S),s),(t.pass||n||function(e,t,n,r){return r&&(r.S&&m(r,p),e.state=function(){return m(p,{})}),n?(o.random=e,t):e})(b,h,"global"in t?t.global:this==o,t.state)}function f(e){var t,n=e.length,r=this,i=0,s=r.i=r.j=0,o=r.S=[];for(n||(e=[n++]);i<c;)o[i]=i++;for(i=0;i<c;i++)o[i]=o[s=h&s+e[i%n]+(t=o[i])],o[s]=t;(r.g=function(e){for(var t,n=0,i=r.i,s=r.j,o=r.S;e--;)t=o[i=h&i+1],n=n*c+o[h&(o[i]=o[s=h&s+t])+(o[s]=t)];return r.i=i,r.j=s,n})(c)}function m(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function g(e,t){var n,r=[],i=typeof e;if(t&&"object"==i)for(n in e)try{r.push(g(e[n],t-1))}catch(e){}return r.length?r:"string"==i?e:e+"\0"}function v(e,t){for(var n,r=e+"",i=0;i<r.length;)t[h&i]=h&(n^=19*t[h&i])+r.charCodeAt(i++);return y(t)}function y(e){return String.fromCharCode.apply(0,e)}if(v(o.random(),s),e.exports){e.exports=p;try{a=n(75042)}catch(e){}}else void 0===(r=function(){return p}.call(t,n,t,e))||(e.exports=r)}("undefined"!=typeof self?self:this,[],Math)},2212:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ACESFilmicToneMapping:()=>ne,AddEquation:()=>_,AddOperation:()=>Y,AdditiveAnimationBlendMode:()=>$t,AdditiveBlending:()=>w,AlphaFormat:()=>Le,AlwaysDepth:()=>U,AlwaysStencilFunc:()=>In,AmbientLight:()=>oh,AmbientLightProbe:()=>Ah,AnimationClip:()=>Nd,AnimationLoader:()=>jd,AnimationMixer:()=>tp,AnimationObjectGroup:()=>Qh,AnimationUtils:()=>yd,ArcCurve:()=>Jl,ArrayCamera:()=>Cc,ArrowHelper:()=>Wp,Audio:()=>Rh,AudioAnalyser:()=>zh,AudioContext:()=>xh,AudioListener:()=>Ph,AudioLoader:()=>wh,AxesHelper:()=>$p,AxisHelper:()=>Cf,BackSide:()=>m,BasicDepthPacking:()=>sn,BasicShadowMap:()=>u,BinaryTextureLoader:()=>Mf,Bone:()=>al,BooleanKeyframeTrack:()=>Id,BoundingBoxHelper:()=>Af,Box2:()=>dp,Box3:()=>mr,Box3Helper:()=>zp,BoxBufferGeometry:()=>Cs,BoxGeometry:()=>Cs,BoxHelper:()=>jp,BufferAttribute:()=>Fi,BufferGeometry:()=>ns,BufferGeometryLoader:()=>ph,ByteType:()=>_e,Cache:()=>Pd,Camera:()=>Ms,CameraHelper:()=>Lp,CanvasRenderer:()=>Df,CanvasTexture:()=>Fl,CatmullRomCurve3:()=>iu,CineonToneMapping:()=>te,CircleBufferGeometry:()=>zl,CircleGeometry:()=>zl,ClampToEdgeWrapping:()=>he,Clock:()=>Mh,Color:()=>Ri,ColorKeyframeTrack:()=>_d,CompressedTexture:()=>Bl,CompressedTextureLoader:()=>zd,ConeBufferGeometry:()=>Ul,ConeGeometry:()=>Ul,CubeCamera:()=>Ts,CubeReflectionMapping:()=>se,CubeRefractionMapping:()=>oe,CubeTexture:()=>Ns,CubeTextureLoader:()=>Ud,CubeUVReflectionMapping:()=>le,CubeUVRefractionMapping:()=>ue,CubicBezierCurve:()=>cu,CubicBezierCurve3:()=>lu,CubicInterpolant:()=>xd,CullFaceBack:()=>a,CullFaceFront:()=>c,CullFaceFrontBack:()=>l,CullFaceNone:()=>o,Curve:()=>Xl,CurvePath:()=>gu,CustomBlending:()=>I,CustomToneMapping:()=>re,CylinderBufferGeometry:()=>Hl,CylinderGeometry:()=>Hl,Cylindrical:()=>lp,DataTexture:()=>cl,DataTexture2DArray:()=>Do,DataTexture3D:()=>ko,DataTextureLoader:()=>Gd,DataUtils:()=>Xp,DecrementStencilOp:()=>pn,DecrementWrapStencilOp:()=>mn,DefaultLoadingManager:()=>kd,DepthFormat:()=>Ue,DepthStencilFormat:()=>Ge,DepthTexture:()=>jl,DirectionalLight:()=>sh,DirectionalLightHelper:()=>Pp,DiscreteInterpolant:()=>Cd,DodecahedronBufferGeometry:()=>Vl,DodecahedronGeometry:()=>Vl,DoubleSide:()=>g,DstAlphaFactor:()=>L,DstColorFactor:()=>F,DynamicBufferAttribute:()=>hf,DynamicCopyUsage:()=>On,DynamicDrawUsage:()=>Sn,DynamicReadUsage:()=>Dn,EdgesGeometry:()=>Kl,EdgesHelper:()=>If,EllipseCurve:()=>Yl,EqualDepth:()=>W,EqualStencilFunc:()=>bn,EquirectangularReflectionMapping:()=>ae,EquirectangularRefractionMapping:()=>ce,Euler:()=>Qr,EventDispatcher:()=>Ln,ExtrudeBufferGeometry:()=>qu,ExtrudeGeometry:()=>qu,FaceColors:()=>ef,FileLoader:()=>Fd,FlatShading:()=>v,Float16BufferAttribute:()=>$i,Float32Attribute:()=>xf,Float32BufferAttribute:()=>qi,Float64Attribute:()=>wf,Float64BufferAttribute:()=>Zi,FloatType:()=>Te,Fog:()=>Nc,FogExp2:()=>Tc,Font:()=>Lf,FontLoader:()=>kf,FrontSide:()=>f,Frustum:()=>js,GLBufferAttribute:()=>ip,GLSL1:()=>Rn,GLSL3:()=>kn,GammaEncoding:()=>Jt,GreaterDepth:()=>q,GreaterEqualDepth:()=>$,GreaterEqualStencilFunc:()=>An,GreaterStencilFunc:()=>wn,GridHelper:()=>Ep,Group:()=>Ac,HalfFloatType:()=>Ne,HemisphereLight:()=>$d,HemisphereLightHelper:()=>Mp,HemisphereLightProbe:()=>Ch,IcosahedronBufferGeometry:()=>Ku,IcosahedronGeometry:()=>Ku,ImageBitmapLoader:()=>yh,ImageLoader:()=>Hd,ImageUtils:()=>rr,ImmediateRenderObject:()=>mp,IncrementStencilOp:()=>hn,IncrementWrapStencilOp:()=>fn,InstancedBufferAttribute:()=>hl,InstancedBufferGeometry:()=>hh,InstancedInterleavedBuffer:()=>rp,InstancedMesh:()=>vl,Int16Attribute:()=>gf,Int16BufferAttribute:()=>Ui,Int32Attribute:()=>yf,Int32BufferAttribute:()=>Vi,Int8Attribute:()=>pf,Int8BufferAttribute:()=>ji,IntType:()=>Ee,InterleavedBuffer:()=>Pc,InterleavedBufferAttribute:()=>kc,Interpolant:()=>bd,InterpolateDiscrete:()=>jt,InterpolateLinear:()=>zt,InterpolateSmooth:()=>Ht,InvertStencilOp:()=>gn,JSONLoader:()=>Tf,KeepStencilOp:()=>un,KeyframeTrack:()=>Ad,LOD:()=>el,LatheBufferGeometry:()=>Xu,LatheGeometry:()=>Xu,Layers:()=>ei,LensFlare:()=>Of,LessDepth:()=>G,LessEqualDepth:()=>V,LessEqualStencilFunc:()=>xn,LessStencilFunc:()=>yn,Light:()=>Wd,LightProbe:()=>lh,Line:()=>Il,Line3:()=>fp,LineBasicMaterial:()=>yl,LineCurve:()=>uu,LineCurve3:()=>du,LineDashedMaterial:()=>gd,LineLoop:()=>El,LinePieces:()=>Jp,LineSegments:()=>Ml,LineStrip:()=>Yp,LinearEncoding:()=>Xt,LinearFilter:()=>be,LinearInterpolant:()=>wd,LinearMipMapLinearFilter:()=>Ae,LinearMipMapNearestFilter:()=>we,LinearMipmapLinearFilter:()=>Ce,LinearMipmapNearestFilter:()=>xe,LinearToneMapping:()=>Q,Loader:()=>Ld,LoaderUtils:()=>dh,LoadingManager:()=>Rd,LogLuvEncoding:()=>en,LoopOnce:()=>Lt,LoopPingPong:()=>Ft,LoopRepeat:()=>Bt,LuminanceAlphaFormat:()=>ze,LuminanceFormat:()=>je,MOUSE:()=>i,Material:()=>Mi,MaterialLoader:()=>uh,Math:()=>Kn,MathUtils:()=>Kn,Matrix3:()=>Yn,Matrix4:()=>Gr,MaxEquation:()=>D,Mesh:()=>xs,MeshBasicMaterial:()=>ki,MeshDepthMaterial:()=>gc,MeshDistanceMaterial:()=>vc,MeshFaceMaterial:()=>nf,MeshLambertMaterial:()=>fd,MeshMatcapMaterial:()=>md,MeshNormalMaterial:()=>pd,MeshPhongMaterial:()=>dd,MeshPhysicalMaterial:()=>ud,MeshStandardMaterial:()=>ld,MeshToonMaterial:()=>hd,MinEquation:()=>E,MirroredRepeatWrapping:()=>pe,MixOperation:()=>X,MultiMaterial:()=>rf,MultiplyBlending:()=>A,MultiplyOperation:()=>K,NearestFilter:()=>fe,NearestMipMapLinearFilter:()=>ye,NearestMipMapNearestFilter:()=>ge,NearestMipmapLinearFilter:()=>ve,NearestMipmapNearestFilter:()=>me,NeverDepth:()=>H,NeverStencilFunc:()=>vn,NoBlending:()=>b,NoColors:()=>Qp,NoToneMapping:()=>J,NormalAnimationBlendMode:()=>Wt,NormalBlending:()=>x,NotEqualDepth:()=>Z,NotEqualStencilFunc:()=>Cn,NumberKeyframeTrack:()=>Sd,Object3D:()=>fi,ObjectLoader:()=>fh,ObjectSpaceNormalMap:()=>cn,OctahedronBufferGeometry:()=>Yu,OctahedronGeometry:()=>Yu,OneFactor:()=>N,OneMinusDstAlphaFactor:()=>B,OneMinusDstColorFactor:()=>j,OneMinusSrcAlphaFactor:()=>k,OneMinusSrcColorFactor:()=>P,OrthographicCamera:()=>Js,PCFShadowMap:()=>d,PCFSoftShadowMap:()=>h,PMREMGenerator:()=>mo,ParametricGeometry:()=>Pf,Particle:()=>of,ParticleBasicMaterial:()=>lf,ParticleSystem:()=>af,ParticleSystemMaterial:()=>uf,Path:()=>vu,PerspectiveCamera:()=>Es,Plane:()=>Ls,PlaneBufferGeometry:()=>Us,PlaneGeometry:()=>Us,PlaneHelper:()=>Hp,PointCloud:()=>sf,PointCloudMaterial:()=>cf,PointLight:()=>rh,PointLightHelper:()=>Ap,Points:()=>Rl,PointsMaterial:()=>Dl,PolarGridHelper:()=>Dp,PolyhedronBufferGeometry:()=>Gl,PolyhedronGeometry:()=>Gl,PositionalAudio:()=>jh,PropertyBinding:()=>Jh,PropertyMixer:()=>Hh,QuadraticBezierCurve:()=>hu,QuadraticBezierCurve3:()=>pu,Quaternion:()=>dr,QuaternionKeyframeTrack:()=>Ed,QuaternionLinearInterpolant:()=>Md,REVISION:()=>r,RGBADepthPacking:()=>on,RGBAFormat:()=>Fe,RGBAIntegerFormat:()=>Ke,RGBA_ASTC_10x10_Format:()=>yt,RGBA_ASTC_10x5_Format:()=>mt,RGBA_ASTC_10x6_Format:()=>gt,RGBA_ASTC_10x8_Format:()=>vt,RGBA_ASTC_12x10_Format:()=>bt,RGBA_ASTC_12x12_Format:()=>xt,RGBA_ASTC_4x4_Format:()=>at,RGBA_ASTC_5x4_Format:()=>ct,RGBA_ASTC_5x5_Format:()=>lt,RGBA_ASTC_6x5_Format:()=>ut,RGBA_ASTC_6x6_Format:()=>dt,RGBA_ASTC_8x5_Format:()=>ht,RGBA_ASTC_8x6_Format:()=>pt,RGBA_ASTC_8x8_Format:()=>ft,RGBA_BPTC_Format:()=>wt,RGBA_ETC2_EAC_Format:()=>ot,RGBA_PVRTC_2BPPV1_Format:()=>rt,RGBA_PVRTC_4BPPV1_Format:()=>nt,RGBA_S3TC_DXT1_Format:()=>Ye,RGBA_S3TC_DXT3_Format:()=>Je,RGBA_S3TC_DXT5_Format:()=>Qe,RGBDEncoding:()=>rn,RGBEEncoding:()=>Qt,RGBEFormat:()=>He,RGBFormat:()=>Be,RGBIntegerFormat:()=>Ze,RGBM16Encoding:()=>nn,RGBM7Encoding:()=>tn,RGB_ETC1_Format:()=>it,RGB_ETC2_Format:()=>st,RGB_PVRTC_2BPPV1_Format:()=>tt,RGB_PVRTC_4BPPV1_Format:()=>et,RGB_S3TC_DXT1_Format:()=>Xe,RGFormat:()=>$e,RGIntegerFormat:()=>qe,RawShaderMaterial:()=>Qs,Ray:()=>Ur,Raycaster:()=>sp,RectAreaLight:()=>ah,RedFormat:()=>Ve,RedIntegerFormat:()=>We,ReinhardToneMapping:()=>ee,RepeatWrapping:()=>de,ReplaceStencilOp:()=>dn,ReverseSubtractEquation:()=>M,RingBufferGeometry:()=>Ju,RingGeometry:()=>Ju,SRGB8_ALPHA8_ASTC_10x10_Format:()=>Pt,SRGB8_ALPHA8_ASTC_10x5_Format:()=>Tt,SRGB8_ALPHA8_ASTC_10x6_Format:()=>Nt,SRGB8_ALPHA8_ASTC_10x8_Format:()=>Ot,SRGB8_ALPHA8_ASTC_12x10_Format:()=>Rt,SRGB8_ALPHA8_ASTC_12x12_Format:()=>kt,SRGB8_ALPHA8_ASTC_4x4_Format:()=>Ct,SRGB8_ALPHA8_ASTC_5x4_Format:()=>At,SRGB8_ALPHA8_ASTC_5x5_Format:()=>It,SRGB8_ALPHA8_ASTC_6x5_Format:()=>_t,SRGB8_ALPHA8_ASTC_6x6_Format:()=>St,SRGB8_ALPHA8_ASTC_8x5_Format:()=>Mt,SRGB8_ALPHA8_ASTC_8x6_Format:()=>Et,SRGB8_ALPHA8_ASTC_8x8_Format:()=>Dt,Scene:()=>Oc,SceneUtils:()=>Nf,ShaderChunk:()=>Gs,ShaderLib:()=>Ws,ShaderMaterial:()=>Ss,ShadowMaterial:()=>cd,Shape:()=>yu,ShapeBufferGeometry:()=>Qu,ShapeGeometry:()=>Qu,ShapePath:()=>qp,ShapeUtils:()=>Vu,ShortType:()=>Se,Skeleton:()=>dl,SkeletonHelper:()=>wp,SkinnedMesh:()=>ol,SmoothShading:()=>y,Sphere:()=>Rr,SphereBufferGeometry:()=>ed,SphereGeometry:()=>ed,Spherical:()=>cp,SphericalHarmonics3:()=>ch,SplineCurve:()=>fu,SpotLight:()=>Jd,SpotLightHelper:()=>vp,Sprite:()=>Xc,SpriteMaterial:()=>Lc,SrcAlphaFactor:()=>R,SrcAlphaSaturateFactor:()=>z,SrcColorFactor:()=>O,StaticCopyUsage:()=>Nn,StaticDrawUsage:()=>_n,StaticReadUsage:()=>En,StereoCamera:()=>Sh,StreamCopyUsage:()=>Pn,StreamDrawUsage:()=>Mn,StreamReadUsage:()=>Tn,StringKeyframeTrack:()=>Dd,SubtractEquation:()=>S,SubtractiveBlending:()=>C,TOUCH:()=>s,TangentSpaceNormalMap:()=>an,TetrahedronBufferGeometry:()=>td,TetrahedronGeometry:()=>td,TextGeometry:()=>Rf,Texture:()=>sr,TextureLoader:()=>Vd,TorusBufferGeometry:()=>nd,TorusGeometry:()=>nd,TorusKnotBufferGeometry:()=>rd,TorusKnotGeometry:()=>rd,Triangle:()=>_i,TriangleFanDrawMode:()=>Kt,TriangleStripDrawMode:()=>Zt,TrianglesDrawMode:()=>qt,TubeBufferGeometry:()=>id,TubeGeometry:()=>id,UVMapping:()=>ie,Uint16Attribute:()=>vf,Uint16BufferAttribute:()=>Gi,Uint32Attribute:()=>bf,Uint32BufferAttribute:()=>Wi,Uint8Attribute:()=>ff,Uint8BufferAttribute:()=>zi,Uint8ClampedAttribute:()=>mf,Uint8ClampedBufferAttribute:()=>Hi,Uniform:()=>np,UniformsLib:()=>Vs,UniformsUtils:()=>_s,UnsignedByteType:()=>Ie,UnsignedInt248Type:()=>ke,UnsignedIntType:()=>De,UnsignedShort4444Type:()=>Oe,UnsignedShort5551Type:()=>Pe,UnsignedShort565Type:()=>Re,UnsignedShortType:()=>Me,VSMShadowMap:()=>p,Vector2:()=>Xn,Vector3:()=>hr,Vector4:()=>ar,VectorKeyframeTrack:()=>Td,Vertex:()=>df,VertexColors:()=>tf,VideoTexture:()=>Ll,WebGL1Renderer:()=>Dc,WebGLCubeRenderTarget:()=>Os,WebGLMultipleRenderTargets:()=>lr,WebGLMultisampleRenderTarget:()=>ur,WebGLRenderTarget:()=>cr,WebGLRenderTargetCube:()=>Ef,WebGLRenderer:()=>Ec,WebGLUtils:()=>wc,WireframeGeometry:()=>sd,WireframeHelper:()=>_f,WrapAroundEnding:()=>Vt,XHRLoader:()=>Sf,ZeroCurvatureEnding:()=>Ut,ZeroFactor:()=>T,ZeroSlopeEnding:()=>Gt,ZeroStencilOp:()=>ln,sRGBEncoding:()=>Yt});
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function h(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function p(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function f(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function v(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){s.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=i[e](t)).value instanceof y?Promise.resolve(n.value.v).then(c,l):u(s[0][2],n)}catch(e){u(s[0][3],e)}var n}function c(e){a("next",e)}function l(e){a("throw",e)}function u(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1])}}function x(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=f(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,i,(t=e[n](t)).done,t.value)}))}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function A(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function I(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function S(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},82287:function(e,t){"use strict";var n,r,i;r=[],n=function(){function e(){return!0}function t(){return!1}function n(){}function r(){var i=[{name:"number",test:function(e){return"number"==typeof e}},{name:"string",test:function(e){return"string"==typeof e}},{name:"boolean",test:function(e){return"boolean"==typeof e}},{name:"Function",test:function(e){return"function"==typeof e}},{name:"Array",test:Array.isArray},{name:"Date",test:function(e){return e instanceof Date}},{name:"RegExp",test:function(e){return e instanceof RegExp}},{name:"Object",test:function(e){return"object"==typeof e&&null!==e&&e.constructor===Object}},{name:"null",test:function(e){return null===e}},{name:"undefined",test:function(e){return void 0===e}}],s={name:"any",test:e},o=[],a=[],c={types:i,conversions:a,ignore:o};function l(e){var t=Z(c.types,(function(t){return t.name===e}));if(t)return t;if("any"===e)return s;var n=Z(c.types,(function(t){return t.name.toLowerCase()===e.toLowerCase()}));throw new TypeError('Unknown type "'+e+'"'+(n?'. Did you mean "'+n.name+'"?':""))}function u(e){return e===s?999:c.types.indexOf(e)}function d(e){var t=Z(c.types,(function(t){return t.test(e)}));if(t)return t.name;throw new TypeError("Value has unknown type. Value: "+e)}function h(e,t){if(!e.signatures)throw new TypeError("Function is no typed-function");var n;if("string"==typeof t){n=t.split(",");for(var r=0;r<n.length;r++)n[r]=n[r].trim()}else{if(!Array.isArray(t))throw new TypeError("String array or a comma separated string expected");n=t}var i=n.join(","),s=e.signatures[i];if(s)return s;throw new TypeError("Signature not found (signature: "+(e.name||"unnamed")+"("+n.join(", ")+"))")}function p(e,t){var n=d(e);if(t===n)return e;for(var r=0;r<c.conversions.length;r++){var i=c.conversions[r];if(i.from===n&&i.to===t)return i.convert(e)}throw new Error("Cannot convert from "+n+" to "+t)}function f(e){return e.map((function(e){var t=e.types.map(A);return(e.restParam?"...":"")+t.join("|")})).join(",")}function m(e,t){var n=0===e.indexOf("..."),r=(n?e.length>3?e.slice(3):"any":e).split("|").map(j).filter(z).filter(F),i=N(t,r),s=r.map((function(e){var t=l(e);return{name:e,typeIndex:u(t),test:t.test,conversion:null,conversionIndex:-1}})),o=i.map((function(e){var n=l(e.from);return{name:e.from,typeIndex:u(n),test:n.test,conversion:e,conversionIndex:t.indexOf(e)}}));return{types:s.concat(o),restParam:n}}function g(e,t,n){var r=[];return""!==e.trim()&&(r=e.split(",").map(j).map((function(e,t,r){var i=m(e,n);if(i.restParam&&t!==r.length-1)throw new SyntaxError('Unexpected rest parameter "'+e+'": only allowed for the last parameter');return i}))),r.some(U)?null:{params:r,fn:t}}function v(e){var t=V(e);return!!t&&t.restParam}function y(e){return e.types.some((function(e){return null!=e.conversion}))}function b(t){if(t&&0!==t.types.length){if(1===t.types.length)return l(t.types[0].name).test;if(2===t.types.length){var n=l(t.types[0].name).test,r=l(t.types[1].name).test;return function(e){return n(e)||r(e)}}var i=t.types.map((function(e){return l(e.name).test}));return function(e){for(var t=0;t<i.length;t++)if(i[t](e))return!0;return!1}}return e}function x(e){var t,n,r;if(v(e)){var i=(t=G(e).map(b)).length,s=b(V(e)),o=function(e){for(var t=i;t<e.length;t++)if(!s(e[t]))return!1;return!0};return function(e){for(var n=0;n<t.length;n++)if(!t[n](e[n]))return!1;return o(e)&&e.length>=i+1}}return 0===e.length?function(e){return 0===e.length}:1===e.length?(n=b(e[0]),function(e){return n(e[0])&&1===e.length}):2===e.length?(n=b(e[0]),r=b(e[1]),function(e){return n(e[0])&&r(e[1])&&2===e.length}):(t=e.map(b),function(e){for(var n=0;n<t.length;n++)if(!t[n](e[n]))return!1;return e.length===t.length})}function w(e,t){return t<e.params.length?e.params[t]:v(e.params)?V(e.params):null}function C(e,t,n){var r=w(e,t);return(r?n?r.types.filter(I):r.types:[]).map(A)}function A(e){return e.name}function I(e){return null===e.conversion||void 0===e.conversion}function _(e,t){var n=K(X(e,(function(e){return C(e,t,!1)})));return-1!==n.indexOf("any")?["any"]:n}function S(e,t,n){var r,i,s,o=e||"unnamed",a=n;for(s=0;s<t.length;s++){var c=a.filter((function(e){var n=b(w(e,s));return(s<e.params.length||v(e.params))&&n(t[s])}));if(0===c.length){if((i=_(a,s)).length>0){var l=d(t[s]);return(r=new TypeError("Unexpected type of argument in function "+o+" (expected: "+i.join(" or ")+", actual: "+l+", index: "+s+")")).data={category:"wrongType",fn:o,index:s,actual:l,expected:i},r}}else a=c}var u=a.map((function(e){return v(e.params)?1/0:e.params.length}));if(t.length<Math.min.apply(null,u))return i=_(a,s),(r=new TypeError("Too few arguments in function "+o+" (expected: "+i.join(" or ")+", index: "+t.length+")")).data={category:"tooFewArgs",fn:o,index:t.length,expected:i},r;var h=Math.max.apply(null,u);return t.length>h?((r=new TypeError("Too many arguments in function "+o+" (expected: "+h+", actual: "+t.length+")")).data={category:"tooManyArgs",fn:o,index:t.length,expectedLength:h},r):((r=new TypeError('Arguments of type "'+t.join(", ")+'" do not match any of the defined signatures of function '+o+".")).data={category:"mismatch",actual:t.map(d)},r)}function M(e){for(var t=999,n=0;n<e.types.length;n++)I(e.types[n])&&(t=Math.min(t,e.types[n].typeIndex));return t}function E(e){for(var t=999,n=0;n<e.types.length;n++)I(e.types[n])||(t=Math.min(t,e.types[n].conversionIndex));return t}function D(e,t){var n;return 0!=(n=e.restParam-t.restParam)||0!=(n=y(e)-y(t))||0!=(n=M(e)-M(t))?n:E(e)-E(t)}function T(e,t){var n,r,i=Math.min(e.params.length,t.params.length);if(0!=(r=e.params.some(y)-t.params.some(y)))return r;for(n=0;n<i;n++)if(0!=(r=y(e.params[n])-y(t.params[n])))return r;for(n=0;n<i;n++)if(0!==(r=D(e.params[n],t.params[n])))return r;return e.params.length-t.params.length}function N(e,t){var n={};return e.forEach((function(e){-1!==t.indexOf(e.from)||-1===t.indexOf(e.to)||n[e.from]||(n[e.from]=e)})),Object.keys(n).map((function(e){return n[e]}))}function O(e,t){var n=t;if(e.some(y)){var r=v(e),i=e.map(P);n=function(){for(var e=[],n=r?arguments.length-1:arguments.length,s=0;s<n;s++)e[s]=i[s](arguments[s]);return r&&(e[n]=arguments[n].map(i[n])),t.apply(this,e)}}var s=n;if(v(e)){var o=e.length-1;s=function(){return n.apply(this,W(arguments,0,o).concat([W(arguments,o)]))}}return s}function P(e){var t,n,r,i,s=[],o=[];switch(e.types.forEach((function(e){e.conversion&&(s.push(l(e.conversion.from).test),o.push(e.conversion.convert))})),o.length){case 0:return function(e){return e};case 1:return t=s[0],r=o[0],function(e){return t(e)?r(e):e};case 2:return t=s[0],n=s[1],r=o[0],i=o[1],function(e){return t(e)?r(e):n(e)?i(e):e};default:return function(e){for(var t=0;t<o.length;t++)if(s[t](e))return o[t](e);return e}}}function R(e){var t={};return e.forEach((function(e){e.params.some(y)||k(e.params,!0).forEach((function(n){t[f(n)]=e.fn}))})),t}function k(e,t){function n(e,r,i){if(r<e.length){var s,o=e[r],a=t?o.types.filter(I):o.types;if(o.restParam){var c=a.filter(I);s=c.length<a.length?[c,a]:[a]}else s=a.map((function(e){return[e]}));return X(s,(function(t){return n(e,r+1,i.concat([t]))}))}return[i.map((function(t,n){return{types:t,restParam:n===e.length-1&&v(e)}}))]}return n(e,0,[])}function L(e,t){for(var n=Math.max(e.params.length,t.params.length),r=0;r<n;r++)if(!q(C(e,r,!0),C(t,r,!0)))return!1;var i=e.params.length,s=t.params.length,o=v(e.params),a=v(t.params);return o?a?i===s:s>=i:a?i>=s:i===s}function B(e,r){if(0===Object.keys(r).length)throw new SyntaxError("No signatures provided");var i=[];Object.keys(r).map((function(e){return g(e,r[e],c.conversions)})).filter(H).forEach((function(e){var t=Z(i,(function(t){return L(t,e)}));if(t)throw new TypeError('Conflicting signatures "'+f(t.params)+'" and "'+f(e.params)+'".');i.push(e)}));var s=X(i,(function(e){return(e?k(e.params,!1):[]).map((function(t){return{params:t,fn:e.fn}}))})).filter(H);s.sort(T);var o=s[0]&&s[0].params.length<=2&&!v(s[0].params),a=s[1]&&s[1].params.length<=2&&!v(s[1].params),l=s[2]&&s[2].params.length<=2&&!v(s[2].params),u=s[3]&&s[3].params.length<=2&&!v(s[3].params),d=s[4]&&s[4].params.length<=2&&!v(s[4].params),h=s[5]&&s[5].params.length<=2&&!v(s[5].params),p=o&&a&&l&&u&&d&&h,m=s.map((function(e){return x(e.params)})),y=o?b(s[0].params[0]):t,w=a?b(s[1].params[0]):t,C=l?b(s[2].params[0]):t,A=u?b(s[3].params[0]):t,I=d?b(s[4].params[0]):t,_=h?b(s[5].params[0]):t,M=o?b(s[0].params[1]):t,E=a?b(s[1].params[1]):t,D=l?b(s[2].params[1]):t,N=u?b(s[3].params[1]):t,P=d?b(s[4].params[1]):t,B=h?b(s[5].params[1]):t,F=s.map((function(e){return O(e.params,e.fn)})),j=o?F[0]:n,z=a?F[1]:n,U=l?F[2]:n,G=u?F[3]:n,V=d?F[4]:n,W=h?F[5]:n,$=o?s[0].params.length:-1,q=a?s[1].params.length:-1,K=l?s[2].params.length:-1,Y=u?s[3].params.length:-1,J=d?s[4].params.length:-1,Q=h?s[5].params.length:-1,ee=p?6:0,te=s.length,ne=function(){for(var t=ee;t<te;t++)if(m[t](arguments))return F[t].apply(this,arguments);throw S(e,arguments,s)},re=function e(t,n){return arguments.length===$&&y(t)&&M(n)?j.apply(e,arguments):arguments.length===q&&w(t)&&E(n)?z.apply(e,arguments):arguments.length===K&&C(t)&&D(n)?U.apply(e,arguments):arguments.length===Y&&A(t)&&N(n)?G.apply(e,arguments):arguments.length===J&&I(t)&&P(n)?V.apply(e,arguments):arguments.length===Q&&_(t)&&B(n)?W.apply(e,arguments):ne.apply(e,arguments)};try{Object.defineProperty(re,"name",{value:e})}catch(e){}return re.signatures=R(s),re}function F(e){return-1===c.ignore.indexOf(e)}function j(e){return e.trim()}function z(e){return!!e}function H(e){return null!==e}function U(e){return 0===e.types.length}function G(e){return e.slice(0,e.length-1)}function V(e){return e[e.length-1]}function W(e,t,n){return Array.prototype.slice.call(e,t,n)}function $(e,t){return-1!==e.indexOf(t)}function q(e,t){for(var n=0;n<e.length;n++)if($(t,e[n]))return!0;return!1}function Z(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function K(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return Object.keys(t)}function X(e,t){return Array.prototype.concat.apply([],e.map(t))}function Y(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(("object"==typeof r.signatures||"string"==typeof r.signature)&&""!==r.name)if(""===t)t=r.name;else if(t!==r.name){var i=new Error("Function names do not match (expected: "+t+", actual: "+r.name+")");throw i.data={actual:r.name,expected:t},i}}return t}function J(e){var t,n={};function r(e,r){if(n.hasOwnProperty(e)&&r!==n[e])throw(t=new Error('Signature "'+e+'" is defined twice')).data={signature:e},t}for(var i=0;i<e.length;i++){var s=e[i];if("object"==typeof s.signatures)for(var o in s.signatures)s.signatures.hasOwnProperty(o)&&(r(o,s.signatures[o]),n[o]=s.signatures[o]);else{if("string"!=typeof s.signature)throw(t=new TypeError("Function is no typed-function (index: "+i+")")).data={index:i},t;r(s.signature,s),n[s.signature]=s}}return n}return(c=B("typed",{"string, Object":B,Object:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(e[n]);return B(Y(t),e)},"...Function":function(e){return B(Y(e),J(e))},"string, ...Function":function(e,t){return B(e,J(t))}})).create=r,c.types=i,c.conversions=a,c.ignore=o,c.convert=p,c.find=h,c.addType=function(e,t){if(!e||"string"!=typeof e.name||"function"!=typeof e.test)throw new TypeError("Object with properties {name: string, test: function} expected");if(!1!==t)for(var n=0;n<c.types.length;n++)if("Object"===c.types[n].name)return void c.types.splice(n,0,e);c.types.push(e)},c.addConversion=function(e){if(!e||"string"!=typeof e.from||"string"!=typeof e.to||"function"!=typeof e.convert)throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");c.conversions.push(e)},c}return r()},void 0===(i="function"==typeof n?n.apply(t,r):n)||(e.exports=i)},11949:function(e){
/*!
 * Viewer.js v1.10.1
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-08-01T13:35:49.731Z
 */
//# sourceMappingURL=410.bundle.js.map