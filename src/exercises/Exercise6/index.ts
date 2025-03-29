import { Excercise } from "../type";
import { EXERCISE_6 } from "./data";

const data = EXERCISE_6;

class Excercise6 extends Excercise {
  constructor() {
    super(data);
  }
}

export { Excercise6 };

customElements.define("exercise-6", Excercise6);
