import "./teater-page.scss";
import "./../../components/theater/stage/stage.js";
import Utils from './../../shared/utils/utils.js';

import Bagtaeppe from "./../../img/stages/pariser-opera/D-467.webp";
import Mellemtaeppe from "./../../img/stages/pariser-opera/D-469.webp";
import Fortaeppe from "./../../img/stages/pariser-opera/D-470.webp";

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
phStage.layers = stageLayers;

const utils = new Utils();
utils.hasTouchScreen ? codeBlock.style.display = 'none' : codeBlock.style.display = 'block';
