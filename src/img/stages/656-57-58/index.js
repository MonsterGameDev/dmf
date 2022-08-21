
import Bagtaeppe_B_ToyShop from './layer-656-toyshop-bag-a.webp';
import Bagtaeppe_A_ToyShop from './layer-656-toyshop-bag-b.webp';
import Mellemtaeppe_ToyShop from './layer-657-toyshop-mellem.webp';
import Fortaeppe_ToyShop from './/layer-658-toyshop-for.webp';
import Thumbnail_ToyShop from './D-656-57-58-stage-toyshop-thumb.jpg'

export default {
    id: 'toyshop',
    restrictYAxis: false,
    label: 'Toy Shop',
    thumb: Thumbnail_ToyShop,
    description: 'D-656-57-58',
    layers: [
        {
            imgSrc: Bagtaeppe_B_ToyShop,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Bagtaeppe_A_ToyShop,
            altText: "bagtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Mellemtaeppe_ToyShop,
            altText: "mellemtaeppe",
            zIndex: 3,
        },
        {
            imgSrc: Fortaeppe_ToyShop,
            altText: "fortæppe",
            zIndex: 4,
        },
    ]
}