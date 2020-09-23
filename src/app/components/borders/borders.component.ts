import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { typeResponse } from 'src/app/services/country.service';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-borders',
  templateUrl: './borders.component.html',
  styleUrls: ['./borders.component.scss'],
})
export class BordersComponent implements OnInit {
  @Input() private showBorders:boolean;
  @Input() private frontiers=[];
  
  constructor(private modals:ModalController) { }

  ngOnInit() {}

  private async showCountry(data:typeResponse){
 
    const modal = await this.modals.create({
      component: CountryComponent,
      componentProps: {data:data}
    })
    await modal.present()
    
  }
}
