import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSalesAgentPageRoutingModule } from './create-sales-agent-routing.module';

import { CreateSalesAgentPage } from './create-sales-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSalesAgentPageRoutingModule
  ],
  declarations: [CreateSalesAgentPage]
})
export class CreateSalesAgentPageModule {}
