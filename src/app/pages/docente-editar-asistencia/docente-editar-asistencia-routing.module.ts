import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteEditarAsistenciaPage } from './docente-editar-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: DocenteEditarAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteEditarAsistenciaPageRoutingModule {}
