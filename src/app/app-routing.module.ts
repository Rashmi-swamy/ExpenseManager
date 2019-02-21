import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { WestPanelComponent } from './west-panel/west-panel.component';
import { EastPanelComponent } from './east-panel/east-panel.component';
import { GroupActivitesComponent } from './group-activites/group-activites.component';
const routes: Routes = [
  {path: 'groups', component: GroupsComponent},
  {path: 'groupActivity', component: EastPanelComponent},
  {
    path: 'groupActivity',
    children: [
      {
        path: '',component: EastPanelComponent
      },
      {
        path: ':id',
        component: EastPanelComponent
      }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
