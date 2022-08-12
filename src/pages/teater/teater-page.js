import "./teater-page.scss";
import "./../../components/theater/stage/stage.js";
import "./../../components/form-components/radio-button-group-component.js"
import "./../../components/theater/stage-opening/stage-opening-component.js";
import "./../../components/theater/stage-and-opening.js";

import StageRetrievalService from "../../shared/theater/stage-retrieval.service";

const stageService = new StageRetrievalService();

/** ------------------- STAGE SECTION -----------------------  **/

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
  selectedId: 'gammelgade01',
  radiobuttons: _availableStages
}
const phStage = document.querySelector("ph-stage");
const stageSelector = document.querySelector('ph-radio-button-group');
stageSelector.groupConfig = groupConfig;
phStage.layers = stageService.getStageById(groupConfig.selectedId);
stageSelector.addEventListener('change', (e) => {
  phStage.layers = stageService.getStageById(e.detail);

})

/** ------------------- STAGE OPENING SECTION -----------------------  **/

const stageOpening = stageService.getStageOpeningById('traditional');
const phStageOpening = document.querySelector('ph-stage-opening');
phStageOpening.layers = stageOpening

/** ------------------- STAGE AND OPENING SECTION -----------------------  **/
const stageAndOpening = document.querySelector('ph-stage-and-opening');
