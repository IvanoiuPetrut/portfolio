const themeButton = document.getElementById("theme-btn");
const body = document.body;

window.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    body.classList.add("dark");
  }

  if (theme === "light") {
    body.classList.add("light");
  }

  if (!theme) {
    body.classList.add("dark");
  }
});

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
