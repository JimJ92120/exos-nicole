import { ExerciseData } from "../type";

const EXERCISE_5: ExerciseData = {
  title: "Exercises",
  className: "exercise-5",
  inlineStyle: (): string => {
    return `
  <style>
    .${EXERCISE_5.className} {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
    }

    .${EXERCISE_5.className} h3 {
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
  </style>  
  `;
  },
  sections: [
    {
      title: "Compléter",
      content: `
<div>
  <ol>
    <li>
      <math>
        <mo>(</mo>
          <mn>-18</mn>
          <mo>+</mo>
          <mn>17</mn>
          <mi>i</mi>
        <mo>)</mo>

        <mspace width="5px"/>

        <mo>(</mo>
          <mn>-18</mn>
          <mo>-</mo>
          <mn>17</mn>
          <mi>i</mi>
        <mo>)</mo>

        <mo>=</mo>

        <ms>...</ms>
      </math>
    </li>
    
    <li>
      <math>
        <mi>l</mi>
        <mi>m</mi>

        <mo>(</mo>
          <mn>-18</mn>
          <mo>+</mo>
          <mn>17</mn>
          <mi>i</mi>
        <mo>)</mo>

        <mo>=</mo>
        
        <ms>...</ms>
      </math>
    </li>

    <li>
      <math>
        <mi>R</mi>
        <mi>e</mi>

        <mo>(</mo>
          <mn>-18</mn>
          <mo>+</mo>
          <mn>17</mn>
          <mi>i</mi>
        <mo>)</mo>

        <mo>=</mo>
        
        <ms>...</ms>
      </math>
    </li>

    <li>
      <math>
        <mo>|</mo>
          <mn>-18</mn>
          <mo>+</mo>
          <mn>17</mn>
          <mi>i</mi>
        <mo>|</mo>

        <mo>=</mo>
        
        <ms>...</ms>
      </math>
    </li>

    <li>
      <math>
        <mi>c</mi>
        <mi>o</mi>
        <mi>s</mi>

        <mo>[</mo>
          <mi>a</mi>
          <mi>r</mi>
          <mi>g</mi>

          <mo>(</mo>
            <mn>-18</mn>
            <mo>+</mo>
            <mn>17</mn>
            <mi>i</mi>
          <mo>)</mo>
        <mo>]</mo>

        <mo>=</mo>
        
        <ms>...</ms>
      </math>
    </li>

    <li>
      <math>
        <mi>s</mi>
        <mi>i</mi>
        <mi>n</mi>

        <mo>[</mo>
          <mi>a</mi>
          <mi>r</mi>
          <mi>g</mi>

          <mo>(</mo>
            <mn>-18</mn>
            <mo>+</mo>
            <mn>17</mn>
            <mi>i</mi>
          <mo>)</mo>
        <mo>]</mo>

        <mo>=</mo>
        
        <ms>...</ms>
      </math>
    </li>

    <li>
      Forme exponentielle de:
      <math>
        <mo>(</mo>
          <mn>-18</mn>
          <mo>+</mo>
          <mn>17</mn>
          <mi>i</mi>
        <mo>)</mo>

        <mo>=</mo>
        
        <ms>...</ms>
      </math>
    </li>

    <li>
      <math>
        <mn>2</mn>
        <msup>
          <mi>e</mi>
          <mrow>
            <mo>-</mo>
            <mi>i</mi>

            <mfrac>
              <mrow>
                <mn>π</mn>
              </mrow>
              <mrow>
                <mn>4</mn>
              </mrow>
            </mfrac>
          </mrow>
        </msup>

        <mo>x</mo>

        <mn>5</mn>
        <msup>
          <mi>e</mi>
          <mrow>
            <mi>i</mi>
            <mfrac>
              <mrow>
                <mn>π</mn>
              </mrow>
              <mrow>
                <mn>2</mn>
              </mrow>
            </mfrac>
          </mrow>
        </msup>

        <mo>=</mo>
        
        <ms>...</ms>
      </math>
    </li>

    <li>
      <math>
        <mfrac>
          <mrow>
            <mn>10</mn>
            <msup>
              <mi>e</mi>
              <mrow>
                <mi>i</mi>
                <mfrac>
                  <mrow>
                    <mn>π</mn>
                  </mrow>
                  <mrow>
                    <mn>6</mn>
                  </mrow>
                </mfrac>
              </mrow>
            </msup>
          </mrow>
          <mrow>
            <mn>2</mn>
            <msup>
              <mi>e</mi>
              <mrow>
                <mo>-</mo>
                <mi>i</mi>
                <mfrac>
                  <mrow>
                    <mn>π</mn>
                  </mrow>
                  <mrow>
                    <mn>6</mn>
                  </mrow>
                </mfrac>
              </mrow>
            </msup>
          </mrow>
        </mfrac>

        <mo>=</mo>
        
        <ms>...</ms>
      </math>
    </li>

    <li>
      <math>
        <mo>(</mo>
          <mo>-</mo>
          <mi>i</mi>
        <mo>)</mo>

        <mspace width="5px"/>

        <mo>(</mo>
          <mn>7</mn>
          <mi>i</mi>
        <mo>)</mo>

        <mspace width="5px"/>

        <mo>(</mo>
          <mo>(</mo>
            <mi>i</mi>      
          <mo>)</mo>

          <mspace width="5px"/>
          
          <mo>(</mo>
            <mn>-2</mn>
          <mo>)</mo>
        <mo>)</mo>

        <mo>=</mo>
        
        <ms>...</ms>
      </math>
    </li>

    <li>
      <math>
        <msup>
          <mrow>
            <mo>(</mo>
              <mn>3</mn>
              <msup>
                <mi>e</mi>
                <mrow>
                  <mi>i</mi>

                  <mfrac>
                    <mrow>
                      <mn>π</mn>
                    </mrow>
                    <mrow>
                      <mn>6</mn>
                    </mrow>
                  </mfrac>
                </mrow>
              </msup>
            <mo>)</mo>
          </mrow>
          <mrow>
            <mn>2</mn>
          </mrow>
        </msup>

        <mo>=</mo>
        
        <ms>...</ms>
      </math>
    </li>


  </ol>
</div>
      `,
    },
    {
      title: "Effectuer",
      content: `
<div>
  <ul>
    <li>
      <p>
        Donner la forme trigonométrique puis la forme exponentielle de:
      </p>
      <ul>
        <li>
          <math>
            <mi>z</mi>

            <mo>=</mo>

            <mn>4</mn>
            <mo>+</mo>
            <mn>3</mn>
            <mi>i</mi>
          </math>
        </li>

            <li>
          <math>
            <mi>z</mi>

            <mo>=</mo>

            <mn>2</mn>
            <mo>+</mo>
            <mn>2</mn>
            <msqrt>
              <mn>3</mn>
              <mi>i</mi>
            </msqrt>
          </math>
        </li>

        <li>
          <math>
            <mi>z</mi>

            <mo>=</mo>
            <mn>2</mn>
            <mo>-</mo>
            <mn>2</mn>
            <msqrt>
              <mn>3</mn>
              <mi>i</mi>
            </msqrt>
          </math>
        </li>
      </ul>
    </li>

    <li>
      <p>
        Donner la forme trigonométrique puis la forme algébrique de:
        <math>
          <mi>z</mi>

          <mo>=</mo>

          <mn>2</mn>
          <msup>
            <mi>e</mi>
            <mrow>
              <mi>i</mi>

              <mfrac>
                <mrow>
                  <mn>π</mn>
                </mrow>
                <mrow>
                  <mn>4</mn>
                </mrow>
              </mfrac>
            </mrow>
          </msup>
        </math>
      </p>
    </li>

    <li>
      <p>
        Donner la forme trigonométrique puis la forme exponentielle de:
        <math>
          <mi>z</mi>

          <mo>=</mo>

          <mn>-1</mn>
          <mo>+</mo>
          <msqrt>
            <mn>3</mn>
            <mi>i</mi>
          </msqrt>
        </math>
      </p>
    </li>

    <li>
      <p>
        Donner la forme algébrique de:
        <math>
          <mi>z</mi>
          <mo>+</mo>
          <mn>5</mn>
          <msup>
            <mi>e</mi>
            <mrow>
              <mo>-</mo>
              <mi>i</mi>
              <mfrac>
                <mrow>
                  <mn>π</mn>
                </mrow>
                <mrow>
                  <mn>6</mn>
                </mrow>
              </mfrac>
            </mrow>
          </msup>
        </math>
      </p>
    </li>
  </ul>
</div>
      
      `,
    },
  ],
};

export { EXERCISE_5 };
