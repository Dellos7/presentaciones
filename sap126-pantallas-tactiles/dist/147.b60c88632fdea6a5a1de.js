(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{120:function(n,t,r){"use strict";r.r(t),r.d(t,"IonText",function(){return u});var e=r(3),o=r(285),u=function(){function n(){}return n.prototype.hostData=function(){return{class:Object(o.b)(this.color)}},n.prototype.render=function(){return Object(e.b)("slot",null)},Object.defineProperty(n,"is",{get:function(){return"ion-text"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return":host(.ion-color){color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),n}()},284:function(n,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"a",function(){return u}),r.d(t,"c",function(){return c});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)};function o(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function u(n,t,r,e){return new(r||(r=Promise))(function(o,u){function c(n){try{a(e.next(n))}catch(n){u(n)}}function i(n){try{a(e.throw(n))}catch(n){u(n)}}function a(n){n.done?o(n.value):new r(function(t){t(n.value)}).then(c,i)}a((e=e.apply(n,t||[])).next())})}function c(n,t){var r,e,o,u,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,e&&(o=2&u[0]?e.return:u[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,u[1])).done)return o;switch(e=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,e=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=t.call(n,c)}catch(n){u=[6,n],e=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}},285:function(n,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return u}),r.d(t,"c",function(){return f}),r.d(t,"d",function(){return o}),r.d(t,"e",function(){return c});var e=r(284);function o(n,t){return null!==t.closest(n)}function u(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0}function c(n,t){var r;return(r={})[t]=!0,r[t+"-"+n]=void 0!==n,r}function i(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t}var a=/^[a-z][a-z0-9+\-.]*:/;function f(n,t,r,o){return e.a(this,void 0,void 0,function(){var u;return e.c(this,function(e){switch(e.label){case 0:return null==t||"#"===t[0]||a.test(t)?[3,2]:(u=n.document.querySelector("ion-router"))?(null!=r&&r.preventDefault(),[4,u.componentOnReady()]):[3,2];case 1:return e.sent(),[2,u.push(t,o)];case 2:return[2,!1]}})})}}}]);