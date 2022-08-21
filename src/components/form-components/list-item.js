import TestThumb from './../../img/stages/074-75/D-074-75stage--pragthave-thumb.jpg';

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

    .inner-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        padding: .5em;
        background-color: var(--item-color,#70926f);
        border: 2px solid var(--item-color-dark, #485f48bd);
        border-radius: 8px;
        transition: all .3s ease;
    }

    .inner-container:hover {
        
        transform: translateY(-3px);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    .text-content {
        flex: 3;
        height: 100%;
        padding: 2vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        overflow: hidden; 
    }

    .grafix-container {
        position: relative;
        z-index: 0;
        background-size: cover;
        background-position: center center;
        flex: 1.5;
        height: 100%;
        overflow: hidden;
        border-radius: 4px;
        border: 2px solid var(--item-color-dark, #485f48bd);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }

    /* overlay */
    .grafix-container::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color:var(--overlay, #81da9130);
        mix-blend-mode: color-burn;
    }
    .item-title {
        display: block;
        text-transform: uppercase;
        color: var(--title-color, darkslategray);
        font-size: 2em;
    }
    .item-subtitle {
        display: block;
        font-size: 1.4em;
        color: var(--subtitle-color, darkslategray);
    }
    .checked {
        background:var(--background-gradient, linear-gradient(94deg, rgba(76, 175, 80, 1) 0%, rgba(212, 212, 0, 0.92) 49%, rgba(76, 175, 80, 1) 100%));
        background-size: 600% 600%;
        animation: animatedGradient 5s ease infinite;
    }

/* Animated Gradient background*/
    .animatedGradient {
        animation: animatedGradient 5s ease infinite;
    }
    @keyframes animatedGradient {
        0%{background-position:7% 0%}
        50%{background-position:94% 100%}
        100%{background-position:7% 0%}
    }

    .pulse {
        animation: pulse 1s ease infinite;
    }
    @keyframes pulse {
        0% {background-color: var(--item-color, #70926f);}
        50% {background-color:  var(--item-color-light, rgba(76, 175, 80, 1));}
        100% {background-color: var(--item-color, #70926f);}
    }
@media (max-width: 576px) and (orientation: portrait) {}
@media (max-width: 680px) and (orientation: landscape) {}
@media (min-width: 577px) {}
@media (min-width: 1200px) {}a
</style>

<div class="inner-container">
    <div class="text-content">
        <span class="item-title"></span>
        <span class="item-subtitle"></span>
    </div>
    <div class="grafix-container"></div>
</div>
`;

class ListItemComponent extends HTMLElement {
    static get observedAttributes() {
        return ['align-image', 'checked'];
    }

    get config() {
        return this._config
    }

    set config(val) {
        if (!val) return;
        this._config = val;
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // init
        this._config = {
            id: 'temp',
            title: 'Title goes here',
            subtitle: 'Subtitle here',
            thumb: 'thumb'
        };

        const templateContent = listItemTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        this.itemElem = this.shadowRoot.querySelector('.inner-container');
        this.titleElem = this.shadowRoot.querySelector('.item-title');
        this.subtitleElem = this.shadowRoot.querySelector('.item-subtitle');
        this.grafixContainer = this.shadowRoot.querySelector('.grafix-container');

        this.clickEventInstance = this._clickHandler.bind(this);
        this.itemElem.addEventListener('click', this.clickEventInstance);
        this.mouseOverEventInstance = this._mouseOverHandler.bind(this);
        this.itemElem.addEventListener('mouseover', this.mouseOverEventInstance);
        this.mouseOutEventInstance = this._mouseOutHandler.bind(this);
        this.itemElem.addEventListener('mouseout', this.mouseOutEventInstance);
    }


    _clickHandler() {
        const clickEvent = new CustomEvent('item-click', { detail: this._config.id });
        this.itemElem.classList.remove('pulse')
        this.dispatchEvent(clickEvent);
    }

    _mouseOverHandler() {
        if (!this.hasAttribute('checked')) this.itemElem.classList.add('pulse')
    }

    _mouseOutHandler() {
        this.itemElem.classList.remove('pulse')
    }

    render() {
        this.titleElem.textContent = this._config.title;
        this.subtitleElem.textContent = this._config.subtitle;
        this.grafixContainer.style.backgroundImage = `url('${this._config.thumb}')`;

    }



    attributeChangedCallback(attr, oldval, newval) {
        console.log(this.itemElem)
        if (oldval === newval) return;

        if (attr === 'align-image') {
            if (newval === 'left') {
                this.itemElem.style.flexDirection = 'row-reverse';
            } else if (newval === 'right') {
                this.itemElem.style.flexDirection = 'row';
            }
        }
        if (attr === 'checked') {
            if (this.hasAttribute('checked')) {
                this.itemElem.classList.add('checked')

            } else {
                this.itemElem.classList.remove('checked')
            }
        }
    }

}

window.customElements.define('ph-list-item', ListItemComponent);