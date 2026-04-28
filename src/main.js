// main.js
import "./style.css";
import navbar from "./header.html?raw";
import footer from "./footer.html?raw";
import main from "./landing.html?raw";
import project from "./project.html?raw";
import art from "./art.html?raw";
import botNav from "./bottomNav.html?raw";

document.getElementById("navbar-placeholder").innerHTML = navbar;
document.getElementById("botNav").innerHTML = botNav;
document.getElementById("footer-placeholder").innerHTML = footer;
document.getElementById("main").innerHTML = main;
const navItems = document.querySelectorAll(".nav-items");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((x) => {
      x.classList.remove(
        "bg-amber-100",
        "text-black",
        "backdrop-blur-sm",
        "rounded-xl",
      );
    });

    item.classList.add(
      "bg-amber-100",
      "text-black",
      "backdrop-blur-sm",
      "rounded-xl",
    );
  });
});

const btnHome = document.getElementById("lofi");
const btnProject = document.getElementById("project");
const btnArt = document.getElementById("art");
if (btnProject) {
  btnProject.addEventListener("click", () => {
    document.getElementById("main").innerHTML = project;
  });
}
if (btnArt) {
  btnArt.addEventListener("click", () => {
    document.getElementById("main").innerHTML = art;
  });
}
if (btnHome) {
  btnHome.addEventListener("click", () => {
    document.getElementById("main").innerHTML = main;

    navItems.forEach((x) => {
      x.classList.remove(
        "bg-amber-100",
        "text-black",
        "backdrop-blur-sm",
        "rounded-xl",
      );
    });
  });
} else {
}
