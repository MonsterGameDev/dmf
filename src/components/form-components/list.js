import './list-item.js';

const listTemplate = document.createElement('template');
listTemplate.innerHTML = `
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

        .list-item-container {
            margin-bottom: 1rem;
            padding: 1rem;
        }

        .inner-container {
            display: flex;
            flex-flow: row wrap;
        }

        @media (max-width: 576px) and (orientation: portrait) { 
            .list-item-container { 
                width: 100%;
                 height: 11vh;
                 padding: 0 .5rem;     
            }
        }

        @media (min-width: 577px) { 
            .list-item-container {
                width: 50%;
                height:calc(1.2 * 7vh);
                padding: 0 .5rem; 
                height: 11vh;
            }
            
         }
         @media (max-width:680px) and (orientation:landscape){ 
            .list-item-container {
                width: 50%;
                height: 12vw;
            }
         }

        @media (min-width: 760px) { 
         .list-item-container {
             width: 50%;
             height:  11vw;
         }
        }

        @media (min-width: 1200px) { 
            .list-item-container {
                width: 33%;
                height: 9rem
            }
         }
        
    </style>
    <div class="inner-container"></div>
`;

class ListComponent extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    get config() {
        return this._config
    }

    set config(val) {
        this._config = val;
        this.render(val);
    }

    configInit = {
        id: 'title',
        title: 'Title here',
        subtitle: 'Subtitle here',
        thumb: null,
        
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = listTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));
        //******************************************************** */
        this._config = this.configInit;
    }

    render(val) {
        val.forEach(item => {

            const listItemContainer = document.createElement('div');
            listItemContainer.classList.add('list-item-container');

            const listItem = document.createElement('ph-list-item');
            listItem.config = item;

            listItem.addEventListener('item-click', e => this._selectListItem(e))
            listItemContainer.appendChild(listItem);

            this.innerContainer = this.shadowRoot.querySelector('.inner-container');
            this.innerContainer.appendChild(listItemContainer);
        });


        this.shadowRoot.appendChild(this.innerContainer);

    }

    attributeChangedCallback(attr, oldval, newval) {
        if (oldval === newval) return;
    }

    _selectListItem(e) {
        const allItems = this.shadowRoot.querySelectorAll('ph-list-item');
        allItems.forEach(item => item.removeAttribute('checked'));
        e.target.setAttribute('checked', '');
        const ItemSelectEvent = new CustomEvent('item-click', { detail: e.detail });
        this.dispatchEvent(ItemSelectEvent);



    }

}
window.customElements.define('ph-list', ListComponent);