// BLOB ANIMATION

const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
).start();

//  THEME TOGGLE

const themeButton = document.getElementById("theme-btn");
const body = document.body;

themeButton.addEventListener("click", function () {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  }

  if (theme === "light") {
    document.body.classList.add("light");
  }

  if (theme === undefined) {
    document.body.classList.add("dark");
  }
});

// STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);
