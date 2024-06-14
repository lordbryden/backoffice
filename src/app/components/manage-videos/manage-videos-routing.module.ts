import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageVideosPage } from './manage-videos.page';

const routes: Routes = [
  {
    path: '',
    component: ManageVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageVideosPageRoutingModule {}
