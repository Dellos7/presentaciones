(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{284:function(e,o,n){"use strict";n.d(o,"b",function(){return r}),n.d(o,"a",function(){return c}),n.d(o,"c",function(){return i});
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
var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n])})(e,o)};function r(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}function c(e,o,n,t){return new(n||(n=Promise))(function(r,c){function i(e){try{u(t.next(e))}catch(e){c(e)}}function a(e){try{u(t.throw(e))}catch(e){c(e)}}function u(e){e.done?r(e.value):new n(function(o){o(e.value)}).then(i,a)}u((t=t.apply(e,o||[])).next())})}function i(e,o){var n,t,r,c,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return c={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function a(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(r=2&c[0]?t.return:c[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,c[1])).done)return r;switch(t=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,t=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){i.label=c[1];break}if(6===c[0]&&i.label<r[1]){i.label=r[1],r=c;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(c);break}r[2]&&i.ops.pop(),i.trys.pop();continue}c=o.call(e,i)}catch(e){c=[6,e],t=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}},285:function(e,o,n){"use strict";n.d(o,"a",function(){return a}),n.d(o,"b",function(){return c}),n.d(o,"c",function(){return s}),n.d(o,"d",function(){return r}),n.d(o,"e",function(){return i});var t=n(284);function r(e,o){return null!==o.closest(e)}function c(e){var o;return"string"==typeof e&&e.length>0?((o={"ion-color":!0})["ion-color-"+e]=!0,o):void 0}function i(e,o){var n;return(n={})[o]=!0,n[o+"-"+e]=void 0!==e,n}function a(e){var o={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}):[]}(e).forEach(function(e){return o[e]=!0}),o}var u=/^[a-z][a-z0-9+\-.]*:/;function s(e,o,n,r){return t.a(this,void 0,void 0,function(){var c;return t.c(this,function(t){switch(t.label){case 0:return null==o||"#"===o[0]||u.test(o)?[3,2]:(c=e.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,c.componentOnReady()]):[3,2];case 1:return t.sent(),[2,c.push(o,r)];case 2:return[2,!1]}})})}},286:function(e,o,n){"use strict";function t(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)}function r(e){return!!e.shadowRoot&&!!e.attachShadow}function c(e){var o=e.closest("ion-item");return o?o.querySelector("ion-label"):null}function i(e,o,n,t,c){if(e||r(o)){var i=o.querySelector("input.aux-input");i||((i=o.ownerDocument.createElement("input")).type="hidden",i.classList.add("aux-input"),o.appendChild(i)),i.disabled=c,i.name=n,i.value=t||""}}function a(e,o,n){return Math.max(e,Math.min(o,n))}function u(e){return e.timeStamp||Date.now()}function s(e){if(e){var o=e.changedTouches;if(o&&o.length>0){var n=o[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}}function l(e,o){var n="rtl"===e.document.dir;switch(o){case"start":return n;case"end":return!n;default:throw new Error('"'+o+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(e,o){var n=e._original||e;return{_original:e,emit:b(n.emit.bind(n),o)}}function b(e,o){var n;return void 0===o&&(o=0),function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[e,o].concat(t))}}n.d(o,"a",function(){return t}),n.d(o,"b",function(){return u}),n.d(o,"c",function(){return r}),n.d(o,"d",function(){return c}),n.d(o,"e",function(){return i}),n.d(o,"f",function(){return d}),n.d(o,"g",function(){return l}),n.d(o,"h",function(){return a}),n.d(o,"i",function(){return b}),n.d(o,"j",function(){return s})},55:function(e,o,n){"use strict";n.r(o),n.d(o,"IonCheckbox",function(){return i});var t=n(3),r=n(285),c=n(286),i=function(){function e(){var e=this;this.inputId="ion-cb-"+a++,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){e.checked=!e.checked},this.onKeyUp=function(){e.keyFocus=!0},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.keyFocus=!1,e.ionBlur.emit()}}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.hostData=function(){var e=this.inputId+"-lbl",o=Object(c.d)(this.el);return o&&(o.id=e),{role:"checkbox","aria-disabled":this.disabled?"true":null,"aria-checked":""+this.checked,"aria-labelledby":e,class:Object.assign({},Object(r.b)(this.color),{"in-item":Object(r.d)("ion-item",this.el),"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus,interactive:!0})}},e.prototype.render=function(){return Object(c.e)(!0,this.el,this.name,this.checked?this.value:"",this.disabled),[Object(t.b)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},Object(t.b)("path","md"===this.mode?{d:"M1.73,12.91 8.1,19.28 22.79,4.59"}:{d:"M5.9,12.5l3.8,3.8l8.8-8.8"})),Object(t.b)("button",{type:"button",onClick:this.onClick,onKeyUp:this.onKeyUp,onFocus:this.onFocus,onBlur:this.onBlur})]},Object.defineProperty(e,"is",{get:function(){return"ion-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-checkbox-ios-h{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ion-color.sc-ion-checkbox-ios-h{--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button.sc-ion-checkbox-ios{left:0;top:0;margin:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.checkbox-icon.sc-ion-checkbox-ios, button.sc-ion-checkbox-ios{width:100%;height:100%}.checkbox-icon.sc-ion-checkbox-ios{border-radius:var(--border-radius);display:block;position:relative;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon.sc-ion-checkbox-ios   path.sc-ion-checkbox-ios{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}.checkbox-checked.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios{border-color:var(--border-color-checked);background:var(--background-checked)}.checkbox-checked.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios   path.sc-ion-checkbox-ios{opacity:1}.checkbox-disabled.sc-ion-checkbox-ios-h{pointer-events:none}.sc-ion-checkbox-ios-h{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)));--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}.checkbox-disabled.sc-ion-checkbox-ios-h{opacity:.3}.checkbox-key.sc-ion-checkbox-ios-h   .checkbox-icon.sc-ion-checkbox-ios:after{border-radius:50%;left:-9px;top:-9px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:"";opacity:.2}.in-item.sc-ion-checkbox-ios-h{margin:10px 8px 9px 0;display:block;position:static}.in-item[slot=start].sc-ion-checkbox-ios-h{margin:8px 16px 8px 2px}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),a=0}}]);