
import Bagtaeppe_BjergLandskab from './layer-295-bjerglandskab-bag.webp';
import Mellemtaeppe_B_BjergLandskab from './layer-296-bjerglandskab-mellem-b.webp';
import Mellemtaeppe_A_BjergLandskab from './layer-296-bjerglandskab-mellem-a.webp';
import Fortaeppe_BjergLandskab from './layer-296-bjerglandskab-for.webp';
import Thumbnail_BjergLandskab from './D-295-96-stage-bjerglandskab-thumb.jpg'

export default {
    id: 'bjerglandskab',
    restrictYAxis: true,
    label: 'Bjerglandskab',
    thumb: Thumbnail_BjergLandskab,
    layers: [
        {
            imgSrc: Bagtaeppe_BjergLandskab,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_B_BjergLandskab,
            altText: "mellemtaeppe-b",
            zIndex: 2,
        },
        {
            imgSrc: Mellemtaeppe_A_BjergLandskab,
            altText: "mellemtaeppe-a",
            zIndex: 3,
        },
        {
            imgSrc: Fortaeppe_BjergLandskab,
            altText: "fortæppe",
            zIndex: 4,
        },
    ]
}