class StageComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const helloworld = document.createElement("div");
    helloworld.innerHTML = "Written i stage.ts";
    this.shadowRoot?.appendChild(helloworld);
  }
}

window.customElements.define("ph-stage", StageComponent);
