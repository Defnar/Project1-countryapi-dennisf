import buttonBuilder from "../utils/buttonBuilder.js";
import listBuilder from "../utils/listBuilders.js";
const cardTemplate = document.getElementById("country-card-template");
export default function createInformationDisplay(country, card, informationPage = false) {
    try {
        //set dataset for each card to the cca3 for quick reference
        let cardDiv = card.querySelector(".country-card");
        if (cardDiv)
            cardDiv.dataset.cca3 = country.cca3;
        //country flag
        const flag = card.querySelector(".country-flag") ||
            card.querySelector(".info-country-flag");
        flag.src = country.flags.svg || country.flags.png;
        flag.alt = country.flags.alt
            ? country.flags.alt
            : `Country flag of ${country.name.common}`;
        //country name
        const h2 = card.querySelector(".country-name");
        h2.textContent = country.name.common;
        //population
        const population = card.querySelector(".population");
        population.innerText = country.population.toLocaleString();
        //region
        const region = card.querySelector(".region");
        region.textContent = country.region;
        //capital
        const capital = card.querySelector(".capital");
        capital.textContent = country.capital ? country.capital.join() : "N/A";
        if (!informationPage)
            return;
        /////////////////////////////////////////////////////////
        //only the information portion should read and use this//
        /////////////////////////////////////////////////////////
        //Native name
        const nativeName = card.querySelector(".native-name");
        const nativeFirstKey = Object.keys(country.name.nativeName)[0];
        const nativeNameValue = country.name.nativeName[nativeFirstKey];
        nativeName.textContent = nativeNameValue.common || "N/A";
        //subregion
        const subRegion = card.querySelector(".subregion");
        subRegion.textContent = country.subregion || "N/A";
        //toplevel domain:
        let tld = card.querySelector(".top-level-domain");
        tld.textContent = country.tld.join(", ");
        //currencies
        const currencies = card.querySelector(".currencies");
        currencies.textContent = listBuilder(country.currencies) || "N/A";
        //languages
        const languages = card.querySelector(".languages");
        languages.textContent = listBuilder(country.languages) || "N/A";
        //buttons
        const border = card.querySelector(".border-countries");
        buttonBuilder(border, country);
    }
    catch (error) {
        console.error(error);
    }
}
