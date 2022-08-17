
import Bagtaeppe_RidderSal from './layer-071-riddersal-bag.webp';
import Mellemtaeppe_RidderSal from './layer-072-riddersal-mellem.webp';
import Fortaeppe_RidderSal from './layer-072-riddersal-for.webp';
import Thumbnail_RidderSal from './D-071-72-stage-riddersal-thumb.jpg'

export default  {
    id: 'riddersal',
    restrictYAxis: true,
    label: 'Riddersal',
    thumb: Thumbnail_RidderSal,
    layers: [
        {
            imgSrc: Bagtaeppe_RidderSal,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_RidderSal,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Fortaeppe_RidderSal,
            altText: "fortæppe",
            zIndex: 3,
        },
    ]
}