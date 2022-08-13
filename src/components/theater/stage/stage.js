class UtilsService {
  constructor() {
    this._hasTouchScreen = false;
  }

  get hasTouchScreen() {
    if ("maxTouchPoints" in navigator) {
      this._hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      this._hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
      var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
        this._hasTouchScreen = !!mQ.matches;
      } else if ('orientation' in window) {
        this._hasTouchScreen = true; // deprecated, but good fallback
      } else {
        // Only as a last resort, fall back to user agent sniffing
        var UA = navigator.userAgent;
        this._hasTouchScreen = (
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
      }
    }

    return this._hasTouchScreen
  }
}

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
    this._isOpen = true;
    this.disableYAxis = false;
    this.computed = null;

    const templateContent = template.content;
    this.shadowRoot.appendChild(templateContent.cloneNode(true));

    this.container = this.shadowRoot.querySelector('.stage-container');
    this.overlay = this.shadowRoot.querySelector('.overlay');


    const utils = new UtilsService();
    this.hasTouchScreen = utils.hasTouchScreen;

    this.handleMouseLeaveEvent = this.handleMouseLeave.bind(this);
    this.handleMouseEnterEvent = this.handleMouseEnter.bind(this);
    this.handleMouseMoveEvent = this.handleMouseMove.bind(this);

    this.handleTouchEndEvent = this.handleTouchEnd.bind(this);
    this.handleTouchStartEvent = this.handleTouchStart.bind(this);
    this.handleTouchMoveEvent = this.handleMouseMove.bind(this);
    this.addAllEventListeners()

    this.handleClick = this.handleClick.bind(this);
    this.handleDispatchClick = this.handleDispatchClick.bind(this);

    this.overlay.addEventListener('click', this.handleDispatchClick);
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
    e.preventDefault();
    if (!this._isOpen) return;

    // if (this.hasTouchScreen) {
    //   const rect = e.touches[0].target.getBoundingClientRect()

    //   e.offsetX = e.touches[0].pageX - rect.left;
    //   e.offsetY = e.touches[0].pageY - rect.top;
    // }

    const position = {
      x: (e.targetTouches) ? e.targetTouches[0].pageX : e.offsetX,
      y: (e.targetTouches) ? e.targetTouches[0].pageY : e.offsetY
    };

    if (parent.offsetParent) { alert('offsetLeft: ' + parent.offsetLeft + '\r\n offsetTop; ' + parent.offsetTop) }

    while (parent.offsetParent) {

      position.x -= parent.offsetLeft - parent.scrollLeft;
      position.y -= parent.offsetTop - parent.scrollTop;

      parent = parent.offsetParent;
    }


    const perspectiveOffsets = this._computedValues(
      this.overlay,
      position.x,
      position.y
    );





    // const perspectiveOffsets = this._computedValues(
    //   this.overlay,
    //   e.offsetX,
    //   e.offsetY
    // );

    this.container.style.perspectiveOrigin = perspectiveOffsets;
  }
  handleTouchEnd() { this.container.style.transition = 'perspective-origin 1s'; this.container.style.perspectiveOrigin = '50% 50%'; };
  handleTouchStart() { this.container.style.transition = 'unset'; };

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
