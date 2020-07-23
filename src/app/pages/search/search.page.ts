import { Component } from '@angular/core';
import  { FeatureService } from "../../services/feature.service"
import {CountryService, typeResponse } from '../../services/country.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  providers:[ 
    FeatureService ,CountryService
  ]
})
export class SearchPage  {
  public keys : string  = "";
  public spinner : {on:boolean;} = {
    on:true
  }

  public searched :typeResponse[] = []; 

  constructor( public searchCountry:CountryService, public feature:FeatureService) {

    this.setCountries()
   
  }

  public searchBar(data:string){
    this.spinner.on=true
    timer(1000).subscribe(()=>this.spinner.on=false)
  }

  public setCountries(){
    
    this.searchCountry.getall().subscribe((data)=>{
      this.searched = data;
    }, ()=>{return}, ()=>{ this.spinner.on=false })

  }

 
 


}
