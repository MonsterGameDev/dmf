import './../../components/pagetops/indian-jungle-parallax.js';
import './../../components/pagetops/indian-praries-parallax.js';
import './page-tops.scss';

const contentContainer = document.querySelector('.content-container');
const phIndianJungleParallax = document.querySelector('ph-indian-jungle-parallax#first')
contentContainer.addEventListener('scroll', () => {
    phIndianJungleParallax.setAttribute('scroll-top', contentContainer.scrollTop)
});

const contentContainer_2 = document.querySelector('.content-container-2');
const phIndianJungleParallax_2 = document.querySelector('ph-indian-prarie-parallax#second')
contentContainer_2.addEventListener('scroll', () => {
    phIndianJungleParallax_2.setAttribute('scroll-top', contentContainer_2.scrollTop)
});