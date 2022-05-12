// const tween = KUTE.fromTo(
//   "#blob1",
//   { path: "#blob1" },
//   { path: "#blob2" },
//   { repeat: 999, duration: 3000, yoyo: true }
// ).start();

// tween.start();

const themeButton = document.getElementById("theme-btn");
const body = document.body;

themeButton.onclick = () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
};
