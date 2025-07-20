const switchButton = document.getElementById("dark-mode-toggle") as HTMLButtonElement;
const html = document.documentElement;


//this allows for keeping dark mode settings or swapping to light mode across refreshes
html.dataset.theme = localStorage.getItem("dark-mode") || "light";

//dark theme/light theme swap
switchButton.addEventListener("click", () =>
{
    html.dataset.theme = html.dataset.theme == "light"? "dark" : "light"
    localStorage.setItem("dark-mode", html.dataset.theme);
})


