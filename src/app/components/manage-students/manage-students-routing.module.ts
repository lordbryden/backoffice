import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageStudentsPage } from './manage-students.page';

const routes: Routes = [
  {
    path: '',
    component: ManageStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageStudentsPageRoutingModule {}
