import { countryMap } from "../index.js";
export default function buttonBuilder(buttonDiv, country) {
    var _a;
    const fragment = document.createDocumentFragment();
    if (!country.borders || country.borders.length == 0) {
        const noBorders = document.createElement("p");
        noBorders.className = "info-no-border";
        noBorders.textContent = "this country has no border countries";
        fragment.appendChild(noBorders);
    }
    else {
        for (let border of country.borders) {
            const button = document.createElement("button");
            button.type = "button";
            button.value = border;
            button.className = "info-border-countries";
            const countryName = (_a = countryMap.get(border)) === null || _a === void 0 ? void 0 : _a.name.common;
            button.ariaLabel = `Border country: ${countryName}`;
            button.textContent = countryName || "";
            fragment.appendChild(button);
        }
    }
    buttonDiv.appendChild(fragment);
}
