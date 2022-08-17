import "./teater-page.scss";
import "./../../components/theater/stage/stage.js";
import "./../../components/form-components/radio-button-group-component.js"
import "./../../components/theater/stage-opening/stage-opening-component.js";
import "./../../components/theater/stage-and-opening.js";
import Proscenium from './../../img/prosceniums/C-047-proscenium-full.webp';

import StageRetrievalService from "../../shared/theater/stage-retrieval.service";

const stageService = new StageRetrievalService();

const _availableStages = [];
// autogenerering af radiobuttons
stageService.getAllStages().forEach(conf => {
    _availableStages.push({
        id: conf.id,
        value: conf.id,
        label: conf.label
    })
});
const groupConfig = {
    groupHeading: 'Vælg en scene',
    fieldName: 'stageSelector',
    selectedId: 'gammelgade',
    radiobuttons: _availableStages
}

const procscnium = document.getElementById('proscenium');
proscenium.src = Proscenium;
const stageAndOpeningBehindProscenium = document.querySelector('ph-stage-and-opening#behind-proscenium');
stageAndOpeningBehindProscenium.stageConfig = stageService.getStageById('pariseropera')
stageAndOpeningBehindProscenium.stageOpeningConfig = stageService.getStageOpeningById('traditional');


const stageSelector = document.querySelector('ph-radio-button-group');
stageSelector.groupConfig = groupConfig;
phStage.config = stageService.getStageById(groupConfig.selectedId);
stageSelector.addEventListener('change', (e) => {
  phStage.config = stageService.getStageById(e.detail);
})