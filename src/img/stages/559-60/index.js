
import Bagtaeppe_TropiskStrand from './layer-559-tropisk-strand-bag-colorized.webp';
//import Mellemtaeppe_TropiskStrand from '..webp';
import Fortaeppe_TropiskStrand from './layer-559-tropisk-strand-for-colorized.webp';
import Thumbnail_TropiskStrand from './D-559-stage-tropisk-strand-thumb.jpg'

export default {
    id: 'tropiskstrand',
    restrictYAxis: true,
    label: 'Tropisk Strand',
    thumb: Thumbnail_TropiskStrand,
    layers: [
        {
            imgSrc: Bagtaeppe_TropiskStrand,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Fortaeppe_TropiskStrand,
            altText: "fortæppe",
            zIndex: 2,
        },
    ]
}