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

        back.animate([{ opacity: 0 }, { opacity: 0.8 }], {
            duration: 5000,
            iterations: '1',
            fill: 'forwards'
        })

    }

    render(val) { }

}

window.customElements.define('ph-havn-transparent', HavnTransparentComponent)