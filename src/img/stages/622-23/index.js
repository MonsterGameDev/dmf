
import Bagtaeppe_HutteInWald from './layer-622-hutteinwald-bag.webp';
import Mellemtaeppe_B_HutteInWald from './layer-623-hutteinwald-mellem-b.webp';
import Mellemtaeppe_A_HutteInWald from './layer-623-hutteinwald-mellem-a.webp';
import Fortaeppe_HutteInWald from './layer-623-hutteinwald-for.webp';
import Thumbnail_HutteInWald from './D-622-23-stage-hutteinwald-thumb.jpg'

export default {
    id: 'hutteinwald',
    restrictYAxis: true,
    label: 'Hutte in Wald',
    thumb: Thumbnail_HutteInWald,
    description: 'D-522-23',
    layers: [
        {
            imgSrc: Bagtaeppe_HutteInWald,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_B_HutteInWald,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Mellemtaeppe_A_HutteInWald,
            altText: "mellemtaeppe",
            zIndex: 3,
        },
        {
            imgSrc: Fortaeppe_HutteInWald,
            altText: "fortæppe",
            zIndex: 4,
        },
    ]
}