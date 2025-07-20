import getCountryList from "./services/apiServices.js";
import "./themeHandler/themeHandler.js";
import countryDatatoMap from "./utils/countryMapCreator.js";
const mainError = document.getElementById("main-page-error");
//populate country list into a map
const url = "https://restcountries.com/v3.1/independent?status=true";
const url2 = "https://restcountries.com/v3.1/independent?status=false";
export let countryMap = new Map();
Promise.all([getCountryList(url), getCountryList(url2)])
    .then(([data, data2]) => {
    return countryDatatoMap(data.concat(data2));
})
    .then(result => countryMap = result)
    .then(() => console.log(countryMap))
    .catch(error => mainError.textContent = `${error.name}:  ${error.message}`);
