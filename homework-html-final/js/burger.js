const burgerEl = document.querySelector(".header__burger");
const navEl = document.querySelector(".main-nav");

export function initBurger() {
  burgerEl.addEventListener("click", () => {
    navEl.classList.toggle("main-nav--open");
  });
}
