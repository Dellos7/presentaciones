(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{203:function(n,t,e){"use strict";e.r(t),e.d(t,"IonInfiniteScroll",function(){return l}),e.d(t,"IonInfiniteScrollContent",function(){return s});var i=e(284),o=e(3),r=e(285),l=function(){function n(){this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}return n.prototype.thresholdChanged=function(n){n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)},n.prototype.disabledChanged=function(n){this.disabled&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)},n.prototype.componentDidLoad=function(){return i.a(this,void 0,void 0,function(){var n,t,e=this;return i.c(this,function(i){switch(i.label){case 0:return(n=this.el.closest("ion-content"))?[4,n.componentOnReady()]:[3,3];case 1:return i.sent(),t=this,[4,n.getScrollElement()];case 2:t.scrollEl=i.sent(),i.label=3;case 3:return this.thresholdChanged(this.threshold),this.enableScrollEvents(!this.disabled),"top"===this.position&&this.queue.write(function(){e.scrollEl&&(e.scrollEl.scrollTop=e.scrollEl.scrollHeight-e.scrollEl.clientHeight)}),[2]}})})},n.prototype.componentDidUnload=function(){this.scrollEl=void 0},n.prototype.onScroll=function(){var n=this.scrollEl;if(!n||!this.canStart())return 1;var t=this.el.offsetHeight;if(0===t)return 2;var e=n.scrollTop,i=n.offsetHeight,o=0!==this.thrPc?i*this.thrPc:this.thrPx;if(("bottom"===this.position?n.scrollHeight-t-e-o-i:e-t-o)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},n.prototype.complete=function(){var n=this,t=this.scrollEl;if(this.isLoading&&t&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;var e=t.scrollHeight-t.scrollTop;requestAnimationFrame(function(){n.queue.read(function(){var i=t.scrollHeight-e;requestAnimationFrame(function(){n.queue.write(function(){t.scrollTop=i,n.isBusy=!1})})})})}},n.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},n.prototype.enableScrollEvents=function(n){this.scrollEl&&this.enableListener(this,"scroll",n,this.scrollEl)},n.prototype.hostData=function(){return{class:{"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}}},Object.defineProperty(n,"is",{get:function(){return"ion-infinite-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},isLoading:{state:!0},position:{type:String,attr:"position"},queue:{context:"queue"},threshold:{type:String,attr:"threshold",watchCallbacks:["thresholdChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"events",{get:function(){return[{name:"ionInfinite",method:"ionInfinite",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),n}(),s=function(){function n(){}return n.prototype.componentDidLoad=function(){void 0===this.loadingSpinner&&(this.loadingSpinner=this.config.get("infiniteLoadingSpinner",this.config.get("spinner","lines")))},n.prototype.hostData=function(){return{class:Object(r.e)(this.mode,"infinite-scroll-content")}},n.prototype.render=function(){return Object(o.b)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(o.b)("div",{class:"infinite-loading-spinner"},Object(o.b)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(o.b)("div",{class:"infinite-loading-text",innerHTML:this.loadingText}))},Object.defineProperty(n,"is",{get:function(){return"ion-infinite-scroll-content"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{config:{context:"config"},loadingSpinner:{type:String,attr:"loading-spinner",mutable:!0},loadingText:{type:String,attr:"loading-text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin:0 0 32px;display:none;width:100%}.infinite-loading-text{margin:4px 32px 0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),n}()},284:function(n,t,e){"use strict";e.d(t,"b",function(){return o}),e.d(t,"a",function(){return r}),e.d(t,"c",function(){return l});
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
var i=function(n,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};function o(n,t){function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function r(n,t,e,i){return new(e||(e=Promise))(function(o,r){function l(n){try{c(i.next(n))}catch(n){r(n)}}function s(n){try{c(i.throw(n))}catch(n){r(n)}}function c(n){n.done?o(n.value):new e(function(t){t(n.value)}).then(l,s)}c((i=i.apply(n,t||[])).next())})}function l(n,t){var e,i,o,r,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;l;)try{if(e=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,i=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){l.label=r[1];break}if(6===r[0]&&l.label<o[1]){l.label=o[1],o=r;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(r);break}o[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(n,l)}catch(n){r=[6,n],i=0}finally{e=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}},285:function(n,t,e){"use strict";e.d(t,"a",function(){return s}),e.d(t,"b",function(){return r}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return o}),e.d(t,"e",function(){return l});var i=e(284);function o(n,t){return null!==t.closest(n)}function r(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0}function l(n,t){var e;return(e={})[t]=!0,e[t+"-"+n]=void 0!==n,e}function s(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t}var c=/^[a-z][a-z0-9+\-.]*:/;function a(n,t,e,o){return i.a(this,void 0,void 0,function(){var r;return i.c(this,function(i){switch(i.label){case 0:return null==t||"#"===t[0]||c.test(t)?[3,2]:(r=n.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return i.sent(),[2,r.push(t,o)];case 2:return[2,!1]}})})}}}]);