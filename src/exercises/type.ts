type Section = {
  title: string;
  content: string;
};

type ExerciseData = {
  title: string;
  className: string;
  sections: Section[];
  inlineStyle?: (className: string) => string;
};

abstract class Excercise extends HTMLElement {
  readonly title: string;
  readonly className: string;
  readonly sections: Section[];
  readonly inlineStyle: string | null;

  constructor(data: ExerciseData) {
    super();

    this.title = data.title;
    this.className = data.className;
    this.sections = data.sections;

    if (data.inlineStyle) {
      this.inlineStyle = data.inlineStyle(this.className);
    }

    this.attachShadow({ mode: "open" });
    this.shadowRoot!.innerHTML = "<div></div>";
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = this.template;
  }

  get template(): string {
    const sectionsHtml: string = this.sections.reduce(
      (_result, section) =>
        _result +
        `
<section>
  <h4>${section.title}</h4>
  <div>${section.content}
</section>
`,
      ""
    );

    return `
<div class="${this.className}">
  <h3>${this.title}</h3>    
  
  ${sectionsHtml}
</div>
${this.inlineStyle ?? ""}

`;
  }
}

export { Excercise, ExerciseData };
