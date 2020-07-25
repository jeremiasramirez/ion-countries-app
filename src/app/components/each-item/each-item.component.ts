import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-each-item',
  templateUrl: './each-item.component.html',
  styleUrls: ['./each-item.component.scss'],
})
export class EachItemComponent implements OnInit {
  @Input() data;
  @Input() key; 
  constructor(public modal:ModalController) { }

  ngOnInit() {}
  public async showCountry(data){
    const show = await this.modal.create({
      component: CountryComponent,
      componentProps: {data:data}
    })
    show.present()
  }

}
