import { Excercise4 } from "./exercises/Exercise4";
import { Excercise5 } from "./exercises/Exercise5";
import { Excercise6 } from "./exercises/Exercise6";

window.addEventListener("DOMContentLoaded", () => {
  console.log("hello maths");

  const $app: HTMLElement = document.querySelector("#app")!;

  [
    // new Excercise4(),
    new Excercise5(),
    new Excercise6(),
  ].map((exercise, index) => {
    if (index) {
      $app.appendChild(document.createElement("hr"));
    }

    $app.appendChild(exercise);
  });
});
