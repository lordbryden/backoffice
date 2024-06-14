import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifySubjectsPage } from './modify-subjects.page';

const routes: Routes = [
  {
    path: '',
    component: ModifySubjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifySubjectsPageRoutingModule {}
