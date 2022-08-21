
import Bagtaeppe_BorgBy from './layer-669-borgby-bag.webp';
import Mellemtaeppe_BorgBy from './layer-671-borgby-mellem.webp';
import Fortaeppe_BorgBy from './layer-670-borgby-for.webp';
import Thumbnail_BorgBy from './D-669-70-71-stage-borgby-thumb.jpg'

export default {
    id: 'borgby',
    restrictYAxis: true,
    label: 'Borg By',
    thumb: Thumbnail_BorgBy,
    description: 'D-669-70-71',
    layers: [
        {
            imgSrc: Bagtaeppe_BorgBy,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_BorgBy,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Fortaeppe_BorgBy,
            altText: "fortæppe",
            zIndex: 3,
        },
    ]
}