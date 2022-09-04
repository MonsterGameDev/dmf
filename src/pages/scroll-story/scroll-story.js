import './scroll-story.scss';
import './../../components/scroll-story/scroll-story.component.js';

import * as BgImage from './../../img/backgrounds/index.js'


const phScrollStory = document.querySelector('ph-scroll-story#first');
phScrollStory.config = {
    backgroundImage: BgImage.default.HavnNat
}