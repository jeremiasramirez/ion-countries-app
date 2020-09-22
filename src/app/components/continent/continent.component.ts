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
  private endData:number =10;
 
  private continents : typeResponse[];
  private spinner = {on:true}

  constructor(
    private modal2:ModalController,
    private modal:ModalController,
    private httpS:CountryService) { }

  ngOnInit() { 
    this.getContinent()
  }

  private getContinent(){
    
    this.httpS.getToContinent(this.data).subscribe(
      (resp)=>{this.continents = resp;},
      ()=>{return},
      ()=>{this.spinner.on=false})

  }

  async showCountry(item:typeResponse){
    const modalToCountry = await this.modal2.create({
      component: CountryComponent,
      componentProps: {data:item}
    })

    await modalToCountry.present()
  }

  async closeModal(){
    this.modal.dismiss()
  }

  private changeMore(e:any){
    
    timer(500).subscribe(()=>{    
        this.endData += 10;
        e.target.complete()
    })

  }
}
