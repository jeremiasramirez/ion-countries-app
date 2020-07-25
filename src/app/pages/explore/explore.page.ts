import { Component } from '@angular/core';
import { FeatureService, continents, regions }from "../../services/feature.service"
import { from } from 'rxjs';
import { timer } from 'rxjs'
@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  providers: [
    FeatureService
  ]
})
export class ExplorePage   {
  public spinner ={on:true}
  public continent;
  public obsContinent$ = from(continents)
  
  constructor(public feature:FeatureService) { 
    
    timer(800).
      subscribe(
        ( ) =>{ this.continent = continents},
        ()=>{return},
        ()=>{this.spinner.on=false})
 
  }

   

}
