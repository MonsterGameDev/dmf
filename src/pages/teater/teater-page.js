import "./teater-page.scss";
import "./../../components/theater/stage/stage.js";
import "./../../components/form-components/radio-button-group-component.js"
import "./../../components/theater/stage-opening/stage-opening-component.js";
import "./../../components/theater/stage-and-opening.js";
import Proscenium from './../../img/prosceniums/C-047-proscenium-full.webp';

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
phStage.addEventListener('stageclick', () => { console.log('stage was clicked') })
const stageSelector = document.querySelector('ph-radio-button-group');
stageSelector.groupConfig = groupConfig;
phStage.config = stageService.getStageById(groupConfig.selectedId);
stageSelector.addEventListener('change', (e) => {
  phStage.config = stageService.getStageById(e.detail);

})

/** ------------------- STAGE OPENING SECTION -----------------------  **/

// remember ph-stage-opening is first layer
let isCurtainUp = false;
const stageOpening = stageService.getStageOpeningById('traditional');
const phStageOpening = document.querySelector('ph-stage-opening');
phStageOpening.layers = stageOpening;

phStageOpening.addEventListener('click', () => {
  if (!isCurtainUp) {
    const raiseCurtainFn = phStageOpening.raiseCurtain();
    raiseCurtainFn.play();

  } else {
    phStageOpening.lowerCurtain().play();
  }
  isCurtainUp = !isCurtainUp;
});


/** ------------------- STAGE AND OPENING SECTION -----------------------  **/
const stageAndOpening = document.querySelector('ph-stage-and-opening');
stageAndOpening.stageConfig = stageService.getStageById('pariseropera')
stageAndOpening.stageOpeningConfig = stageService.getStageOpeningById('traditional');


/** ------------------- THE FULL MONTY -----------------------  **/
const procscnium = document.getElementById('proscenium');
proscenium.src = Proscenium;
const stageAndOpeningBehindProscenium = document.querySelector('ph-stage-and-opening#behind-proscenium');
stageAndOpeningBehindProscenium.stageConfig = stageService.getStageById('gammelgade01')
stageAndOpeningBehindProscenium.stageOpeningConfig = stageService.getStageOpeningById('traditional');
