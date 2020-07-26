import { Component } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import  { CountryService , typeResponse} from "../../services/country.service"
import  { FeatureService } from "../../services/feature.service"
import { timer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CountryComponent } from 'src/app/components/country/country.component';
 

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
  providers: [
    CountryService,
    FeatureService
  ]
})
export class AllPage   {

  public ALL_DATA : typeResponse[];
  public startData:number = 0;
  public endData: number = 10;
  public spinner = { on:true}
  
  public noConnected : boolean = false;
   

  constructor(public modals:ModalController,public toasts:ToastController, public darkService: FeatureService,public countryService: CountryService) {
    if(!localStorage.getItem("themes")) localStorage.setItem("themes", "tertiary")
     
      this.getAllData();

     
  }

  public async showCountry(data){
 
    const modal = await this.modals.create({
      component: CountryComponent,
      componentProps: {data:data}
    })
    await modal.present()
   
   
  }
 
  public refresh(){
     
    this.ALL_DATA.splice(0, 0, null)
    this.spinner.on=true; 
      this.getAllData() 

  } 

  public getAllData(){
    this.countryService.getall().pipe(delay(400)).subscribe((resp)=> {
      this.ALL_DATA =resp
      this.noConnected = false
    },
    ()=>{return},
    ()=>{
      this.spinner.on=false
      this.noConnected = true 
    })

    this.verifiedToast();

  }

  public  verifiedToast(){
    timer(7000).subscribe(()=>{
      
      if (this.noConnected == false){
        this.activeToast();
      }
   
    })
  }


  public async activeToast(){

    const toast = await this.toasts.create({
      duration: 10000,
      message: "No connection",
      buttons: [
        {icon: 'sync', handler: ()=>{this.getAllData()} },
        {icon: 'close', handler: ()=>{ return} }
      ]
    })

    await toast.present();
  }


  public changeMore(e:any){
    
    timer(1000).subscribe(()=>{
      this.endData += 10;
      e.target.complete()
    })
  }
 

  
}
