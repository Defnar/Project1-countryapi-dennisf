const filter = document.getElementById("filter");
const search = document.getElementById("search-bar");
const card = document.getElementsByClassName("country-card");
const noMatch = document.getElementById("no-search-match");
//compare each card to filter and search inputs, displays no matches found if no countries
export default function searchFilter() {
    let match = 0;
    for (const countryCard of card) {
        const searchValue = search.value.toLowerCase().trim();
        const filterValue = filter.value;
        //typescript yelling at me and does operations I don't want(adding question marks to elements I know will exist) if I combine all of this into fewer lines
        const nameH2 = countryCard.querySelector(".country-name");
        const regionSpan = countryCard.querySelector(".region");
        const name = nameH2.textContent;
        const region = regionSpan.textContent;
        const searchMatch = name.toLowerCase().trim().includes(searchValue);
        const filterMatch = filter.value == "All" || filter.value == region;
        if (searchMatch && filterMatch) {
            countryCard.style.display = "";
            match++;
        }
        else
            countryCard.style.display = "none";
    }
    if (match == 0) {
        noMatch.ariaHidden = "false";
        noMatch.style.display = "";
    }
    else {
        noMatch.ariaHidden = "true";
        noMatch.style.display = "none";
    }
}
