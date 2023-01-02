import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutregionPageRoutingModule } from './ajoutregion-routing.module';

import { AjoutregionPage } from './ajoutregion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutregionPageRoutingModule
  ],
  declarations: [AjoutregionPage]
})
export class AjoutregionPageModule {}
