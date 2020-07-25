import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePageRoutingModule } from './explore-routing.module';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { ExplorePage } from './explore.page';
import { ContinentComponent }from "../../components/continent/continent.component"
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorePageRoutingModule
  ],
  declarations: [
    ExplorePage,
    ToolbarComponent,
    ContinentComponent
  ]
})
export class ExplorePageModule {}
