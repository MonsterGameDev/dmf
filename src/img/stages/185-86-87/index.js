
import Bagtaeppe_FestSal from './layer-185-festsal-bag.webp';
import Mellemtaeppe_FestSal from './layer-186-festsal-mellem.webp';
import Fortaeppe_FestSal from './layer-187-festsal-for.webp';
import Thumbnail_FestSal from './D-185-86-87-stage-festsal-thumb.jpg'

export default {
    id: 'festsal',
    restrictYAxis: false,
    label: 'Festsal',
    thumb: Thumbnail_FestSal,
    layers: [
        {
            imgSrc: Bagtaeppe_FestSal,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_FestSal,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Fortaeppe_FestSal,
            altText: "fortæppe",
            zIndex: 3,
        },
    ]
}