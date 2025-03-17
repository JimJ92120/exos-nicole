import { Excercice4 } from "./exercices/exercice4";

window.addEventListener("DOMContentLoaded", () => {
  console.log("hello maths");

  const $app: HTMLElement = document.querySelector("#app")!;

  $app.appendChild(new Excercice4());

  console.log(new Excercice4().title);
});
