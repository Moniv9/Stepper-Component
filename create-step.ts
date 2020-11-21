import { Step } from "./step";

export const createStep = (step: Step) => {
  const el = document.createElement("div");

  el.innerHTML = step.name;
  el.id = step.id;
  el.style.marginRight = "20px";
  el.style.padding = "20px";

  return el;
};
