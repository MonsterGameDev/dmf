
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
    width: 100%;
    display: inline-block;
    pointer-events: all;
   
    position: absolute;
 }

 </style>
 <div class="stage-and-opening-container">
    <div class="stage-container">
        <ph-stage blendmode="color-burn" overlay-color="#fcbe7b99"></ph-stage>
    </div>
    <div class="stage-opening-container" style="pointer-events: all;">
        <ph-stage-opening size="medium"></ph-stage-opening>
    </div>
 </div>
 `;
/**
 reddish #ff9e9e99
 bynight #7b84fc99
 warm: #fcbe7b99
 */

class StageAndOpeningComponent extends HTMLElement {

    set stageConfig(val) {
        this._stageConfig = val;

        const phStage = this.shadowRoot.querySelector('ph-stage');
        phStage.config = this._stageConfig;

        phStage.addEventListener('stageclick', () => {
            this.stageOpeningContainer.style.pointerEvents = "all"
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
            if (!this.isCurtainUp) {
                this.phStageOpening.raiseCurtain().play();
                this.stageOpeningContainer.style.pointerEvents = "none"
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

        this.stageOpeningContainer = this.shadowRoot.querySelector('.stage-opening-container');

    }

}

window.customElements.define('ph-stage-and-opening', StageAndOpeningComponent);