import getCountryList from "./services/apiServices.js";
import "./themeHandler/themeHandler.js"
import countryDatatoMap from "./utils/countryMapCreator.js";
import createCard from "./utils/countryCardBuilder.js";

const mainError = document.getElementById("main-page-error")as HTMLSpanElement;
const countryContainer = document.getElementById("country-container") as HTMLDivElement;



//populate country list into a map
const url = "https://restcountries.com/v3.1/independent?status=true"
const url2 = "https://restcountries.com/v3.1/independent?status=false"


//saved into a map for use on border country buttons later
export let countryMap = new Map();


//build the Map, and displays it to screen
Promise.all([getCountryList(url), getCountryList(url2)])
.then(([data, data2]) =>{
    return countryDatatoMap(data.concat(data2));
})
.then(result => countryMap = result)
.then( () => {
    let fragment = document.createDocumentFragment();
    countryMap.forEach(country => {
        fragment.appendChild(createCard(country));
    })
    countryContainer.appendChild(fragment);
})
.catch(error => mainError.textContent = `${error.name}:  ${error.message}`
)
