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