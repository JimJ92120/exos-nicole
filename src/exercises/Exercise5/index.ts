import { Excercise } from "../type";
import { EXERCISE_5 } from "./data";

const data = EXERCISE_5;

class Excercise5 extends Excercise {
  constructor() {
    super(data);
  }
}

export { Excercise5 };

customElements.define("exercise-5", Excercise5);
