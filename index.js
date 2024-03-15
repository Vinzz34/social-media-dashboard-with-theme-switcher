const toggle = document.getElementById("toggle");
const toggleSwitch = document.getElementById("switch");
const prefersColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches ? "dark-mode" : "light-mode";

function lightMode() {
  localStorage.setItem("theme", "light-mode");
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");
  toggle.classList.add("toggle-light");
  toggleSwitch.classList.add("switch-light");
}

function darkMode() {
  localStorage.setItem("theme", "dark-mode");
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-mode");
  toggle.classList.remove("toggle-light");
  toggleSwitch.classList.remove("switch-light");
}

function updateMode() {
  const mode = localStorage.getItem("theme") || prefersColorScheme;
  mode == "dark-mode" ? darkMode() : lightMode();
}

toggle.addEventListener("click", () => {
  if (localStorage.getItem("theme") == "light-mode") {
    darkMode();
  } else {
    lightMode();
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    event.matches ? darkMode() : lightMode();
  });

updateMode();
