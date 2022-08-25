import UrBack from './../../img/parallax-pagetops/392-93/D-392-pocketwatch-bag.webp';
import UrFront from './../../img/parallax-pagetops/392-93/D-393-bag-b.webp';
import Tandhjul_A from './../../img/parallax-pagetops/392-93/D-393-tandhjul-3.webp';
import Tandhjul_B from './../../img/parallax-pagetops/392-93/D-293-tandhjul-2.webp';
import Tandhjul_C from './../../img/parallax-pagetops/392-93/D-393-tandhjul-1.webp';

const MorfarsUrParallaxTemplate = document.createElement('template');
MorfarsUrParallaxTemplate.innerHTML = `
    <style>
    :host {
        width: 100%;
    }

        *,
        *::before,
        *::after {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .inner-container {
            position: relative;
            height: 60vw;
            z-index: -1;
            overflow: hidden;
        }

        .background,
        .foreground {
          position: absolute;
          bottom: 0;
          width: 100%;height: 100%;
        }

        .a-animation-container {
            position: absolute;
            width: 30.6%;
            top: 26.2%;
            left: 3.4%;
        }

        .tandhjul-a {
            width: 100%;
            -webkit-filter:drop-shadow(5px 5px 5px #222);
            filter:drop-shadow(drop-shadow(5px 5px 5px #222));
        }

        .b-animation-container {
            position: absolute;
            width: 26.8%;
            left: 36.6%;
            top: 49.2%;
        }
        .tandhjul-b {
            width: 100%;
            -webkit-filter:drop-shadow(5px 5px 5px #222);
            filter:drop-shadow(drop-shadow(5px 5px 5px #222));
        }
        

        .c-animation-container {
             position: absolute;
            left: 51%;
            top: 37%;
            width: 31.8%;
        }
        .tandhjul-c {
            width: 100%;
            -webkit-filter:drop-shadow(5px 5px 5px #222);
            filter:drop-shadow(drop-shadow(5px 5px 5px #222));
        }

    </style>
    <div class="inner-container">
        <img class="background">
        <div class="c-animation-container">
            <img class="tandhjul-c">
        </div>
        <div class="a-animation-container">
            <img class="tandhjul-a">
        </div>
            <div class="b-animation-container">
        <img class="tandhjul-b">
        </div>
        <img class="foreground">
    </div>
`;

class MorfarsUrParallaxComponent extends HTMLElement {
    static get observedAttributes() {
        return ['scroll-top'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = MorfarsUrParallaxTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        this.background = this.shadowRoot.querySelector('.background');
        this.foreground = this.shadowRoot.querySelector('.foreground');
        this.animationContainer_A = this.shadowRoot.querySelector('.a-animation-container')
        this.tandhjul_A = this.shadowRoot.querySelector('.tandhjul-a');
        this.animationContainer_B = this.shadowRoot.querySelector('.b-animation-container')
        this.tandhjul_B = this.shadowRoot.querySelector('.tandhjul-b');
        this.animationContainer_C = this.shadowRoot.querySelector('.c-animation-container')
        this.tandhjul_C = this.shadowRoot.querySelector('.tandhjul-c');

        this.background.setAttribute('src', UrBack);
        this.foreground.setAttribute('src', UrFront);
        this.tandhjul_A.setAttribute('src', Tandhjul_A);
        this.tandhjul_B.setAttribute('src', Tandhjul_B);
        this.tandhjul_C.setAttribute('src', Tandhjul_C);

        this.tandhjul_A.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ], {
            duration: 5000,
            iterations: Infinity
        });

        this.tandhjul_C.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        });
        this.tandhjul_B.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(40deg)' },
            { transform: 'rotate(30deg)' },
            { transform: 'rotate(70deg)' },
            { transform: 'rotate(60deg)' },
            { transform: 'rotate(100deg)' },
            { transform: 'rotate(90deg)' },
            { transform: 'rotate(130deg)' },
            { transform: 'rotate(120deg)' },
            { transform: 'rotate(160deg)' },
            { transform: 'rotate(150deg)' },
            { transform: 'rotate(190deg)' },
            { transform: 'rotate(180deg)' },
            { transform: 'rotate(220deg)' },
            { transform: 'rotate(210deg)' },
            { transform: 'rotate(250deg)' },
            { transform: 'rotate(240deg)' },
            { transform: 'rotate(280deg)' },
            { transform: 'rotate(270deg)' },
            { transform: 'rotate(310deg)' },
            { transform: 'rotate(300deg)' },
            { transform: 'rotate(340deg)' },
            { transform: 'rotate(330deg)' },
            { transform: 'rotate(370deg)' },
            { transform: 'rotate(360deg)' },
        ], {
            duration: 20000,
            iterations: Infinity
        });

    }

    render(scrollTop) {
        const backgroundYPos = 0.3 * scrollTop + "px";
        const tandhjul_AYpos = 0.28 * scrollTop + 'px';
        const tandhjul_BYpos = 0.28 * scrollTop + 'px';
        const tandhjul_CYpos = 0.28 * scrollTop + 'px';
        const foregroundYPos = 0.2 * scrollTop + 'px';

        this.background.style.transform = "translateY(" + backgroundYPos + ")";
        this.animationContainer_A.style.transform = "translateY(" + tandhjul_AYpos + ")";
        this.animationContainer_B.style.transform = "translateY(" + tandhjul_BYpos + ")";
        this.animationContainer_C.style.transform = "translateY(" + tandhjul_CYpos + ")";
        this.foreground.style.transform = "translateY(" + foregroundYPos + ")";


    }

    attributeChangedCallback(attr, oldval, newval) {
        if (oldval === newval) return;
        if (attr === 'scroll-top') { this.render(newval) }
    }

}

window.customElements.define('ph-morfars-ur-parallax', MorfarsUrParallaxComponent)