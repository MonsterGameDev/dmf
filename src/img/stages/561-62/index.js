
import Bagtaeppe_KinesiskHave from './layer-561-kinesiskhave-bag.webp';
import Mellemtaeppe_B_KinesiskHave from './layer-562-kinesiskhave-mellem-b.webp';
import Mellemtaeppe_A_KinesiskHave from './layer-562-kinesiskhave-mellem-a.webp';
import Fortaeppe_KinesiskHave from './layer-561-kinesiskhave-for.webp';
import Thumbnail_KinesiskHave from './D-561-62-stage-kinesiskhave-thumb.jpg'

export default {
    id: 'kinesiskhave',
    restrictYAxis: true,
    label: 'Kinesisk Have',
    thumb: Thumbnail_KinesiskHave,
    description: 'D-561-62',
    layers: [
        {
            imgSrc: Bagtaeppe_KinesiskHave,
            altText: "bagtaeppe",
            zIndex: 1,
        },
        {
            imgSrc: Mellemtaeppe_B_KinesiskHave,
            altText: "mellemtaeppe",
            zIndex: 2,
        },
        {
            imgSrc: Mellemtaeppe_A_KinesiskHave,
            altText: "mellemtaeppe",
            zIndex: 3,
        },
        {
            imgSrc: Fortaeppe_KinesiskHave,
            altText: "fortæppe",
            zIndex: 4,
        },
    ]
}