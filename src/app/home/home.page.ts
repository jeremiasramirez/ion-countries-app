import { Component } from '@angular/core';
import { LoadingController } from "@ionic/angular"
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 
  public slidesPhoto : {title: string, img: string}[];

  constructor(public router:Router,public loading:LoadingController) {
    
    this.setCache();
 
     
  }
  public setCache(){
    this.router.navigate(["home/explore"])
   
  }

  

   

}
