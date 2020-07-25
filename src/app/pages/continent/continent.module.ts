import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinentPageRoutingModule } from './continent-routing.module';

import { ContinentPage } from './continent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinentPageRoutingModule
  ],
  declarations: [ContinentPage]
})
export class ContinentPageModule {}
