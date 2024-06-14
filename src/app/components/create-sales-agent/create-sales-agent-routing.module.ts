import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSalesAgentPage } from './create-sales-agent.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSalesAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSalesAgentPageRoutingModule {}
