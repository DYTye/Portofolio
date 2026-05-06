// main.js
import "./style.css";
import navbar from "./header.html?raw";
import footer from "./footer.html?raw";
import main from "./landing.html?raw";
import project from "./project.html?raw";
import art from "./art.html?raw";
import botNav from "./bottomNav.html?raw";
import p3d from "./assets/project/pasar3d.html?raw";
import sidangpanic from "./assets/project/sidangpanic.html?raw";
import setup from "./setup.html?raw";
import bfode from "./assets/project/bfod.html?raw";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-placeholder").innerHTML = footer;
  document.getElementById("main").innerHTML = main;
  document.getElementById("navbar-placeholder").innerHTML = navbar;
  document.getElementById("botNav").innerHTML = botNav;

  navbarRun();
});

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");

  if (loading) {
    gsap.to(loading, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        loading.style.display = "none";
        bebekAwal();
      },
    });
  }
});

function navbarRun() {
  const navItems = document.querySelectorAll(".nav-items");
  const bg = document.getElementById("bg");

  navItems.forEach((nav) => {
    nav.addEventListener("click", () => {
      const posisiBg = nav.getBoundingClientRect();
      const posisiParent = nav.parentElement.getBoundingClientRect();

      bg.style.width = posisiBg.width + "px";
      bg.style.height = posisiBg.height + "px";

      bg.style.left = posisiBg.left - posisiParent.left + "px";
      bg.style.top = posisiBg.top - posisiParent.top + "px";
    });
  });

  if (navItems.length > 0) {
    setTimeout(() => {
      const nav = navItems[0];

      const posisiBg = nav.getBoundingClientRect();
      const posisiParent = nav.parentElement.getBoundingClientRect();

      bg.style.width = posisiBg.width + "px";
      bg.style.height = posisiBg.height + "px";
      bg.style.left = posisiBg.left - posisiParent.left + "px";
      bg.style.top = posisiBg.top - posisiParent.top + "px";
    }, 50);
  }

  const bgb = document.getElementById("bg-bot");

  navItems.forEach((nav) => {
    nav.addEventListener("click", () => {
      const posisiBgb = nav.getBoundingClientRect();
      const posisiParentb = nav.parentElement.getBoundingClientRect();

      bgb.style.width = posisiBgb.width + "px";
      bgb.style.height = posisiBgb.height + "px";

      bgb.style.left = posisiBgb.left - posisiParentb.left + "px";
      bgb.style.top = posisiBgb.top - posisiParentb.top + "px";
    });
  });

  if (navItems.length > 0) {
    setTimeout(() => {
      const navbt = navItems[5];

      const posisiBgb = navbt.getBoundingClientRect();
      const posisiParentb = navbt.parentElement.getBoundingClientRect();

      bgb.style.width = posisiBgb.width + "px";
      bgb.style.height = posisiBgb.height + "px";
      bgb.style.left = posisiBgb.left - posisiParentb.left + "px";
      bgb.style.top = posisiBgb.top - posisiParentb.top + "px";
    }, 50);
  }
}

let projectSwiperInstance = null;
let mainSwiperInstance = null;

function swiperDestroy() {
  if (projectSwiperInstance) projectSwiperInstance.destroy(true, true);
  if (mainSwiperInstance) mainSwiperInstance.destroy(true, true);
}

const btnHome = document.querySelectorAll(".lofi");
const btnProject = document.querySelectorAll(".project");
const btnArt = document.querySelectorAll(".art");
function renderHome() {
  document.getElementById("main").innerHTML = main;
  window.scrollTo(0, 0);
  setTimeout(() => {
    const rmBebek = document.getElementById("bebek");
    const footerdef = document.getElementById("footer-placeholder");
    if (rmBebek) {
      rmBebek.classList.remove("hidden");
    } else {
    }
    const addBg = document.getElementById("body");
    if (addBg) {
      addBg.classList.add("bg-[url('/public/bgc.webp')]");
    } else {
    }

    if (footerdef) {
      footerdef.classList.remove(
        "h-fit",
        "w-fit",
        "mx-auto",
        "rounded-md",
        "bg-[#212326]/70",
        "backdrop-blur-sm",
        "text-amber-100",
      );
    }
    bebekAwal();

    const glass = document.getElementById("glass");
    if (glass) {
      glass.classList.remove("opacity-100");
    }
  });
}

function renderProject() {
  document.getElementById("main").innerHTML = project;
  window.scrollTo(0, 0);
  swiperDestroy();

  const pasar = document.getElementById("pasar");
  const bfod = document.getElementById("bfod");
  const sp = document.getElementById("sp");

  if (pasar && bfod && sp) {
    pasar.innerHTML = p3d;
    bfod.innerHTML = bfode;
    sp.innerHTML = sidangpanic;
  }
  // const swiperMain = new Swiper(".swiper-main", {
  //   modules: [Navigation, Pagination],
  //   loop: true,
  //   observer: true,
  //   observeParents: true,
  //   watchSlidesProgress: true,

  //   pagination: { el: ".main-pagination", clickable: true },
  //   navigation: {
  //     nextEl: ".main-next",
  //     prevEl: ".main-prev",
  //   },
  // });

  // const swiperProject = new Swiper(".swiper-project", {
  //   modules: [Navigation, Pagination, Autoplay],
  //   loop: true,
  //   observer: true,
  //   observeParents: true,
  //   watchSlidesProgress: true,
  //   addIcons: false,

  //   autoplay: {
  //     delay: 1000,
  //     disableOnInteraction: true,
  //   },

  //   pagination: { el: ".project-pagination", clickable: true },
  //   navigation: {
  //     nextEl: ".project-next",
  //     prevEl: ".project-prev",
  //   },
  // });
  const animasi = document.getElementById("anima");
  const playanimasi = gsap.fromTo(
    animasi,
    { y: 50, opacity: 0 },
    {
      duration: 0.5,
      y: 0,
      ease: "back.out(2.5)",
      opacity: 1,
    },
  );
  playanimasi.play();

  const rmBebek = document.getElementById("bebek");
  if (rmBebek) rmBebek.classList.add("hidden");

  const rmBg = document.getElementById("footer-placeholder");
  if (rmBg) {
    rmBg.classList.add(
      "h-fit",
      "w-fit",
      "mx-auto",
      "rounded-md",
      "bg-[#212326]/70",
      "backdrop-blur-sm",
      "text-amber-100",
    );
  }

  const addBg = document.getElementById("body");
  if (addBg) {
    addBg.classList.remove("bg-[#212326]");

    addBg.classList.add("bg-[url('/public/bgc.webp')]");
  }

  const glass = document.getElementById("glass");
  if (glass) {
    glass.classList.add("opacity-100", "bg-[#212326]", "lg:bg-[#212326]/70");

    if (window.innerWidth < 1024) {
      addBg.classList.remove("bg-[url('/public/bgc.webp')]");
      animasi.classList.remove("rounded-3xl");
    }
  }
}
function renderArt() {
  document.getElementById("main").innerHTML = art;
  window.scrollTo(0, 0);
  swiperDestroy();
  const rmBebek = document.getElementById("bebek");
  if (rmBebek) {
    rmBebek.classList.add("hidden");
  } else {
  }
  const addBg = document.getElementById("body");
  if (addBg) {
    addBg.classList.remove("bg-[url('/public/bgc.webp')]");
    addBg.classList.add("bg-[#212326]");
  }
  setTimeout(() => {
    const swiperProject = new Swiper(".swiper-project", {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      addIcons: false,

      autoplay: {
        delay: 1000,
        disableOnInteraction: true,
      },

      pagination: { el: ".project-pagination", clickable: true },
      navigation: {
        nextEl: ".project-next",
        prevEl: ".project-prev",
      },
    });

    setTimeout(() => swiper.update(), 50);
  }, 200);
}
function renderSetup() {
  const btnSetup = document.querySelectorAll(".setup");
  document.getElementById("main").innerHTML = setup;

  const hidebebek = document.getElementById("bebek");
  if (hidebebek) {
    hidebebek.classList.add("hidden");
  }
  const addBg = document.getElementById("body");
  if (addBg) {
    addBg.classList.remove("bg-[url('/public/bgc.webp')]");
    addBg.classList.add("bg-[#212326]");
  }
  window.scrollTo(0, 0);
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".lofi")) {
    renderHome();
  }
  if (e.target.closest(".project")) {
    renderProject();
  }

  if (e.target.closest(".art")) {
    renderArt();
  }
  if (e.target.closest(".setup")) {
    renderSetup();
  }
  if (e.target.closest(".source")) {
    const btnSource = document.querySelectorAll(".source");
    window.location.href = "https://github.com/DYTye";
  }
});

function bebekAwal() {
  const animasiBebek = document.getElementById("bebek");
  if (animasiBebek) {
    const flip = gsap.fromTo(
      animasiBebek,
      { rotationY: 0 },
      { rotateY: 360, duration: 1, ease: "back.out(1.5)" },
    );
  }
}

const animasiBebek = document.getElementById("bebek");
let cd = false;
if (animasiBebek) {
  const flip = gsap.fromTo(
    animasiBebek,
    { rotationY: 0 },
    { rotateY: 360, duration: 1, ease: "back.out(1.7)" },
  );
  flip.play();
  animasiBebek.addEventListener("mouseenter", () => {
    if (cd) return;

    cd = true;
    const flip = gsap.fromTo(
      animasiBebek,
      { rotationY: 0 },
      { rotateY: 360, duration: 1, ease: "back.out(1.7)" },
    );
    flip.play();

    setTimeout(() => {
      cd = false;
    }, 2000);
  });
}
