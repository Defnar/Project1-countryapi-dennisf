import Country from "../model/Country.js"

export default function countryDatatoMap(data: Country[]): Map<string, Country> {
    let countryMap = new Map();
    for ( let item of data) {
        const country = new Country(item.name, item.capital, item.region, item.subregion, item.population, item.borders, item.currencies, item.languages, item.flags, item.cca3, item.tld);
            countryMap.set(country.cca3, country);
    }
    return countryMap;
}