import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoHomePage } from './alumno-home.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoHomePageRoutingModule {}
