/**
 * Main JavaScript - Navigation, scroll animations, mobile menu
 */
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initScrollAnimations();
  initActiveNavLink();
  initHeaderScroll();
});

/* ==============================
   Mobile Hamburger Menu
   ============================== */
function initMobileMenu() {
  const hamburger = document.getElementById("nav-hamburger");
  const navList = document.getElementById("nav-list");

  if (!hamburger || !navList) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navList.classList.toggle("open");
  });

  // Close menu when clicking a nav link
  navList.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navList.classList.remove("open");
    });
  });
}

/* ==============================
   Scroll Fade-in Animation
   ============================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ==============================
   Active Nav Link on Scroll
   ============================== */
function initActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue("--nav-height").trim() || "64px"} 0px -40% 0px`,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ==============================
   Header Background on Scroll
   ============================== */
function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          header.style.background = "rgba(10, 10, 15, 0.95)";
        } else {
          header.style.background = "rgba(10, 10, 15, 0.85)";
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}
