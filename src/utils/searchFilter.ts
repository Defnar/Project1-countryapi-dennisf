import { countryMap } from "../index";

const filter = document.getElementById("filter") as HTMLInputElement;
const search = document.getElementById("search-bar") as HTMLInputElement;
const card = document.getElementsByClassName(
  "country-card"
) as HTMLCollectionOf<HTMLDivElement>;
const noMatch = document.getElementById(
  "no-search-match"
) as HTMLParagraphElement;

//compare each card to filter and search inputs, displays no matches found if no countries
export default function searchFilter(): void {
  let match = 0;
  for (const countryCard of card) {
    const searchValue = search.value.toLowerCase().trim();
    const filterValue = filter.value;

    //typescript yelling at me and does operations I don't want(adding question marks to elements I know will exist) if I combine all of this into fewer lines
    const nameH2 = countryCard.querySelector(
      ".country-name"
    ) as HTMLHeadingElement;
    const regionSpan = countryCard.querySelector(".region") as HTMLSpanElement;

    const name = nameH2.textContent as string;
    const region = regionSpan.textContent as string;

    const searchMatch = name.toLowerCase().trim().includes(searchValue);
    const filterMatch = filter.value == "All" || filter.value == region;

    if (searchMatch && filterMatch) {
      countryCard.style.display = "";
      match++;
    } else countryCard.style.display = "none";
  }

  if (match == 0) {
    noMatch.ariaHidden = "false";
    noMatch.style.display = "";
  } else {
    noMatch.ariaHidden = "true";
    noMatch.style.display = "none";
  }
}
