import {  Injectable } from "@angular/core"
 
 

@Injectable()

export class FeatureService {
  
   
   constructor(){ 
        
    

   } 

    
}
export const regions:{name:string,subname:string}[] = [
   {name: "EU", subname: "(European Union)"},
   {name: "EFTA", subname: "(European Free Trade Association)"},
   {name: "CARICOM", subname: "(Caribbean Community)"},
   {name: "PA", subname: "(Pacific Alliance)"},
   {name: "AU", subname: "(African Union)"},
   {name: "USAN", subname: "(Union of South American Nations)"},
   {name: "EEU", subname: "(Eurasian Economic Union)"},
   {name: "AL", subname: "(Arab League)"},
   {name: "ASEAN", subname: "(Association of Southeast Asian Nations)"},
   {name: "CAIS", subname: "(Central American Integration System)"},
   {name: "CEFTA", subname: "(Central European Free Trade Agreement)"},
   {name: "NAFTA", subname: "(North American Free Trade Agreement)"},
   {name: "SAARC", subname: "(South Asian Association for Regional Cooperation)"},
    
]
export const continents: {name:string}[] = [
   {name: "Americas"},
   {name: "Africa" },
   {name: "Americas"},
   {name: "Asia"},
   {name: "Europe"},
   {name: "Oceania"}
 
]