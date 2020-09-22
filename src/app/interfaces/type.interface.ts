
export interface CURRENCIES {
    code: string,
    name: string,
    symbol: string
}
export interface LANGUAGES {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}
export interface TRANSLATIONS {
    de: string,
    es: string,
    fr: string,
    ja: string,
    it: string,
    br: string,
    pt: string
}
/*
export interface REGIONALBLOCKS {}
*/
export interface typeResponse {
     
        name: string,
        topLevelDomain: string[],
        alpha2Code: string,
        alpha3Code: string,
        callingCodes: string[],
        capital: string,
        altSpellings: string[],
        region: string,
        subregion: string,
        population: number,
        latlng: number[],
        demonym: string,
        area: number,
        gini: number,
        timezones: string[],
        borders: [],
        nativeName: string,
        numericCode: string,
        currencies: CURRENCIES[],
        languages: LANGUAGES[],
        translations: TRANSLATIONS,
        flag: string,
        regionalBlocs: [{
            acronym: string,
            name: string,
            otherAcronyms: [],
            otherNames: string[]
        }, {
            acronym: string,
            name: string,
            otherAcronyms: string[],
            otherNames: string[]
        }],
        cioc: string
     
}

export interface slide{
    title:string,
    img:string;
  }