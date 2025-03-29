import { ExerciseData } from "../type";

const EXERCISE_6: ExerciseData = {
  title: "Nombres complexes - Les 3 formes",
  className: "exercise-6",
  inlineStyle: (): string => {
    return `
  <style>
    .${EXERCISE_6.className} {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
    }

    .${EXERCISE_6.className} h3 {
      min-width: 100%;
    }

    section {
      text-align: left;
      width: 50%;
      padding: 1rem;
      box-sizing: border-box;
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

    li {
      margin-bottom: 2rem;
      padding-left: 1rem;
    }

    .maths-bg {
      background-color: rgba(255, 226, 226, 0.699);
      padding: 0.5rem;
    }
    .note-bg {
      background-color: rgba(226, 238, 255, 0.699);
      padding: 0.25rem 0.5rem;
    }
  </style>  
  `;
  },
  sections: [
    {
      title: "1.",
      content: `
<div>
  <p>
    Soit
      <math class="maths-bg">
        <mi>z</mi>

        <mo>=</mo>

        <mi>x</mi>
        <mo>+</mo>
        <mi>i</mi>
        <mi>y</mi>
      </math>
    le nombre tel que 
      <math>
        <mi>x</mi>
      </math>
    et
      <math>
        <mi>y</mi>
      </math>
    soient des réels et
      <math>
        <msup>
          <mi>i</mi>
          <mn>2</mn>
        </msup>

        <mo>=</mo>

        <mn>-1</mn>
      </math>
    (
      <math>
        <mi>z</mi>
      </math>
    est appelé complexe)
      <math>
        <mi>x</mi>

        <mo>=</mo>

        <msub>
          <mi>R</mi>
          <mi>z</mi>
        </msub>
      </math>
    (partie réelle de 
      <math>
        <mi>z</mi>
      </math>
    ) et 
      <math>
        <mi>y</mi>

        <mo>=</mo>

        <mi>l</mi>
        <msub>
          <mi>m</mi>
          <mi>z</mi>
        </msub>
      </math>
    (partie imaginaire de 
      <math>
        <mi>z</mi>
      </math>
    ).
  </p>
</div>
      `,
    },
    {
      title: "2.",
      content: `
<div>
  <p>
    Soit
      <math>
        <mi>M</mi>
        <mo>(</mo>
          <mi>x</mi>
          <mo>;</mo>
          <mi>y</mi>
        <mo>)</mo>
      </math>
    le point du plan.
    <br />

    Il est appelé <b>image</b> de 
      <math>
        <mi>z</mi>

        <mo>=</mo>

        <mi>x</mi>
        <mo>+</mo>
        <mi>i</mi>
        <mi>y</mi>
      </math>
    et
      <math>
        <mi>z</mi>
      </math>
    est appelé <b>affixe</b> de
      <math>
        <mi>M</mi>
      </math>
    .
  </p>
</div>
      `,
    },
    {
      title: "3.",
      content: `
<div>
  <p>
    On appelle <b>module</b> de 
      <math>
        <mi>z</mi>
      </math>
    , noté
      <math>
        <mo>|</mo>
        <mi>z</mi>
        <mo lspace="0" rspace="0">|</mo>
      </math>
    , la distance 
      <math>
        <mi>O</mi>
        <mi>M</mi>
      </math>
    .
    <br />

    On trouve 
      <math class="maths-bg">
        <mo>|</mo>
        <mi>z</mi>
        <mo lspace="0" rspace="0">|</mo>

        <mo>=</mo>

        <msup>
          <mi>x</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>y</mi>
          <mn>2</mn>
        </msup>
      </math>
    .
    <br />
    
    On appelle <b>argument</b> de
      <math>
        <mi>z</mi>
      </math>
    noté
      <math>
        <msub>
          <mrow>
            <mi>a</mi>
            <mi>r</mi>
            <mi>g</mi>
          </mrow>
          <mrow>
            <mi>z</mi>
          </mrow>
        </msub>
      </math>
    , l'angle orienté
      <math>
        <mover>
          <mrow>
            <mi>O</mi>
            <mi>X</mi>
          </mrow>
          <mo>&#x2192</mo>
        </mover>

        <mo>,</mo>

        <mover>
          <mrow>
            <mi>O</mi>
            <mi>M</mi>
          </mrow>
          <mo>&#x2192</mo>
        </mover>
      </math>
    .
    <br />

    On trouve
      <math class="maths-bg">
        <mi>c</mi>
        <mi>o</mi>
        <mi>s</mi>
        <mo>(</mo>
          <mi>a</mi>
          <mi>r</mi>
          <msub>
            <mi>g</mi>
            <mi>z</mi>
          </msub>
        <mo>)</mo>

        <mo>=</mo>

        <mfrac>
          <mrow>
            <mi>x</mi>
          </mrow>
          <mrow>
            <msqrt>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
              <mo>+</mo>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
            </msqrt>
          </mrow>
        </mfrac>
      </math>
    et
      <math class="maths-bg">
        <mi>s</mi>
        <mi>i</mi>
        <mi>n</mi>
        <mo>(</mo>
          <mi>a</mi>
          <mi>r</mi>
          <msub>
            <mi>g</mi>
            <mi>z</mi>
          </msub>
        <mo>)</mo>

        <mo>=</mo>

        <mfrac>
          <mrow>
            <mi>y</mi>
          </mrow>
          <mrow>
            <msqrt>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
              <mo>+</mo>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
            </msqrt>
          </mrow>
        </mfrac>
      </math>
    .
  </p>
</div>
      `,
    },
    {
      title: "4.",
      content: `
<div>
  <p>
    On en déduit
      <math class="maths-bg">
        <mi>z</mi>

        <mo>=</mo>

        <msqrt>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
        </msqrt>

        <mo>x</mo>

        <mo>(</mo>
          <mi>c</mi>
          <mi>o</mi>
          <mi>s</mi>
          <mo>(</mo>
            <mi>a</mi>
            <mi>r</mi>
            <msub>
              <mi>g</mi>
              <mi>z</mi>
            </msub>
          <mo>)</mo>

          <mo>+</mo>
          
          <mi>i</mi>

          <mo>x</mo>

          <mi>s</mi>
          <mi>i</mi>
          <mi>n</mi>
          <mo>(</mo>
            <mi>a</mi>
            <mi>r</mi>
            <msub>
              <mi>g</mi>
              <mi>z</mi>
            </msub>
          <mo>)</mo>
        <mo>)</mo>
      </math>
    .
  </p>
</div>
      `,
    },
    {
      title: "5.",
      content: `
<div>
  <p>
    On peut alors utiliser la forme suivante
      <math class="maths-bg">
        <mi>z</mi>

        <mo>=</mo>

        <msqrt>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
        </msqrt>

        <mo>x</mo>

        <msup>
          <mi>e</mi>
          <mrow>
            <mi>i</mi>
            <mo>x</mo>
            <mi>a</mi>
            <mi>r</mi>
            <msub>
              <mi>g</mi>
              <mi>z</mi>
            </msub>
          </mrow>
        </msup>
      </math>
    .
  </p>
</div>
      `,
    },
    {
      title: "",
      content: `
<div>

</div>
      `,
    },
    {
      title: "Notation Pratique",
      content: `
<div class="note-bg">
  <p>
    On Note 
      <math>
        <mo>|</mo>
        <mi>z</mi>
        <mo lspace="0" rspace="0">|</mo>
        
        <mo>=</mo>

        <mn>&#x3C1;</mn>
      </math>
    et
      <math>
        <mi>a</mi>
        <mi>r</mi>
        <msub>
          <mi>g</mi>
          <mi>z</mi>
        </msub>

        <mo>=</mo>

        <mn>&#x3B8;</mn>
      </math>
    .
    <br />

    On retient:
    <ul>
      <li>
        <math>
          <mi>O</mi>
          <mi>M</mi>

          <mo>=</mo>

          <mo>|</mo>
          <mi>z</mi>
          <mo lspace="0" rspace="0">|</mo>
          
          <mo>=</mo>

          <mn>&#x3C1;</mn>
        </math>
      </li>

      <li>
        <math>
          <mi>c</mi>
          <mi>o</mi>
          <mi>s</mi>
          <mn>&#x3B8;</mn>

          <mo>=</mo>

          <mfrac>
            <mrow>
              <mi>x</mi>
            </mrow>
            <mrow>
              <mn>&#x3C1;</mn>
            </mrow>
          </mfrac>
        </math>
      </li>

      <li>
        <math>
          <mi>s</mi>
          <mi>i</mi>
          <mi>n</mi>
          <mn>&#x3B8;</mn>

          <mo>=</mo>

          <mfrac>
            <mrow>
              <mi>y</mi>
            </mrow>
            <mrow>
              <mn>&#x3C1;</mn>
            </mrow>
          </mfrac>
        </math>
      </li>

      <li>
        <math>
          <mi>z</mi>

          <mo>=</mo>

          <mn>&#x3C1;</mn>

          <mo>(</mo>
            <mi>c</mi>
            <mi>o</mi>
            <mi>s</mi>
            <mn>&#x3B8;</mn>

            <mo>+</mo>

            <mi>i</mi>

            <mo>x</mo>

            <mi>s</mi>
            <mi>i</mi>
            <mi>n</mi>
            <mn>&#x3B8;</mn>
          <mo>)</mo>
      </li>

      <li>
        <math>
          <mi>z</mi>

          <mo>=</mo>
        
          <mn>&#x3C1;</mn>

          <mo>x</mo>

          <mi>e</mi>          
        </math>
      </li>
    </ul>
  </p>
</div>
      `,
    },
  ],
};

export { EXERCISE_6 };
