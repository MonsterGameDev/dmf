import Background from './../../img/transparency/028/D-028-back.webp';
import Foreground from './../../img/transparency/028/D-028.webp';

const havnTransparentTemplate = document.createElement('template');
havnTransparentTemplate.innerHTML = `
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
            height: 69.2vw;
            position: relative;
          }
          
        .front,
        .back {
            position: absolute;
            width: 100%;
            object-fit: cover;
        }

        .back {
            transform: rotateY(180deg);
            opacity: 0;
        }

    </style>
    <div class="inner-container">
    <img class="front">
    <img class="back">
    </div>
`;

class HavnTransparentComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = havnTransparentTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        const front = this.shadowRoot.querySelector('.front');
        const back = this.shadowRoot.querySelector('.back');

        front.setAttribute('src', Foreground)
        back.setAttribute('src', Background)

        const backKFs = [
            { opacity: 0 },
            { opacity: 0.8 }
        ];
        const backFx = new KeyframeEffect(
            back,
            backKFs,
            {
                duration: 5000,
                fill: 'forwards',
            }
        )

        this.Anim = new Animation(backFx)


    }

 

}

window.customElements.define('ph-havn-transparent', HavnTransparentComponent)