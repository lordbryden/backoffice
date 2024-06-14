import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVideosPageRoutingModule } from './create-videos-routing.module';

import { CreateVideosPage } from './create-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVideosPageRoutingModule
  ],
  declarations: [CreateVideosPage]
})
export class CreateVideosPageModule {}
