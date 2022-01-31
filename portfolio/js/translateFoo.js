import i18nObj from "./translate.js";

const btnsParentEl = document.querySelector(".langs");
const btnEN = document.querySelector(".langEn");
const btnRU = document.querySelector(".langRu");
const elementsWithTextArr = document.querySelectorAll("[data-i18n]");

btnEN.addEventListener("click", (e) => {
  getTranslate(e.target.textContent);
});
btnRU.addEventListener("click", (e) => {
  getTranslate(e.target.textContent);
});
btnsParentEl.addEventListener("click", (e) => changeClassActive(e));

function getTranslate(lang) {
  elementsWithTextArr.forEach((nodeEl) => {
    if (nodeEl.placeholder) {
      nodeEl.value = "";
      nodeEl.placeholder = i18nObj[lang][nodeEl.dataset.i18n];
    }
    nodeEl.textContent = i18nObj[lang][nodeEl.dataset.i18n];
  });
}

function changeClassActive(e) {
  const elementsSet = document.querySelectorAll(".lang");

  elementsSet.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (e.target.classList.contains("lang")) {
    e.target.classList.add("active");
  }
}
