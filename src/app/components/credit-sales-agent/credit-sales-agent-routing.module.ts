import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditSalesAgentPage } from './credit-sales-agent.page';

const routes: Routes = [
  {
    path: '',
    component: CreditSalesAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditSalesAgentPageRoutingModule {}
