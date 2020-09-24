import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidancePage } from './guidance.page';

const routes: Routes = [
  {
    path: '',
    component: GuidancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidancePageRoutingModule {}
