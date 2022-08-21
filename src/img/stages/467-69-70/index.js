
import Bagtaeppe_PariserOpera from './layer-467-priseropera-bag.webp';
import Mellemtaeppe_PariserOpera from './layer-469-pariseropera-mellem.webp';
import Fortaeppe_PariserOpera from './layer-470-pariseropera-for.webp';
import Thumbnail_PariserOpera from './D-467-69-70-priseropera-thumb.jpg'

export default {
    id: 'pariseropera',
    restrictYAxis: false,
    label: 'Pariser Opera',
    thumb: Thumbnail_PariserOpera,
    description: 'D-467-69-70',
    layers: [
        {
            imgSrc: Bagtaeppe_PariserOpera,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_PariserOpera,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Fortaeppe_PariserOpera,
            altText: "fortæppe",
            zIndex: 3,
        },
    ]
}