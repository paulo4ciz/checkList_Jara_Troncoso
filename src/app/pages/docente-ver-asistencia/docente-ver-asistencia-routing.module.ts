import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteVerAsistenciaPage } from './docente-ver-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: DocenteVerAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteVerAsistenciaPageRoutingModule {}
