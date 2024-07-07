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
