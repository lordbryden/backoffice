import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifySubjectsPageRoutingModule } from './modify-subjects-routing.module';

import { ModifySubjectsPage } from './modify-subjects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifySubjectsPageRoutingModule
  ],
  declarations: [ModifySubjectsPage]
})
export class ModifySubjectsPageModule {}
