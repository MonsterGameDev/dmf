
import Bagtaeppe_IsHav from './layer-006.ishav.bag.webp';
import Mellemtaeppe_IsHav from './layer-005-ishav-mellem.webp';
import Fortaeppe_IsHav from './layer-005-ishav-for.webp';
import Thumbnail_IsHav from './D-005-06-ishav-stage-thumb.jpg'

export default  {
    id: 'ishav',
    restrictYAxis: true,
    label: 'Ishav',
    thumb: Thumbnail_IsHav,
    description:  'D-005, 06',
    layers: [
        {
            imgSrc: Bagtaeppe_IsHav,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_IsHav,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Fortaeppe_IsHav,
            altText: "fortæppe",
            zIndex: 3,
        },
    ]
}