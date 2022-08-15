import Bagtaeppe from "./../../img/stages/pariser-opera/D-467.webp";
import Mellemtaeppe from "./../../img/stages/pariser-opera/D-469.webp";
import Fortaeppe from "./../../img/stages/pariser-opera/D-470.webp";

import Bagtaeppe_RoedStue from "./../../img/stages/roed-stue/D-047.webp";
import Mellemtaeppe_RoedStue from "./../../img/stages/roed-stue/D-048-mellem.webp";
import Fortaeppe_RoedStue from "./../../img/stages/roed-stue/D-048-for.webp";

import Bagtaeppe_GlGade from "./../../img/stages/gammel-gade-01/D-022.webp";
import Mellemtaeppe_GlGade from "./../../img/stages/gammel-gade-01/D-011-mellem.webp";
import Fortaeppe_GlGade from "./../../img/stages/gammel-gade-01/D-011-for.webp";

import Bagtaeppe_IsHav from './../../img/stages/D-005-06-ishav/layer-006-ishav-bag.webp';
import Mellemtaeppe_IsHav from './../../img/stages/D-005-06-ishav/layer-005-ishav-mellem.webp';
import Fortaeppe_IsHav from './../../img/stages/D-005-06-ishav/layer-005-ishav-for.webp';

import Bagtaeppe_PragtHave from './../../img/stages/D-074-75-pragthave/layer-075-pragthave-bag.webp';
import Mellemtaeppe_PragtHave from './../../img/stages/D-074-75-pragthave/layer-074-pragthave-mellem.webp';
import Fortaeppe_PragtHave from './../../img/stages/D-074-75-pragthave/layer-074-pragthave-front.webp';

import Bagtaeppe_RidderSal from './../../img/stages/D-071-72-riddersal/stageD-071-72-riddersal-bag.webp';
import Mellemtaeppe_RidderSal from './../../img/stages/D-071-72-riddersal/stageD-071-72-riddersal-mellem.webp';
import Fortaeppe_RidderSal from './../../img/stages/D-071-72-riddersal/stageD-071-72-riddersal-front.webp';


const STAGES = [
    {
        id: 'gammelgade01',
        restrictYAxis: true,
        label: 'Gammel Gade 01',
        layers: [
            {
                imgSrc: Bagtaeppe_GlGade,
                altText: "bagtaeppe",
                zIndex: 1,
            },
            {
                imgSrc: Mellemtaeppe_GlGade,
                altText: "mellemtaeppe",
                zIndex: 2,
            },
            {
                imgSrc: Fortaeppe_GlGade,
                altText: "fortæppe",
                zIndex: 3,
            }
        ]
    },
    {
        id: 'roedstue',
        restrictYAxis: true,
        label: 'Rød stue',
        layers: [
            {
                imgSrc: Bagtaeppe_RoedStue,
                altText: "bagtaeppe",
                zIndex: 1,
            },
            {
                imgSrc: Mellemtaeppe_RoedStue,
                altText: "mellemtaeppe",
                zIndex: 2,
            },
            {
                imgSrc: Fortaeppe_RoedStue,
                altText: "fortæppe",
                zIndex: 3,
            },
        ]
    },
    {
        id: 'pariseropera',
        restrictYAxis: false,
        label: 'Pariser Opera',
        layers: [
            {
                imgSrc: Bagtaeppe,
                altText: "bagtaeppe",
                zIndex: 1,
            },
            {
                imgSrc: Mellemtaeppe,
                altText: "mellemtaeppe",
                zIndex: 2,
            },
            {
                imgSrc: Fortaeppe,
                altText: "fortæppe",
                zIndex: 3,
            },
        ]
    },
    {
        id: 'ishav',
        restrictYAxis: true,
        label: 'Is Hav',
        layers: [
            {
                imgSrc: Bagtaeppe_IsHav,
                altText: "bagtaeppe",
                zIndex: 1,
            },
            {
                imgSrc: Mellemtaeppe_IsHav,
                altText: "mellemtaeppe",
                zIndex: 2,
            },
            {
                imgSrc: Fortaeppe_IsHav,
                altText: "fortæppe",
                zIndex: 3,
            },
        ]
    },
    {
        id: 'pragthave',
        restrictYAxis: true,
        label: 'Pragt have',
        layers: [
            {
                imgSrc: Bagtaeppe_PragtHave,
                altText: "bagtaeppe",
                zIndex: 1,
            },
            {
                imgSrc: Mellemtaeppe_PragtHave,
                altText: "mellemtaeppe",
                zIndex: 2,
            },
            {
                imgSrc: Fortaeppe_PragtHave,
                altText: "fortæppe",
                zIndex: 3,
            },
        ]
    },
    {
        id: 'riddersal 01',
        restrictYAxis: true,
        label: 'Riddersal',
        layers: [
            {
                imgSrc: Bagtaeppe_RidderSal,
                altText: "bagtaeppe",
                zIndex: 1,
            },
            {
                imgSrc: Mellemtaeppe_RidderSal,
                altText: "mellemtaeppe",
                zIndex: 2,
            },
            {
                imgSrc: Fortaeppe_RidderSal,
                altText: "fortæppe",
                zIndex: 3,
            },
        ]
    }
];

export default STAGES;