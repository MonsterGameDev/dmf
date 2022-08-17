
import Bagtaeppe_Urskov from './layer-112-urskov-bag.webp';
import Mellemtaeppe_Urskov from './layer-111-urskov-mellem.webp';
import Fortaeppe_Urskov from './layer-111-urskov-for.webp';
import Thumbnail_Urskov from './D-111-12-stage-jungle-thumb.jpg'

export default {
    id: 'urskov',
    restrictYAxis: true,
    label: 'Urskov',
    thumb: Thumbnail_Urskov,
    layers: [
        {
            imgSrc: Bagtaeppe_Urskov,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_Urskov,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Fortaeppe_Urskov,
            altText: "fortæppe",
            zIndex: 3,
        },
    ]
}