const cardTemplate = document.getElementById("country-card-template");
export default function createCard(country) {
    const card = cardTemplate.content.cloneNode(true);
    //set dataset for each card to the cca3 for quick reference
    let cardDiv = card.querySelector(".country-card");
    cardDiv.dataset.cca3 = country.cca3;
    //country flag
    const flag = card.querySelector(".country-flag");
    flag.src = country.flags.svg || country.flags.png;
    flag.alt = country.flags.alt
        ? country.flags.alt
        : `Country flag of ${country.name.common}`;
    //country name
    const h2 = card.querySelector(".country-name");
    h2.textContent = country.name.common;
    //population
    const population = card.querySelector(".population");
    population.textContent = country.population.toString();
    //region
    const region = card.querySelector(".region");
    region.textContent = country.region;
    //capital
    const capital = card.querySelector(".capital");
    capital.textContent = country.capital ? country.capital.join() : "N/A";
    return card;
}
