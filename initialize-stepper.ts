import { createStep } from "./create-step";
import { Step } from "./step";

export const initializeStepper = (steps: Step[]) => {
  const stepperContainerEl = document.createElement("div");
  stepperContainerEl.style.display = "flex";
  stepperContainerEl.style.flexDirection = "row";

  steps.forEach((step: Step) => {
    const el = createStep(step);
    stepperContainerEl.append(el);
  });

  return stepperContainerEl;
};
