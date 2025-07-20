import { countryMap } from "../index.js";
export default function buttonBuilder(buttonDiv, country) {
    var _a;
    if (!country.borders || country.borders.length == 0) {
        const noBorders = document.createElement("p");
        noBorders.textContent = "this country has no borders";
        return;
    }
    const fragment = document.createDocumentFragment();
    for (let border of country.borders) {
        const button = document.createElement("button");
        button.value = border;
        button.textContent = ((_a = countryMap.get(border)) === null || _a === void 0 ? void 0 : _a.name.common) || "";
        fragment.appendChild(button);
    }
}
