interface Currencies {
  [code: string]: {
    name: string;
    symbol: string;
  };
}

interface NativeName {
    official: string;
    common: string;
}

interface Name {
  common: string;
  nativeName: {[code: string]: NativeName}
}

interface Flag {
  png: string;
  svg: string;
  alt: string;
}

interface Languages {
  [code: string]: string;
}
export default class Country {
  name: Name;
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  borders: string[];
  currencies: Currencies;
  languages: Languages;
  flags: Flag;
  cca3: string;
  tld: string[];

  constructor(
    name: Name,
    capital: string[],
    region: string,
    subregion: string,
    population: number,
    borders: string[],
    currencies: Currencies,
    languages: Languages,
    flags: Flag,
    cca3: string,
    tld: string[]
  ) {
    this.name = name;
    this.capital = capital;
    this.region = region;
    this.subregion = subregion;
    this.population = population;
    this.borders = borders;
    this.currencies = currencies;
    this.languages = languages;
    this.flags = flags;
    this.cca3 = cca3;
    this.tld = tld;
  }
}
