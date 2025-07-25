import getCountryList from "./services/apiServices.js";
import "./themeHandler/themeHandler.js";
import countryDatatoMap from "./page-setup/countryMap.js";
import createCard from "./page-setup/countryCard.js";
import createInfoPage from "./page-setup/infoPage.js";
import searchFilter from "./utils/searchFilter.js";
import { countryCardClick } from "./eventListenerFunctions.js";
const mainError = document.getElementById("main-page-error");
const countryContainer = document.getElementById("country-container");
const mainPage = document.getElementById("main-page");
const infoPage = document.getElementById("info-page");
const infoPageContainer = document.getElementById("info-page-container");
const backButton = document.getElementById("back-button");
const searchBar = document.getElementById("search-bar");
const filter = document.getElementById("filter");
const loader = document.querySelector(".loader");
//populate country list into a map
const url = "https://restcountries.com/v3.1/independent?status=true";
const url2 = "https://restcountries.com/v3.1/independent?status=false";
//saved into a map for use on border country buttons later
export let countryMap = new Map();
//build the Map, and displays it to screen
Promise.all([getCountryList(url), getCountryList(url2)])
    .then(([data, data2]) => {
    return countryDatatoMap(data.concat(data2));
})
    .then((result) => (countryMap = result))
    .then(() => {
    let fragment = document.createDocumentFragment();
    countryMap.forEach((country) => {
        fragment.appendChild(createCard(country));
    });
    countryContainer.appendChild(fragment);
    loader.style.display = "none";
})
    .catch((error) => (mainError.textContent = `${error.name}:  ${error.message}`));
//EVENT LISTENERS//
countryContainer.addEventListener("click", countryCardClick);
countryContainer.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        countryCardClick(event);
    }
});
backButton.addEventListener("click", () => {
    backButton.blur();
    mainPage.style.display = "";
    mainPage.ariaHidden = "false";
    infoPage.style.display = "none";
    infoPage.ariaHidden = "true";
    infoPageContainer.innerHTML = "";
});
infoPageContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.classList.contains("info-border-countries")) {
        return;
    }
    infoPageContainer.innerHTML = "";
    infoPageContainer.appendChild(createInfoPage(target.value));
    setTimeout(() => {
        window.scrollTo({ top: 150, left: 0, behavior: "smooth" });
    }, 50);
});
//input event listeners
searchBar.addEventListener("input", searchFilter);
filter.addEventListener("change", searchFilter);
