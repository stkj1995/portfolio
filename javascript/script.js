// Show the button when scrolling down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

const menu = document.querySelector(".burger-nav");
const burger = document.querySelector(".burger-menu");
const close = document.querySelector(".kryds");

burger.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);
function toggleMenu() {
  menu.classList.toggle("active");
  burger.classList.toggle("cross");
}
