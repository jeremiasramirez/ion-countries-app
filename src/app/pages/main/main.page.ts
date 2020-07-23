import { Component, OnInit } from '@angular/core';
import  { FeatureService } from "../../services/feature.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  providers: [
    FeatureService
  ]
})
export class MainPage implements OnInit {
  

  constructor(public router:Router,public theme:FeatureService) { 
   
   
  }

  ngOnInit() {
  }

}
