/*
    In:  
    groupHeading: string, 
    fieldName: string, - name given to all radiobuttons in group
    selectedId: any (id)
    radiobuttons: {
        label: string;
        id: any;
        value: any
    }[]

    Out-Events:
    change { e.detail: value }
    
    cssVars:
    --radio-button-color
    --radio-button-active-color
*/


const radioButtonGroupTemplate = document.createElement('template');
radioButtonGroupTemplate.innerHTML = `
    <style>
        :host {
            width: 100%;
        }
        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        fieldset.radio-group-container {                       
            width: 100%;
            border: 0;
        }

        legend.radio-group-heading {
            border: 0;
            outline: none;
            font-size: 1.5em;
            color: var(--radio-button-color, )
        }

        .radio-group-fields {
            width: 100%;
            display: flex;
            justify-content: flex-start;;
        }

        .radio-field-container {
            padding: 1rem;
            min-width: 33%;
        }

        .radio-button-input {
            display:none;
        }

        .radio-button-label {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            -webkit-transition: opacity 1s;
            color: var(--radio-button-color);
            transition: all .5s;  /*remembrer also to change .radio-button-grafix transition*/
            margin-right: 2vw;
            width: 100%;
        }

        .radio-button-label:hover {
            color: var(--radio-button-active-color, red); 
        }

        .radio-button-label:hover  .radio-button-grafix-container .radio-button-grafix {
            border-color: var(--radio-button-active-color, red); 
        }

        .radio-button-label:hover  .radio-button-label-text {
            color: var(--radio-button-active-color, red); 
        }

        .radio-button-label-text {
            display: flex;
            align-items: center;
            padding-left: .8vw;
            font-size: 1em;
            transition: color .5s;
            font-size: 1.5em;
        }

        .radio-button-grafix-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .radio-button-grafix {
            position: relative;
            width: 1rem;
            height: 1rem;
            border: 2px solid var(--radio-button-color, black);
            border-radius: 50%;
            transition: border-color .5s
        }

        .radio-button-grafix::after {
            content: "";
            display: block;
            height: .5rem;
            width: .5rem;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background-color: var(--radio-button-active-color, red);
            opacity: 0;
            
        }

        .radio-button-input:checked ~ .radio-button-label {
            color: var(--radio-button-active-color, red);
        }

        .radio-button-input:checked ~ .radio-button-label .radio-button-grafix-container .radio-button-grafix,
        .radio-button-input:checked ~ .radio-button-label .radio-button-label-text {
            border-color: var(--radio-button-active-color, red);
        }

        .radio-button-input:checked ~ .radio-button-label .radio-button-grafix-container .radio-button-grafix::after {
            opacity: 1;
            height: .5rem;
            width: .5rem;
        }
  

    </style>
`;

class RadioButtonGroupComponent extends HTMLElement {
    static get observedAttributes() {
        return ['flex-direction']
    }

    get config() {
        return this._groupConfig;
    }

    set config(val) {
        if (!val) return;
        this._groupConfig = val;

        this.render(val);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = radioButtonGroupTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        this._groupConfig = null;

        this.flexDirection = 'row';
        console.log('Constr: ', this.flexDirection)

    }

    attributeChangedCallback(attr, oldval, newval) {
        if (oldval === newval) this.return;

        if (attr === 'flex-direction') {
            newval === 'vertical' ? this.flexDirection = 'column' : this.flexDirection = 'row';
            console.log('attr: ', this.flexDirection)
        }
    }


    render(val) {
        if (!val) return;

        const container = document.createElement('fieldset');
        container.classList.add('radio-group-container')

        const groupHeading = document.createElement('legend');
        groupHeading.classList.add('radio-group-heading');
        groupHeading.innerHTML = val.groupHeading ? val.groupHeading : '';
        if (groupHeading.innerHTML === '') groupHeading.style.display = 'none'
        container.appendChild(groupHeading);

        const fieldsContainer = document.createElement('div');
        fieldsContainer.classList.add('radio-group-fields');

        console.log('lagest: ', this.flexDirection);

        fieldsContainer.style.flexDirection = this.flexDirection;

        val.radiobuttons.forEach(rb => {
            fieldsContainer.innerHTML += `
                <div class="radio-field-container"$>
                 <input type="radio" id="${rb.id}" class="radio-button-input" name="${val.fieldName}" value="${rb.value}">
                    <label class="radio-button-label" for="${rb.id}">
                        <span class="radio-button-grafix-container">
                            <span class="radio-button-grafix"></span>
                        </span>
                        <span class="radio-button-label-text">
                        ${rb.label}
                        </span>
                    </label>
                </div>
            `;


        })

        container.appendChild(fieldsContainer);
        this.shadowRoot.appendChild(container);

        const allRadioButtons = this.shadowRoot.querySelectorAll('input');
        allRadioButtons.forEach(r => {
            r.addEventListener('change', (e) => {
                const changeEvent = new CustomEvent('change', { detail: r.value });
                this.dispatchEvent(changeEvent);
            });

            r.id === val.selectedId ? r.checked = true : r.checked = false;
        })
    }
}

window.customElements.define('ph-radio-button-group', RadioButtonGroupComponent);