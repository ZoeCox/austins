const hamburgerButton = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const hamburgerDismiss = document.querySelector(".hamburger-exit");

navItems.style.display = "none";
hamburgerDismiss.style.display = "none";

hamburgerButton.addEventListener("click", function hamburgerMenu() {
  navItems.style.display = "flex";
  hamburgerButton.style.display = "none";
  hamburgerDismiss.style.display = "inline-block";
});

hamburgerDismiss.addEventListener("click", function hamburgerExit() {
  navItems.style.display = "none";
  hamburgerDismiss.style.display = "none";
  hamburgerButton.style.display = "inline-block";
});
document.querySelector(".dropdown-text").style.display = "none";
document.querySelector(".minimise-icon").style.display = "none";
document
  .querySelector(".expand-icon")
  .addEventListener("click", function expandText() {
    document.querySelector(".dropdown-text").style.display = "block";
    document.querySelector(".minimise-icon").style.display = "inline-block";
    document.querySelector(".expand-icon").style.display = "none";
  });

document
  .querySelector(".minimise-icon")
  .addEventListener("click", function minimiseText() {
    document.querySelector(".dropdown-text").style.display = "none";
    document.querySelector(".minimise-icon").style.display = "none";
    document.querySelector(".expand-icon").style.display = "inline-block";
  });
