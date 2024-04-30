// BLOB ANIMATION

if (document.querySelector("#blob1")) {
  const tween = KUTE.fromTo(
    "#blob1",
    { path: "#blob1" },
    { path: "#blob2" },
    { repeat: 999, duration: 3000, yoyo: true }
  ).start();
}

//  THEME TOGGLE

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

if (sectionHeroEl) {
  observer.observe(sectionHeroEl);
} else {
  document.body.classList.add("sticky");
}
