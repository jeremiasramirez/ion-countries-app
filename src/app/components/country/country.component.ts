import { Component, Input } from '@angular/core';
import { typeResponse } from '../../services/country.service';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent   {
  @Input() data :typeResponse[];

  public spinner2 ={
    on:true
  }
  constructor(public modal:ModalController) {
    this.timingSpinner()
  }

  public timingSpinner(){
    timer(800).subscribe(()=>{ this.spinner2.on=false});
  }
  public closeModal(){
    this.modal.dismiss()
  }
  
 

}
