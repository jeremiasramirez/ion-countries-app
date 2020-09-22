import { Component, Input } from '@angular/core';
import { CountryService, typeResponse } from '../../services/country.service';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [
    CountryService
  ]
})
export class CountryComponent   {
  @Input() data :typeResponse;
  private frontiers=[];
  private spinner2 ={ on:true };

  private showBorders:boolean=true;
  private slideOpts = {
    slidesPerPage:2.2,
    freeMode:true,
    spaceBetween: -7
  }
  constructor(
    private service:CountryService,
    private modal:ModalController) {

    this.timingSpinner()
    
  }
  ngOnInit(){
     
    this.getFrontier();
  
  }
  private getFrontier(){
    if(this.data.borders.length){
      let borders= this.data.borders;

      for(let i=0;i<borders.length; i++){
        let url = `https://restcountries.eu/rest/v2/alpha/${borders[i]}`;

          ajax.get(url).pipe( 
            delay(500),
            pluck('response')

          ).subscribe((frontiers_)=>{
            this.frontiers.push(frontiers_);
            console.log(this.frontiers)
          })

      }
  }
  }
  private timingSpinner(){
    timer(800).subscribe(()=>{ this.spinner2.on=false});
    timer(1000).subscribe(()=>this.showBorders=false)
  }
  private closeModal(){
    this.modal.dismiss()
  }
  
 

}
