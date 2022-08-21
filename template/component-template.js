const listItemTemplate = document.createElement('template');
listItemTemplate.innerHTML = `
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

        label {
            display: flex;
            flex-flow: row nowrap;
            
        }
    </style>
`;

class ListItemComponent extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    get config() {
        return this._config
    }

    set config(val) {
        this._config = val;
    }

    configInit = {
        title: 'Title here',
        subtitle: 'Subtitle here',
        imgSrc: null,
        templateType: 'normal' // img, img-inv, radio, radio-inv, check, check-inv
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = template.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        //******************************************************** */
        this._config = null;
    }

    render() { }

    attributeChangedCallback(attr, oldval, newval) {
        if (oldval === newval) return;
    }

}