import './form-controls.scss';
import '../../components/form-components/list.js';
import '../../components/form-components/radio-button-group-component.js';
import StageRetrievalService from './../../shared/theater/stage-retrieval.service.js';

//************* ITEM LIST*******************
const stageRetrievalService = new StageRetrievalService();
let listConfig = stageRetrievalService.getAllStages().map(stageItem => {
    const conf = {
        id: stageItem.id,
        title: stageItem.label,
        subtitle: stageItem.description,
        thumb: stageItem.thumb,
    };
    return conf;

});

const phList = document.querySelector('ph-list');
phList.config = listConfig;

phList.addEventListener('item-click', (e) => console.log('you selected: ', e.detail))
//********************************************* */

//**************** RADIO BUTTON UST *************/
const RADIOBUTTON_MOCK = {
    groupHeading: 'Radio-button Group Example',
    fieldName: 'favourite-color',
    selectedId: '',
    radiobuttons: [
        {
            label: 'blue',
            id: 'blue',
            value: 'blue',
        },
        {
            label: 'green',
            id: 'green',
            value: 'green',
        },
        {
            label: 'yellow',
            id: 'yellow',
            value: 'yellow  ',
        },
    ]
}

const radioButtonGroup = document.querySelector('ph-radio-button-group#column-example');
radioButtonGroup.config = RADIOBUTTON_MOCK;
radioButtonGroup.addEventListener('change', (e) => console.log('First radio-button-group, you selecred: ', e.detail))

const radioButtonGroup2 = document.querySelector('ph-radio-button-group#row-example');
radioButtonGroup2.config = RADIOBUTTON_MOCK;
radioButtonGroup2.addEventListener('change', (e) => console.log('Second radio-button-group, you selecred: ', e.detail))

//********************************************* */