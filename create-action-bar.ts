import { createNavigation } from "./create-navigation";

export const createActionBar = () => {
  const actionContainerEl = document.createElement("div");

  actionContainerEl.style.display = "flex";
  actionContainerEl.style.flexDirection = "row";

  return actionContainerEl;
};

export const createNextActionButton = (label: string) => {
  return createNavigation(label, () => {
    const nextBtnEl = document.getElementById(label);

    const nextStepEl = document.getElementById(
      `${Number(nextBtnEl.getAttribute("currentStep"))}`
    );

    nextStepEl.style.fontWeight = "bold";
    nextStepEl.style.color = "green";
  });
};

export const createBackActionButton = (label: string) => {
  return createNavigation(label, () => {
    const backBtnEl = document.getElementById(label);

    const backStepEl = document.getElementById(
      `${Number(backBtnEl.getAttribute("currentStep"))}`
    );

    backStepEl.style.color = "black";
    backStepEl.style.fontWeight = "normal";
  });
};
