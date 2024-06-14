import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifySalesAgentPageRoutingModule } from './modify-sales-agent-routing.module';

import { ModifySalesAgentPage } from './modify-sales-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifySalesAgentPageRoutingModule
  ],
  declarations: [ModifySalesAgentPage]
})
export class ModifySalesAgentPageModule {}
