// Variables
const bodyEl = document.querySelector("body");
const navBtn = document.querySelector(".navbar-toggler");
const navEl = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

// Functions
const toggleNavColor = () => {
  if (
    document.body.scrollTop >= 150 ||
    document.documentElement.scrollTop >= 150
  )
    return;

  navEl.classList.toggle("bg-nav");
  navLinks.forEach((link) => {
    link.classList.toggle("text-nav");
  });
};
// Event Handlers
navBtn.addEventListener("click", toggleNavColor);

window.onscroll = function () {
  console.log(document.body.scrollTop, document.documentElement.scrollTop);
  if (
    document.body.scrollTop >= 150 ||
    document.documentElement.scrollTop >= 150
  ) {
    navEl.classList.add("bg-nav");
    navLinks.forEach((link) => {
      link.classList.add("text-nav");
    });
  } else {
    navEl.classList.remove("bg-nav");
    navLinks.forEach((link) => {
      link.classList.remove("text-nav");
    });
  }
};
