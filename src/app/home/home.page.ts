import { Component } from '@angular/core';
import { LoadingController } from "@ionic/angular"
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public activeSlide : boolean = false;
  constructor(public router:Router,public loading:LoadingController) {
    
    if (localStorage.getItem("themes")) {
      this.router.navigate(["main/all"])
    }
    else{
      this.activeSlide=true
    }
    
   
    
     
  }

  async loadings(){
    const load = await this.loading.create({
      
      duration: 2500,
      backdropDismiss:false,
      message: 'Borrando Caché'
      
    })

    await load.present()
  }

}
