import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionPage } from './region.page';

const routes: Routes = [
  {
    path: '',
    component: RegionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionPageRoutingModule {}
