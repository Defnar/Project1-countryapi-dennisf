import { countryMap } from "../index.js";
export default function buttonBuilder(buttonDiv, country) {
    var _a;
    if (!country.borders || country.borders.length == 0) {
        return;
    }
    const fragment = document.createDocumentFragment();
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
    buttonDiv.appendChild(fragment);
}
