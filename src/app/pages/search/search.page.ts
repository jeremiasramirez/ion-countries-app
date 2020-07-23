import { Component, OnInit } from '@angular/core';
import  { FeatureService } from "../../services/feature.service"
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  providers:[ 
    FeatureService
  ]
})
export class SearchPage implements OnInit {
  public color : any;
  constructor(public theme:FeatureService) {
     
   
  }

  ngOnInit() {
  }
 


}
