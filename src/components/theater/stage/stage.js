const template = document.createElement('template');
template.innerHTML = `
        <style>
        :host * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          isolation: isolate;
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

          pointer-events: all;
      
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
  static get observedAttributes() {
    return ['blendmode', 'overlay-color', 'click-to-activate', 'disable-parallax'];
  }
  get config() {
    return this._config;
  }
  set config(val) {
    if (!val || !val.layers.length) return;
    this._config = val;
    this._calculateLayers(val);
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = [];
    this._isOpen = true;
    this.restrictYAxis = false;
    this.computed = null;
    this.targetRect = null;
    this.targetSize = null;

    const templateContent = template.content;
    this.shadowRoot.appendChild(templateContent.cloneNode(true));

    this.container = this.shadowRoot.querySelector('.stage-container');
    this.overlay = this.shadowRoot.querySelector('.overlay');

    this.handleMouseEnterEvent = this.handleMouseEnterAndTouchStart.bind(this);
    this.handleMouseMoveEvent = this.handleMouseAndTouchMove.bind(this);
    this.handleMouseLeaveEvent = this.handleMouseLeaveAndTouchEnd.bind(this);

    this.handleTouchStartEvent = this.handleMouseEnterAndTouchStart.bind(this);
    this.handleTouchMoveEvent = this.handleMouseAndTouchMove.bind(this);
    this.handleTouchEndEvent = this.handleMouseLeaveAndTouchEnd.bind(this);

    this.addAllMoveEventListeners()

    this.handleClick = this.handleClick.bind(this);
    this.handleDispatchClick = this.handleDispatchClick.bind(this);

    this.overlay.addEventListener('click', this.handleDispatchClick);
  }

  addAllMoveEventListeners() {
    this.overlay.addEventListener('mouseleave', this.handleMouseLeaveEvent);
    this.overlay.addEventListener('mouseenter', this.handleMouseEnterEvent);
    this.overlay.addEventListener('mousemove', this.handleMouseMoveEvent);

    this.overlay.addEventListener('touchend', this.handleTouchEndEvent);
    this.overlay.addEventListener('touchstart', this.handleTouchStartEvent);
    this.overlay.addEventListener('touchmove', this.handleTouchMoveEvent);

  }
  removeAllMoveEventListeners() {
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

  handleMouseLeaveAndTouchEnd() {
    this.container.style.transition = 'perspective-origin 1s';
    this.container.style.perspectiveOrigin = '50% 50%'
  }
  handleMouseEnterAndTouchStart(e) {
    this.container.style.transition = 'unset';
    this.targetRect = (e.targetTouches) ? e.touches[0].target.getBoundingClientRect() : e.target.getBoundingClientRect();

    this.targetSize = {
      width: (this.targetRect.right - this.targetRect.left),
      height: (this.targetRect.bottom - this.targetRect.top)
    }
  }
  handleMouseAndTouchMove(e) {
    try {
      e.preventDefault();
      if (!this._isOpen) return;

      const position = {
        x: (e.targetTouches) ? e.targetTouches[0].clientX - this.targetRect.x : e.offsetX,
        y: (e.targetTouches) ? e.targetTouches[0].clientY - this.targetRect.y : e.offsetY,
      };

      const minXPos = 6;
      const maxXPos = 92.5;
      let xpos = (position.x / this.targetSize.width * 100);
      if (xpos < minXPos) xpos = minXPos;
      if (xpos > maxXPos) xpos = maxXPos;

      const minYPos = 50;  // prevent stage-floor beeing seen
      let maxYPos = 83;
      if (this._config?.restrictYAxis) maxYPos = 50;

      let ypos = (position.y / this.targetSize.height * 100);
      if (ypos < minYPos) ypos = minYPos;
      if (ypos > maxYPos) ypos = maxYPos;



      const perspectiveOffsets = xpos + '% ' + ypos + '%';
      this.container.style.perspectiveOrigin = perspectiveOffsets;
    }
    catch (error) {
      alert('ERROR: ' + error.message)
    }

  }

  handleClick() { this._isOpen = !this._isOpen; }
  handleDispatchClick() { const stageClickEvent = new Event('stageclick'); this.dispatchEvent(stageClickEvent); }

  attributeChangedCallback(attr, oldval, newval) {
    if (oldval === newval) return;
    if (attr === 'blendmode') this.overlay.style.mixBlendMode = newval;
    if (attr === 'overlay-color') this.overlay.style.backgroundColor = newval;
    if (attr === 'click-to-activate') {
      if (this.hasAttribute('click-to-activate')) {
        this._isOpen = false;
        this.overlay.removeEventListener('click', this.handleDispatchClick);
        this.overlay.addEventListener('click', this.handleClick);
      }
    }
    if (attr === 'disable-parallax') {
      if (this.hasAttribute('disable-parallax')) {
        this.removeAllMoveEventListeners();
      }
    }
  }


  _calculateLayers(val) {
    this.restrictYAxis = val.restrictYAxis;
    const layers = val.layers;

    const stage = this.shadowRoot.querySelector('.stage-container');
    stage.innerHTML = ''; //reset

    const backCurtainZpos = -((layers.length * 10) - 5);
    const baseScale = 1.5;

    // Looping through layers
    layers.sort((a, b) => b.zIndex - a.zIndex).forEach((layer, i) => {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add(['parallax']);

      //  Z-positioning layers
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

  setBoundaries(min, max, percent) {
    if (percent >= min && percent < max) return percent;
    if (percent < min) return min;
    if (percent > max) return max;
  }

}

window.customElements.define('ph-stage', StageComponent);
