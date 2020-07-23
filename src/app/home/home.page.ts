import { Component } from '@angular/core';
import { LoadingController } from "@ionic/angular"
import { Router } from '@angular/router';
import { timer } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public activeSlide : boolean = false;
  public slidesPhoto : {title: string, img: string}[];

  constructor(public router:Router,public loading:LoadingController) {
    
    this.setCache();
    this.setPhoto();
     
  }
  public setCache(){
    
    if (localStorage.getItem("themes")) this.router.navigate(["main/all"]);
    else this.activeSlide=true;
    
  }

  public setPhoto(){
        
    this.slidesPhoto = [
      {title: "¡Encuentra cualquier pais!", img: '../assets/img-slides/searchs.png'},
      {title: "¡Comienza a explorar!", img: '../assets/img-slides/location.svg'}
    ]
   
  }

  public redirectToHome(){
    timer(1000).subscribe(()=>{
      history.replaceState(null, null, "main/all")
      this.router.navigate(["main/all"])
    });
    this.loadings()
  }

  public async loadings(){
    const load = await this.loading.create({
      
      duration: 2800,
      backdropDismiss:false,
      
    })

    await load.present()
  }

}
