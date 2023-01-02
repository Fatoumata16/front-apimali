import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutregionPage } from './ajoutregion.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutregionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutregionPageRoutingModule {}
