import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoAsignaturasPageRoutingModule } from './alumno-asignaturas-routing.module';

import { AlumnoAsignaturasPage } from './alumno-asignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoAsignaturasPageRoutingModule
  ],
  declarations: [AlumnoAsignaturasPage]
})
export class AlumnoAsignaturasPageModule {}
