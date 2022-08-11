import CurtainAcropolis from './../../img/stage-opening/traditional/acropolis.webp';
import DraperyLeft from './../../img/stage-opening/traditional/left-drapery.webp';
import DraperyRight from './../../img/stage-opening/traditional/right-drapery.webp';
import Suffit from './../../img/stage-opening/traditional/top-suffit.webp';


const STAGEOPENINGS = [
    {
        id: 'traditional',
        label: 'AJ Traditionel',
        layers: [

            {
                id: "curtain",
                src: CurtainAcropolis,
                alt: "Acropolis Fortæppe",
            },
            {
                id: "sufit",
                src: Suffit,
                alt: "Sufit",
            },
            {
                id: "leftDrapery",
                src: DraperyLeft,
                alt: "Left Drapery",
            },
            {
                id: "rightDrapery",
                src: DraperyRight,
                alt: "Right Drapery",
            },
        ]
    }
];

export default STAGEOPENINGS