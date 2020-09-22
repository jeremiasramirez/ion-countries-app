import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
import  {slide} from  "../interfaces/type.interface";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 
  private slidesPhoto :slide[];
  private showSlide:boolean=true;
  
  constructor(
    private statusbar:StatusBar,
    private router:Router) {
    
    this.statusbar.backgroundColorByHexString("#444");


    this.slidesPhoto = this.setSlides();

  }
 
  private redirect():void{
    this.showSlide=false;
    timer(300).subscribe(()=>{
      this.router.navigate(["home/explore"]);
    });
   
  }

  private setCacheToSlides():void{

  }


  private setSlides():slide[] {
    return [
      { title:"Location", img: "../../assets/img-slides/location.svg" },
      { title:"Search",  img: "../../assets/img-slides/searchs.png" },
      { title:"", img: "../../assets/img-slides/worlds.svg"}
    ]
  }
  

   

}

