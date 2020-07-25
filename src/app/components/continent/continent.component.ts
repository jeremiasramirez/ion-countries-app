import { Component, OnInit, Input } from '@angular/core';
import { CountryService, typeResponse } from "../../services/country.service"
import { ModalController } from '@ionic/angular';
import { CountryComponent } from '../country/country.component';
import { timer } from 'rxjs';
 

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss'],
  providers: [
    CountryService
  ]
})
export class ContinentComponent implements OnInit {
  @Input() data;
  public endData:number =10;
  public startData:number=0;
  public continents : typeResponse[];
  public spinner = {on:true}



  constructor(public modal2:ModalController,public modal:ModalController,public httpS:CountryService) { }

  ngOnInit() { 
    this.getContinent()
  }

  public getContinent(){
    
    this.httpS.getToContinent(this.data).subscribe(
      (resp)=>{this.continents = resp;},
      ()=>{return},
      ()=>{this.spinner.on=false})

  }

  async showCountry(item){
    const modalToCountry = await this.modal2.create({
      component: CountryComponent,
      componentProps: {data:item}
    })

    await modalToCountry.present()
  }

  async closeModal(){
    this.modal.dismiss()
  }


  public changeMore(e:any){
    
    timer(500).subscribe(()=>{
        
        this.endData += 10;
     
    })
  }
}
