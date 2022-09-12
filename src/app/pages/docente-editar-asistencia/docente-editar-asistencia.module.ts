import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenteEditarAsistenciaPageRoutingModule } from './docente-editar-asistencia-routing.module';

import { DocenteEditarAsistenciaPage } from './docente-editar-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenteEditarAsistenciaPageRoutingModule
  ],
  declarations: [DocenteEditarAsistenciaPage]
})
export class DocenteEditarAsistenciaPageModule {}
