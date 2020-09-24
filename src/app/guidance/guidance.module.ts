import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidancePageRoutingModule } from './guidance-routing.module';

import { GuidancePage } from './guidance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidancePageRoutingModule
  ],
  declarations: [GuidancePage]
})
export class GuidancePageModule {}
