
import './stage/stage.js';
import './stage-opening/stage-opening-component.js'

const stageAndOpeningTemplate = document.createElement('template');
stageAndOpeningTemplate.innerHTML = `
 <style>
 :host * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

 .stage-and-opening-container {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
 }
   
 .stage-container {
    width: 100%;
    display: inline-block;
 }

 .stage-opening-container {
    position: absolute;
    width: 100%;
    display: inline-block;
    pointer-events: none;
 }
 ph-stage-opening {
    pointer-events: all;
 }
 </style>
 <div class="stage-and-opening-container">
    <div class="stage-container">
        <ph-stage blendmode="color-burn" overlay-color="red"></ph-stage>
    </div>
    <div class="stage-opening-container">
        <ph-stage-opening size="medium"></ph-stage-opening>
    </div>
 </div>
 `;

class StageAndOpeningComponent extends HTMLElement {

    set stageConfig(val) {
        this._stageConfig = val;

        const phStage = this.shadowRoot.querySelector('ph-stage');
        phStage.layers = this._stageConfig;

        phStage.addEventListener('stageclick', () => {
            alert('stage clicked')
            this.phStageOpening.style.pointerEvents = 'all';
            this.phStageOpening.lowerCurtain().play();
            this.isCurtainUp = false;
        })
    }

    set stageOpeningConfig(val) {
        this._setupStageOpening(val);

    }

    _setupStageOpening(val) {

        this._stageOpeningConfig = val
        this.phStageOpening.layers = this._stageOpeningConfig;
        this.phStageOpening.addEventListener('click', () => {
            console.log('1: clicked - isCurtainUp: ' + this.isCurtainUp)
            if (!this.isCurtainUp) {
                console.log('calling raiseCurtain')
                this.phStageOpening.raiseCurtain().play();
                this.phStageOpening.style.pointerEvents = 'none';
                this.isCurtainUp = true;
            } else {
                // will never trigger as  stage takes over pointerevents
            }

        });
    }


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this._stageConfig = {};
        this._stageOpeningConfig = {};
        this.isCurtainUp = false;

        const templateContent = stageAndOpeningTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        this.phStageOpening = this.shadowRoot.querySelector('ph-stage-opening');
        this.phStage = this.shadowRoot.querySelector('ph-stage');







    }

    render(val) {
        if (!val) return;

    }

}

window.customElements.define('ph-stage-and-opening', StageAndOpeningComponent);