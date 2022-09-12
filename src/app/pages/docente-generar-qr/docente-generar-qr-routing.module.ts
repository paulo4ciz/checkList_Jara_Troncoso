import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteGenerarQrPage } from './docente-generar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: DocenteGenerarQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteGenerarQrPageRoutingModule {}
