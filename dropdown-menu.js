const hamburgerIcon = document.getElementById("drop-down-menu");
const exIcon = document.getElementById("drop-down_open-x-shape");
const dropdownOverlay = document.querySelector(".drop-down_open-overlay");
const dropDownModule = document.querySelector(".drop-down_module");
const dropDownLinks = document.getElementById("drop-down-links");
const activate = () => {
  hamburgerIcon.style.display = "none";
  exIcon.style.display = "flex";
  dropdownOverlay.classList.toggle("open");
  dropdownOverlay.classList.toggle("open-active");
  dropDownModule.classList.toggle("open");
  dropDownLinks.style.color = "white";
  dropDownLinks.style.borderLeft= "white solid 5px";
  dropDownLinks.style.zIndex = "8";
}
const deActivate = () => {
  hamburgerIcon.style.display = "flex";
  exIcon.style.display = "none";
  dropDownModule.classList.toggle("open");
  dropdownOverlay.classList.toggle("open-active")
  setTimeout(() => {
    dropdownOverlay.classList.toggle("open")
  }, 600);
}
const goHome = () => {
  window.location.href = "../index.html";
}