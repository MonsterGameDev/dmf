
import Bagtaeppe_Skov02 from './layer-518-skov-bag.webp';
import Mellemtaeppe_B_Skov02 from './layer-519-skov-mellem-b.webp';
import Mellemtaeppe_A_Skov02 from './layer-521-skov-mellem-a.webp';
import Fortaeppe_Skov02 from './layer-519-skov-for.webp';
import Thumbnail_Skov02 from './D-518-19-20-stage-skov-thumb.jpg'

export default {
    id: 'skov02',
    restrictYAxis: false,
    label: 'Skov 02',
    thumb: Thumbnail_Skov02,
    layers: [
        {
            imgSrc: Bagtaeppe_Skov02,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_B_Skov02,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Mellemtaeppe_A_Skov02,
            altText: "mellemtaeppe",
            zIndex: 3,
        },
        {
            imgSrc: Fortaeppe_Skov02,
            altText: "fortæppe",
            zIndex: 4,
        },
    ]
}