(()=>{"use strict";class n extends HTMLElement{constructor(n){super(),this.title=n.title,this.className=n.className,this.sections=n.sections,n.inlineStyle&&(this.inlineStyle=n.inlineStyle(this.className)),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML="<div></div>"}connectedCallback(){this.shadowRoot.innerHTML=this.template}get template(){var n;const m=this.sections.reduce(((n,m)=>n+`\n<section>\n  <h4>${m.title}</h4>\n  <div>${m.content}\n</section>\n`),"");return`\n<div class="${this.className}">\n  <h3>${this.title}</h3>    \n  \n  ${m}\n</div>\n${null!==(n=this.inlineStyle)&&void 0!==n?n:""}\n\n`}}const m={title:"Exercise 4",className:"exercise-4",inlineStyle:()=>`\n  <style>\n    .${m.className} {\n      display: flex;\n      flex-flow: row wrap;\n      align-items: flex-start;\n    }\n\n    .${m.className} h3 {\n      min-width: 100%;\n    }\n\n    section {\n      text-align: left;\n      width: 50%;\n      padding: 1rem;\n      box-sizing: border-box;\n    }\n  \n    table,\n    td,\n    th {\n      border: 1px solid black;\n    }\n  \n    mtable > mtr > mtd:first-child {\n      border-right: 1px solid black;\n    }\n    mtable > mtr:first-child > mtd {\n      border-bottom: 1px solid black;\n    }\n  </style>  \n  `,sections:[{title:"1ère fonction",content:"\n<div>\n  <p>\n    Étudier les variations de\n    <math>\n      <mi>f</mi>\n      <mo>(</mo>\n      <mi>x</mi>\n      <mo>)</mo>\n      <mo>=</mo>\n      <mn>5</mn>\n      <mi>x</mi>\n      <mo>+</mo>\n      <mn>1</mn>\n    </math>\n    sur <b>R</b>\n  </p>\n  <p>\n    <math>\n      <msub>\n        <mi>f</mi>\n        <mi>1</mi>\n      </msub>\n      <mo>(</mo>\n      <mi>x</mi>\n      <mo>)</mo>\n      <mo>=</mo>\n      <mn>5</mn>\n      <mo>></mo>\n      <mn>0</mn>\n    </math>\n    donc:\n  </p>\n  </div>\n\n  <div>\n  \x3c!--  | x | -∞ | 3/2 |  +∞ |\n        |---|----|-----|-----|\n        | f'|       0\n        | f |       /\n  --\x3e\n  <math>\n    <mtable>\n      <mtr>\n        <mtd>\n          <mi>x</mi>\n        </mtd>\n        <mtd>\n          <mo>-</mo>\n          <mi>∞</mi>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>+</mo>\n          <mi>∞</mi>\n        </mtd>\n      </mtr>\n      <mtr>\n        <mtd>\n          <msub>\n            <mi>f</mi>\n            <mi>1</mi>\n          </msub>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mn>0</mn>\n        </mtd>\n        <mtd></mtd>\n      </mtr>\n      <mtr>\n        <mtd>\n          <mi>f</mi>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>/</mo>\n        </mtd>\n        <mtd></mtd>\n      </mtr>\n    </mtable>\n  </math>\n</div>\n      "},{title:"2ème fonction",content:"\n<div>\n<p>\n  Étudier les variations de\n  <math>\n    <mi>f</mi>\n    <mo>(</mo>\n    <mi>x</mi>\n    <mo>)</mo>\n    <mo>=</mo>\n    <msup>\n      <mi>x</mi>\n      <mn>2</mn>\n    </msup>\n    <mo>-</mo>\n    <mn>3</mn>\n    <mi>x</mi>\n    <mo>+</mo>\n    <mn>2</mn>\n  </math>\n  sur <b>R</b>.\n</p>\n<p>\n  <math>\n    <msub>\n      <mi>f</mi>\n      <mn>1</mn>\n    </msub>\n    <mo>(</mo>\n    <mi>x</mi>\n    <mo>)</mo>\n    <mo>=</mo>\n    <mn>2</mn>\n    <mi>x</mi>\n    <mo>-</mo>\n    <mn>3</mn>\n  </math>\n  et\n  <math>\n    <mn>2</mn>\n    <mi>x</mi>\n    <mo>-</mo>\n    <mn>3</mn>\n    <mo>></mo>\n    <mn>0</mn>\n  </math>\n  si\n  <math>\n    <mi>x</mi>\n    <mo>></mo>\n    <mfrac>\n      <mrow>\n        <mn>3</mn>\n      </mrow>\n      <mrow>\n        <mn>2</mn>\n      </mrow>\n    </mfrac>\n  </math>\n  donc:\n</p>\n</div>\n\n<div>\n\x3c!--  | x | -∞ | 3/2 |  +∞ |\n      |---|----|-----|-----|\n      | f'|    -  0     +  |\n      | f |    \\       /  |\n--\x3e\n<math>\n  <mtable>\n    <mtr>\n      <mtd>\n        <mi>\n          <mi>x</mi>\n        </mi>\n      </mtd>\n      <mtd>\n        <mo>-</mo>\n        <mi>∞</mi>\n      </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mfrac>\n          <mrow>\n            <mn>2</mn>\n          </mrow>\n          <mrow>\n            <mn>3</mn>\n          </mrow>\n        </mfrac>\n      </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mo>+</mo>\n        <mi>∞</mi>\n      </mtd>\n    </mtr>\n    <mtr>\n      <mtd>\n        <msub>\n          <mi>f</mi>\n          <mn>1</mn>\n        </msub>\n      </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mo>-</mo>\n      </mtd>\n      <mtd>\n        <mi>0</mi>\n      </mtd>\n      <mtd>\n        <mo>+</mo>\n      </mtd>\n      <mtd></mtd>\n    </mtr>\n    <mtr>\n      <mtd>\n        <mi>f</mi>\n      </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mo>\\</mo>\n      </mtd>\n      <mtd></mtd>\n      <mtd>/</mtd>\n      <mtd></mtd>\n    </mtr>\n  </mtable>\n</math>\n</div>  \n"},{title:"3ème fonction",content:"\n<div>\n<p>\n  Étudier les variations de\n  <math>\n    <mi>f</mi>\n    <mo>(</mo>\n    <mi>x</mi>\n    <mo>)</mo>\n    <mo>=</mo>\n    <msup>\n      <mi>x</mi>\n      <mn>3</mn>\n    </msup>\n    <mo>-</mo>\n    <mn>3</mn>\n    <msup>\n      <mi>x</mi>\n      <mn>2</mn>\n    </msup>\n    <mo>+</mo>\n    <mn>2</mn>\n    <mi>x</mi>\n    <mo>-</mo>\n    <mn>3</mn>\n  </math>\n  sur <b>R</b>.\n</p>\n<p>\n  <math>\n    <msub>\n      <mi>f</mi>\n      <mn>1</mn>\n    </msub>\n    <mo>(</mo>\n    <mi>x</mi>\n    <mo>)</mo>\n    <mo>=</mo>\n    <mn>3</mn>\n    <msup>\n      <mi>x</mi>\n      <mn>2</mn>\n    </msup>\n    <mo>-</mo>\n    <mn>6</mn>\n    <mi>x</mi>\n    <mo>+</mo>\n    <mn>2</mn>\n  </math>\n  et\n  <math>\n    <mi>Δ</mi>\n    <mo>=</mo>\n    <mn>36</mn>\n    <mo>-</mo>\n    <mn>24</mn>\n    <mo>=</mo>\n    <mn>12</mn>\n  </math>\n</p>\n<p>Il y a 2 racines:\n  <math>\n    <msub>\n      <mi>x</mi>\n      <mn>1</mn>\n    </msub>\n</math>\net\n<math>\n  <msub>\n    <mi>x</mi>\n    <mn>2</mn>\n  </msub>\n</math>\n.\n</p>\n<p>\n  <math>\n    <msub>\n      <mi>x</mi>\n      <mi>1</mi>\n    </msub>\n    <mo>=</mo>\n    <mfrac>\n      <mrow>\n        <mo>(</mo>\n        <mn>6</mn>\n        <mo>+</mo>\n        <mn>2</mn>\n        <msqrt>\n          <mn>3</mn>\n        </msqrt>\n        <mo>)</mo>\n      </mrow>\n      <mrow>\n        <mn>6</mn>\n      </mrow>\n    </mfrac>\n    <mo>≈</mo>\n    <mn>1.6</mn>\n  </math>\n  et\n  <math>\n    <msub>\n      <mi>x</mi>\n      <mn>2</mn>\n    </msub>\n    <mo>=</mo>\n    <mfrac>\n      <mrow>\n        <mo>(</mo>\n        <mn>6</mn>\n        <mo>-</mo>\n        <mn>2</mn>\n        <msqrt>\n          <mn>3</mn>\n        </msqrt>\n        <mo>)</mo>\n      </mrow>\n      <mrow>\n        <mn>6</mn>\n      </mrow>\n    </mfrac>\n    <mo>≈</mo>\n    <mn>0.4</mn>\n  </math>\n</p>\n\n\x3c!--  | x | -∞ | x2  | x1  |  +∞ |\n      |---|----|-----|-----|-----|\n      | f'|    +  0  -  0  +     |\n      | f |    /     \\    /     |\n--\x3e\n<math>\n  <mtable>\n    <mtr>\n      <mtd>\n        <mi>x</mi>\n      </mtd>\n      <mtd>\n        <mo>-</mo>\n        <mn>∞</mn>\n      </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mo>x</mo>\n        <mn>2</mn>\n      </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mo>x</mo>\n        <mn>3</mn>\n      </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mo>+</mo>\n        <mn>∞</mn>\n      </mtd>\n    </mtr>\n    <mtr>\n      <mtd>\n        <msub>\n          <mi>f</mi>\n          <mn>1</mn>\n        </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mo>+</mo>\n      </mtd>\n      <mtd>\n        <mn>0</mn>\n      </mtd>\n      <mtd>\n        <mo>-</mo>\n      </mtd>\n      <mtd>\n        <mn>0</mn>\n      </mtd>\n      <mtd>\n        <mo>+</mo>\n      </mtd>\n    </mtr>\n    <mtr>\n      <mtd>\n        <mi>f</mi>\n      </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mo>/</mo>\n      </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mo>\\</mo>\n      </mtd>\n      <mtd></mtd>\n      <mtd>\n        <mi>/</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>\n\n</div>        \n      "},{title:"4e fonction",content:"\n<div>\n  <p>\n    Étudier les variations de\n    <math>\n      <mi>f</mi>\n      <mo>(</mo>\n      <mi>x</mi>\n      <mo>)</mo>\n      <mo>=</mo>\n      <mfrac>\n        <mrow>\n          <mn>3</mn>\n          <mi>x</mi>\n          <mo>-</mo>\n          <mn>1</mn>\n        </mrow>\n        <mrow>\n          <mo>-</mo>\n          <mn>2</mn>\n          <mi>x</mi>\n          <mo>+</mo>\n          <mn>5</mn>\n        </mrow>\n      </mfrac>\n    </math>\n    sur\n    <math>\n      <mo>]</mo>\n      <mo>-</mo>\n      <mn>∞</mn>\n      <mo>;</mo>\n      <mfrac>\n        <mrow>\n          <mn>5</mn>\n        </mrow>\n        <mrow>\n          <mn>2</mn>\n        </mrow>\n      </mfrac>\n      <mo>[</mo>\n      <mi>U</mi>\n      <mo>]</mo>\n      <mfrac>\n        <mrow>\n          <mn>5</mn>\n        </mrow>\n        <mrow>\n          <mn>2</mn>\n        </mrow>\n      </mfrac>\n      <mo>;</mo>\n      <mo>+</mo>\n      <mn>∞ </mn>\n    </math>\n    .\n  </p>\n  <p>\n    <math>\n      <msub>\n        <mi>f</mi>\n        <mn>1</mn>\n      </msub>\n      <mo>(</mo>\n      <mi>x</mi>\n      <mo>)</mo>\n      <mo>=</mo>\n      <mfrac>\n        <mrow>\n          <mn>3</mn>\n          <mo>(</mo>\n          <mo>-</mo>\n          <mn>2</mn>\n          <mi>x</mi>\n          <mo>+</mo>\n          <mn>5</mn>\n          <mo>)</mo>\n          <mo>-</mo>\n          <mo>(</mo>\n          <mn>3</mn>\n          <mi>x</mi>\n          <mo>-</mo>\n          <mn>1</mn>\n          <mo>)</mo>\n          <mo>(</mo>\n          <mo>-</mo>\n          <mn>2</mn>\n          <mo>)</mo>\n        </mrow>\n        <mrow>\n          <mo>(</mo>\n          <mo>-</mo>\n          <mn>2</mn>\n          <mi>x</mi>\n          <mo>+</mo>\n          <mn>5</mn>\n          <mo>)</mo>\n          <msup>\n            <mi></mi>\n            <mn>2</mn>\n          </msup>\n        </mrow>\n      </mfrac>\n      <mo>=</mo>\n      <mfrac>\n        <mrow>\n          <mn>13</mn>\n        </mrow>\n        <mrow>\n          <mo>(</mo>\n          <mo>-</mo>\n          <mn>2</mn>\n          <mi>x</mi>\n          <mo>+</mo>\n          <mn>5</mn>\n          <mo>)</mo>\n          <msup>\n            <mi></mi>\n            <mn>2</mn>\n          </msup>\n        </mrow>\n      </mfrac>\n      <mo>></mo>\n      <mn>0</mn>\n    </math>\n  </p>\n  </div>\n\n  <div>\n  \x3c!--  | x | -∞ | 5/2 |  +∞ |\n        |---|----|-----|-----|\n        | f'|  +          +  |\n        | f |  /          /  |\n  --\x3e\n  <math>\n    <mtable>\n      <mtr>\n        <mtd>\n          <mi>x</mi>\n        </mtd>\n        <mtd>\n          <mo>-</mo>\n          <mi>∞</mi>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mfrac>\n            <mrow>\n              <mn>5</mn>\n            </mrow>\n            <mrow>\n              <mn>2</mn>\n            </mrow>\n          </mfrac>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>+</mo>\n          <mi>∞</mi>\n        </mtd>\n      </mtr>\n      <mtr>\n        <mtd>\n          <msub>\n            <mi>f</mi>\n            <mn>1</mn>\n          </msub>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>+</mo>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>+</mo>\n        </mtd>\n        <mtd></mtd>\n      </mtr>\n      <mtr>\n        <mtd>\n          <mi>f</mi>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>/</mo>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>/</mo>\n        </mtd>\n        <mtd></mtd>\n      </mtr>\n    </mtable>\n  </math>\n</div>\n        "},{title:"5ème fonction",content:"\n<div>\n  <p>\n    Étudier les variations de\n    <math>\n      <mi>f</mi>\n      <mo>(</mo>\n      <mi>x</mi>\n      <mo>)</mo>\n      <mo>=</mo>\n      <mo>(</mo>\n      <mn>2</mn>\n      <mi>x</mi>\n      <mo>+</mo>\n      <mn>1</mn>\n      <mo>)</mo>\n    </math>,\n    <math>\n      <mi>ln</mi>\n      <mo>(</mo>\n      <mi>x</mi>\n      <mo>)</mo>\n    </math>\n    sur <b>R*+</b>.\n  </p>\n  <p>\n    <math>\n      <msub>\n        <mi>f</mi>\n        <mn>1</mn>\n      </msub>\n      <mo>(</mo>\n      <mi>x</mi>\n      <mo>)</mo>\n      <mo>=</mo>\n      <mfrac>\n        <mrow>\n          <mn>2</mn>\n          <mi>ln</mi>\n          <mo>(</mo>\n          <mi>x</mi>\n          <mo>)</mo>\n          <mo>+</mo>\n          <mo>(</mo>\n          <mn>2</mn>\n          <mi>x</mi>\n          <mo>+</mo>\n          <mn>1</mn>\n          <mo>)</mo>\n        </mrow>\n        <mrow>\n          <mi>x</mi>\n        </mrow>\n      </mfrac>\n    </math>\n    , on la nomme\n    <math>\n      <mi>g</mi>\n      <mo>(</mo>\n      <mi>x</mi>\n      <mo>)</mo>\n      <mo>=</mo>\n      <mn>2</mn>\n      <mi>ln</mi>\n      <mo>(</mo>\n      <mi>x</mi>\n      <mo>)</mo>\n      <mo>+</mo>\n      <mn>2</mn>\n      <mo>+</mo>\n      <mfrac>\n        <mrow>\n          <mn>1</mn>\n        </mrow>\n        <mrow>\n          <mi>x</mi>\n        </mrow>\n      </mfrac>\n    </math>\n    .\n  </p>\n  <p>\n    <math>\n      <msub>\n        <mi>g</mi>\n        <mn>1</mn>\n        <mo>(</mo>\n        <mi>x</mi>\n        <mo>)</mo>\n      </msub>\n      <mo>=</mo>\n      <mfrac>\n        <mrow>\n          <mn>2</mn>\n        </mrow>\n        <mrow>\n          <mi>x</mi>\n        </mrow>\n      </mfrac>\n      <mo>-</mo>\n      <mfrac>\n        <mrow>\n          <mn>1</mn>\n        </mrow>\n        <mrow>\n          <msup>\n            <mi>x</mi>\n            <mn>2</mn>\n          </msup>\n        </mrow>\n      </mfrac>\n      <mo>=</mo>\n      <mfrac>\n        <mrow>\n          <mn>2</mn>\n          <mi>x</mi>\n          <mo>-</mo>\n          <mn>1</mn>\n        </mrow>\n        <mrow>\n          <msup>\n            <mi>x</mi>\n            <mn>2</mn>\n          </msup>\n        </mrow>\n      </mfrac>\n      <mo>></mo>\n      <mn>0</mn>\n    </math>\n    si\n    <math>\n      <mi>x</mi>\n      <mo>></mo>\n      <mfrac>\n        <mrow>\n          <mn>1</mn>\n        </mrow>\n        <mrow>\n          <mn>2</mn>\n        </mrow>\n      </mfrac>\n    </math>\n    ,\n    <math>\n      <mi>g</mi>\n      <mo>(</mo>\n      <mfrac>\n        <mrow>\n          <mn>1</mn>\n        </mrow>\n        <mrow>\n          <mn>2</mn>\n        </mrow>\n      </mfrac>\n      <mo>)</mo>\n      <mo>=</mo>\n      <mi>ln</mi>\n      <mo>(</mo>\n      <mfrac>\n        <mrow>\n          <mn>1</mn>\n        </mrow>\n        <mrow>\n          <mn>2</mn>\n        </mrow>\n      </mfrac>\n      <mo>)</mo>\n      <mo>+</mo>\n      <mn>4</mn>\n      <mo>=</mo>\n      <mn>3.3</mn>\n    </math>\n  </p>\n  </div>\n\n  <div>\n  \x3c!--  | x |  0 | 1/2 |  +∞ |\n        |---|----|-----|-----|\n        | g'|  -    0     +  |\n        | g |            /  |\n  --\x3e\n  <math>\n    <mtable >\n      <mtr>\n        <mtd>\n          <mi>x</mi>\n        </mtd>\n        <mtd>\n          <mo>-</mo>\n          <mi>∞</mi>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mfrac>\n            <mrow>\n              <mn>1</mn>\n            </mrow>\n            <mrow>\n              <mn>2</mn>\n            </mrow>\n          </mfrac>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>+</mo>\n          <mi>∞</mi>\n        </mtd>\n      </mtr>\n      <mtr>\n        <mtd>\n          <msub>\n            <mi>g</mi>\n            <mn>1</mn>\n          </msub>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>-</mo>\n        </mtd>\n        <mtd>\n          <mn>0</mn>\n        </mtd>\n        <mtd>\n          <mo>+</mo>\n        </mtd>\n        <mtd></mtd>\n      </mtr>\n      <mtr>\n        <mtd>\n          <mi>g</mi>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>\\</mo>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>/</mo>\n        </mtd>\n        <mtd></mtd>\n      </mtr>\n    </mtable>\n  </math>\n  </div>\n  <br />\n\n  <div>\n  \x3c!--  | x |  0 | +∞ |\n        |---|----|----|\n        | f'|    +    |\n        | f |    /    |  \n  --\x3e\n  <math>\n    <mtable>\n      <mtr>\n        <mtd>\n          <mi>x</mi>\n        </mtd>\n        <mtd>\n          <mn>0</mn>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>+</mo>\n          <mi>∞</mi>\n        </mtd>\n      </mtr>\n      <mtr>\n        <mtd>\n          <msub>\n            <mi>f</mi>\n            <mn>1</mn>\n          </msub>   \n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>+</mo>\n        </mtd>\n        <mtd></mtd>\n      </mtr>\n      <mtr>\n        <mtd>\n          <mi>f</mi>\n        </mtd>\n        <mtd></mtd>\n        <mtd>\n          <mo>/</mo>\n        </mtd>\n        <mtd></mtd>\n      </mtr>\n    </mtable>\n  </math>\n</div>     \n      "}]},o=m;class t extends n{constructor(){super(o)}}customElements.define("exercise-4",t),window.addEventListener("DOMContentLoaded",(()=>{console.log("hello maths"),document.querySelector("#app").appendChild(new t)}))})();