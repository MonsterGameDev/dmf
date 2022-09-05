const scrollStoryTemplate = document.createElement('template');
scrollStoryTemplate.innerHTML = `
    <style>

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .inner-container {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center bottom;
    position: relative;
    z-index: -1;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-color: black;
    width: 100%;
    height: 100vh;
    mix-blend-mode: darken;
  }

  .text {
    position: absolute;
    text-transform: uppercase;
    font-size: 25rem;
    font-weight: 900;
    color: white;
    font-family: var(--font-family);
    font-size: 40rem;
  }

  .text-fantasi {
    top: -4rem;
    display: noblocke;
  }

  .text-magi {
    bottom: -8rem;
    display: block;
  }

  .text-papir {
    top: 20rem;
    display: block;
  }

  .text-teater {
   
    display: block;  
  }
    </style>
    <div class="inner-container">
    <div class="overlay">
        <div class="text text-fantasi">Fantasi</div>
        <div class="text text-magi">Magi</div>
        <div class="text text-papir">Papir</div>
        <div class="text text-teater">Teater</div>
      </div>
    </div>
`;

class ScrollStoryComponent extends HTMLElement {
  static get observedAttributes() { return ['background-image', '']; }

  get config() {
    return this._config
  }

  set config(val) {
    this._config = val;
    console.log(this._config);
    this.render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const templateContent = scrollStoryTemplate.content;
    this.shadowRoot.appendChild(templateContent.cloneNode(true));

    this.container = this.shadowRoot.querySelector('.inner-container');


    this.textFantasi = this.shadowRoot.querySelector('.text-fantasi')
    this.textMagi = this.shadowRoot.querySelector('.text-magi')
    this.textPapir = this.shadowRoot.querySelector('.text-papir')
    this.textTeater = this.shadowRoot.querySelector('.text-teater')

    this.setupAnimation();


    //******************************************************** */
    this._config = null;
  }

  render() {
    this.container.style.backgroundImage = `url(${this._config.backgroundImage})`;
  }

  attributeChangedCallback(attr, oldval, newval) {
    if (oldval === newval) return;
  }

  setupAnimation() {
    const txtFantasiKFs = [{ transform: 'translateX(200rem)' }, { transform: 'translateX(-200rem)' }];
    const txMagiKFs = [{ transform: 'translateX(-50rem)' }, { transform: 'translateX(200rem)' }];
    const txtPapirKFs = [{ transform: 'translateX(-150rem)' }, { transform: 'translateX(250rem)' }];
    const txtTeaterKFs = [
      { transform: 'scale(0) translate(0, -50rem)' },
      { transform: 'scale(1) translate(0, 10rem)' },
      { transform: 'scale(20) translate(-15rem, 10rem)', transformOrigin: '50%, 50%' },
    ];

    const txtFantasiFx = new KeyframeEffect(this.textFantasi, txtFantasiKFs, {
      delay: 1200,
      duration: 7000,
      fill: "both"
    })
    const txtMagiFx = new KeyframeEffect(this.textMagi, txMagiKFs, {
      delay: 0,
      duration: 3000,
      fill: "both"
    })
    const txtPapirFx = new KeyframeEffect(this.textPapir, txtPapirKFs, {
      delay: 4800,
      duration: 5000,
      fill: "both"
    })
    const txtTeaterFx = new KeyframeEffect(this.textTeater, txtTeaterKFs, {
      delay: 7000,
      duration: 3000,
      fill: "both"
    })

    new Animation(txtMagiFx).play();
    new Animation(txtFantasiFx).play();
    new Animation(txtPapirFx).play();
    new Animation(txtTeaterFx).play();

  }


}




window.customElements.define('ph-scroll-story', ScrollStoryComponent);