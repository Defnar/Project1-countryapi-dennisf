import { countryMap } from "../index.js";
const infoTemplate = document.getElementById("info-template");
function createInfoPage(cca3) {
    const country = countryMap.get(cca3);
    const fragment = document.createDocumentFragment();
    const info = infoTemplate.content.cloneNode(true);
    //country flag
    return fragment;
}
