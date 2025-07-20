import { countryMap } from "../index.js";
import Country from "../model/Country.js";
import createInformationDisplay from "./countryInformation.js";

const infoTemplate = document.getElementById(
  "info-template"
) as HTMLTemplateElement;

export default function createInfoPage(cca3: string): DocumentFragment {
  const country = countryMap.get(cca3) as Country;
  const info = infoTemplate.content.cloneNode(true) as DocumentFragment;

  createInformationDisplay(country, info, true);

  return info;

}
