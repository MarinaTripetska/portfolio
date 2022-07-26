//refs:
const btnThemeEl = document.querySelector(".theme__button");
const iconUseEl = document.querySelector(".theme__icon--use");
const bgBannerEl = document.querySelector(".banner__bg");
const bgContactsEl = document.querySelector(".contacts__bg");

//moduele variables:
let theme = "dark";

//eventListeners:
window.addEventListener("load", getLocalStorage);
window.addEventListener("beforeunload", setLocalStorage);
btnThemeEl.addEventListener("click", changeFlag);

//Foo:
function setLocalStorage() {
  localStorage.setItem("theme", theme);
}

function getLocalStorage() {
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
    changeTheme(theme);
  }
}

function changeFlag() {
  if (theme === "light") {
    theme = "dark";
    changeTheme(theme);
  } else {
    theme = "light";
    changeTheme(theme);
  }
}

function changeTheme(theme) {
  if (theme === "light") {
    //for day theme
    bgBannerEl.classList.add("theme-light");
    bgContactsEl.classList.add("theme-light");

    iconUseEl.href.baseVal = `./assets/svg/sprite.svg#icon-moon`;

    document.documentElement.style.setProperty("--body-color", "#fff");
    document.documentElement.style.setProperty("--text-color", "#000");
    document.documentElement.style.setProperty("--hover-color", "#000");
    document.documentElement.style.setProperty("--banner-btn-bg-color", "#fff");
    document.documentElement.style.setProperty(
      "--portfolio-btn-bg-color",
      "#bdae82"
    );
    document.documentElement.style.setProperty(
      "--contacts-input-bg-color",
      "rgba(255, 255, 255, 0.5)"
    );
    document.documentElement.style.setProperty("--btn-color-hover", "#bdae82");
    document.documentElement.style.setProperty(
      "--navigation-color-hover",
      "#fff"
    );
  } else if (theme === "dark") {
    //for night theme

    bgBannerEl.classList.remove("theme-light");
    bgContactsEl.classList.remove("theme-light");

    iconUseEl.href.baseVal = `./assets/svg/sprite.svg#icon-sun`;

    document.documentElement.style.setProperty("--body-color", "#000");
    document.documentElement.style.setProperty("--text-color", "#fff");
    document.documentElement.style.setProperty("--hover-color", "#bdae82");
    document.documentElement.style.setProperty(
      "--banner-btn-bg-color",
      "#bdae82"
    );
    document.documentElement.style.setProperty(
      "--portfolio-btn-bg-color",
      "#000"
    );
    document.documentElement.style.setProperty(
      "--contacts-input-bg-color",
      "rgba(0, 0, 0, 0.5)"
    );
    document.documentElement.style.setProperty("--btn-color-hover", "#fff");
    document.documentElement.style.setProperty(
      "--navigation-color-hover",
      "#bdae82"
    );
  }
}
