const hamburgerIcon = document.getElementById("drop-down-menu");
const exIcon = document.getElementById("drop-down_open-x-shape");
const dropdownOverlay = document.querySelector(".drop-down_open-overlay");

const activate = () => {
  hamburgerIcon.style.display = "none";
  exIcon.style.display = "flex";
  dropdownOverlay.classList.toggle("open");
  dropdownOverlay.classList.toggle("open-active");

}