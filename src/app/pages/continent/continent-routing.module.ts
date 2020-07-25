import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinentPage } from './continent.page';

const routes: Routes = [
  {
    path: '',
    component: ContinentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinentPageRoutingModule {}
