const menuBtn = document.getElementById("menu-btn");

function menuToggle() {
  menuBtn.classList.toggle("is-active");
}

menuBtn.addEventListener("click", menuToggle);
