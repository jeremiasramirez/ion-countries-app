import {  Injectable } from "@angular/core"
import { ajax } from "rxjs/ajax";
import { delay, pluck  } from "rxjs/operators";


@Injectable()

export class CountryService {

    public ALL_URL : string;

    constructor(){

        this.ALL_URL = "https://restcountries.eu/rest/v2/all";
       
    }

    ngOnInit(){
        
    }

    public getall(){
        
        return ajax.get(this.ALL_URL).pipe(
            delay(350), 
            pluck('response')
        )

    }


}


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
        borders: string[],
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