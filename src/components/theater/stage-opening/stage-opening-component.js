const stageOpeningComponentTemplate = document.createElement('template');
stageOpeningComponentTemplate.innerHTML = `
<style>
:host * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.stage-opening {
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: baseline;
}

.curtain {
  width: 100%;
  transform: translateZ(0);
}

.draperies {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.left-drapery {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}

.right-drapery {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}

.sufit {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
<div class="stage-opening">
<div class="draperies">
  <img src="" class="left-drapery"/>
  <img class="right-drapery"/>
</div>
<img class="sufit" />
<img class="curtain" />
</div>
`;

class StageOpeningComponent extends HTMLElement {
  get layers() {
    return this._layers;
  }
  set layers(val) {
    this._layers = val;
    this._setUpImages(val)
  }

  static get observedAttributes() {
    return ['size']
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.isCurtainUp = false;
    this._layers = [];

    const templateContent = stageOpeningComponentTemplate.content;
    this.shadowRoot.appendChild(templateContent.cloneNode(true));

    this.leftDrapery = this.shadowRoot.querySelector('.left-drapery');
    this.rightDrapery = this.shadowRoot.querySelector('.right-drapery');
    this.sufit = this.shadowRoot.querySelector('.sufit');
    this.curtain = this.shadowRoot.querySelector('.curtain')
    this.stageOpening = this.shadowRoot.querySelector('.stage-opening');





    this.addEventListener('click', (e) => {
      const raiseCurtain = this._raiseCurtain();
      const lowerCurtain = this._lowerCurtain();

      raiseCurtain.addEventListener('finish', () => {
        const raiseCurtainEvent = new Event('raiseCurtainAnimationEnd');
        this.dispatchEvent(raiseCurtainEvent);
      });
      lowerCurtain.addEventListener('finish', () => {
        const lowerCurtain = new Event('lowerCurtainAnimationEnd')
        this.dispatchEvent(lowerCurtain);
      })

      if (this.isCurtainUp) {
        lowerCurtain.play();

        const lowerCurtainAnimationStart = new Event('lowerCurtainAnimationStart');
        this.dispatchEvent(lowerCurtainAnimationStart)
      } else {
        raiseCurtain.play();

        const raiseCurtainAnimationStart = new Event('raiseCurtainAnimationStart')
        this.dispatchEvent(raiseCurtainAnimationStart);
      }

      this.isCurtainUp = !this.isCurtainUp;

    })
  }

  _setUpImages(val) {
    val.layers.forEach(layer => {
      switch (layer.id) {
        case 'leftDrapery':
          this.leftDrapery.setAttribute('src', layer.src);
          this.leftDrapery.setAttribute('alt', layer.alt);
          break;
        case 'rightDrapery':
          this.rightDrapery.setAttribute('src', layer.src);
          this.rightDrapery.setAttribute('alt', layer.alt);
          break;
        case 'sufit':
          this.sufit.setAttribute('src', layer.src);
          this.sufit.setAttribute('alt', layer.alt);
          break;
        case 'curtain':
          this.curtain.setAttribute('src', layer.src);
          this.curtain.setAttribute('alt', layer.alt);
          break;
        default:
          console.warning('Set the id of the layer to either: leftDrapery, rightDrapery, sufit or curtain')
          break;
      }
    })

  }



  curtainAnimationOptions = {
    delay: 500,
    duration: 2000,
    easing: "ease-in-out",
    fill: "both",
  };

  _raiseCurtain() {
    const curtainKfs = [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" },
    ];
    const curtainFx = new KeyframeEffect(this.curtain, curtainKfs, this.curtainAnimationOptions);
    return new Animation(curtainFx);
  }

  _lowerCurtain() {
    const curtainKfs = [
      { transform: "translateY(-100%)" },
      { transform: "translateY(0)" },
    ];
    const curtainFx = new KeyframeEffect(this.curtain, curtainKfs, this.curtainAnimationOptions);
    return new Animation(curtainFx);
  }





  attributeChangedCallback(attr, oldval, newval) {
    if (newval === oldval) return;
    if (attr === 'size') this._resizeOpening(newval);
  };

  _resizeOpening(size) {
    // ajusting stage-opening
    switch (size) {
      case "small":
        this.leftDrapery.style.transform = "translateX(-10%)";
        this.rightDrapery.style.transform = `translateX(10%)`;
        this.sufit.style.transform = `translateY(-5%)`;
        break;
      case "medium":
        this.leftDrapery.style.transform = "translateX(-45%)";
        this.rightDrapery.style.transform = `translateX(45%)`;
        this.sufit.style.transform = `translateY(-40%)`;
        break;
      case "large":
        this.leftDrapery.style.transform = "translateX(-70%)";
        this.rightDrapery.style.transform = `translateX(70%)`;
        this.sufit.style.transform = `translateY(-60%)`;
        break;
      default:
        console.warning("Resize imput skal være small, medium eller large, defaulting to medium");
        this.leftDrapery.style.transform = "translateX(-45%)";
        this.rightDrapery.style.transform = `translateX(45%)`;
        this.sufit.style.transform = `translateY(-40%)`;
        break;
    }
  }

}

window.customElements.define('ph-stage-opening', StageOpeningComponent);