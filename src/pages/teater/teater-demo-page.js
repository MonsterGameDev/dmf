import "./teater-page.scss";
import "./../../components/theater/stage/stage.js";
import "./../../components/form-components/radio-button-group-component.js"
import "./../../components/theater/stage-opening/stage-opening-component.js";
import "./../../components/theater/stage-and-opening.js";
import "./../../components/form-components/list.js";

import Proscenium from './../../img/prosceniums/C-047-proscenium-full.webp';
import StageRetrievalService from "../../shared/theater/stage-retrieval.service";

const stageRetrievalService = new StageRetrievalService();
const listConfig = stageRetrievalService.getAllStages().map(stageItem => {
    const conf = {
        id: stageItem.id,
        title: stageItem.label,
        subtitle: stageItem.description,
        thumb: stageItem.thumb,
    };
    return conf;

});

// ************  RADIO BUTTONS *************************
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
    }
];
const groupConfig_StageSize = {
    groupHeading: 'Vælg sceneåbningens størrelse',
    fieldName: 'sizeSelector',
    selectedId: 'medium',
    radiobuttons: _availableSizes
};
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
        label: 'Sommeraften'
    },
    {
        id: 'none',
        value: 'none',
        label: 'Ingen'
    }
];
const groupConfig_OverlayColor = {
    groupHeading: 'Vælg Lys',
    fieldName: 'overlayColorSelector',
    selectedId: 'none',
    radiobuttons: _availableOverlayColors
};
//*************************************************** */

const proscenium = document.getElementById('proscenium');
proscenium.src = Proscenium;
const stageAndOpeningBehindProscenium = document.querySelector('ph-stage-and-opening#behind-proscenium');
stageAndOpeningBehindProscenium.stageConfig = stageRetrievalService.getStageById('pariseropera')
stageAndOpeningBehindProscenium.stageOpeningConfig = stageRetrievalService.getStageOpeningById('traditional');


const stageSelector = document.querySelector('ph-list.stage-selector');
stageSelector.config = listConfig;
stageSelector.addEventListener('item-click', (e) => {
    stageAndOpeningBehindProscenium.stageConfig = stageRetrievalService.getStageById(e.detail);
});

const sizeSelector = document.querySelector('ph-radio-button-group.size-selector');
sizeSelector.config = groupConfig_StageSize;
sizeSelector.addEventListener('change', (e) => {
    stageAndOpeningBehindProscenium.setAttribute('size', e.detail);
});

const overlayColorSelector = document.querySelector('ph-radio-button-group.overlay-color-selector');
overlayColorSelector.config = groupConfig_OverlayColor;
overlayColorSelector.addEventListener('change', (e) => {

    const overlayColor = e.detail === 'none' ? 'transparent' : e.detail
    stageAndOpeningBehindProscenium.setAttribute('overlay-color', overlayColor);
});