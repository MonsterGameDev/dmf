import HeavenTransparentFront from './../../img/backgrounds/himle-bagtæpper/D-425-himmel.webp';
import HeavenTransparentBack from './../../img/backgrounds/himle-bagtæpper/D-425-back.webp';
import IndianJungleBack from './../../img/parallax-pagetops/107-423/D-107-2-colorized.webp';
import IndianJunglePiece from './../../img/parallax-pagetops/107-423/D-423-sætstykke-colorized.webp';
import IndianJungleFront from './../../img/parallax-pagetops/107-423/D-423-colorized.webp';

const IndianJungleParallaxTemplate = document.createElement('template');
IndianJungleParallaxTemplate.innerHTML = `
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
        .foreground,
        .setstykke {
          position: absolute;
          bottom: 0;
          width: 100%;
        }
        .background {
          height: 120%;
        }
        .setstykke {
          width: 30%;
          left: 30%;
        }
  
        .background img {
          width: 100%;
          position: absolute;
          inset: 0;
          height: 120%;
        }
  
        .transparent-background {
          opacity: 0;
        }

    </style>
    <div class="inner-container">
        <div class="background">
            <img class="transparent-foreground">
            <img class="transparent-background">
        </div>
        <img class="horizon">
        <img class="setstykke">
        <img class="foreground">
    </div>
`;

class IndianJungleParallaxComponent extends HTMLElement {
    static get observedAttributes() {
        return ['scroll-top'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = IndianJungleParallaxTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        this.background = this.shadowRoot.querySelector('.background');
        this.horizon = this.shadowRoot.querySelector('.horizon');
        this.setStykke = this.shadowRoot.querySelector('.setstykke');
        this.foreground = this.shadowRoot.querySelector('.foreground');
        this.transparentBackground = this.shadowRoot.querySelector('.transparent-background');
        this.transparentForeground = this.shadowRoot.querySelector('.transparent-foreground');

        this.transparentBackground.setAttribute('src', HeavenTransparentBack);
        this.transparentForeground.setAttribute('src', HeavenTransparentFront);
        this.horizon.setAttribute('src', IndianJungleBack);
        this.setStykke.setAttribute('src', IndianJunglePiece);
        this.foreground.setAttribute('src', IndianJungleFront);
    }

    render(scrollTop) {
        const backgroundYPos = 0.55 * scrollTop + "px";
        const horizonYPos = 0.5 * scrollTop + "px";
        const setStykkeYPos = 0.3 * scrollTop + "px";
        const foregroundYPos = 0.2 * scrollTop + "px";
        const transparentBackgroundOpacity = 0.0025 * scrollTop;

        this.background.style.transform = "translateY(" + backgroundYPos + ")";
        this.horizon.style.transform = "translateY(" + horizonYPos + ")";
        this.foreground.style.transform = "translateY(" + foregroundYPos + ")";
        this.setStykke.style.transform = "translateY(" + setStykkeYPos + ")";
        this.transparentBackground.style.opacity = transparentBackgroundOpacity;

    }

    attributeChangedCallback(attr, oldval, newval) {
        if (oldval === newval) return;
        if (attr === 'scroll-top') { this.render(newval) }
    }

}

window.customElements.define('ph-indian-jungle-parallax', IndianJungleParallaxComponent)