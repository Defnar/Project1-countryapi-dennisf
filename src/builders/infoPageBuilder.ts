import { countryMap } from "../index.js";

const infoTemplate = document.getElementById("info-template") as HTMLTemplateElement;

function createInfoPage(cca3: string): DocumentFragment {
    const country = countryMap.get(cca3)
    const fragment = document.createDocumentFragment();
    const info = infoTemplate.content.cloneNode(true);


    //country flag


    
    return fragment;

}
   