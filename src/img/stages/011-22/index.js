
import Bagtaeppe_GammelGade from './layer-022-gammelgade-bag.webp';
import Mellemtaeppe_GammelGade from './layer-011-gammelgade-mellem.webp';
import Fortaeppe_GammelGade from './layer-011-gammelgade-for.webp';
import Thumbnail_GammelGade from './D-011-22-stage-gammelgade-thumb.jpg'

export default {
    id: 'gammelgade',
    restrictYAxis: true,
    label: 'Gammel Gade',
    thumb: Thumbnail_GammelGade,
    description: 'D-011-12',
    layers: [
        {
            imgSrc: Bagtaeppe_GammelGade,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_GammelGade,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Fortaeppe_GammelGade,
            altText: "fortæppe",
            zIndex: 3,
        },
    ]
}