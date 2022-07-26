//lang text obj:
import i18nObj from "./translate.js";
//refs:
const btnsParentEl = document.querySelector(".langs");
const btnsSet = document.querySelectorAll(".lang");
const btnEN = document.querySelector(".langEn");
const btnRU = document.querySelector(".langRu");
const elementsWithTextArr = document.querySelectorAll("[data-i18n]");

//moduele variables:
let languege = "en";

//event listeners:
window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);
btnsParentEl.addEventListener("click", changeClassActive);
btnEN.addEventListener("click", (e) => getTranslate(e.target.textContent));
btnRU.addEventListener("click", (e) => getTranslate(e.target.textContent));

//Foo:
function setLocalStorage() {
  localStorage.setItem("lang", languege);
}

function getLocalStorage() {
  if (localStorage.getItem("lang")) {
    languege = localStorage.getItem("lang");

    getTranslate(languege);
    changeClassActive();
  }
}

function getTranslate(lang) {
  languege = lang;
  elementsWithTextArr.forEach((nodeEl) => {
    if (nodeEl.placeholder) {
      nodeEl.value = "";
      nodeEl.placeholder = i18nObj[lang][nodeEl.dataset.i18n];
    }
    nodeEl.textContent = i18nObj[lang][nodeEl.dataset.i18n];
  });
}

function changeClassActive() {
  btnsSet.forEach((btn) => {
    btn.classList.remove("active");
    btn.textContent === languege && btn.classList.add("active");
  });
}
