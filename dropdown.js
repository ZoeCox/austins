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
