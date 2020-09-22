import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePageRoutingModule } from './explore-routing.module'; 
import { ExplorePage } from './explore.page'; 
import { ComponentModule } from 'src/app/components/component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorePageRoutingModule,
    ComponentModule
  ],
  declarations: [
    ExplorePage
  ]
})
export class ExplorePageModule {}
