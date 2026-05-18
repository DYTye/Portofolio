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
  const color = [
    "bg-[#d23b7b]",
    "bg-[#831C91]",
    "bg-[#462C7D]",
    "bg-[#FCBF49]",
  ];
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
      nama: "(SaaS) Smart Receipt",
      skill: [
        "Next.js",
        "JavaScript",
        "Cloud Computing",
        "AI Implementation",
        "Supabase",
      ],
      slider: ["comingsoon.jpg"],
      deskripsi: [
        `Smart Receipt is an automated, mobile-first SaaS infrastructure designed to eliminate manual bookkeeping bottlenecks for micro, small, and medium enterprises (MSMEs). By leveraging serverless Multimodal AI workflows, the platform instantly processes and extracts semantic data from structural transaction receipts, converting raw image captures into precise, validated financial ledgers to mitigate human error.`,

        `Architected upon a cloud-native, multi-tenant database infrastructure using Next.js for the high-performance user interface and JavaScript for core full-stack application logic. The backend operates entirely serverless, orchestrating data workflows via Supabase Edge Functions, utilizing secure Supabase Storage buckets for multi-tenant asset management, and PostgreSQL for relational financial record keeping.`, // <-- TYPOGRAPHY FIXED TO JAVASCRIPT

        `Powered by the Google Gemini 1.5 Flash Multimodal API to drive high-speed data extraction token efficiency. To guarantee absolute data integrity before database insertion, I engineered a highly optimized post-processing pipeline layer utilizing custom regular expressions (Regex) and algorithmic data sanitization, ensuring deterministic output formatting across all structural transaction records.`,
      ],
    },
    {
      nama: "Sidang Panic",
      skill: ["Ren'py", "Python", "Express.js"],
      slider: ["sp1.webp", "sp2.webp", "sp3.webp", "sp4.webp"],
      deskripsi: [
        `Sidang Panic! is an interactive, short-form narrative simulation game that models the psychological high-stakes environment of a university thesis defense. Players navigate a high-stress evaluation simulation against three distinct lecturer archetypes—the laid-back, the unpredictable, and the hyper-critical—transforming a traditional academic milestone into an absurd, edge-of-your-seat battle of confidence and conditional state-driven survival.`,

        `Built upon the Ren'Py engine and integrated with open-source LLM architectures sourced from Hugging Face to orchestrate dynamic, context-aware dialogue systems. By leveraging custom pipeline execution, prompt engineering, and state-driven logic, the game features highly responsive lecturer behaviors that dynamically adapt to the player's vocabulary, confidence metrics, and contextual answers in real-time.`,

        `Awarded 3rd Place at the National Game Hackathon 2025, organized by the Cybertech Student Activity Unit at Politeknik Negeri Padang. Serving as the Technical Team Lead, I spearheaded the core gameplay programming, engineered the Hugging Face model integration pipeline, and successfully delivered the high-impact final technical pitch to the panel of industry judges.`,
      ],
    },
    {
      nama: "Pasar 3D",
      skill: [
        "Wordpress",
        "Next.js",
        "JavaScript",
        "WordPress REST API",
        "Tailwind CSS",
      ],
      slider: ["p3d.webp", "p3d1.webp", "p3d2.webp", "prd3.webp"],
      deskripsi: [
        `Pasar3D is a curated digital marketplace optimized for high-fidelity 3D assets, bridging the gap between independent digital craftsmen and global interactive industries. The platform provides a production-ready ecosystem tailored for game-ready assets, complex architectural meshes, and high-quality 3D models, transforming technical craftsmanship into a sustainable commercial pipeline.`,

        `Engineered during my full-stack development residency at <a class="text-purple-400 hover:underline" href="https://devatastudio.com" target="_blank" rel="noopener noreferrer">Devata Studio</a>, Pasar3D evolved from a conceptual MVP into a scalable commercial asset platform. The project demonstrates the successful integration of real-world studio requirements with a streamlined deployment workflow, establishing a high-performance workspace where technical quality meets digital commerce.`,

        `Built upon a customized production stack leveraging the robust e-commerce architecture of WordPress and WooCommerce, styled with utility-first layouts for rapid deployment. Explore the production system live at <span class="text-purple-400"><a class="hover:underline" href="https://pasar3d.com" target="_blank" rel="noopener noreferrer">Pasar3d.com</a></span>.`,
      ],
    },
    {
      nama: "BFOD",
      skill: ["Wordpress", "Elementor", "Tailwind CSS"],
      slider: [
        "bfod1.webp",
        "bfod2.webp",
        "bfod3.webp",
        "bfod4.webp",
        "bfod5.webp",
        "wof.webp",
        "wof1.webp",
        "wof2.webp",
      ],
      deskripsi: [
        `Battle Field of Devata (BFOD) is a nationwide creative tournament infrastructure designed to aggregate and showcase elite 2D and 3D digital artists across Indonesia. The platform serves as a high-exposure digital hub that connects emerging creative talents with industry-standard production pipelines, driving participant visibility and professional portfolio acceleration.`,

        `Engineered during my full-stack development residency at <a class="text-purple-400 hover:underline" href="https://devatastudio.com" target="_blank" rel="noopener noreferrer">Devata Studio</a>, I was fully responsible for translating product requirements into a production-ready, highly interactive landing page. The deployment focused heavily on visual storytelling and UI/UX optimization to maximize user engagement and streamline competition registration workflows.`,

        `Built upon a customized WordPress environment, utilizing Tailwind CSS for custom utility-first UI styling and high-fidelity layouts for rapid product delivery. Explore the live platform architecture at <span class="text-purple-400"><a class="hover:underline" href="https://academy.devatastudio.com/bfod2025/" target="_blank" rel="noopener noreferrer">Devata Studio - BFOD</a></span>.`,
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
            <div class="z-10 ring-2 ${ranColor().replace("bg-", "ring-")} p-5 rounded-md bg-[#1a1c1e]">
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
            ${p.deskripsi.map((myDeskripsi) => `<div class="bg-[#2a2d32] p-4 rounded-lg border-l-4 ${ranColor().replace("bg-", "border-")}"><div class="text-xs leading-relaxed">${myDeskripsi}</div></div>`).join("")} 
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
    addBg.classList.remove(
      "lg:bg-[url('/public/bgc.webp')]",
      "bg-[url('/public/bgc.webp')]",
    );

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
