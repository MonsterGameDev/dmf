import BlueSkies from './../../img/backgrounds/himle-bagtæpper/D-484.webp';
import DybbolBackground from './../../img/parallax-pagetops/198/samlet-dybbol-bg.webp';
import Wings from './../../img/parallax-pagetops/198/molle-vinger.webp';
import DybbolForeground from './../../img/parallax-pagetops/198/dybbol-stenhegn-fg-colorized.webp';

const DanmarkTilEiderenParallaxTemplate = document.createElement('template');
DanmarkTilEiderenParallaxTemplate.innerHTML = `
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
            height: 50vw;
            z-index: -1;
            overflow: hidden;
        }

        .background,
        .horizon,
        .foreground {
          position: absolute;
          bottom: 0;
          width: 100%;
        }
        .animation-container {
            position: absolute;
            top: 25.7%;
            left: 19.6%;
            width: 17%
        }
        .wings {
            width: 100%;
        }

        .background {
          height: 120%;
          width: 100%;
          position: absolute;
          inset: 0;
        }

      

    </style>
    <div class="inner-container">
        <img class="background">
        <img class="horizon">
        <div class="animation-container">
            <img class="wings">
        </div>
        <img class="foreground">
    </div>
`;

class DanmarkTilEiderenParallaxComponent extends HTMLElement {
    static get observedAttributes() {
        return ['scroll-top'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = DanmarkTilEiderenParallaxTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        this.background = this.shadowRoot.querySelector('.background');
        this.horizon = this.shadowRoot.querySelector('.horizon');
        this.foreground = this.shadowRoot.querySelector('.foreground');
        this.animationContainer = this.shadowRoot.querySelector('.animation-container');
        this.wings = this.shadowRoot.querySelector('.wings');

        this.background.setAttribute('src', BlueSkies);
        this.horizon.setAttribute('src', DybbolBackground);
        this.wings.setAttribute('src', Wings);
        this.foreground.setAttribute('src', DybbolForeground);
        this.wings.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' },
        ], {
            duration: 60000,
            iterations: Infinity
        })
    }

    render(scrollTop) {
        const backgroundYPos = 0.55 * scrollTop + "px";
        const horizonYPos = 0.3 * scrollTop + "px";
        const wingsYPos = 0.3 * scrollTop + "px";
        const foregroundYPos = 0.2 * scrollTop + "px";

        this.background.style.transform = "translateY(" + backgroundYPos + ")";
        this.horizon.style.transform = "translateY(" + horizonYPos + ")";
        this.animationContainer.style.transform = "translateY(" + wingsYPos + ")";
        this.foreground.style.transform = "translateY(" + foregroundYPos + ")";

    }

    attributeChangedCallback(attr, oldval, newval) {
        if (oldval === newval) return;
        if (attr === 'scroll-top') { this.render(newval) }
    }

}

window.customElements.define('ph-danmark-til-eideren-parallax', DanmarkTilEiderenParallaxComponent)