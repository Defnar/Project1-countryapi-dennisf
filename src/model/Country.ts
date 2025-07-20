interface Currencies {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}


export default class Country {
  name: string;
  nativeName: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  borders: string[];
  currencies: Currencies;
  language: Language;
  flag: string;
  alpha3Code: string;
  topLevelDomain: string[];

  constructor(
    name: string,
    nativeName: string,
    capital: string,
    region: string,
    subregion: string,
    population: number,
    borders: string[],
    currencies: Currencies,
    language: Language,
    flag: string,
    alpha3Code: string,
    topLevelDomain: string[]
  ) {
    this.name = name;
    this.nativeName = nativeName;
    this.capital = capital;
    this.region = region;
    this.subregion = subregion;
    this.population = population;
    this.borders = borders;
    this.currencies = currencies;
    this.language = language;
    this.flag = flag;
    this.alpha3Code = alpha3Code;
    this.topLevelDomain = topLevelDomain;
  }
}
