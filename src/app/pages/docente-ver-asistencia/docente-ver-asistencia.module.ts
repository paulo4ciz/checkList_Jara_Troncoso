import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenteVerAsistenciaPageRoutingModule } from './docente-ver-asistencia-routing.module';

import { DocenteVerAsistenciaPage } from './docente-ver-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenteVerAsistenciaPageRoutingModule
  ],
  declarations: [DocenteVerAsistenciaPage]
})
export class DocenteVerAsistenciaPageModule {}
