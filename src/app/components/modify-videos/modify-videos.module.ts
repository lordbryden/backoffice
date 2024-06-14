import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyVideosPageRoutingModule } from './modify-videos-routing.module';

import { ModifyVideosPage } from './modify-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyVideosPageRoutingModule
  ],
  declarations: [ModifyVideosPage]
})
export class ModifyVideosPageModule {}
