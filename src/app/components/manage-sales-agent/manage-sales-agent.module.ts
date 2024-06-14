import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageSalesAgentPageRoutingModule } from './manage-sales-agent-routing.module';

import { ManageSalesAgentPage } from './manage-sales-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageSalesAgentPageRoutingModule
  ],
  declarations: [ManageSalesAgentPage]
})
export class ManageSalesAgentPageModule {}
