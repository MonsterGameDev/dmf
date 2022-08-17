
import Bagtaeppe_VinterSkov from './layer-277-vinterskov-bag.webp';
import Mellemtaeppe_VinterSkov from './layer-277-vinterskov-mellem.webp';
import Fortaeppe_VinterSkov from './layer-277-vinterskov-for.webp';
import Thumbnail_VinterSkov from './D-276-77-vinterskov-stage-thumb.jpg'

export default {
    id: 'vinterskov',
    restrictYAxis: true,
    label: 'Vinterskov',
    thumb: Thumbnail_VinterSkov,
    layers: [
        {
            imgSrc: Bagtaeppe_VinterSkov,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_VinterSkov,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Fortaeppe_VinterSkov,
            altText: "fortæppe",
            zIndex: 3,
        },
    ]
}