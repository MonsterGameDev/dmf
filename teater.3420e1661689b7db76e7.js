(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.p="";const n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._hasTouchScreen=!1}var n,o;return n=e,(o=[{key:"hasTouchScreen",get:function(){if("maxTouchPoints"in navigator)this._hasTouchScreen=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)this._hasTouchScreen=navigator.msMaxTouchPoints>0;else{var e=window.matchMedia&&matchMedia("(pointer:coarse)");if(e&&"(pointer:coarse)"===e.media)this._hasTouchScreen=!!e.matches;else if("orientation"in window)this._hasTouchScreen=!0;else{var t=navigator.userAgent;this._hasTouchScreen=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(t)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(t)}}return this._hasTouchScreen}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){var t="function"==typeof Map?new Map:void 0;return a=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return c(e,arguments,u(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),l(o,e)},a(e)}function c(e,t,n){return c=s()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&l(r,n.prototype),r},c.apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var p=document.createElement("template");p.innerHTML='\n        <style>\n        :host * {\n          padding: 0;\n          margin: 0;\n          box-sizing: border-box;\n        }\n        .controller {\n          position: relative;\n        }\n        .overlay {\n          position: absolute;\n          inset: 0;\n          width: 100%;\n          height: 100%;\n      \n          z-index: 1;\n      \n        }\n      \n        .stage-container {\n          position: relative;\n          width: 100%;\n          \n          -moz-perspective: 10px;\n          perspective: 10px;\n          perspective-origin: 50% 50%;\n        \n          overflow: hidden;\n        }\n      \n        .parallax {\n          width: 100%;\n        }\n      \n        .parallax img {\n          width: 100%;\n        }\n        </style>\n        <div class="controller">\n            <div class="overlay"></div>\n            <div class="stage-container"></div>\n        </div>\n';var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(f,e);var t,o,a,c,d,h=(t=f,o=s(),function(){var e,n=u(t);if(o){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function f(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=h.call(this)).attachShadow({mode:"open"}),e._layers=[],e._isOpen=!1;var t=p.content;e.shadowRoot.appendChild(t.cloneNode(!0)),e.container=e.shadowRoot.querySelector(".stage-container"),e.overlay=e.shadowRoot.querySelector(".overlay");var o=new n;return e.hasTouchScreen=o.hasTouchScreen,e}return a=f,d=[{key:"observedAttributes",get:function(){return["blendmode","overlay-color","click-to-activate"]}}],(c=[{key:"layers",get:function(){return this._layers},set:function(e){e&&e.length&&this._calculateLayers(e)}},{key:"connectedCallback",value:function(){var e=this;this.hasTouchScreen?(this.overlay.addEventListener("touchleave",(function(){e.container.style.transition="perspective-origin 1s",e.container.style.perspectiveOrigin="50% 50%"})),this.overlay.addEventListener("touchenter",(function(){e.container.style.transition="unset"})),this.overlay.addEventListener("touchmove",this.handleMouseMove.bind(this))):(this.overlay.addEventListener("mouseleave",(function(){e.container.style.transition="perspective-origin 1s",e.container.style.perspectiveOrigin="50% 50%"})),this.overlay.addEventListener("mouseenter",(function(){e.container.style.transition="unset"})),this.overlay.addEventListener("mousemove",this.handleMouseMove.bind(this)))}},{key:"attributeChangedCallback",value:function(e,t,n){var o=this._handlePlay.bind(this);t!==n&&("blendmode"===e&&(this.overlay.style.mixBlendMode=n),"overlay-color"===e&&(this.overlay.style.backgroundColor=n),"click-to-activate"===e&&("false"===n?(this._isOpen=!0,this.overlay.removeEventListener("click",o)):(this._isOpen=!1,this.overlay.addEventListener("click",o))))}},{key:"_calculateLayers",value:function(e){var t=-(10*e.length-5),n=this.shadowRoot.querySelector(".stage-container");e.sort((function(e,t){return t.zIndex-e.zIndex})).forEach((function(e,o){var r=document.createElement("div");r.classList.add(["parallax"]),1===e.zIndex?r.setAttribute("style","transform: translateZ(".concat(t,"px) scale(").concat(1.5+o,")")):r.setAttribute("style","position:absolute; z-index: ".concat(e.zIndex,"; transform: translateZ(").concat(t+10*(e.zIndex-1),"px) scale(").concat(1.5+o,")"));var i=document.createElement("img");i.setAttribute("src",e.imgSrc),i.setAttribute("alt",e.altText),r.appendChild(i),n.appendChild(r)}))}},{key:"_handlePlay",value:function(){this._isOpen=!this._isOpen}},{key:"_computedValues",value:function(e,t,n){var o=this._getComputedStyle(e),r=parseInt(t),i=parseInt(n),a=r/o.width*100,c=i/o.height*100;return this.setBoundaries(6,92.5,a)+"% "+this.setBoundaries(36,83,c)+"%"}},{key:"setBoundaries",value:function(e,t,n){return n>=e&&n<t?n:n<e?e:n>t?t:void 0}},{key:"_getComputedStyle",value:function(e){return{width:parseInt(window.getComputedStyle(e).width),height:parseInt(window.getComputedStyle(e).height)}}},{key:"handleMouseMove",value:function(e){if(this._isOpen){var t=this._computedValues(this.overlay,e.offsetX,e.offsetY);this.container.style.perspectiveOrigin=t}}}])&&r(a.prototype,c),d&&r(a,d),Object.defineProperty(a,"prototype",{writable:!1}),f}(a(HTMLElement));window.customElements.define("ph-stage",d);var h=[{imgSrc:e.p+"173e46b66b9b930d2c43.webp",altText:"bagtaeppe",zIndex:1},{imgSrc:e.p+"7f5f18ebf44d16ccaca3.webp",altText:"mellemtaeppe",zIndex:2},{imgSrc:e.p+"71b4e5dddcf9aeb14e36.webp",altText:"fortæppe",zIndex:3}],f=(document.querySelector("body"),document.querySelector(".page"),document.querySelector(".stage-section"),document.querySelector(".stage-section__container"),document.querySelector(".code-example"));document.querySelector("ph-stage").layers=h,(new n).hasTouchScreen?f.style.display="none":f.style.display="block"})();