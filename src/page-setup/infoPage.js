import { countryMap } from "../index.js";
import createInformationDisplay from "./countryInformation.js";
const infoTemplate = document.getElementById("info-template");
export default function createInfoPage(cca3) {
    const country = countryMap.get(cca3);
    const info = infoTemplate.content.cloneNode(true);
    createInformationDisplay(country, info, true);
    return info;
}
