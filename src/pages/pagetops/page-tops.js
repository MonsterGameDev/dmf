import './../../components/pagetops/indian-jungle-parallax.js';
import './../../components/pagetops/indian-praries-parallax.js';
import './../../components/pagetops/danmark-til-eideren-parallax.js'
import './../../components/pagetops/morfars-ur.js'
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

const contentContainer_3 = document.querySelector('.content-container-3');
const phDanmarkTilEiderenParallax = document.querySelector('ph-danmark-til-eideren-parallax#third')
contentContainer_3.addEventListener('scroll', () => {
    phDanmarkTilEiderenParallax.setAttribute('scroll-top', contentContainer_3.scrollTop)
});

const contentContainer_4 = document.querySelector('.content-container-4');
const phMorfarsUrParallax = document.querySelector('ph-morfars-ur-parallax#fourth')
contentContainer_4.addEventListener('scroll', () => {
    phMorfarsUrParallax.setAttribute('scroll-top', contentContainer_4.scrollTop)
});