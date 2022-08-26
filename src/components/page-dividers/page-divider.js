
const pageDividerTemplate = document.createElement('template');
pageDividerTemplate.innerHTML = `
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
            width: 100%;
            background-repeat: no-repeat;
           
            background-position: center center;
            background-attachment: fixed;
            z-index: -1;

        }

    </style>
    <div class="inner-container"> Hello there</div>
`;

class PageDividerComponent extends HTMLElement {
    static get observedAttributes() {
        return ['scroll-top'];
    }

    get config() {
        return this._config
    }

    set config(val) {
        this._config = val;

        this.innerContainer.style.backgroundImage = 'url(' + this._config.background + ')';
        this.innerContainer.style.height = this._config.height;
    }


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = pageDividerTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        this.innerContainer = this.shadowRoot.querySelector('.inner-container');



        window.addEventListener('scroll', (e) => {
            const scrollY = window.scrollY;
            const containerYPos = this.innerContainer.offsetTop;
            const range = scrollY - containerYPos + 41;

            if (range > 0)
                this.innerContainer.style.transform = 'translateY(' + 0.4 * range + 'px)';

        })

    }

    render(val) {
        const bgYPos = 0.4 * val;
        this.innerContainer.style.transform = 'translateY(' + bgYPos + 'px)';

    }

    attributeChangedCallback(attr, oldval, newval) {
        if (oldval === newval) return;

        if (attr === 'scroll-top') this.render(newval)
    }

}

window.customElements.define('ph-page-divider', PageDividerComponent)