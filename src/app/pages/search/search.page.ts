import { Component, OnInit } from '@angular/core';
import  { DarkService } from "../../services/theme.service"
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  providers:[ 
    DarkService
  ]
})
export class SearchPage implements OnInit {
  public color : any;
  constructor(public theme:DarkService) {
    this.color= this.theme.getColorTheme()
   
  }

  ngOnInit() {
  }
 


}
