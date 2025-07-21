import createInfoPage from "./page-setup/infoPage.js";
const mainPage = document.getElementById("main-page");
const infoPage = document.getElementById("info-page");
const infoPageContainer = document.getElementById("info-page-container");
export function countryCardClick(event) {
    const clickTarget = event.target;
    if (!clickTarget.closest(".country-card")) {
        return;
    }
    const card = clickTarget.closest(".country-card");
    infoPageContainer.innerHTML = "";
    const cca3 = card.dataset.cca3;
    infoPageContainer.appendChild(createInfoPage(cca3));
    clickTarget.blur();
    mainPage.style.display = "none";
    mainPage.ariaHidden = "true";
    infoPage.style.display = "";
    infoPage.ariaHidden = "false";
    setTimeout(() => {
        window.scrollTo({ top: 150, left: 0, behavior: "smooth" });
    }, 50);
}
