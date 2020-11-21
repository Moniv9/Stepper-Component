export const createNavigation = (label: string, eventHandler: any) => {
  const btnEl = document.createElement("button");

  btnEl.innerText = label;
  btnEl.id = label;
  btnEl.style.margin = "10px";
  btnEl.addEventListener("click", eventHandler);

  return btnEl;
};
