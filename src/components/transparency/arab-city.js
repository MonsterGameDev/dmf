import Background from './../../img/transparency/096/D-096-back.webp';
import Foreground from './../../img/transparency/096/D-096.webp';

const arabCityTransparentTemplate = document.createElement('template');
arabCityTransparentTemplate.innerHTML = `
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
            width: 100%;
            height: 66.5vw;
            position: relative;
          }
        .front,
        .back {
            position: absolute;
            width: 100%;
            object-fit: cover;
        }
        .back {
            opacity: 0;
        }
    </style>
    <div class="inner-container">
    <img class="front">
    <img class="back">
    </div>
`;

class ArabCityTransparentComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = arabCityTransparentTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        const front = this.shadowRoot.querySelector('.front');
        const back = this.shadowRoot.querySelector('.back');

        front.setAttribute('src', Foreground)
        back.setAttribute('src', Background)

        const keyFrames = [
            { opacity: 0 }, { opacity: 0.8 }
        ];

        const effect = new KeyframeEffect(
            back,
            keyFrames,
            {
                duration: 5000,
                fill: 'forwards',
            }
        );

        this.Anim = new Animation(effect);

    }

    render(val) { }

}

window.customElements.define('ph-arab-city-transparent', ArabCityTransparentComponent)