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
function ranColor() {
  const color = ["bg-[#d23b7b]", "bg-[#831C91]", "bg-[#462C7D]", "bg-[#FCBF49]"];
  const bgColor = Math.floor(Math.random() * color.length);
  const pickColor = color[bgColor];
  return pickColor;
}


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
  document.getElementById("main").innerHTML = "";

  const projectSwiper = [
    {
      nama: "Pasar 3D",
      skill: ["Wordpress", "Elementor", "Rest-API"],
      slider: ["p3d.webp", "p3d1.webp", "p3d2.webp", "prd3.webp"],
      deskripsi: [
        `Pasar3D is a premier digital marketplace built for the modern 3D
        creator. We provide a dedicated platform where artists can showcase
        their technical craftsmanship and turn their 3D projects into a thriving
        business. From high-fidelity game assets to intricate architectural
        models, we bridge the gap between creative visionaries and the global
        industries that need them`,
        `        Pasar3D was proudly developed during my internship at
        <a class="text-purple-400" href="https://devatastudio.com"
          >Devata Studio</a
        >
        . It began as a vision to empower fellow creators and evolved into a
        fully-fledged marketplace. By combining the insights I gained at the
        studio with my passion for 3D art, I’ve built a space where technical
        quality meets commercial opportunity`,
        `        Build with Wordpress and Elementor you can visit at
        <span class="text-purple-400"
          ><a href="https://pasar3d.com">Pasar3d.com</a></span
        >`,
      ],
    },
    {
      nama: "BFOD",
      skill: ["Wordpress", "Elementor"],
      slider: [
        "bfod1.webp",
        "bfod2.webp",
        "bfod3.webp",
        "bfod4.webp",
        "bfod5.webp",
        "wof.webp",
        "wof1.webp",
        "wof2.webp"
      ],
      deskripsi: [
        `        Battle Field of Devata (BFOD) is a national creative competition
        platform I developed during my internship at <a class="text-purple-400" href="https://devatastudio.com">Devata Studio</a>, designed to
        showcase 2D and 3D artists across Indonesia. It functions as both a
        competition hub and exposure platform, helping participants gain
        visibility, build portfolios, and connect with the creative industry.`,
        `  The website was developed by me during my internship at <a class="text-purple-400" href="https://devatastudio.com">Devata Studio</a>,
        where I was responsible for building and implementing the platform based
        on direction and requirements provided by the Devata team, ensuring the
        final product aligned with their vision and competition goals.`,
        `The website was developed using HTML and Tailwind CSS, then integrated
        into a WordPress environment via Elementor. you can visit at <a class="text-purple-400" href="https://academy.devatastudio.com/bfod2025/"">Devata Studio-BFOD</a>`,
      ],
    },
    {
      nama: "Sidang Panic",
      skill: ["Ren.py", "Python", "Express.js"],
      slider: ["sp1.webp", "sp2.webp", "sp3.webp", "sp4.webp"],
      deskripsi: [
        `        Sidang Panic! is a short narrative game about a student who just wants
        to graduate in peace—but ends up facing three wildly different
        lecturers: one chill, one chaotic, and one terrifying. What starts as a
        normal thesis defense quickly turns into a nerve-wracking (and slightly
        absurd) battle of confidence, where every answer matters and even
        breathing wrong feels like a mistake. Passing is optional—surviving the
        vibes is the real challenge.`,
        `   Built using Ren'Py and integrated with Gemini AI to make every dialogue
        with the lecturers dynamic and responsive.`,
        `3rd Place Winner, National Game Hackathon – Organized by Cybertech
        Organized by Cybertech Student Activity Unit, Politeknik Negeri Padang.
        (2025). As the team leader of Siang Panic, I led the development and
        handled the final pitch to the judges.`,
      ],
    },
    {
      nama: "Smart Recipt",
      skill: ["Next.js", "Cloud Computing", "AI Implementation","Supabase"],
      slider: ["comingsoon.jpg"],
      deskripsi: [
        `A serverless SaaS platform designed to automate financial recording for SMEs. By leveraging Multimodal AI, the system eliminates manual data entry by instantly converting receipt photos into structured financial records.`,
        `Built with a modern serverless architecture using Next.js for the frontend and Supabase Edge Functions for logic. It utilizes Supabase Storage for secure image hosting and PostgreSQL for scalable, multi-tenant data management.`,
        `Powered by the Gemini 1.5 Flash API to extract key transaction data. I implemented a custom Post-Processing layer using Regex and data sanitization to ensure high-precision output and consistent data formatting before database insertion.`,
        `This project bridges the digital gap for small businesses by reducing human error and streamlining bookkeeping. It provides a mobile-first, automated solution that allows business owners to focus on growth rather than administrative tasks.`,
      ],
    },
  ];

  let isiProject = `
    <div class="swiper swiper-main my-2 lg:my-5 overflow-hidden bg-[#212326] rounded-3xl max-w-7xl mx-auto shadow-2xl" id=anima>
      <div class="swiper-wrapper pt-5 mb-3">`;

  for (let i = 0; i < projectSwiper.length; i++) {
    const p = projectSwiper[i];
    isiProject += `
      <div class="swiper-slide px-4 lg:px-10"> 
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-xs lg:max-w-6xl mx-auto my-6">
          
          <div>
            <div class="z-10 ring-2 ${ranColor().replace("bg-","ring-")} p-5 rounded-md bg-[#1a1c1e]">
              <div class="py-4">
                <div class="w-full">
                  <div class="aspect-video w-full swiper swiper-project overflow-hidden rounded-xl">
                    <div class="swiper-wrapper ">
                    ${p.slider.map((foto) => `<div class="swiper-slide"><img src=${foto} class="w-full h-full object-cover"></div>`).join("")}
                    </div>
                    <div class="project-pagination swiper-pagination"></div>
                    <div class="project-next swiper-button-next !text-transparent "></div>
                    <div class="project-prev swiper-button-prev !text-transparent "></div>
                  </div>

                  <div class="text-amber-100 font-bold flex flex-col gap-3 mt-5">
                    <div class="font-extrabold flex gap-2 items-center ${ranColor()} rounded-sm p-3 w-fit shadow-lg">
                      <span>Project:</span>
                      <span>${p.nama}</span>
                    </div>

                    <div class="font-extrabold flex items-center gap-2">
                      <div class="bg-[#D23B7B] rounded-sm p-3 shadow-lg">Skills:</div>
                      <div class="flex flex-wrap gap-2">
                      ${p.skill.map((mySkill) => `<div class="${ranColor()} px-3 py-1 text-xs rounded-sm shadow-md">${mySkill}</div>`).join("")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-4 justify-center text-white/90">
            ${p.deskripsi.map((myDeskripsi) => `<div class="bg-[#2a2d32] p-4 rounded-lg border-l-4 ${ranColor().replace("bg-","border-")}"><div class="text-xs leading-relaxed">${myDeskripsi}</div></div>`).join("")} 
          </div>

        </div>
      </div> 
      `;
  }
  isiProject += `
      </div> <div class="main-pagination swiper-pagination" style="--swiper-pagination-color: #d23b7b;"></div>
      <div class="main-prev swiper-button-prev lg:!text-[#D23B7B] !text-transparent"></div>
      <div class="main-next swiper-button-next lg:!text-[#D23B7B] !text-transparent"></div>
    </div> `;
  document.getElementById("main").innerHTML = isiProject;
  setTimeout(() => {
    document.querySelectorAll(".swiper-main").forEach((e) => {
      new Swiper(e, {
        modules: [Navigation, Pagination],
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: e.querySelector(".main-pagination"),
          clickable: true,
        },
        navigation: {
          nextEl: e.querySelector(".main-next"),
          prevEl: e.querySelector(".main-prev"),
        },
      });
    });

    document.querySelectorAll(".swiper-project").forEach((e) => {
      new Swiper(e, {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: e.querySelector(".project-pagination"),
          clickable: true,
        },
        navigation: {
          nextEl: e.querySelector(".project-next"),
          prevEl: e.querySelector(".project-prev"),
        },
      });
    });
  }, 200);
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

    addBg.classList.add("bg-[#212326]", "lg:bg-[url('/public/bgc.webp')]");
  }

  const glass = document.getElementById("glass");
  if (glass) {
    glass.classList.add("opacity-100", "bg-[#212326]", "lg:bg-[#212326]/70");
  }
}
function renderArt() {
  document.getElementById("main").innerHTML = art;
  window.scrollTo(0, 0);
  swiperDestroy();
  const rmBebek = document.getElementById("bebek");
  if (rmBebek) rmBebek.classList.add("hidden");
  const addBg = document.getElementById("body");
  if (addBg) {
    addBg.classList.remove(
      "lg:bg-[url('/public/bgc.webp')]",
      "bg-[url('/public/bgc.webp')]",
    );

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
