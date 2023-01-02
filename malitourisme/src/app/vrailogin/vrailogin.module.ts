//import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { VrailoginPageRoutingModule } from './vrailogin-routing.module';

import { VrailoginPage } from './vrailogin.page';
//import { RegionPageModule } from "../region/region.module";
import { RegionPageModule as RegionPageModule } from "../region/region.module";
import { from } from 'rxjs';

@NgModule({
    declarations: [VrailoginPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VrailoginPageRoutingModule,
        RegionPageModule,
        RegionPageModule,
        // schemas: [CUSTOM_ELEMENTS_SCHEMA],
        
    ]
})
export class VrailoginPageModule {}
