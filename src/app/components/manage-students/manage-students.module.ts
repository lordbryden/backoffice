import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageStudentsPageRoutingModule } from './manage-students-routing.module';

import { ManageStudentsPage } from './manage-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageStudentsPageRoutingModule
  ],
  declarations: [ManageStudentsPage]
})
export class ManageStudentsPageModule {}
