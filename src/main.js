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
import bfod from "./assets/project/bfod.html?raw";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

document.getElementById("navbar-placeholder").innerHTML = navbar;
document.getElementById("botNav").innerHTML = botNav;
document.getElementById("footer-placeholder").innerHTML = footer;
document.getElementById("main").innerHTML = main;

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

const btnHome = document.querySelectorAll(".lofi");
const btnProject = document.querySelectorAll(".project");
const btnArt = document.querySelectorAll(".art");

btnHome.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("main").innerHTML = main;
    const rmBebek = document.getElementById("bebek");
    const footerdef = document.getElementById("footer-placeholder");
    if (rmBebek) {
      rmBebek.classList.remove("hidden");
    } else {
    }
    const addBg = document.getElementById("body");
    if (addBg) {
      addBg.classList.add(
        "bg-[url('https://txwatpcjenskrdnispuu.supabase.co/storage/v1/object/public/pasar3d/bgc.webp')]",
      );
    } else {
    }

    if (footerdef) {
      footerdef.classList.remove(
        "h-fit",
        "w-fit",
        "mx-auto",
        "rounded-full",
        "bg-[#212326]/70",
        "backdrop-blur-sm",
        "text-amber-100",
      );
    }
  });
});

btnProject.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("main").innerHTML = project;

    const pasar = document.getElementById("pasar");
    const bfod = document.getElementById("bfod");
    const sp = document.getElementById("sp");

    if (pasar && bfod && sp) {
      pasar.innerHTML = p3d;
      bfod.innerHTML = p3d;
      sp.innerHTML = p3d;

      
        const swiperMain = new Swiper(".swiper-main", {
          modules: [Navigation, Pagination],
          loop: true,
          observer: true,
          observeParents: true,
          watchSlidesProgress: true,

          pagination: { el: ".main-pagination", clickable: true },
          navigation: {
            nextEl: ".main-next",
            prevEl: ".main-prev",
          },
        });

        const swiperProject = new Swiper(".swiper-project", {
          modules: [Navigation, Pagination, Autoplay],
          loop: true,
          observer: true,
          observeParents: true,
          watchSlidesProgress: true,
          addIcons:false,

          autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          },

          pagination: { el: ".project-pagination", clickable: true },
          navigation: {
            nextEl: ".project-next",
            prevEl: ".project-prev",
          },
        });
      
    }

    const rmBebek = document.getElementById("bebek");
    if (rmBebek) rmBebek.classList.add("hidden");

    const rmBg = document.getElementById("footer-placeholder");
    if (rmBg) {
      rmBg.classList.add(
        "h-fit",
        "w-fit",
        "mx-auto",
        "rounded-full",
        "bg-[#212326]/70",
        "backdrop-blur-sm",
        "text-amber-100",
      );
    }
  });
});

btnArt.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("main").innerHTML = art;
    setTimeout(() => {
      const swiper = new Swiper(".swiper", {
        modules: [Navigation, Pagination], // Pastikan module ini masuk!
        loop: true,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true, // Tambahin ini biar posisi slide lebih stabil

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      // Tips: Paksa update sekali setelah inisialisasi
      setTimeout(() => swiper.update(), 50);
    }, 200); // Naikkan jeda dikit ke 200ms

    const rmBebek = document.getElementById("bebek");
    if (rmBebek) {
      rmBebek.classList.add("hidden");
    } else {
    }
    const addBg = document.getElementById("body");
    if (addBg) {
      addBg.classList.remove(
        "bg-[url('https://txwatpcjenskrdnispuu.supabase.co/storage/v1/object/public/pasar3d/bgc.webp')]",
      );
      addBg.classList.add("bg-[#212326]");
    }
  });
});

const btnSource = document.querySelectorAll(".source");
btnSource.forEach((y) => {
  y.addEventListener("click", () => {
    window.location.href = "https://github.com/DYTye";
  });
});

// if (btnProject) {
//   btnProject.addEventListener("click", () => {
//     document.getElementById("main").innerHTML = project;
//   });
// }
// if (btnArt) {
//   btnArt.addEventListener("click", () => {
//     document.getElementById("main").innerHTML = art;
//   });
// }
// if (btnHome) {
//   btnHome.addEventListener("click", () => {
//     document.getElementById("main").innerHTML = main;

//     navItems.forEach((x) => {
//       x.classList.remove(
//         "bg-amber-100",
//         "text-black",
//         "backdrop-blur-sm",
//         "rounded-xl",
//       );
//     });
//   });
// } else {
// }
