(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"DeckgoSlideTitle",function(){return s});var i=n(287),r=n(4),o=n(288),a=n(291),s=function(){function e(){this.reveal=!1,this.revealShowFirst=!1}return e.prototype.componentDidLoad=function(){return i.a(this,void 0,void 0,function(){return i.b(this,function(e){switch(e.label){case 0:return[4,o.a.hideLazyLoadImages(this.el)];case 1:return e.sent(),this.slideDidLoad.emit(),this.reveal?[4,a.a.hideRevealElements(this.el,this.revealShowFirst)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})},e.prototype.beforeSwipe=function(e){return a.a.beforeSwipe(this.el,e,this.reveal)},e.prototype.afterSwipe=function(){return a.a.afterSwipe()},e.prototype.lazyLoadContent=function(){return a.a.lazyLoadContent(this.el)},e.prototype.render=function(){return Object(r.b)("div",{class:"deckgo-slide"},Object(r.b)("slot",{name:"title"}),Object(r.b)("slot",{name:"content"}),Object(r.b)("slot",{name:"notes"}))},e.prototype.hostData=function(){return{class:{"deckgo-slide-container":!0}}},Object.defineProperty(e,"is",{get:function(){return"deckgo-slide-title"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{afterSwipe:{method:!0},beforeSwipe:{method:!0},el:{elementRef:!0},lazyLoadContent:{method:!0},reveal:{type:Boolean,attr:"reveal"},revealShowFirst:{type:Boolean,attr:"reveal-show-first"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"slideDidLoad",method:"slideDidLoad",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-deckgo-slide-title-h{background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1)}div.deckgo-slide.sc-deckgo-slide-title{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,16px) var(--slide-padding-end,32px) var(--slide-padding-bottom,16px) var(--slide-padding-start,32px);width:calc(100vw - var(--slide-padding-start, 32px) - var(--slide-padding-end, 32px));height:calc(100% - var(--slide-padding-top, 16px) - var(--slide-padding-bottom, 16px));-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none}.sc-deckgo-slide-title-s > ol, .sc-deckgo-slide-title-s > ul{-webkit-padding-start:var(--slide-padding-start,32px);padding-inline-start:var(--slide-padding-start,32px)}.sc-deckgo-slide-title-s > [slot=notes]{display:none}@media print{div.deckgo-slide.sc-deckgo-slide-title{padding:0}}div.deckgo-slide.sc-deckgo-slide-title{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.sc-deckgo-slide-title-s > [slot=content], .sc-deckgo-slide-title-s > [slot=title]{text-align:center}"},enumerable:!0,configurable:!0}),e}()},287:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});function i(e,t,n,i){return new(n||(n=Promise))(function(r,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function s(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}l((i=i.apply(e,t||[])).next())})}function r(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}},288:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(287),r=function(){function e(){}return e.unifyEvent=function(e){return e.changedTouches?e.changedTouches[0]:e},e.lazyLoadImages=function(e){return i.a(this,void 0,void 0,function(){var t=this;return i.b(this,function(n){return[2,new Promise(function(n){return i.a(t,void 0,void 0,function(){var t;return i.b(this,function(i){switch(i.label){case 0:return t=this.getAllImages(e),[4,this.lazyLoadSelectedImages(t)];case 1:return i.sent(),n(),[2]}})})})]})})},e.lazyLoadSelectedImages=function(e){return i.a(this,void 0,void 0,function(){return i.b(this,function(t){return[2,new Promise(function(t){e?(e.forEach(function(e){e.getAttribute("data-src")&&(e.setAttribute("src",e.getAttribute("data-src")),e.removeAttribute("data-src"),e.classList.contains("deckgo-reveal")||e.style.setProperty("visibility","inherit")),e.style.setProperty("pointer-events","none")}),t()):t()})]})})},e.hideLazyLoadImages=function(t){return new Promise(function(n){var i=e.getAllImages(t);i?((i=i.filter(function(e){return e.getAttribute("data-src")})).forEach(function(e){e.style.setProperty("visibility","hidden")}),n()):n()})},e.getAllImages=function(e){var t=e.querySelectorAll("[slot] img"),n=e.shadowRoot.querySelectorAll("img");return Array.from(t).concat(Array.from(n))},e.debounce=function(e,t){var n;return function(i){n&&clearTimeout(n),n=setTimeout(e,t>0?t:300,i)}},e}()},291:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n(287),r=n(288),o=function(){function e(){}return e.lazyLoadContent=function(e,t){var n=this;return new Promise(function(r){return i.a(n,void 0,void 0,function(){var n,o;return i.b(this,function(i){switch(i.label){case 0:return n=[],(o=this.getAllElements(e,t))&&o.length>0?(o.forEach(function(e){n.push(e.lazyLoadContent())}),[4,Promise.all(n)]):[3,2];case 1:i.sent(),r(),i.label=2;case 2:return r(),[2]}})})})},e.getAllElements=function(e,t){var n=e.querySelectorAll(t),i=e.shadowRoot.querySelectorAll(t);return Array.from(n).concat(Array.from(i))},e}(),a=function(){function e(){}return e.hideRevealElements=function(e,t){var n=this;return new Promise(function(i){if(n.isMobile())i();else{var r=e.querySelectorAll(t?"[slot] li:not(:first-child), [slot] > p:not(:first-child), [slot] > span:not(:first-child), [slot] > img:not(:first-child)":"[slot] li, [slot] > p, [slot] > span, [slot] > img");r?Array.from(r).forEach(function(e){e.style.setProperty("visibility","hidden"),e.classList.add("deckgo-reveal")}):i()}})},e.showRevealElement=function(e){return new Promise(function(t){var n=e.querySelectorAll("[slot] li, [slot] > p, [slot] > span, [slot] > img"),i=!0;if(n){var r=Array.from(n).find(function(e){return"hidden"===e.style.getPropertyValue("visibility")});r&&(r.style.setProperty("visibility","initial"),i=!1)}t(i)})},e.hideRevealElement=function(e){return new Promise(function(t){var n=e.querySelectorAll("[slot] li, [slot] > p, [slot] > span, [slot] > img"),i=!0;if(n){var r=Array.from(n).reverse().find(function(e){var t=e.style.getPropertyValue("visibility");return!t||"initial"===t});r&&(r.style.setProperty("visibility","hidden"),i=!1)}t(i)})},e.beforeSwipe=function(e,t,n){var r=this;return new Promise(function(o){return i.a(r,void 0,void 0,function(){var r;return i.b(this,function(i){switch(i.label){case 0:return n?t?[4,this.showRevealElement(e)]:[3,2]:[3,5];case 1:return r=i.sent(),[3,4];case 2:return[4,this.hideRevealElement(e)];case 3:r=i.sent(),i.label=4;case 4:return o(r),[3,6];case 5:o(!0),i.label=6;case 6:return[2]}})})})},e.afterSwipe=function(){return new Promise(function(e){e()})},e.isMobile=function(){if(!window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))},e.lazyLoadContent=function(e){var t=this;return new Promise(function(n){return i.a(t,void 0,void 0,function(){var t;return i.b(this,function(i){switch(i.label){case 0:return(t=[]).push(r.a.lazyLoadImages(e)),t.push(o.lazyLoadContent(e,"deckgo-gif")),t.push(o.lazyLoadContent(e,"deckgo-youtube")),[4,Promise.all(t)];case 1:return i.sent(),n(),[2]}})})})},e}()}}]);