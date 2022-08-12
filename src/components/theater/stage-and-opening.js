
import './stage/stage.js';
import './stage-opening/stage-opening-component.js'
import StageRetrievalService from './../../shared/theater/stage-retrieval.service.js'

const stageAndOpeningTemplate = document.createElement('template');
stageAndOpeningTemplate.innerHTML = `
 <style>
 .stage-and-opening-container {
    position: relative;
 }
 
 .stage-container {
    position: absolute;
 }

 .stage-opening-container {
    position: absolute;
 }
 </style>
 <div class="stage-and-opening-container">
    <div class="stage-container">
        <ph-stage id="stage-and-opening-stage"></ph-stage>
    </div>
    <div class="stage-opening-container">
        <ph-stage-opening size="medium"></ph-stage-opening>
    </div>
 </div>
 `;

class StageAndOpeningComponent extends HTMLElement {
    get config() {
        return this._config
    }
    set config(val) {
        this._config = val;
        this.render(val);
    }


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = stageAndOpeningTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        this._stage = '';

        this.stageRetrievalService = new StageRetrievalService();

    }

    render(val) {
        if (!val) return;



        const phStage = this.shadowRoot.querySelector('ph-stage');
        phStage.layers = stageLayers;

        const phStageOpening = this.shadowRoot.querySelector('ph-stage-opening');
        phStageOpening.layers = stageOpeningLayers;







    }

}

window.customElements.define('ph-stage-and-opening', StageAndOpeningComponent);