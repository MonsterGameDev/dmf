import "./teater-page.scss";
import "./../../components/theater/stage/stage.js";
import "./../../components/form-components/radio-button-group-component.js"
import StageRetrievalService from "../../shared/stages/stage-retrieval.service";

const stageService = new StageRetrievalService();

const _availableStages = [];


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

