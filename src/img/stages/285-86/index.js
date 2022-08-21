
import Bagtaeppe_MarkedsPlads from './layer-286-markesplads-bag.webp';
import Mellemtaeppe_MarkedsPlads from './layer-285-markesplads-mellem.webp';
import Fortaeppe_MarkedsPlads from './layer-285-markesplads-for.webp';
import Thumbnail_MarkedsPlads from './D-285-86-stage-markesplads-thumb.jpg'

export default {
    id: 'markedsplads',
    restrictYAxis: true,
    label: 'Markedsplads',
    thumb: Thumbnail_MarkedsPlads,
    description: 'D-285-86',
    layers: [
        {
            imgSrc: Bagtaeppe_MarkedsPlads,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_MarkedsPlads,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Fortaeppe_MarkedsPlads,
            altText: "fortæppe",
            zIndex: 3,
        },
    ]
}