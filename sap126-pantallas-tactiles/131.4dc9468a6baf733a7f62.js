(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{284:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return s});
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
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,c)}l((r=r.apply(e,t||[])).next())})}function s(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}},294:function(e,t,n){"use strict";function r(){var e=window.TapticEngine;e&&e.selection()}function o(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function i(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function s(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return r})},74:function(e,t,n){"use strict";n.r(t),n.d(t,"IonReorder",function(){return s}),n.d(t,"IonReorderGroup",function(){return c});var r=n(284),o=n(3),i=n(294),s=function(){function e(){}return e.prototype.render=function(){return Object(o.b)("slot",null,Object(o.b)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))},Object.defineProperty(e,"is",{get:function(){return"ion-reorder"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),c=function(){function e(){this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return r.a(this,void 0,void 0,function(){var e,t,o,i=this;return r.c(this,function(r){switch(r.label){case 0:return(e=this.el.closest("ion-content"))?[4,e.componentOnReady()]:[3,3];case 1:return r.sent(),t=this,[4,e.getScrollElement()];case 2:t.scrollEl=r.sent(),r.label=3;case 3:return o=this,[4,n.e(0).then(n.bind(null,293))];case 4:return o.gesture=r.sent().createGesture({el:this.doc.body,queue:this.queue,gestureName:"reorder",gesturePriority:90,threshold:0,direction:"y",passive:!1,canStart:function(e){return i.canStart(e)},onStart:function(e){return i.onStart(e)},onMove:function(e){return i.onMove(e)},onEnd:function(){return i.onEnd()}}),this.disabledChanged(),[2]}})})},e.prototype.componentDidUnload=function(){this.onEnd()},e.prototype.complete=function(e){return Promise.resolve(this.completeSync(e))},e.prototype.canStart=function(e){if(this.selectedItemEl||0!==this.state)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var n=function(e,t){for(var n,r=0;e&&r<6;){if((n=e.parentNode)===t)return e;e=n,r++}}(t,this.el);return n?(e.data=n,!0):(console.error("reorder node not found"),!1)},e.prototype.onStart=function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,n=this.cachedHeights;n.length=0;var r=this.el,o=r.children;if(o&&0!==o.length){for(var s=0,c=0;c<o.length;c++){var u=o[c];n.push(s+=u.offsetHeight),u.$ionIndex=c}var f=r.getBoundingClientRect();if(this.containerTop=f.top,this.containerBottom=f.bottom,this.scrollEl){var h=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=h.top+a,this.scrollElBottom=h.bottom-a}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(d),Object(i.c)()}},e.prototype.onMove=function(e){var t=this.selectedItemEl;if(t){var n=this.autoscroll(e.currentY),r=this.containerTop-n,o=Math.max(r,Math.min(e.currentY,this.containerBottom-n)),s=n+o-e.startY,c=this.itemIndexForTop(o-r);if(c!==this.lastToIndex){var a=l(t);this.lastToIndex=c,Object(i.a)(),this.reorderMove(a,c)}t.style.transform="translateY("+s+"px)"}},e.prototype.onEnd=function(){var e=this,t=this.selectedItemEl;if(this.state=2,t){var n=this.lastToIndex,r=l(t);n===r?(t.style.transition="transform 200ms ease-in-out",setTimeout(function(){return e.completeSync()},200)):this.ionItemReorder.emit({from:r,to:n,complete:this.completeSync.bind(this)}),Object(i.b)()}else this.state=0},e.prototype.completeSync=function(e){var t=this.selectedItemEl;if(t&&2===this.state){var n=this.el.children,r=n.length,o=this.lastToIndex,i=l(t);!0===e&&this.el.insertBefore(t,i<o?n[o+1]:n[o]),Array.isArray(e)&&(e=function(e,t,n){var r=e[t];return e.splice(t,1),e.splice(n,0,r),e.slice()}(e,i,o));for(var s=0;s<r;s++)n[s].style.transform="";t.style.transition="",t.classList.remove(d),this.selectedItemEl=void 0,this.state=0}return e},e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights,n=0;for(n=0;n<t.length&&!(t[n]>e);n++);return n},e.prototype.reorderMove=function(e,t){for(var n=this.selectedItemHeight,r=this.el.children,o=0;o<r.length;o++){var i="";o>e&&o<=t?i="translateY("+-n+"px)":o<e&&o>=t&&(i="translateY("+n+"px)"),r[o].style.transform=i}},e.prototype.autoscroll=function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-u:e>this.scrollElBottom&&(t=u),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial},e.prototype.hostData=function(){return{class:{"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}}},Object.defineProperty(e,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionItemReorder",method:"ionItemReorder",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),e}();function l(e){return e.$ionIndex}var a=60,u=10,d="reorder-selected"}}]);