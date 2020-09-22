import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPageRoutingModule } from './all-routing.module';
import { SkeletonTemplateComponent} from '../../components/skeleton-template/skeleton-template.component'
import { AllPage } from './all.page'; 
import { ComponentModule } from 'src/app/components/component.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPageRoutingModule,
    ComponentModule
  ],
  declarations: [
    AllPage
     
  ]
})
export class AllPageModule {}
