import createInfoPage from "./page-setup/infoPage.js";

const mainPage = document.getElementById("main-page") as HTMLElement;
const infoPage = document.getElementById("info-page") as HTMLElement;
const infoPageContainer = document.getElementById(
  "info-page-container"
) as HTMLDivElement;


export function countryCardClick(event: Event): void {
    const clickTarget = event.target as HTMLElement;
      if (!clickTarget.closest(".country-card")) {
        return;
      }
    
      const card = clickTarget.closest(".country-card") as HTMLDivElement;
    
      infoPageContainer.innerHTML = "";
    
      const cca3 = card.dataset.cca3;
      infoPageContainer.appendChild(createInfoPage(cca3 as string));
    
      clickTarget.blur();
    
      mainPage.style.display = "none";
      mainPage.ariaHidden = "true";
      infoPage.style.display = "";
      infoPage.ariaHidden = "false";
      setTimeout(() => {
        window.scrollTo({ top: 150, left: 0, behavior: "smooth" });
      }, 50);
}


