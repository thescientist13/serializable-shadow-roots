class Card extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<p>My Card</p>`;
  }
}

customElements.define("app-card", Card);