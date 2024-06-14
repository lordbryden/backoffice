import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateVideosPage } from './create-videos.page';

const routes: Routes = [
  {
    path: '',
    component: CreateVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateVideosPageRoutingModule {}
