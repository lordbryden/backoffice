import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyProductsPage } from './modify-products.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyProductsPageRoutingModule {}
