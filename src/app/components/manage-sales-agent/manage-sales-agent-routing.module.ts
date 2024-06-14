import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSalesAgentPage } from './manage-sales-agent.page';

const routes: Routes = [
  {
    path: '',
    component: ManageSalesAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageSalesAgentPageRoutingModule {}
