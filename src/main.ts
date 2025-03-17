import { Excercise4 } from "./exercises/Exercise4";

window.addEventListener("DOMContentLoaded", () => {
  console.log("hello maths");

  const $app: HTMLElement = document.querySelector("#app")!;

  $app.appendChild(new Excercise4());
});
