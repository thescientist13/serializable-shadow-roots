const template = document.createElement('template');

class CardTemplate extends HTMLElement {
  connectedCallback() {
    template.innerHTML = `<p>My Card w/ template</p>`;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-card-template", CardTemplate);