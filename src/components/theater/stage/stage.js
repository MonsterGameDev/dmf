
import Utils from './../../../shared/utils/utils.js'
const template = document.createElement('template');

template.innerHTML = `
        <style>
        :host * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        .controller {
          position: relative;
        }
        .overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
      
          z-index: 1;
      
        }
      
        .stage-container {
          position: relative;
          width: 100%;
          
          -moz-perspective: 10px;
          perspective: 10px;
          perspective-origin: 50% 50%;
        
          overflow: hidden;
        }
      
        .parallax {
          width: 100%;
        }
      
        .parallax img {
          width: 100%;
        }
        </style>
        <div class="controller">
            <div class="overlay"></div>
            <div class="stage-container"></div>
        </div>
`

class StageComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._layers = [];
    this._isOpen = false;

    const templateContent = template.content;
    this.shadowRoot.appendChild(templateContent.cloneNode(true));

    this.container = this.shadowRoot.querySelector('.stage-container')
    this.overlay = this.shadowRoot.querySelector('.overlay');

    const utils = new Utils();
    this.hasTouchScreen = utils.hasTouchScreen;
  }

  static get observedAttributes() {
    return ['blendmode', 'overlay-color', 'click-to-activate'];
  }

  get layers() {
    return this._layers;
  }
  set layers(val) {
    if (!val || !val.length) return;
    this._calculateLayers(val);

  }



  connectedCallback() {

    if (!this.hasTouchScreen) {
      console.log('NOT')
      this.overlay.addEventListener('mouseleave', () => { this.container.style.transition = 'perspective-origin 1s'; this.container.style.perspectiveOrigin = '50% 50%' });
      this.overlay.addEventListener('mouseenter', () => { this.container.style.transition = 'unset'; });
      this.overlay.addEventListener('mousemove', this.handleMouseMove.bind(this));
    } else {
      this.overlay.addEventListener('touchend', () => { this.container.style.transition = 'perspective-origin 1s'; this.container.style.perspectiveOrigin = '50% 50%'; });
      this.overlay.addEventListener('touchstart', () => { this.container.style.transition = 'unset'; });
      this.overlay.addEventListener('touchmove', this.handleMouseMove.bind(this));
    }
  }

  attributeChangedCallback(attr, oldval, newval) {

    const handlePlay = this._handlePlay.bind(this);
    if (oldval === newval) return;
    if (attr === 'blendmode') this.overlay.style.mixBlendMode = newval;
    if (attr === 'overlay-color') this.overlay.style.backgroundColor = newval;
    if (attr === 'click-to-activate') {
      if (newval === 'false') {
        this._isOpen = true;
        this.overlay.removeEventListener('click', handlePlay);
      } else {
        this._isOpen = false;
        this.overlay.addEventListener('click', handlePlay);
      }
    }
  }

  _calculateLayers(val) {
    const backCurtainZpos = -((val.length * 10) - 5);
    const baseScale = 1.5;
    const stage = this.shadowRoot.querySelector('.stage-container');

    val.sort((a, b) => b.zIndex - a.zIndex).forEach((layer, i) => {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add(['parallax']);

      //  adding the essence of it all
      layer.zIndex === 1
        ? imgContainer.setAttribute('style', `transform: translateZ(${backCurtainZpos}px) scale(${baseScale + i})`)
        : imgContainer.setAttribute('style', `position:absolute; z-index: ${layer.zIndex}; transform: translateZ(${backCurtainZpos + (layer.zIndex - 1) * 10}px) scale(${baseScale + i})`);



      const img = document.createElement('img');
      img.setAttribute('src', layer.imgSrc);
      img.setAttribute('alt', layer.altText);



      imgContainer.appendChild(img);

      stage.appendChild(imgContainer);

    })
  }

  _handlePlay() {
    this._isOpen = !this._isOpen;
  }

  _computedValues(element, mouseX, mouseY) {
    const computed = this._getComputedStyle(element);
    const xPos = parseInt(mouseX);
    const yPos = parseInt(mouseY);
    const xPercent = (xPos / computed.width) * 100;
    const yPercent = (yPos / computed.height) * 100;

    const param1 = this.setBoundaries(6, 92.5, xPercent);
    const param2 = this.setBoundaries(36, 83, yPercent);

    return param1 + "% " + param2 + "%";
  }

  setBoundaries(min, max, percent) {
    if (percent >= min && percent < max) return percent;
    if (percent < min) return min;
    if (percent > max) return max;
  }

  _getComputedStyle(element) {
    return {
      width: parseInt(window.getComputedStyle(element).width),
      height: parseInt(window.getComputedStyle(element).height),
    };
  }

  handleMouseMove(e) {
    e.preventDefault();
    if (!this._isOpen) return;

    if (this.hasTouchScreen) {
      try {
        alert('7: \r\ntarget: '
          + e.touches[0].target.classList[0] + '\r\n'
          + 'offsetTop: ' + e.touches[0].target.style.offsetTop + '\r\n'
          + 'offsetX: ' + e.touches[0].target.style.offsetX + '\r\n'
          + 'offsetTop: ' + e + '\r\n'
          + 'offsetX: ' + e.touches[0].target.offsetX + '\r\n'
          + 'boundingRect' + e.touches[0].target.getBoundingClientRect.top + '\r\n'
          + 'boundingRect' + e.touches[0].target.getBoundingClientRect.left + '\r\n'

        );
      } catch {
        alert('Error')
      }

      e.offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
      e.offsetY = e.touches[0].pageY - e.touches[0].target.offsetTop;
    }
    const perspectiveOffsets = this._computedValues(
      this.overlay,
      e.offsetX,
      e.offsetY
    );

    this.container.style.perspectiveOrigin = perspectiveOffsets;
  }
}

window.customElements.define('ph-stage', StageComponent);
