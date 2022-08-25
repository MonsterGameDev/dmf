const danmarkTilEiderenParallaxTemplate = document.createElement('template');
danmarkTilEiderenParallaxTemplate.innerHTML = `
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

    </style>
    <div class="inner-container"><h1>Hello</></div>
`;

class DanmarkTilEiderenParallaxComponent extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    get config() {
        return this._config
    }

    set config(val) {
        this._config = val;

    }


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = danmarkTilEiderenParallaxTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        //******************************************************** */
        this._config = null;
    }

    render() { }

    attributeChangedCallback(attr, oldval, newval) {
        if (oldval === newval) return;
    }

}

window.customElements.define('ph-danmark-til-eideren-parallax', DanmarkTilEiderenParallaxComponent)