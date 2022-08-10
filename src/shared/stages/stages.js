import Bagtaeppe from "./../../img/stages/pariser-opera/D-467.webp";
import Mellemtaeppe from "./../../img/stages/pariser-opera/D-469.webp";
import Fortaeppe from "./../../img/stages/pariser-opera/D-470.webp";

import Bagtaeppe_RoedStue from "./../../img/stages/roed-stue/D-047.webp";
import Mellemtaeppe_RoedStue from "./../../img/stages/roed-stue/D-048-mellem.webp";
import Fortaeppe_RoedStue from "./../../img/stages/roed-stue/D-048-for.webp";


import Bagtaeppe_GlGade from "./../../img/stages/gammel-gade-01/D-022.webp";
import Mellemtaeppe_GlGade from "./../../img/stages/gammel-gade-01/D-011-mellem.webp";
import Fortaeppe_GlGade from "./../../img/stages/gammel-gade-01/D-011-for.webp";


const STAGES = [
    {
        id: 'gammelgade01',
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
    }

];

export default STAGES;