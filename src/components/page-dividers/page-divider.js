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

    </style>
    <div class="inner-container">Hello I am page-divider component</div>
`;

class PageDividerComponent extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    get config() {
        return this._config
    }

    set config(val) {
        this._config = val;
        this.render(val)
    }


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = pageDividerTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        //******************************************************** */
        this._config = null;
    }

    render(val) { }

    attributeChangedCallback(attr, oldval, newval) {
        if (oldval === newval) return;
    }

}

window.customElements.define('ph-page-divider', PageDividerComponent)