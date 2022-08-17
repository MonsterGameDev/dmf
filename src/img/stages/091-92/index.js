
import Bagtaeppe_Skov from './layer-92-skov-bag.webp';
import Mellemtaeppe_Skov from './layer-091-skov-mellem.webp';
import Fortaeppe_Skov from './layer-091-skov-for.webp';
import Thumbnail_Skov from './D-091-92-stage-thumb.jpg'

export default {
    id: 'skov',
    restrictYAxis: false,
    label: 'Skov',
    thumb: Thumbnail_Skov,
    layers: [
        {
            imgSrc: Bagtaeppe_Skov,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_Skov,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Fortaeppe_Skov,
            altText: "fortæppe",
            zIndex: 3,
        },
    ]
}