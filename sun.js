const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navigation_Links");

hamburger.addEventListener("click", () => {
  if (navLinks.style.transform === "scaleX(1)") {
    navLinks.style.transform = "scaleX(0)";
  } else {
    navLinks.style.transform = "scaleX(1)";
  }
});
