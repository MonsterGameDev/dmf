(()=>{"use strict";var t="";const n=t+"b02f9d673ad64311ba43.webp",e=t+"d459b8d403739c0096f4.webp",r=t+"71d52a2dab900537a29e.webp",o=t+"d523efa1a8f92e5cb5c6.webp";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n){if(n&&("object"===i(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){var n="function"==typeof Map?new Map:void 0;return u=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return s(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)},u(t)}function s(t,n,e){return s=l()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o},s.apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,n){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},f(t,n)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var d=document.createElement("template");d.innerHTML='\n    <style>\n    :host {\n        width: 100%;\n    }\n\n        *,\n        *::before,\n        *::after {\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n        }\n        .inner-container {\n            position: relative;\n            height: 50vw;\n            z-index: -1;\n            overflow: hidden;\n        }\n\n        .background,\n        .horizon,\n        .foreground,\n        .setstykke {\n          position: absolute;\n          bottom: 0;\n          width: 100%;\n        }\n        .background {\n          height: 120%;\n        }\n        .setstykke {\n          width: 30%;\n          left: 30%;\n        }\n  \n        .background img {\n          width: 100%;\n          position: absolute;\n          inset: 0;\n          height: 120%;\n        }\n  \n        .transparent-background {\n          opacity: 0;\n        }\n\n    </style>\n    <div class="inner-container">\n        <div class="background">\n            <img class="transparent-foreground">\n            <img class="transparent-background">\n        </div>\n        <img class="horizon">\n        <img class="setstykke">\n        <img class="foreground">\n    </div>\n';var b=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&f(t,n)}(g,t);var i,u,s,b,y,h=(i=g,u=l(),function(){var t,n=p(i);if(u){var e=p(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return a(this,t)});function g(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,g),(t=h.call(this)).attachShadow({mode:"open"});var i=d.content;return t.shadowRoot.appendChild(i.cloneNode(!0)),t.background=t.shadowRoot.querySelector(".background"),t.horizon=t.shadowRoot.querySelector(".horizon"),t.setStykke=t.shadowRoot.querySelector(".setstykke"),t.foreground=t.shadowRoot.querySelector(".foreground"),t.transparentBackground=t.shadowRoot.querySelector(".transparent-background"),t.transparentForeground=t.shadowRoot.querySelector(".transparent-foreground"),t.transparentBackground.setAttribute("src",n),t.transparentForeground.setAttribute("src","data:image/webp;base64,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"),t.horizon.setAttribute("src",e),t.setStykke.setAttribute("src",r),t.foreground.setAttribute("src",o),t}return s=g,y=[{key:"observedAttributes",get:function(){return["scroll-top"]}}],(b=[{key:"render",value:function(t){var n=.55*t+"px",e=.5*t+"px",r=.3*t+"px",o=.2*t+"px",i=.0025*t;this.background.style.transform="translateY("+n+")",this.horizon.style.transform="translateY("+e+")",this.foreground.style.transform="translateY("+o+")",this.setStykke.style.transform="translateY("+r+")",this.transparentBackground.style.opacity=i}},{key:"attributeChangedCallback",value:function(t,n,e){n!==e&&"scroll-top"===t&&this.render(e)}}])&&c(s.prototype,b),y&&c(s,y),Object.defineProperty(s,"prototype",{writable:!1}),g}(u(HTMLElement));window.customElements.define("ph-indian-jungle-parallax",b);const y=t+"3e6fa50c0c75839df44b.webp",h=t+"93e41a8b5f7c8482017d.webp",g=t+"bf4cc6bc4641eed2ccb0.webp",m=t+"650da0535d38dab6a679.webp";function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function w(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,n){if(n&&("object"===v(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){var n="function"==typeof Map?new Map:void 0;return O=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return S(t,arguments,A(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),x(r,t)},O(t)}function S(t,n,e){return S=R()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&x(o,e.prototype),o},S.apply(null,arguments)}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function x(t,n){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},x(t,n)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var j=document.createElement("template");j.innerHTML='\n    <style>\n    :host {\n        width: 100%;\n    }\n\n        *,\n        *::before,\n        *::after {\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n        }\n        .inner-container {\n            position: relative;\n            height: 50vw;\n            z-index: -1;\n            overflow: hidden;\n        }\n\n        .background,\n        .horizon,\n        .foreground {\n          position: absolute;\n          bottom: 0;\n          width: 100%;\n        }\n        .background {\n          height: 120%;\n        }\n  \n        .background img {\n          width: 100%;\n          position: absolute;\n          inset: 0;\n          height: 120%;\n        }\n  \n        .transparent-background {\n          opacity: 0;\n        }\n\n    </style>\n    <div class="inner-container">\n        <div class="background">\n            <img class="transparent-foreground">\n            <img class="transparent-background">\n        </div>\n        <img class="horizon">\n        <img class="foreground">\n    </div>\n';var z=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&x(t,n)}(a,t);var n,e,r,o,i,c=(n=a,e=R(),function(){var t,r=A(n);if(e){var o=A(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return k(this,t)});function a(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this)).attachShadow({mode:"open"});var n=j.content;return t.shadowRoot.appendChild(n.cloneNode(!0)),t.background=t.shadowRoot.querySelector(".background"),t.horizon=t.shadowRoot.querySelector(".horizon"),t.foreground=t.shadowRoot.querySelector(".foreground"),t.transparentBackground=t.shadowRoot.querySelector(".transparent-background"),t.transparentForeground=t.shadowRoot.querySelector(".transparent-foreground"),t.transparentBackground.setAttribute("src",h),t.transparentForeground.setAttribute("src",y),t.horizon.setAttribute("src",g),t.foreground.setAttribute("src",m),t}return r=a,i=[{key:"observedAttributes",get:function(){return["scroll-top"]}}],(o=[{key:"render",value:function(t){var n=.55*t+"px",e=.5*t+"px",r=.2*t+"px",o=.0025*t;this.background.style.transform="translateY("+n+")",this.horizon.style.transform="translateY("+e+")",this.foreground.style.transform="translateY("+r+")",this.transparentBackground.style.opacity=o}},{key:"attributeChangedCallback",value:function(t,n,e){n!==e&&"scroll-top"===t&&this.render(e)}}])&&w(r.prototype,o),i&&w(r,i),Object.defineProperty(r,"prototype",{writable:!1}),a}(O(HTMLElement));window.customElements.define("ph-indian-prarie-parallax",z);const P=t+"78c78146b623ba5beaf2.webp",q=t+"906026d23d683d4edeca.webp",E=t+"c6f210531beb30d4e81b.webp",F=t+"6cefbb380fbc2a8fccf7.webp";function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function C(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(t,n){if(n&&("object"===I(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function W(t){var n="function"==typeof Map?new Map:void 0;return W=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return B(t,arguments,L(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),M(r,t)},W(t)}function B(t,n,e){return B=D()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&M(o,e.prototype),o},B.apply(null,arguments)}function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function M(t,n){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},M(t,n)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var Y=document.createElement("template");Y.innerHTML='\n    <style>\n    :host {\n        width: 100%;\n    }\n\n        *,\n        *::before,\n        *::after {\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n        }\n        .inner-container {\n            position: relative;\n            height: 50vw;\n            z-index: -1;\n            overflow: hidden;\n        }\n\n        .background,\n        .horizon,\n        .foreground {\n          position: absolute;\n          bottom: 0;\n          width: 100%;\n        }\n        .animation-container {\n            position: absolute;\n            top: 25.7%;\n            left: 19.6%;\n            width: 17%\n        }\n        .wings {\n            width: 100%;\n        }\n\n        .background {\n          height: 120%;\n          width: 100%;\n          position: absolute;\n          inset: 0;\n        }\n\n      \n\n    </style>\n    <div class="inner-container">\n        <img class="background">\n        <img class="horizon">\n        <div class="animation-container">\n            <img class="wings">\n        </div>\n        <img class="foreground">\n    </div>\n';var Q=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&M(t,n)}(a,t);var n,e,r,o,i,c=(n=a,e=D(),function(){var t,r=L(n);if(e){var o=L(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return T(this,t)});function a(){var t;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this)).attachShadow({mode:"open"});var n=Y.content;return t.shadowRoot.appendChild(n.cloneNode(!0)),t.background=t.shadowRoot.querySelector(".background"),t.horizon=t.shadowRoot.querySelector(".horizon"),t.foreground=t.shadowRoot.querySelector(".foreground"),t.animationContainer=t.shadowRoot.querySelector(".animation-container"),t.wings=t.shadowRoot.querySelector(".wings"),t.background.setAttribute("src",P),t.horizon.setAttribute("src",q),t.wings.setAttribute("src",E),t.foreground.setAttribute("src",F),t.wings.animate([{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],{duration:6e4,iterations:1/0}),t}return r=a,i=[{key:"observedAttributes",get:function(){return["scroll-top"]}}],(o=[{key:"render",value:function(t){var n=.55*t+"px",e=.3*t+"px",r=.3*t+"px",o=.2*t+"px";this.background.style.transform="translateY("+n+")",this.horizon.style.transform="translateY("+e+")",this.animationContainer.style.transform="translateY("+r+")",this.foreground.style.transform="translateY("+o+")"}},{key:"attributeChangedCallback",value:function(t,n,e){n!==e&&"scroll-top"===t&&this.render(e)}}])&&C(r.prototype,o),i&&C(r,i),Object.defineProperty(r,"prototype",{writable:!1}),a}(W(HTMLElement));window.customElements.define("ph-danmark-til-eideren-parallax",Q);var H=document.querySelector(".content-container"),G=document.querySelector("ph-indian-jungle-parallax#first");H.addEventListener("scroll",(function(){G.setAttribute("scroll-top",H.scrollTop)}));var N=document.querySelector(".content-container-2"),J=document.querySelector("ph-indian-prarie-parallax#second");N.addEventListener("scroll",(function(){J.setAttribute("scroll-top",N.scrollTop)}));var K=document.querySelector(".content-container-3"),U=document.querySelector("ph-danmark-til-eideren-parallax#third");K.addEventListener("scroll",(function(){U.setAttribute("scroll-top",K.scrollTop)}))})();