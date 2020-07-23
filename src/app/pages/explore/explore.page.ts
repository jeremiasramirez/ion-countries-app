import { Component, OnInit } from '@angular/core';
import { FeatureService }from "../../services/feature.service"
@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  providers: [
    FeatureService
  ]
})
export class ExplorePage   {

  
  constructor(public theme:FeatureService) { 
    
  }

   

}
