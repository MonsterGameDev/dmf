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

const _availableSizes = [
    {
        id: 'small',
        value: 'small',
        label: 'Lille'
    },
    {
        id: 'medium',
        value: 'medium',
        label: 'Normal'
    },
    {
        id: 'large',
        value: 'large',
        label: 'Stor'
    },
];

/**
 reddish #ff9e9e99
 bynight #7b84fc99
 warm: #fcbe7b99
 */
const _availableOverlayColors = [
    {
        id: 'small',
        value: '#ff9e9e99',
        label: 'Rødlig'
    },
    {
        id: 'medium',
        value: '#7b84fc99',
        label: 'Nat'
    },
    {
        id: 'large',
        value: '#fcbe7b99',
        label: 'Sommerdag'
    },
]
const groupConfig = {
    groupHeading: 'Vælg en scene',
    fieldName: 'stageSelector',
    selectedId: 'pariseropera',
    radiobuttons: _availableStages
}

const groupConfig_StageSize = {
    groupHeading: 'Vælg sceneåbningens størrelse',
    fieldName: 'sizeSelector',
    selectedId: 'medium',
    radiobuttons: _availableSizes
}

const groupConfig_OverlayColor = {
    groupHeading: 'Vælg Lys',
    fieldName: 'overlayColorSelector',
    selectedId: '',
    radiobuttons: _availableOverlayColors
}

const procscnium = document.getElementById('proscenium');
proscenium.src = Proscenium;
const stageAndOpeningBehindProscenium = document.querySelector('ph-stage-and-opening#behind-proscenium');
stageAndOpeningBehindProscenium.stageConfig = stageService.getStageById('pariseropera')
stageAndOpeningBehindProscenium.stageOpeningConfig = stageService.getStageOpeningById('traditional');


const stageSelector = document.querySelector('ph-radio-button-group.stage-selector');
stageSelector.groupConfig = groupConfig;
stageSelector.addEventListener('change', (e) => {
    stageAndOpeningBehindProscenium.stageConfig = stageService.getStageById(e.detail);
});

const sizeSelector = document.querySelector('ph-radio-button-group.size-selector');
sizeSelector.groupConfig = groupConfig_StageSize;
sizeSelector.addEventListener('change', (e) => {
    console.log('request size change', e);
    stageAndOpeningBehindProscenium.setAttribute('size', e.detail);
});

const overlayColorSelector = document.querySelector('ph-radio-button-group.overlay-color-selector');
overlayColorSelector.groupConfig = groupConfig_OverlayColor;
overlayColorSelector.addEventListener('change', (e) => {
    console.log('overlay-color change requested', e);
    stageAndOpeningBehindProscenium.setAttribute('overlay-color', e.detail);
});