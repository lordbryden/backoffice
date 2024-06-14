import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditSalesAgentPageRoutingModule } from './credit-sales-agent-routing.module';

import { CreditSalesAgentPage } from './credit-sales-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditSalesAgentPageRoutingModule
  ],
  declarations: [CreditSalesAgentPage]
})
export class CreditSalesAgentPageModule {}
