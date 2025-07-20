import createInformationDisplay from "./countryInformationBuilder.js";
const cardTemplate = document.getElementById("country-card-template");
export default function createCard(country) {
    const card = cardTemplate.content.cloneNode(true);
    createInformationDisplay(country, card, false);
    return card;
}
