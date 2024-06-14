import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyProductsPageRoutingModule } from './modify-products-routing.module';

import { ModifyProductsPage } from './modify-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyProductsPageRoutingModule
  ],
  declarations: [ModifyProductsPage]
})
export class ModifyProductsPageModule {}
