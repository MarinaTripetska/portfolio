const btnsParentEl = document.querySelector(".portfolio__btn-set");
const imagesSetEl = document.querySelectorAll(".portfolio__gallery-img");

const preloadedImages = preloadImages();

btnsParentEl.addEventListener("click", (e) => imageChanger(e));
btnsParentEl.addEventListener("click", (e) =>
  changeClassActive(e, ".portfolio__btn")
);

function preloadImages() {
  const preloadImages = [];
  const seasons = ["spring", "summer", "autumn", "winter"];
  seasons.forEach((s) => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${s}/${i}.jpg`;
      preloadImages.push(img);
    }
  });
  return preloadImages;
}

function imageChanger(e) {
  if (e.target.classList.contains("portfolio__btn")) {
    const season = e.target.dataset.season;

    const preloadedImagesBySeason = preloadedImages.filter(
      (img) => img.src.includes(`${season}`) && img
    );

    imagesSetEl.forEach((el, i) => {
      el.src = preloadedImagesBySeason[i].src;
    });
  }
}

function changeClassActive(e, className) {
  const elementsSet = document.querySelectorAll(className);
  elementsSet.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
}
