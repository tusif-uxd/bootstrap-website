let toggle = document.getElementById("flexSwitchCheckDefault");
let darkTheme = document.getElementById("dark-theme");
let labelText = document.getElementById("label-text");
let MainBody = document.getElementById("main-body");

toggle.addEventListener("click", () => {
  darkTheme.classList.forEach((element) => {
    if (element.includes("navbar-light")) {
      darkTheme.classList.remove("navbar-light", "bg-light");
      darkTheme.classList.add("navbar-dark", "bg-dark");
      labelText.classList.add("text-light");
      MainBody.classList.add("bg-dark", "text-white");
      labelText.innerText = "Dark Theme";
    } else if (element.includes("navbar-dark")) {
      darkTheme.classList.remove("navbar-dark", "bg-dark");
      darkTheme.classList.add("navbar-light", "bg-light");
      labelText.classList.remove("text-light");
      MainBody.classList.remove("bg-dark", "text-white");
      labelText.innerText = "Light Theme";
    }
  });
});
