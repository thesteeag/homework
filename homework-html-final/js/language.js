export default function langBtnClick() {
  const btn = document.querySelector("#langBtn");
  const dropdown = document.querySelector("#langDropdown");

  btn.onclick = (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("lang-select__dropdown--open");
  };

  dropdown.querySelectorAll(".lang-select__option").forEach((opt) => {
    opt.onclick = () => {
      document.querySelector("#langCurrentText").textContent = opt.dataset.lang;
      document.querySelector("#langCurrentFlag").innerHTML =
        opt.querySelector("svg").outerHTML;
      dropdown.classList.remove("lang-select__dropdown--open");
    };
  });

  document.onclick = () =>
    dropdown.classList.remove("lang-select__dropdown--open");
}
