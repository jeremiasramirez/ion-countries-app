import { Component, OnInit } from '@angular/core';
import  { DarkService } from "../../services/theme.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  providers: [
    DarkService
  ]
})
export class MainPage implements OnInit {
  public color:any;

  constructor(public router:Router,public theme:DarkService) { 
    this.color=this.theme.getColorTheme()
   
  }

  ngOnInit() {
  }

}
