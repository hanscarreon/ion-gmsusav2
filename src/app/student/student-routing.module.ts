import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPage } from './student.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSentimentComponent } from './add-sentiment/add-sentiment.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: StudentPage,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'sentiment/add',
        component:AddSentimentComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {}
