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

const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");

const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const image3 = document.querySelector(".img3");
const image4 = document.querySelector(".img4");

image2.style.display = "none";
image3.style.display = "none";
image4.style.display = "none";

const images = [image1, image2, image3, image4];

let imageIndex = 0;

forward.addEventListener("click", function forwardImage() {
  if (imageIndex + 1 < images.length) {
    images[imageIndex].style.display = "none";
    imageIndex += 1;
    images[imageIndex].style.display = "inline-block";
  }
});

backward.addEventListener("click", function backwardImage() {
  if (imageIndex != 0) {
    images[imageIndex].style.display = "none";
    imageIndex -= 1;
    images[imageIndex].style.display = "inline-block";
  }
});
