import './transparency.scss';
import './../../components/transparency/havn.js';
import './../../components/transparency/arab-city.js';
import './../../components/transparency/kirkegaard.js';

const phHavn = document.querySelector('ph-havn-transparent');
const phArabCity = document.querySelector('ph-arab-city-transparent')
const phKirkegaard = document.querySelector('ph-kirkegaard-transparent')

document.getElementById('play-havn').addEventListener('click', () => {
    phHavn.Anim.play();
});
document.getElementById('reset-havn').addEventListener('click', () => {
    phHavn.Anim.reverse();
});
document.getElementById('play-arab-city').addEventListener('click', () => {
    phArabCity.Anim.play()
});
document.getElementById('reset-arab-city').addEventListener('click', () => {
    phArabCity.Anim.reverse();
});
document.getElementById('play-kirkegaard').addEventListener('click', () => {
    phKirkegaard.Anim.play()
});
document.getElementById('reset-kirkegaard').addEventListener('click', () => {
    phKirkegaard.Anim.reverse();
});

