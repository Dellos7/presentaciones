(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"DeckgoDeck",function(){return s}),n.d(t,"DeckgoPager",function(){return a});var r=n(287),i=n(4),o=n(288),s=function(){function e(){this.keyboard=!0,this.pager=!0,this.pagerPercentage=!0,this.startX=null,this.deckTranslateX=0,this.autoSwipeRatio=10,this.blockSlide=!1,this.activeIndex=0,this.length=0,this.fullscreen=!1,this.cursorHidden=!1}return e.prototype.componentDidLoad=function(){return r.a(this,void 0,void 0,function(){return r.b(this,function(e){switch(e.label){case 0:return this.initWindowResize(),this.initKeyboardAssist(),[4,this.lazyBackgroungImages()];case 1:return e.sent(),[2]}})})},e.prototype.initWindowResize=function(){var e=this;window&&window.addEventListener("resize",o.a.debounce(function(){return r.a(e,void 0,void 0,function(){return r.b(this,function(e){switch(e.label){case 0:return[4,this.slideTo(this.activeIndex)];case 1:return e.sent(),[2]}})})},100))},e.prototype.initKeyboardAssist=function(){var e=this;this.keyboard&&document.addEventListener("keydown",function(t){return r.a(e,void 0,void 0,function(){return r.b(this,function(e){switch(e.label){case 0:return t.defaultPrevented?[2]:"ArrowLeft"!==t.key?[3,2]:(t.preventDefault(),[4,this.slidePrev()]);case 1:return e.sent(),[3,4];case 2:return"ArrowRight"!==t.key?[3,4]:(t.preventDefault(),[4,this.slideNext()]);case 3:e.sent(),e.label=4;case 4:return[2]}})})})},e.prototype.mousedown=function(e){this.start(e)},e.prototype.touchstart=function(e){this.start(e)},e.prototype.mouseup=function(e){return r.a(this,void 0,void 0,function(){return r.b(this,function(t){switch(t.label){case 0:return[4,this.stop(e)];case 1:return t.sent(),[2]}})})},e.prototype.touchend=function(e){return r.a(this,void 0,void 0,function(){return r.b(this,function(t){switch(t.label){case 0:return[4,this.stop(e)];case 1:return t.sent(),[2]}})})},e.prototype.mousemove=function(e){return r.a(this,void 0,void 0,function(){return r.b(this,function(t){switch(t.label){case 0:return[4,this.move(e)];case 1:return t.sent(),[2]}})})},e.prototype.touchmove=function(e){return r.a(this,void 0,void 0,function(){return r.b(this,function(t){switch(t.label){case 0:return[4,this.move(e)];case 1:return t.sent(),[2]}})})},e.prototype.dblclick=function(){return r.a(this,void 0,void 0,function(){return r.b(this,function(e){return this.startX=null,[2]})})},e.prototype.scrolling=function(){this.blockSlide=!0},e.prototype.start=function(e){this.startX=o.a.unifyEvent(e).clientX},e.prototype.move=function(e){return r.a(this,void 0,void 0,function(){var t,n;return r.b(this,function(r){switch(r.label){case 0:return[4,this.clearMouseCursorTimer(!0)];case 1:return r.sent(),this.blockSlide?[2]:[4,this.getDeltaX(e)];case 2:return(t=r.sent())?(t.slider.style.setProperty("--transformX",(n=t.swipeLeft?this.deckTranslateX-t.deltaX:this.deckTranslateX+t.deltaX)+"px"),t.slider.style.setProperty("--transformXDuration","0ms"),this.slideDrag.emit(n),[2]):[2]}})})},e.prototype.stop=function(e){return r.a(this,void 0,void 0,function(){var t;return r.b(this,function(n){switch(n.label){case 0:return this.blockSlide?(this.blockSlide=!1,[2]):[4,this.getDeltaX(e)];case 1:return t=n.sent(),[4,this.swipeSlide(t)];case 2:return n.sent(),this.startX=null,[2]}})})},e.prototype.swipeSlide=function(e,t){var n=this;return void 0===t&&(t=!0),new Promise(function(i){return r.a(n,void 0,void 0,function(){var n,o;return r.b(this,function(r){switch(r.label){case 0:return e&&window?(n=!e.swipeLeft&&this.activeIndex>0,(e.swipeLeft&&this.activeIndex<this.length-1||n)&&(o=window.innerWidth,e.deltaX>o/this.autoSwipeRatio&&(this.deckTranslateX=e.swipeLeft?this.deckTranslateX-o:this.deckTranslateX+o,e.swipeLeft?(this.activeIndex++,t&&this.slideNextDidChange.emit(this.activeIndex)):(this.activeIndex--,t&&this.slidePrevDidChange.emit(this.activeIndex)))),[4,this.doSwipeSlide(e.slider)]):(i(),[2]);case 1:return r.sent(),[4,this.lazyLoadContent(this.activeIndex+1)];case 2:return r.sent(),i(),[2]}})})})},e.prototype.doSwipeSlide=function(e,t){var n=this;return new Promise(function(r){e.style.setProperty("--transformX",n.deckTranslateX+"px"),e.style.setProperty("--transformXDuration",(isNaN(t)?300:t)+"ms"),n.slideWillChange.emit(n.deckTranslateX),n.startX=null,r()})},e.prototype.getDeltaX=function(e){var t=this;return new Promise(function(n){if(t.startX){var r=t.el.shadowRoot.querySelector("div.deckgo-deck");if(r){var i=o.a.unifyEvent(e).clientX;if(t.startX!==i){var s=t.startX>i;n({slider:r,swipeLeft:s,deltaX:s?t.startX-i:i-t.startX})}else n(null)}else n(null)}else n(null)})},e.prototype.slideDidLoad=function(){return r.a(this,void 0,void 0,function(){return r.b(this,function(e){switch(e.label){case 0:return this.length++,[4,this.emitSlidesDidLoad()];case 1:return e.sent(),[2]}})})},e.prototype.emitSlidesDidLoad=function(){var e=this;return new Promise(function(t){return r.a(e,void 0,void 0,function(){var e,n,i,o;return r.b(this,function(r){switch(r.label){case 0:return e=this.el.children,n=this.el.querySelectorAll(".deckgo-slide-container"),[4,this.countDefinedSlides(e)];case 1:return i=r.sent(),e&&n&&n.length===i&&i===this.length?(o=[],Array.from(n).forEach(function(e){var t=e.querySelector("[slot='notes']");o.push({name:e.tagName,notes:t?t.innerHTML:null})}),this.slidesDidLoad.emit(o),[4,this.lazyLoadFirstSlides()]):[3,3];case 2:r.sent(),r.label=3;case 3:return t(),[2]}})})})},e.prototype.lazyLoadFirstSlides=function(){var e=this;return new Promise(function(t){return r.a(e,void 0,void 0,function(){var e,n;return r.b(this,function(r){switch(r.label){case 0:return e=this.lazyLoadContent(0),n=this.lazyLoadContent(1),[4,Promise.all([e,n])];case 1:return r.sent(),t(),[2]}})})})},e.prototype.countDefinedSlides=function(e){return new Promise(function(t){if(!e||e.length<=0)t(0);else{var n=Array.from(e).filter(function(e){return e.tagName.toLocaleLowerCase().indexOf("deckgo-slide-")>-1});t(n?n.length:0)}})},e.prototype.isBeginning=function(){var e=this;return new Promise(function(t){t(0===e.activeIndex)})},e.prototype.isEnd=function(){var e=this;return new Promise(function(t){t(e.activeIndex===e.length-1)})},e.prototype.getActiveIndex=function(){var e=this;return new Promise(function(t){t(e.activeIndex)})},e.prototype.getLength=function(){var e=this;return new Promise(function(t){t(e.length)})},e.prototype.slideNext=function(e,t){return r.a(this,void 0,void 0,function(){return r.b(this,function(n){switch(n.label){case 0:return[4,this.slideNextPrev(!0,e,t)];case 1:return n.sent(),[2]}})})},e.prototype.slidePrev=function(e,t){return r.a(this,void 0,void 0,function(){return r.b(this,function(n){switch(n.label){case 0:return[4,this.slideNextPrev(!1,e,t)];case 1:return n.sent(),[2]}})})},e.prototype.slideNextPrev=function(e,t,n){return void 0===t&&(t=!0),r.a(this,void 0,void 0,function(){var i,o,s;return r.b(this,function(r){switch(r.label){case 0:return(i=this.el.shadowRoot.querySelector("div.deckgo-deck"))&&window?t?[3,1]:(o=!0,[3,3]):[2];case 1:return[4,this.beforeSwipe(e)];case 2:o=r.sent(),r.label=3;case 3:return o?(s={slider:i,swipeLeft:e,deltaX:window.innerWidth},[4,this.swipeSlide(s,n)]):[3,6];case 4:return r.sent(),[4,this.afterSwipe(e)];case 5:r.sent(),r.label=6;case 6:return[2]}})})},e.prototype.beforeSwipe=function(e){var t=this;return new Promise(function(n){return r.a(t,void 0,void 0,function(){var t,i;return r.b(this,function(r){switch(r.label){case 0:return(t=this.el.querySelector(".deckgo-slide-container:nth-child("+(this.activeIndex+1)+")"))?[3,1]:(n(!0),[3,3]);case 1:return[4,t.beforeSwipe(e)];case 2:i=r.sent(),n(i),r.label=3;case 3:return[2]}})})})},e.prototype.afterSwipe=function(e){var t=this;return new Promise(function(n){return r.a(t,void 0,void 0,function(){var t,i;return r.b(this,function(r){switch(r.label){case 0:return t=e?this.activeIndex-1:this.activeIndex+1,isNaN(t)||t<0||t>this.length?(n(),[2]):(i=this.el.querySelector(".deckgo-slide-container:nth-child("+(t+1)+")"))?[3,1]:(n(),[3,3]);case 1:return[4,i.afterSwipe()];case 2:r.sent(),n(),r.label=3;case 3:return[2]}})})})},e.prototype.lazyLoadContent=function(e){var t=this;return new Promise(function(n){return r.a(t,void 0,void 0,function(){var t;return r.b(this,function(r){switch(r.label){case 0:return(t=this.el.querySelector(".deckgo-slide-container:nth-child("+(e+1)+")"))?[4,t.lazyLoadContent()]:[3,2];case 1:r.sent(),r.label=2;case 2:return n(),[2]}})})})},e.prototype.lazyBackgroungImages=function(){var e=this;return new Promise(function(t){return r.a(e,void 0,void 0,function(){var e,n,i;return r.b(this,function(r){switch(r.label){case 0:return e=this.el.querySelectorAll("img[slot='background']"),n=this.el.querySelectorAll("[slot='background'] img"),i=Array.from(e).concat(Array.from(n)),[4,o.a.lazyLoadSelectedImages(i)];case 1:return r.sent(),t(),[2]}})})})},e.prototype.slideTo=function(e,t,n){return void 0===n&&(n=!0),r.a(this,void 0,void 0,function(){var i;return r.b(this,function(r){switch(r.label){case 0:return e>this.length||e<0?[2]:(i=this.el.shadowRoot.querySelector("div.deckgo-deck"))&&window?(this.deckTranslateX=-1*e*window.innerWidth,this.activeIndex=e,[4,this.lazyLoadContent(this.activeIndex)]):[2];case 1:return r.sent(),[4,this.doSwipeSlide(i,t)];case 2:return r.sent(),n&&this.slideToChange.emit(e),[2]}})})},e.prototype.toggleFullScreen=function(){var e=this;return new Promise(function(t){return r.a(e,void 0,void 0,function(){var e,n,i,o;return r.b(this,function(r){switch(r.label){case 0:return e=window.document,i=(n=e.documentElement).requestFullscreen||n.mozRequestFullScreen||n.webkitRequestFullScreen||n.msRequestFullscreen,o=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen,e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?[3,1]:(i.call(n),this.fullscreen=!0,this.hideMouseCursorWithDelay(),[3,3]);case 1:return o.call(e),[4,this.clearMouseCursorTimer(!1)];case 2:r.sent(),this.fullscreen=!1,r.label=3;case 3:return t(),[2]}})})})},e.prototype.clearMouseCursorTimer=function(e){return r.a(this,void 0,void 0,function(){return r.b(this,function(t){switch(t.label){case 0:return this.fullscreen?(this.idleMouseTimer>0&&clearTimeout(this.idleMouseTimer),[4,this.showHideMouseCursor(!0)]):[2];case 1:return t.sent(),e&&this.hideMouseCursorWithDelay(),[2]}})})},e.prototype.hideMouseCursorWithDelay=function(){var e=this;this.fullscreen&&(this.idleMouseTimer=setTimeout(function(){return r.a(e,void 0,void 0,function(){return r.b(this,function(e){switch(e.label){case 0:return[4,this.showHideMouseCursor(!1)];case 1:return e.sent(),[2]}})})},4e3))},e.prototype.showHideMouseCursor=function(e){var t=this;return new Promise(function(n){if(t.fullscreen)if(t.cursorHidden||!e){var r=t.el.shadowRoot.querySelector("div.deckgo-deck");r?(r.style.setProperty("cursor",e?"initial":"none"),t.cursorHidden=!e,n()):n()}else n();else n()})},e.prototype.doPrint=function(){var e=this;return new Promise(function(t){return r.a(e,void 0,void 0,function(){return r.b(this,function(e){switch(e.label){case 0:return window?[4,this.lazyLoadAllContent()]:[3,2];case 1:e.sent(),window.print(),e.label=2;case 2:return t(),[2]}})})})},e.prototype.lazyLoadAllContent=function(){for(var e=[],t=0;t<this.length;t++)e.push(this.lazyLoadContent(t));return Promise.all(e)},e.prototype.render=function(){return[Object(i.b)("div",{class:"deckgo-deck"},Object(i.b)("slot",null),Object(i.b)("slot",{name:"background"})),Object(i.b)("div",{class:"deckgo-pager"},this.pager?Object(i.b)("deckgo-pager",{"active-index":this.activeIndex,length:this.length,percentage:this.pagerPercentage}):"")]},Object.defineProperty(e,"is",{get:function(){return"deckgo-deck"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activeIndex:{state:!0},doPrint:{method:!0},el:{elementRef:!0},getActiveIndex:{method:!0},getLength:{method:!0},isBeginning:{method:!0},isEnd:{method:!0},keyboard:{type:Boolean,attr:"keyboard"},length:{state:!0},pager:{type:Boolean,attr:"pager"},pagerPercentage:{type:Boolean,attr:"pager-percentage"},slideNext:{method:!0},slidePrev:{method:!0},slideTo:{method:!0},toggleFullScreen:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"slidesDidLoad",method:"slidesDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"slideNextDidChange",method:"slideNextDidChange",bubbles:!0,cancelable:!0,composed:!0},{name:"slidePrevDidChange",method:"slidePrevDidChange",bubbles:!0,cancelable:!0,composed:!0},{name:"slideToChange",method:"slideToChange",bubbles:!0,cancelable:!0,composed:!0},{name:"slideDrag",method:"slideDrag",bubbles:!0,cancelable:!0,composed:!0},{name:"slideWillChange",method:"slideWillChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"mousedown",method:"mousedown",passive:!0},{name:"touchstart",method:"touchstart",passive:!0},{name:"mouseup",method:"mouseup",passive:!0},{name:"touchend",method:"touchend",passive:!0},{name:"mousemove",method:"mousemove",passive:!0},{name:"touchmove",method:"touchmove",passive:!0},{name:"dblclick",method:"dblclick",passive:!0},{name:"scrolling",method:"scrolling"},{name:"slideDidLoad",method:"slideDidLoad"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"div.deckgo-deck.sc-deckgo-deck{display:-ms-flexbox;display:flex;position:absolute;top:0;bottom:0;z-index:var(--zIndex);--transformX:0px;--transformXDuration:0ms;-webkit-transform:translate3d(var(--transformX),0,0);transform:translate3d(var(--transformX),0,0);-webkit-transition-duration:var(--transformXDuration,0ms);transition-duration:var(--transformXDuration,0ms)}div.deckgo-deck.sc-deckgo-deck   .sc-deckgo-deck::-webkit-scrollbar{display:none}div.deckgo-pager.sc-deckgo-deck{position:absolute;bottom:0;left:0}.sc-deckgo-deck-s > [slot=background]{pointer-events:none}@media print{div.deckgo-deck.sc-deckgo-deck{display:initial;position:static}}"},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){this.percentage=!1,this.progression=0}return e.prototype.calculateProgression=function(){this.progression=Math.round((this.activeIndex+1)/this.length*100)},e.prototype.render=function(){var e=this.progression+", 100";return Object(i.b)("svg",{viewBox:"0 0 36 36",class:"deckgo-pager-circular-chart"},Object(i.b)("path",{class:"deckgo-pager-circle-bg",d:"M18 2.0845\n            a 15.9155 15.9155 0 0 1 0 31.831\n            a 15.9155 15.9155 0 0 1 0 -31.831"}),Object(i.b)("path",{class:"deckgo-pager-circle","stroke-dasharray":e,d:"M18 2.0845\n        a 15.9155 15.9155 0 0 1 0 31.831\n        a 15.9155 15.9155 0 0 1 0 -31.831"}),this.renderText())},e.prototype.renderText=function(){return this.percentage?Object(i.b)("text",{x:"18",y:"20.35",className:"deckgo-pager-percentage"},this.progression,"%"):void 0},Object.defineProperty(e,"is",{get:function(){return"deckgo-pager"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activeIndex:{type:Number,attr:"active-index",watchCallbacks:["calculateProgression"]},length:{type:Number,attr:"length",watchCallbacks:["calculateProgression"]},percentage:{type:Boolean,attr:"percentage"},progression:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".deckgo-pager-circular-chart.sc-deckgo-pager{height:var(--pager-size,56px);width:var(--pager-size,56px);margin:var(--pager-margin-top,8px) var(--pager-margin-end,8px) var(--pager-margin-bottom,8px) var(--pager-margin-start,8px);display:block}.deckgo-pager-circle-bg.sc-deckgo-pager{fill:none;stroke:var(--pager-background,#eee);stroke-width:var(--pager-stroke-outer-width,2.8)}.deckgo-pager-circle.sc-deckgo-pager{stroke:var(--pager-color,#4c8dff);fill:none;stroke-width:var(--pager-stroke-inner-width,1.8);stroke-linecap:round}.deckgo-pager-percentage.sc-deckgo-pager{fill:var(--pager-text-color,#4c8dff);font-size:var(--pager-text-size,.5em);text-anchor:middle;font-weight:300}@media print{.deckgo-pager-circular-chart.sc-deckgo-pager{display:none}}"},enumerable:!0,configurable:!0}),e}()},287:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});function r(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}c((r=r.apply(e,t||[])).next())})}function i(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}},288:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(287),i=function(){function e(){}return e.unifyEvent=function(e){return e.changedTouches?e.changedTouches[0]:e},e.lazyLoadImages=function(e){return r.a(this,void 0,void 0,function(){var t=this;return r.b(this,function(n){return[2,new Promise(function(n){return r.a(t,void 0,void 0,function(){var t;return r.b(this,function(r){switch(r.label){case 0:return t=this.getAllImages(e),[4,this.lazyLoadSelectedImages(t)];case 1:return r.sent(),n(),[2]}})})})]})})},e.lazyLoadSelectedImages=function(e){return r.a(this,void 0,void 0,function(){return r.b(this,function(t){return[2,new Promise(function(t){e?(e.forEach(function(e){e.getAttribute("data-src")&&(e.setAttribute("src",e.getAttribute("data-src")),e.removeAttribute("data-src"),e.classList.contains("deckgo-reveal")||e.style.setProperty("visibility","inherit")),e.style.setProperty("pointer-events","none")}),t()):t()})]})})},e.hideLazyLoadImages=function(t){return new Promise(function(n){var r=e.getAllImages(t);r?((r=r.filter(function(e){return e.getAttribute("data-src")})).forEach(function(e){e.style.setProperty("visibility","hidden")}),n()):n()})},e.getAllImages=function(e){var t=e.querySelectorAll("[slot] img"),n=e.shadowRoot.querySelectorAll("img");return Array.from(t).concat(Array.from(n))},e.debounce=function(e,t){var n;return function(r){n&&clearTimeout(n),n=setTimeout(e,t>0?t:300,r)}},e}()}}]);