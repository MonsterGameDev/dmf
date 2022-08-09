class RadioButtonGroupComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log('RadioButtonGroupHere');
    }

    attributeChangedCallback(attr, oldval, newval) { }
}

window.customElements.define('ph-radio-button-group', RadioButtonGroupComponent);