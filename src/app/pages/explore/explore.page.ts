import { Component, OnInit } from '@angular/core';
import { DarkService }from "../../services/theme.service"
@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  providers: [
    DarkService
  ]
})
export class ExplorePage   {

  public color:any;
  constructor(public theme:DarkService) { 
    this.color = this.theme.getColorTheme()
  }

   

}
