import "./teater-page.scss";
import "./../../components/theater/stage/stage.js";
import "./../../components/form-components/radio-button-group-component.js"
import StageRetrievalService from "../../shared/stages/stage-retrieval.service"; "../../shared/stages/stage-retrieval.service.js";

const _availableStages = [
  {
    id: 'pariseropera',
    value: 'pariseropera',
    label: 'Pariser Opera'
  },
  {
    id: 'roedstue',
    value: 'roedstue',
    label: 'Den røde Stue'
  },
  {
    id: 'gammelgade01',
    value: 'gammelgade01',
    label: 'Gammel gade'
  },
];
const groupConfig = {
  groupHeading: 'Vælg en scene',
  fieldName: 'stageSelector',
  selectedId: 'gammelgade01',
  radiobuttons: _availableStages
}

const stageService = new StageRetrievalService();

const phStage = document.querySelector("ph-stage");

const stageSelector = document.querySelector('ph-radio-button-group');

stageSelector.groupConfig = groupConfig;
phStage.layers = stageService.getStageById(groupConfig.selectedId);

stageSelector.addEventListener('change', (e) => {
  phStage.layers = stageService.getStageById(e.detail);

})

