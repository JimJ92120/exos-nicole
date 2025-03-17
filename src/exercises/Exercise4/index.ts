import { Excercise } from "../type";
import { EXERCISE_4 } from "./data";

const data = EXERCISE_4;

class Excercise4 extends Excercise {
  constructor() {
    super(data);
  }
}

export { Excercise4 };

customElements.define("exercise-4", Excercise4);
