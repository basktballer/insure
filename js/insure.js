const hamburgerMenu = document.getElementById("navbar-hamburger");
const closeButton = document.getElementById("navbar-close");
const navMenu = document.getElementById("nav-mobile");

hamburgerMenu.addEventListener('click', function (event) {
  navMenu.style.display = "flex";
  closeButton.style.display = "flex"
  hamburgerMenu.style.display = "none";
});

closeButton.addEventListener('click', function (event) {
  navMenu.style.display = "none";
  closeButton.style.display = "none"
  hamburgerMenu.style.display = "flex";
});