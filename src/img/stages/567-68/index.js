
import Bagtaeppe_B_FaustZimmer from './layer-566-faustzimmer-bag-b.webp';
import Bagtaeppe_A_FaustZimmer from './layer-567-faustzimmer-bag-a.webp';
import Mellemtaeppe_FaustZimmer from './layer-568-faustzimmer-mellem.webp';
import Fortaeppe_FaustZimmer from './layer-567-faustzimmer-for.webp';
import Thumbnail_FaustZimmer from './D-567-stage-faustzimmer-thumb.jpg';

export default {
    id: 'faustzimmer',
    restrictYAxis: false,
    label: 'Faust Zimmer',
    thumb: Thumbnail_FaustZimmer,
    description: 'D-567-68',
    layers: [
        {
            imgSrc: Bagtaeppe_A_FaustZimmer,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Bagtaeppe_B_FaustZimmer,
            altText: "bagtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Mellemtaeppe_FaustZimmer,
            altText: "mellemtaeppe",
            zIndex: 3,
        },
        {
            imgSrc: Fortaeppe_FaustZimmer,
            altText: "fortæppe",
            zIndex: 4,
        },
    ]
}