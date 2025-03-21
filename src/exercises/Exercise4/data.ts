import { ExerciseData } from "../type";

const EXERCISE_4: ExerciseData = {
  title: "Exercise 4",
  className: "exercise-4",
  inlineStyle: (): string => {
    return `
  <style>
    .${EXERCISE_4.className} {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
    }

    .${EXERCISE_4.className} h3 {
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
  </style>  
  `;
  },
  sections: [
    {
      title: "1ère fonction",
      content: `
<div>
  <p>
    Étudier les variations de
    <math>
      <mi>f</mi>
      <mo>(</mo>
      <mi>x</mi>
      <mo>)</mo>
      <mo>=</mo>
      <mn>5</mn>
      <mi>x</mi>
      <mo>+</mo>
      <mn>1</mn>
    </math>
    sur <b>R</b>
  </p>
  <p>
    <math>
      <msub>
        <mi>f</mi>
        <mi>1</mi>
      </msub>
      <mo>(</mo>
      <mi>x</mi>
      <mo>)</mo>
      <mo>=</mo>
      <mn>5</mn>
      <mo>></mo>
      <mn>0</mn>
    </math>
    donc:
  </p>
  </div>

  <div>
  <!--  | x | -∞ | 3/2 |  +∞ |
        |---|----|-----|-----|
        | f'|       0
        | f |       /
  -->
  <math>
    <mtable>
      <mtr>
        <mtd>
          <mi>x</mi>
        </mtd>
        <mtd>
          <mo>-</mo>
          <mi>∞</mi>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>+</mo>
          <mi>∞</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msub>
            <mi>f</mi>
            <mi>1</mi>
          </msub>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd></mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>f</mi>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>/</mo>
        </mtd>
        <mtd></mtd>
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
<p>
  Étudier les variations de
  <math>
    <mi>f</mi>
    <mo>(</mo>
    <mi>x</mi>
    <mo>)</mo>
    <mo>=</mo>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo>-</mo>
    <mn>3</mn>
    <mi>x</mi>
    <mo>+</mo>
    <mn>2</mn>
  </math>
  sur <b>R</b>.
</p>
<p>
  <math>
    <msub>
      <mi>f</mi>
      <mn>1</mn>
    </msub>
    <mo>(</mo>
    <mi>x</mi>
    <mo>)</mo>
    <mo>=</mo>
    <mn>2</mn>
    <mi>x</mi>
    <mo>-</mo>
    <mn>3</mn>
  </math>
  et
  <math>
    <mn>2</mn>
    <mi>x</mi>
    <mo>-</mo>
    <mn>3</mn>
    <mo>></mo>
    <mn>0</mn>
  </math>
  si
  <math>
    <mi>x</mi>
    <mo>></mo>
    <mfrac>
      <mrow>
        <mn>3</mn>
      </mrow>
      <mrow>
        <mn>2</mn>
      </mrow>
    </mfrac>
  </math>
  donc:
</p>
</div>

<div>
<!--  | x | -∞ | 3/2 |  +∞ |
      |---|----|-----|-----|
      | f'|    -  0     +  |
      | f |    \\       /  |
-->
<math>
  <mtable>
    <mtr>
      <mtd>
        <mi>
          <mi>x</mi>
        </mi>
      </mtd>
      <mtd>
        <mo>-</mo>
        <mi>∞</mi>
      </mtd>
      <mtd></mtd>
      <mtd>
        <mfrac>
          <mrow>
            <mn>2</mn>
          </mrow>
          <mrow>
            <mn>3</mn>
          </mrow>
        </mfrac>
      </mtd>
      <mtd></mtd>
      <mtd>
        <mo>+</mo>
        <mi>∞</mi>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msub>
          <mi>f</mi>
          <mn>1</mn>
        </msub>
      </mtd>
      <mtd></mtd>
      <mtd>
        <mo>-</mo>
      </mtd>
      <mtd>
        <mi>0</mi>
      </mtd>
      <mtd>
        <mo>+</mo>
      </mtd>
      <mtd></mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>f</mi>
      </mtd>
      <mtd></mtd>
      <mtd>
        <mo>\\</mo>
      </mtd>
      <mtd></mtd>
      <mtd>/</mtd>
      <mtd></mtd>
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
<p>
  Étudier les variations de
  <math>
    <mi>f</mi>
    <mo>(</mo>
    <mi>x</mi>
    <mo>)</mo>
    <mo>=</mo>
    <msup>
      <mi>x</mi>
      <mn>3</mn>
    </msup>
    <mo>-</mo>
    <mn>3</mn>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <mn>2</mn>
    <mi>x</mi>
    <mo>-</mo>
    <mn>3</mn>
  </math>
  sur <b>R</b>.
</p>
<p>
  <math>
    <msub>
      <mi>f</mi>
      <mn>1</mn>
    </msub>
    <mo>(</mo>
    <mi>x</mi>
    <mo>)</mo>
    <mo>=</mo>
    <mn>3</mn>
    <msup>
      <mi>x</mi>
      <mn>2</mn>
    </msup>
    <mo>-</mo>
    <mn>6</mn>
    <mi>x</mi>
    <mo>+</mo>
    <mn>2</mn>
  </math>
  et
  <math>
    <mi>Δ</mi>
    <mo>=</mo>
    <mn>36</mn>
    <mo>-</mo>
    <mn>24</mn>
    <mo>=</mo>
    <mn>12</mn>
  </math>
</p>
<p>Il y a 2 racines:
  <math>
    <msub>
      <mi>x</mi>
      <mn>1</mn>
    </msub>
</math>
et
<math>
  <msub>
    <mi>x</mi>
    <mn>2</mn>
  </msub>
</math>
.
</p>
<p>
  <math>
    <msub>
      <mi>x</mi>
      <mi>1</mi>
    </msub>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mo>(</mo>
        <mn>6</mn>
        <mo>+</mo>
        <mn>2</mn>
        <msqrt>
          <mn>3</mn>
        </msqrt>
        <mo>)</mo>
      </mrow>
      <mrow>
        <mn>6</mn>
      </mrow>
    </mfrac>
    <mo>≈</mo>
    <mn>1.6</mn>
  </math>
  et
  <math>
    <msub>
      <mi>x</mi>
      <mn>2</mn>
    </msub>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mo>(</mo>
        <mn>6</mn>
        <mo>-</mo>
        <mn>2</mn>
        <msqrt>
          <mn>3</mn>
        </msqrt>
        <mo>)</mo>
      </mrow>
      <mrow>
        <mn>6</mn>
      </mrow>
    </mfrac>
    <mo>≈</mo>
    <mn>0.4</mn>
  </math>
</p>

<!--  | x | -∞ | x2  | x1  |  +∞ |
      |---|----|-----|-----|-----|
      | f'|    +  0  -  0  +     |
      | f |    /     \\    /     |
-->
<math>
  <mtable>
    <mtr>
      <mtd>
        <mi>x</mi>
      </mtd>
      <mtd>
        <mo>-</mo>
        <mn>∞</mn>
      </mtd>
      <mtd></mtd>
      <mtd>
        <mo>x</mo>
        <mn>2</mn>
      </mtd>
      <mtd></mtd>
      <mtd>
        <mo>x</mo>
        <mn>3</mn>
      </mtd>
      <mtd></mtd>
      <mtd>
        <mo>+</mo>
        <mn>∞</mn>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <msub>
          <mi>f</mi>
          <mn>1</mn>
        </mtd>
      <mtd></mtd>
      <mtd>
        <mo>+</mo>
      </mtd>
      <mtd>
        <mn>0</mn>
      </mtd>
      <mtd>
        <mo>-</mo>
      </mtd>
      <mtd>
        <mn>0</mn>
      </mtd>
      <mtd>
        <mo>+</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mi>f</mi>
      </mtd>
      <mtd></mtd>
      <mtd>
        <mo>/</mo>
      </mtd>
      <mtd></mtd>
      <mtd>
        <mo>\\</mo>
      </mtd>
      <mtd></mtd>
      <mtd>
        <mi>/</mi>
      </mtd>
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
      <mi>f</mi>
      <mo>(</mo>
      <mi>x</mi>
      <mo>)</mo>
      <mo>=</mo>
      <mfrac>
        <mrow>
          <mn>3</mn>
          <mi>x</mi>
          <mo>-</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>-</mo>
          <mn>2</mn>
          <mi>x</mi>
          <mo>+</mo>
          <mn>5</mn>
        </mrow>
      </mfrac>
    </math>
    sur
    <math>
      <mo>]</mo>
      <mo>-</mo>
      <mn>∞</mn>
      <mo>;</mo>
      <mfrac>
        <mrow>
          <mn>5</mn>
        </mrow>
        <mrow>
          <mn>2</mn>
        </mrow>
      </mfrac>
      <mo>[</mo>
      <mi>U</mi>
      <mo>]</mo>
      <mfrac>
        <mrow>
          <mn>5</mn>
        </mrow>
        <mrow>
          <mn>2</mn>
        </mrow>
      </mfrac>
      <mo>;</mo>
      <mo>+</mo>
      <mn>∞ </mn>
    </math>
    .
  </p>
  <p>
    <math>
      <msub>
        <mi>f</mi>
        <mn>1</mn>
      </msub>
      <mo>(</mo>
      <mi>x</mi>
      <mo>)</mo>
      <mo>=</mo>
      <mfrac>
        <mrow>
          <mn>3</mn>
          <mo>(</mo>
          <mo>-</mo>
          <mn>2</mn>
          <mi>x</mi>
          <mo>+</mo>
          <mn>5</mn>
          <mo>)</mo>
          <mo>-</mo>
          <mo>(</mo>
          <mn>3</mn>
          <mi>x</mi>
          <mo>-</mo>
          <mn>1</mn>
          <mo>)</mo>
          <mo>(</mo>
          <mo>-</mo>
          <mn>2</mn>
          <mo>)</mo>
        </mrow>
        <mrow>
          <mo>(</mo>
          <mo>-</mo>
          <mn>2</mn>
          <mi>x</mi>
          <mo>+</mo>
          <mn>5</mn>
          <mo>)</mo>
          <msup>
            <mi></mi>
            <mn>2</mn>
          </msup>
        </mrow>
      </mfrac>
      <mo>=</mo>
      <mfrac>
        <mrow>
          <mn>13</mn>
        </mrow>
        <mrow>
          <mo>(</mo>
          <mo>-</mo>
          <mn>2</mn>
          <mi>x</mi>
          <mo>+</mo>
          <mn>5</mn>
          <mo>)</mo>
          <msup>
            <mi></mi>
            <mn>2</mn>
          </msup>
        </mrow>
      </mfrac>
      <mo>></mo>
      <mn>0</mn>
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
    <mtable>
      <mtr>
        <mtd>
          <mi>x</mi>
        </mtd>
        <mtd>
          <mo>-</mo>
          <mi>∞</mi>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mfrac>
            <mrow>
              <mn>5</mn>
            </mrow>
            <mrow>
              <mn>2</mn>
            </mrow>
          </mfrac>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>+</mo>
          <mi>∞</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msub>
            <mi>f</mi>
            <mn>1</mn>
          </msub>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>+</mo>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>+</mo>
        </mtd>
        <mtd></mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>f</mi>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>/</mo>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>/</mo>
        </mtd>
        <mtd></mtd>
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
    <math>
      <mi>f</mi>
      <mo>(</mo>
      <mi>x</mi>
      <mo>)</mo>
      <mo>=</mo>
      <mo>(</mo>
      <mn>2</mn>
      <mi>x</mi>
      <mo>+</mo>
      <mn>1</mn>
      <mo>)</mo>
    </math>,
    <math>
      <mi>ln</mi>
      <mo>(</mo>
      <mi>x</mi>
      <mo>)</mo>
    </math>
    sur <b>R*+</b>.
  </p>
  <p>
    <math>
      <msub>
        <mi>f</mi>
        <mn>1</mn>
      </msub>
      <mo>(</mo>
      <mi>x</mi>
      <mo>)</mo>
      <mo>=</mo>
      <mfrac>
        <mrow>
          <mn>2</mn>
          <mi>ln</mi>
          <mo>(</mo>
          <mi>x</mi>
          <mo>)</mo>
          <mo>+</mo>
          <mo>(</mo>
          <mn>2</mn>
          <mi>x</mi>
          <mo>+</mo>
          <mn>1</mn>
          <mo>)</mo>
        </mrow>
        <mrow>
          <mi>x</mi>
        </mrow>
      </mfrac>
    </math>
    , on la nomme
    <math>
      <mi>g</mi>
      <mo>(</mo>
      <mi>x</mi>
      <mo>)</mo>
      <mo>=</mo>
      <mn>2</mn>
      <mi>ln</mi>
      <mo>(</mo>
      <mi>x</mi>
      <mo>)</mo>
      <mo>+</mo>
      <mn>2</mn>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mi>x</mi>
        </mrow>
      </mfrac>
    </math>
    .
  </p>
  <p>
    <math>
      <msub>
        <mi>g</mi>
        <mn>1</mn>
        <mo>(</mo>
        <mi>x</mi>
        <mo>)</mo>
      </msub>
      <mo>=</mo>
      <mfrac>
        <mrow>
          <mn>2</mn>
        </mrow>
        <mrow>
          <mi>x</mi>
        </mrow>
      </mfrac>
      <mo>-</mo>
      <mfrac>
        <mrow>
          <mn>1</mn>
        </mrow>
        <mrow>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
        </mrow>
      </mfrac>
      <mo>=</mo>
      <mfrac>
        <mrow>
          <mn>2</mn>
          <mi>x</mi>
          <mo>-</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
        </mrow>
      </mfrac>
      <mo>></mo>
      <mn>0</mn>
    </math>
    si
    <math>
      <mi>x</mi>
      <mo>></mo>
      <mfrac>
        <mrow>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mn>2</mn>
        </mrow>
      </mfrac>
    </math>
    ,
    <math>
      <mi>g</mi>
      <mo>(</mo>
      <mfrac>
        <mrow>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mn>2</mn>
        </mrow>
      </mfrac>
      <mo>)</mo>
      <mo>=</mo>
      <mi>ln</mi>
      <mo>(</mo>
      <mfrac>
        <mrow>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mn>2</mn>
        </mrow>
      </mfrac>
      <mo>)</mo>
      <mo>+</mo>
      <mn>4</mn>
      <mo>=</mo>
      <mn>3.3</mn>
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
    <mtable >
      <mtr>
        <mtd>
          <mi>x</mi>
        </mtd>
        <mtd>
          <mo>-</mo>
          <mi>∞</mi>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mfrac>
            <mrow>
              <mn>1</mn>
            </mrow>
            <mrow>
              <mn>2</mn>
            </mrow>
          </mfrac>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>+</mo>
          <mi>∞</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msub>
            <mi>g</mi>
            <mn>1</mn>
          </msub>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>-</mo>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mo>+</mo>
        </mtd>
        <mtd></mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>g</mi>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>\\</mo>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>/</mo>
        </mtd>
        <mtd></mtd>
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
    <mtable>
      <mtr>
        <mtd>
          <mi>x</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>+</mo>
          <mi>∞</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <msub>
            <mi>f</mi>
            <mn>1</mn>
          </msub>   
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>+</mo>
        </mtd>
        <mtd></mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>f</mi>
        </mtd>
        <mtd></mtd>
        <mtd>
          <mo>/</mo>
        </mtd>
        <mtd></mtd>
      </mtr>
    </mtable>
  </math>
</div>     
      `,
    },
  ],
};

export { EXERCISE_4 };
