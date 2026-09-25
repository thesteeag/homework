export const initPhoneMask = (elementSelector) => {
  const element =
    typeof elementSelector === "string"
      ? document.querySelector(elementSelector)
      : elementSelector;

  if (!element) {
    console.warn(`[phoneMask]: Элемент "${elementSelector}" не найден в DOM.`);
    return null;
  }

  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
    lazy: false,
    placeholderChar: " ",
  };

  const mask = window.IMask(element, maskOptions);

  return mask;
};
