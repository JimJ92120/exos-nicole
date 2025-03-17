type Section = {
  title: string;
  content: string;
};

abstract class Excercice extends HTMLElement {
  abstract title: string;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.innerHTML = "<div></div>";
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = this.template;
  }

  abstract get template(): string;
}

export { Excercice, Section };
