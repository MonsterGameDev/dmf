import "./teater-page.scss";
import "./../../components/theater/stage/stage.js";
import Utils from './../../shared/utils/utils.js';

import Bagtaeppe from "./../../img/stages/pariser-opera/D-467.webp";
import Mellemtaeppe from "./../../img/stages/pariser-opera/D-469.webp";
import Fortaeppe from "./../../img/stages/pariser-opera/D-470.webp";

import Bagtaeppe_RoedStue from "./../../img/stages/roed-stue/D-047.webp";
import Mellemtaeppe_RoedStue from "./../../img/stages/roed-stue/D-048-mellem.webp";
import Fortaeppe_RoedStue from "./../../img/stages/roed-stue/D-048-for.webp";




const stageLayers_RoedStue = [
  {
    imgSrc: Bagtaeppe_RoedStue,
    altText: "bagtaeppe",
    zIndex: 1,
  },
  {
    imgSrc: Mellemtaeppe_RoedStue,
    altText: "mellemtaeppe",
    zIndex: 2,
  },
  {
    imgSrc: Fortaeppe_RoedStue,
    altText: "fortæppe",
    zIndex: 3,
  },
];
const stageLayers = [
  {
    imgSrc: Bagtaeppe,
    altText: "bagtaeppe",
    zIndex: 1,
  },
  {
    imgSrc: Mellemtaeppe,
    altText: "mellemtaeppe",
    zIndex: 2,
  },
  {
    imgSrc: Fortaeppe,
    altText: "fortæppe",
    zIndex: 3,
  },
];

const body = document.querySelector("body");
const page = document.querySelector(".page");
const stageSection = document.querySelector(".stage-section");
const stageContainer = document.querySelector(".stage-section__container");
const codeBlock = document.querySelector('.code-example');

const phStage = document.querySelector("ph-stage");
//phStage.layers = stageLayers;
phStage.layers = stageLayers_RoedStue;

