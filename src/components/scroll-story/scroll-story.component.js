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
    background-position: center center;
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
  }

  .text-fantasi {
    left: 50px;
    top: 50px;
  }

  .text-magi {
    left: 50px;
    bottom: 50px;
  }

  .text-papir {
    left: 400px;
    top: 300px;
  }

  .text-teater {
    left: 700px;
    bottom: 400px;
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

    const anim = this.setupAnimation().play();


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
    const txtFantasiKFs = [
      {
        transform: 'translateX(-50rem)'
      },
      {
        transform: 'translateX(150rem)'
      }
    ];

    const txtFantasiFx = new KeyframeEffect(this.textFantasi, txtFantasiKFs, {
      duration: 3000,
      fill: "forwards"
    })

    return new Animation(txtFantasiFx);

  }


}




window.customElements.define('ph-scroll-story', ScrollStoryComponent);