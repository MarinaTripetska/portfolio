const btnThemeEl = document.querySelector(".theme__button");
const iconUseEl = document.querySelector(".theme__icon--use");
const bgBannerEl = document.querySelector(".banner__bg");
const bgContactsEl = document.querySelector(".contacts__bg");

btnThemeEl.addEventListener("click", changeTheme);

function changeTheme() {
  if (iconUseEl.href.baseVal.includes("sun")) {
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
  } else {
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
