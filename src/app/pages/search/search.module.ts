import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';
import  { PipeSearch } from "../../pipes/search.pipe"
import { SearchPage } from './search.page';
import {  EachItemComponent } from "../../components/each-item/each-item.component"
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [
    SearchPage,
    PipeSearch,
    EachItemComponent,
    ToolbarComponent]
})
export class SearchPageModule {}
