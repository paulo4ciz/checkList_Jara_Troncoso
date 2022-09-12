import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoHomePageRoutingModule } from './alumno-home-routing.module';

import { AlumnoHomePage } from './alumno-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoHomePageRoutingModule
  ],
  declarations: [AlumnoHomePage]
})
export class AlumnoHomePageModule {}
