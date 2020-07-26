import {  Injectable } from "@angular/core"
import { ajax } from "rxjs/ajax";
import { delay, pluck  } from "rxjs/operators";
export { typeResponse } from "../interfaces/type.interface"

@Injectable()

export class CountryService {

    public ALL_URL : string;
    public CONTINENT: string;

    constructor(){

        this.ALL_URL = "https://restcountries.eu/rest/v2/all";
        this.CONTINENT = "https://restcountries.eu/rest/v2/region/"
       

       
    }

  

    public getall(){
        
        return ajax.get(this.ALL_URL).pipe(
            delay(500), 
            pluck('response')
        )

    }

    getToContinent(param:string){
        let urls = this.CONTINENT+param;
        return ajax.get(urls).pipe(
            delay(100),
            pluck('response')
        )
    }


}

