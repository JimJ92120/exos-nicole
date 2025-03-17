import { Excercice, Section } from "./type";

class Excercice4 extends Excercice {
  title: string = "Exercice 4";
  className: string = "exercise-4";

  constructor() {
    super();
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
${this.inlineStyle}

`;
  }

  private get sections(): Section[] {
    return [
      {
        title: "1ère fonction",
        content: `
  <div>
    <p>Étudier les variations de <math>
      <mi>f</mi>(<mi>x</mi>) = 5<mi>x</mi> + 1
    </math> sur <b>R</b></p>
    <p><math>
      <mi>f</mi><mn>'</mn>(<mi>x</mi>) = 5 > 0
    </math> donc:</p>
  </div>

  <div>
    <!--  | x | -∞ | 3/2 |  +∞ |
          |---|----|-----|-----|
          | f'|       0
          | f |       /
    -->
    <math>
      <mtable frame="solid">
        <mtr>
          <mtd><mi>
            <math><mi>x</mi></math>
          </mi></mtd>
          <mtd><mi>-∞</mi></mtd>
          <mtd><mi></mi></mtd>
          <mtd><mi>+∞</mi></mtd>
        </mtr>
        <mtr>
          <mtd><mi>f</mi><mn>'</mn></mtd>
          <mtd><mi></mi></mtd>
          <mtd><mi>0</mi></mtd>
          <mtd><mi></mi></mtd>
        </mtr>
        <mtr>
          <mtd><mi>f</mi></mtd>
          <mtd><mi></mi></mtd>
          <mtd><mi>/</mi></mtd>
          <mtd><mi></mi></mtd>
        </mtr>
      </mtable>
    </math>
  </div>
          `,
      },
      {
        title: "2ème fonction",
        content: `
<div>
  <p>Étudier les variations de <math>
    <mi>f</mi>(<mi>x</mi>) = <msup><mi>x</mi><mn>2</mn></msup> - 3<mi>x</mi> +2
  </math> sur <b>R</b>.</p>
  <p>
    <math><mi>f</mi><mn>'</mn>(<mi>x</mi>) = 2<mi>x</mi> - 3
    </math> et <math>
      2<mi>x</mi> - 3 > 0
    </math> si <math>
      <mi>x</mi> <mfrac><mrow>3</mrow><mrow>2</mrow></mfrac>
    </math>  donc:</p>
</div>

<div>
  <!--  | x | -∞ | 3/2 |  +∞ |
        |---|----|-----|-----|
        | f'|    -  0     +  |
        | f |    \\       /  |
  -->
  <math>
    <mtable frame="solid">
      <mtr>
        <mtd><mi>
          <math><mi>x</mi></math>
        </mi></mtd>
        <mtd><mi>-∞</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>
          <math><mfrac><mrow>3</mrow><mrow>2</mrow></mfrac></math>
        </mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>+∞</mi></mtd>
      </mtr>
      <mtr>
        <mtd><mi>f</mi><mn>'</mn></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>-</mi></mtd>
        <mtd><mi>0</mi></mtd>
        <mtd><mi>+</mi></mtd>
        <mtd><mi></mi></mtd>
      </mtr>
      <mtr>
        <mtd><mi>f</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>\\</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>/</mi></mtd>
        <mtd><mi></mi></mtd>
      </mtr>
    </mtable>
  </math>
</div>  
`,
      },
      {
        title: "3ème fonction",
        content: `
<div>
  <p>Étudier les variations de <math>
    <mi>f</mi>(<mi>x</mi>) = <msup><mi>x</mi><mn>3</mn></msup> - 3<msup><mi>x</mi><mn>2</mn></msup> + 2<mi>x</mi> - 3
  </math> sur <b>R</b>.</p>
  <p><math>
    <mi>f</mi><mn>'</mn>(<mi>x</mi>) = 3<msup><mi>x</mi><mn>2</mn></msup> - 6<mi>x</mi> + 2
  </math> et <math>
    Δ = 36 - 24 = 12
  </math></p>
  <p>Il y a 2 racines <math>
    <msub><mi>x</mi><mn>1</mn></msub>
  </math> et <math>
    <msub><mi>x</mi><mn>2</mn></msub>
  </math>.</p>
  <p>
    <math>
      <msub>
        <mi>x</mi>
        <mn>1</mn>
      </msub>
      =
      <mfrac>
        <mrow>(6 + <msqrt>2</msqrt>)</mrow>
        <mrow>6</mrow>
      </mfrac>
      = 1.6
    </math>
    et
    <math>
      <msub>
        <mi>x</mi>
        <mn>2</mn>
      </msub>
      =
      <mfrac>
        <mrow>(6 - 2<msqrt>3</msqrt>)</mrow>
        <mrow>6</mrow>
      </mfrac>
      = 0.4
    </math>
  </p>

  <!--  | x | -∞ | x2  | x1  |  +∞ |
        |---|----|-----|-----|-----|
        | f'|    +  0  -  0  +     |
        | f |    /     \\    /     |
  -->
  <math>
    <mtable frame="solid">
      <mtr>
        <mtd><mi>
          <math><mi>x</mi></math>
        </mi></mtd>
        <mtd><mi>-∞</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>x2</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>x3</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>+∞</mi></mtd>
      </mtr>
      <mtr>
        <mtd><mi>f</mi><mn>'</mn></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>+</mi></mtd>
        <mtd><mi>0</mi></mtd>
        <mtd><mi>-</mi></mtd>
        <mtd><mi>0</mi></mtd>
        <mtd><mi>+</mi></mtd>
      </mtr>
      <mtr>
        <mtd><mi>f</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>/</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>\\</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>/</mi></mtd>
      </mtr>
    </mtable>
  </math>

</div>        
`,
      },
      {
        title: "4e fonction",
        content: `
<div>
  <p>
    Étudier les variations de
    <math>
      <mi>f</mi>(<mi>x</mi>) =
      <mfrac>
        <mrow>3<mi>x</mi> - 1</mrow>
        <mrow>-2<mi>x</mi> + 5</mrow>
      </mfrac>
    </math>
    sur
    <math>
      ]-∞ ;
      <mfrac>
        <mrow>5</mrow>
        <mrow>2</mrow>
      </mfrac>
      [ U ]
      <mfrac>
        <mrow>5</mrow>
        <mrow>2</mrow>
      </mfrac>
      ; +∞ 
    </math>.
  </p>
  <p>
    <math>
      <mi>f</mi><mn>'</mn>(<mi>x</mi>) =
      <mfrac>
        <mrow>3 (-2<mi>x</mi> + 5) - (3<mi>x</mi> - 1) (-2)</mrow>
        <mrow>
          <msup>
            <mi>(-2<mi>x</mi> + 5)</mi><mn>2</mn>
          </msup>
        </mrow>
      </mfrac>
      =
      <mfrac>
        <mrow>13</mrow>
        <mrow>
          <msup>
            <mi>(-2<mi>x</mi> + 5)</mi><mn>2</mn>
          </msup>
        </mrow>
      </mfrac>
      > 0
    </math>
  </p>
</div>

<div>
  <!--  | x | -∞ | 5/2 |  +∞ |
        |---|----|-----|-----|
        | f'|  +          +  |
        | f |  /          /  |
  -->
  <math>
    <mtable frame="solid">
      <mtr>
        <mtd>
          <mi>
            <math><mi>x</mi></math>
          </mi>
        </mtd>
        <mtd><mi>-∞</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd>
          <mi>
            <math>
              <mfrac><mrow>5</mrow><mrow>2</mrow></mfrac>
            </math>
          </mi>
        </mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>+∞</mi></mtd>
      </mtr>
      <mtr>
        <mtd><mi>f</mi><mn>'</mn></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>+</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>+</mi></mtd>
        <mtd><mi></mi></mtd>
      </mtr>
      <mtr>
        <mtd><mi>f</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>/</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>/</mi></mtd>
        <mtd><mi></mi></mtd>
      </mtr>
    </mtable>
  </math>
</div>
`,
      },
      {
        title: "5ème fonction",
        content: `
<div>
  <p>
    Étudier les variations de
    <math><mi>f</mi>(<mi>x</mi>) = (2<mi>x</mi> + 1)</math>,
    <math><mi>ln</mi>(<mi>x</mi>)</math> sur <b>R*+</b>
    .
  </p>
  <p>
    <math>
      <mi>f</mi><mn>´</mn>(<mi>x</mi>) =
      <mfrac>
        <mrow>2<mi>ln</mi>(<mi>x</mi>) + (2<mi>x</mi> + 1)</mrow>
        <mrow>
          <mi>x</mi>
        </mrow>
      </mfrac>
    </math>
  </p>
  <p>
    On la nomme
    <math>
      <mi>g</mi>(<mi>x</mi>) = 2<mi>ln</mi>(<mi>x</mi>) + 2 +
      <mfrac>
        <mrow>1</mrow>
        <mrow><mi>x</mi></mrow>
      </mfrac>
    </math>
    .
  </p>
  <p>
    <math>
      <mi>g</mi><mn>´</mn>(<mi>x</mi>) =
      <mfrac>
        <mrow>2</mrow>
        <mrow>x</mrow>
      </mfrac>
      -
      <mfrac>
        <mrow>1</mrow>
        <mrow>
          <msup><mi>x</mi><mn>2</mn></msup>
        </mrow>
      </mfrac>
      =
      <mfrac>
        <mrow>2<mi>x</mi> - 1</mrow>
        <mrow>
          <msup><mi>x</mi><mn>2</mn></msup>
        </mrow>
      </mfrac>
      > 0
    </math>
    si
    <math>
      <mi>x</mi>
      <mfrac>
        <mrow>1</mrow>
        <mrow>2</mrow>
      </mfrac>
    </math>
  </p>
  <p>
    <math>
      <mi>g</mi>(
      <mfrac>
        <mrow>1</mrow>
        <mrow>2</mrow>
      </mfrac>
      ) = <mi>ln</mi>(0.5) + 4 = 3.3
    </math>
  </p>
</div>

<div>
  <!--  | x |  0 | 1/2 |  +∞ |
        |---|----|-----|-----|
        | g'|  -    0     +  |
        | g |  \          /  |
  -->
  <math>
    <mtable frame="solid">
      <mtr>
        <mtd>
          <mi>
            <math><mi>x</mi></math>
          </mi>
        </mtd>
        <mtd><mi>-∞</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd>
          <mi>
            <math>
              <mfrac><mrow>1</mrow><mrow>2</mrow></mfrac>
            </math>
          </mi>
        </mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>+∞</mi></mtd>
      </mtr>
      <mtr>
        <mtd><mi>g</mi><mn>'</mn></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>-</mi></mtd>
        <mtd><mi>0</mi></mtd>
        <mtd><mi>+</mi></mtd>
        <mtd><mi></mi></mtd>
      </mtr>
      <mtr>
        <mtd><mi>g</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>\</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>/</mi></mtd>
        <mtd><mi></mi></mtd>
      </mtr>
    </mtable>
  </math>
</div>
<br />

<div>
  <!--  | x |  0 | +∞ |
        |---|----|----|
        | f'|    +    |
        | f |    /    |  
  -->
  <math>
    <mtable frame="solid">
      <mtr>
        <mtd>
          <mi>
            <math><mi>x</mi></math>
          </mi>
        </mtd>
        <mtd><mi>0</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>+∞</mi></mtd>
      </mtr>
      <mtr>
        <mtd><mi>f</mi><mn>'</mn></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>+</mi></mtd>
        <mtd><mi></mi></mtd>
      </mtr>
      <mtr>
        <mtd><mi>f</mi></mtd>
        <mtd><mi></mi></mtd>
        <mtd><mi>/</mi></mtd>
        <mtd><mi></mi></mtd>
      </mtr>
    </mtable>
  </math>
</div>     
        
`,
      },
    ];
  }

  private get inlineStyle(): string {
    return `
  <style>
    .${this.className} {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
    }

    .${this.className} h3 {
      min-width: 100%;
    }

    section {
      text-align: left;
      width: 50%;
      padding: 1rem;
      box-sizing: border-box;
    }

    math {
      display: inline;
    }
  
    table,
    td,
    th {
      border: 1px solid black;
    }
  
    mtable > mtr > mtd:first-child {
      border-right: 1px solid black;
    }
    mtable > mtr:first-child > mtd {
      border-bottom: 1px solid black;
    }
  </style>  
  `;
  }
}

export { Excercice4 };

customElements.define("exercice-4", Excercice4);
