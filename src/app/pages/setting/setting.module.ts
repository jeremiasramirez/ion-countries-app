import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { SettingPage } from './setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPageRoutingModule
  ],
  declarations: [SettingPage,ToolbarComponent]
})
export class SettingPageModule {}
