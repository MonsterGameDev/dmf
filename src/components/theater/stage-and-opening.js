
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
    }

    set stageOpeningConfig(val) {
        this._stageOpeningConfig = val

        const phStageOpening = this.shadowRoot.querySelector('ph-stage-opening');
        phStageOpening.layers = this._stageOpeningConfig;

    }


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = stageAndOpeningTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        this._stageConfig = {};
        this._stageOpeningConfig = {};


    }

    render(val) {
        if (!val) return;

    }

}

window.customElements.define('ph-stage-and-opening', StageAndOpeningComponent);