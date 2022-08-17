
import Bagtaeppe_PragtHave from './layer-075-pragthave-bag.webp';
import Mellemtaeppe_PragtHave from './layer-074-pragthave-mellem.webp';
import Fortaeppe_PragtHave from './layer-074-pragthave-for.webp';
import Thumbnail_HutteInWald from './D-074-75stage--pragthave-thumb.jpg'

export default {
    id: 'pragthave',
    restrictYAxis: true,
    label: 'Pragthave',
    thumb: Thumbnail_HutteInWald,
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
}