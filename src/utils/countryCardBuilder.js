const cardTemplate = document.getElementById("country-card-template");
export default function createCard(country) {
    const card = cardTemplate.content.cloneNode(true);
    //create the flag for the country
    const flag = card.querySelector(".country-flag");
    console.log(flag);
    console.log(`${country.name.common}: ${country.flags.svg}`);
    flag.src = country.flags.svg || country.flags.png;
    flag.alt = country.flags.alt
        ? country.flags.alt
        : `Country flag of ${country.name.common}`;
    //country name
    const h2 = card.querySelector(".country-name");
    h2.textContent = country.name.common;
    console.log("error test 1");
    console.log("error test 2");
    //population
    const population = card.querySelector(".population");
    population.textContent = country.population.toString();
    //region
    const region = card.querySelector(".region");
    region.textContent = country.region;
    //capital
    const capital = card.querySelector(".capital");
    console.log(country.capital);
    capital.textContent = country.capital ? country.capital.join() : "N/A";
    return card;
}
