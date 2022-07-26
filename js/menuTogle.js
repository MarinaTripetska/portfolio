const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const menuNavLinks = [...document.querySelectorAll(".nav__link")];

function menuToggle() {
  menuBtn.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
  document.body.classList.toggle("menu-open");
}

menuBtn.addEventListener("click", menuToggle);

menuNavLinks.forEach((link) => {
  link.addEventListener("click", menuToggle);
});
