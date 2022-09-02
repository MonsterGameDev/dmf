const scrollStoryTemplate = document.createElement('template');
scrollStoryTemplate.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    height: 100vh;
    background-image: url("./img//perron.webp");
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
    font-size: 20rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
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
    static get observedAttributes() {
        return [];
    }

    get config() {
        return this._config
    }

    set config(val) {
        this._config = val;
        this.render(val)
    }


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const templateContent = scrollStoryTemplate.content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));

        //******************************************************** */
        this._config = null;
    }

    render(val) { }

    attributeChangedCallback(attr, oldval, newval) {
        if (oldval === newval) return;
    }

}

window.customElements.define('ph-scroll-story', ScrollStoryComponent);