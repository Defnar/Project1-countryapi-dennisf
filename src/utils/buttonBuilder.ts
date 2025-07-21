import { countryMap } from "../index.js";
import Country from "../model/Country.js";

export default function buttonBuilder(
  buttonDiv: HTMLDivElement,
  country: Country
): void {
  const fragment = document.createDocumentFragment();

  if (!country.borders || country.borders.length == 0) {
    const noBorders = document.createElement("p") as HTMLParagraphElement;
    noBorders.className = "info-no-border";
    noBorders.textContent = "this country has no border countries";
    fragment.appendChild(noBorders);
  } else {
    for (let border of country.borders) {
      const button = document.createElement("button") as HTMLButtonElement;
      button.type = "button";
      button.value = border;
      button.className = "info-border-countries";
      const countryName = countryMap.get(border)?.name.common;
      button.ariaLabel = `Border country: ${countryName}`;
      button.textContent = countryName || "";
      fragment.appendChild(button);
    }
  }

  buttonDiv.appendChild(fragment);
}
