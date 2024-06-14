import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifySalesAgentPage } from './modify-sales-agent.page';

const routes: Routes = [
  {
    path: '',
    component: ModifySalesAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifySalesAgentPageRoutingModule {}
