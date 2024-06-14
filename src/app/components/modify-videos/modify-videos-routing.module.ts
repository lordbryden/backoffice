import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyVideosPage } from './modify-videos.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyVideosPageRoutingModule {}
