import Country from "../model/Country.js";
import createInformationDisplay from "./countryInformation.js";

const cardTemplate = document.getElementById("country-card-template") as HTMLTemplateElement;

export default function createCard(country: Country): DocumentFragment {
    const card = cardTemplate.content.cloneNode(true) as DocumentFragment;
    
    createInformationDisplay(country, card, false);

    return card;


}