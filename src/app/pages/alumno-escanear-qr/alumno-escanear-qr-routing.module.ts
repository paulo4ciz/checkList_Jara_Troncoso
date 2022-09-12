import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoEscanearQrPage } from './alumno-escanear-qr.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoEscanearQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoEscanearQrPageRoutingModule {}
