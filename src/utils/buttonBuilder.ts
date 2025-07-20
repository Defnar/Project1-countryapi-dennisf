import { countryMap } from "../index.js";
import Country from "../model/Country.js";

export default function buttonBuilder(
  buttonDiv: HTMLDivElement,
  country: Country
): void {
  if (!country.borders || country.borders.length == 0)  {
    const noBorders = document.createElement("p") as HTMLParagraphElement;
    noBorders.textContent = "this country has no borders";
    return;
  }
  const fragment = document.createDocumentFragment();

  for (let border of country.borders) {
    const button = document.createElement("button") as HTMLButtonElement;
    button.value = border;
    button.textContent = countryMap.get(border)?.name.common || "";
    fragment.appendChild(button);
  }


}
