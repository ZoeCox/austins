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
