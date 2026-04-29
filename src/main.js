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
    const nav = navItems[0]; 

    const posisiBgb = nav.getBoundingClientRect();
    const posisiParentb = nav.parentElement.getBoundingClientRect();

    bgb.style.width = posisiBgb.width + "px";
    bgb.style.height = posisiBgb.height + "px";
    bgb.style.left = posisiBgb.left - posisiParentb.left + "px";
    bgb.style.top = posisiBgb.top - posisiParentb.top + "px";
  }, 50);
}




// navItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     navItems.forEach((x) => {
//       x.classList.remove(
//         "bg-amber-100",
//         "text-black",
//         "backdrop-blur-sm",
//         "rounded-xl",
//       );
//     });

//     item.classList.add(
//       "bg-amber-100",
//       "text-black",
//       "backdrop-blur-sm",
//       "rounded-xl",
//     );
//   });
// });

// const anim = document.getElementById("anim");
// const bg = anim.querySelector("span");

// anim.addEventListener("click", () => {
//  bg.classList.toggle("translate-x-0")
// });

const btnHome = document.querySelectorAll(".lofi");
const btnProject = document.querySelectorAll(".project");
const btnArt = document.querySelectorAll(".art");

btnHome.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("main").innerHTML = main;
    const rmBebek = document.getElementById("bebek");
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

    navItems.forEach((x) => {
      x.classList.remove(
        "bg-amber-100",
        "text-black",
        "backdrop-blur-sm",
        "rounded-xl",
      );
    });
  });
});

btnProject.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("main").innerHTML = project;

    const rmBebek = document.getElementById("bebek");
    if (rmBebek) {
      rmBebek.classList.add("hidden");
    }

    const rmBg = document.getElementById("footer-placeholder");
    if (rmBg) {
      rmBg.classList.add("w-fit", "mx-auto", "rounded-md");
    }

    const slide = document.getElementById("slide");
    if (slide) {
      const foto = [];
      foto.push("bgc.png", "kupi.png", "profil.png");

      let i = 0;
      setInterval(() => {
        slide.src = foto[i];
        i++;

        if (i === foto.length) {
          i = 0;
        }
      }, 1000);
    }
  });
});

btnArt.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("main").innerHTML = art;

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

const foto = [];
foto.push("bgc.png", "kupi.png", "profil.png");

let i = 0;
setInterval(() => {
  foto.src = "foto[i]";
  i++;
}, 1000);
