import Country from "../model/Country.js";

const cardTemplate = document.getElementById(
  "country-card-template"
) as HTMLTemplateElement;

export default function createInformationDisplay(country: Country, card: HTMLElement | DocumentFragment, informationPage: boolean = false): void {
  try {
  //set dataset for each card to the cca3 for quick reference
  let cardDiv = card.querySelector(".country-card") as HTMLDivElement;
  if (cardDiv) cardDiv.dataset.cca3 = country.cca3;


  //country flag
  const flag = card.querySelector(".country-flag") as HTMLImageElement || card.querySelector(".info-country-flag") as HTMLImageElement;
  flag.src = country.flags.svg || country.flags.png;
  flag.alt = country.flags.alt
    ? country.flags.alt
    : `Country flag of ${country.name.common}`;

  //country name
  const h2 = card.querySelector(".country-name") as HTMLHeadingElement;
  h2.textContent = country.name.common;

  //population
  const population = card.querySelector(".population") as HTMLSpanElement;
  population.innerText = country.population.toLocaleString()


  //region
  const region = card.querySelector(".region") as HTMLSpanElement;
  region.textContent = country.region;

  //capital
  const capital = card.querySelector(".capital") as HTMLSpanElement;
  capital.textContent = country.capital ? country.capital.join() : "N/A";

if(!informationPage) return;

  }
  catch (error){
    console.error(error);
  }

  
}
