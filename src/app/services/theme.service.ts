import {  Injectable } from "@angular/core"
import { interval } from 'rxjs';
 

@Injectable()

export class DarkService {
    public color = "tertiary";
    public colors = {
        dark: "dark",
        tertiary: "tertiary"
    }
   
   constructor(){ 
        
    this.getColorTheme()

   } 

   
  public getColorTheme(){
    
        if (localStorage.getItem("theme") == "dark"){
            return "dark"
        }
        else{
            return "tertiary"
        }

    
    }
   

}