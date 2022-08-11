
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
  get layers() {
    return this._layers;
  }
  set layers(val) {
    if (!val || !val.layers.length) return;

    this._calculateLayers(val);

  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._layers = [];
    this._isOpen = false;
    this.disableYAxis = false;
    this.computed = null;

    const templateContent = template.content;
    this.shadowRoot.appendChild(templateContent.cloneNode(true));

    this.container = this.shadowRoot.querySelector('.stage-container')
    this.overlay = this.shadowRoot.querySelector('.overlay');

    const utils = new Utils();
    this.hasTouchScreen = utils.hasTouchScreen;

    this.handleMouseLeaveEvent = this.handleMouseLeave.bind(this);
    this.handleMouseEnterEvent = this.handleMouseEnter.bind(this);
    this.handleMouseMoveEvent = this.handleMouseMove.bind(this);

    this.handleTouchEndEvent = this.handleTouchEnd.bind(this);
    this.handleTouchStartEvent = this.handleTouchStart.bind(this);
    this.handleTouchMoveEvent = this.handleMouseMove.bind(this);

    this.addAllEventListeners()



  }

  addAllEventListeners() {
    if (!this.hasTouchScreen) {
      this.overlay.addEventListener('mouseleave', this.handleMouseLeaveEvent);
      this.overlay.addEventListener('mouseenter', this.handleMouseEnterEvent);
      this.overlay.addEventListener('mousemove', this.handleMouseMoveEvent);
    } else {
      this.overlay.addEventListener('touchend', this.handleTouchEndEvent);
      this.overlay.addEventListener('touchstart', this.handleTouchStartEvent);
      this.overlay.addEventListener('touchmove', this.handleTouchMoveEvent);
    }
  }

  removeAllEventListeners() {
    if (!this.hasTouchScreen) {
      this.overlay.removeEventListener('mouseleave', this.handleMouseLeaveEvent);
      this.overlay.removeEventListener('mouseenter', this.handleMouseEnterEvent);
      this.overlay.removeEventListener('mousemove', this.handleMouseMoveEvent);
    } else {
      this.overlay.removeEventListener('touchend', this.handleTouchEndEvent);
      this.overlay.removeEventListener('touchstart', this.handleTouchStartEvent);
      this.overlay.removeEventListener('touchmove', this.handleTouchMoveEvent);
    }
  }

  handleMouseLeave() { this.container.style.transition = 'perspective-origin 1s'; this.container.style.perspectiveOrigin = '50% 50%' }
  handleMouseEnter() { this.container.style.transition = 'unset'; }
  handleMouseMove(e) {
    // const xpos = e.offsetX;
    // const ypos = e.offsetY;
    e.preventDefault();
    if (!this._isOpen) return;

    // if (this.hasTouchScreen) {
    //   const rect = e.touches[0].target.getBoundingClientRect()
    //   alert('pageX: ' + e.touches[0].pageX + '\r\n'
    //     + 'rect.left: ' + rect.left + '\r\n'
    //     + 'pageY: ' + e.touches[0].pageY + '\r\n'
    //     + 'rect.top: ' + rect.top
    //   )
    //   xpos = e.touches[0].pageX - rect.left;
    //   ypos = e.touches[0].pageY - rect.top;
    // e.offsetX = e.touches[0].pageX - rect.left;
    // e.offsetY = e.touches[0].pageY - rect.top;
    // }

    const perspectiveOffsets = this._computedValues(
      this.overlay,
      xpos,
      ypos,
      //   e.offsetX,
      //   e.offsetY
    );

    this.container.style.perspectiveOrigin = perspectiveOffsets;
  }
  handleTouchEnd() { this.container.style.transition = 'perspective-origin 1s'; this.container.style.perspectiveOrigin = '50% 50%'; };
  handleTouchStart() { this.container.style.transition = 'unset'; };




  static get observedAttributes() {
    return ['blendmode', 'overlay-color', 'click-to-activate', 'disable-parallax'];
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
    if (attr === 'disable-parallax') {
      if (this.hasAttribute('disable-parallax')) {
        console.log('i am gonna remove eventlisteners');
        this.removeAllEventListeners();
      }
    }
  }

  connectedCallback() {
    // aint run before WC-Dom has finished loading
    setTimeout(
      () => { this.computed = this._getComputedStyle(this.overlay); },
      0
    )

  }

  _calculateLayers(val) {

    this.disableYAxis = val.disableYAxis;
    const layers = val.layers;

    const stage = this.shadowRoot.querySelector('.stage-container');
    // reset before drawing
    stage.innerHTML = '';

    const backCurtainZpos = -((layers.length * 10) - 5);
    const baseScale = 1.5;

    layers.sort((a, b) => b.zIndex - a.zIndex).forEach((layer, i) => {
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
    let param2 = this.setBoundaries(36, 83, yPercent);

    if (this.disableYAxis) param2 = 50;

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


}

window.customElements.define('ph-stage', StageComponent);
