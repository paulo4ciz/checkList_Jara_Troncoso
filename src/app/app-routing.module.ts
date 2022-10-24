import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./pages/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'docente-home',
    loadChildren: () => import('./pages/docente-home/docente-home.module').then( m => m.DocenteHomePageModule)
  },
  {
    path: 'docente-asignaturas',
    loadChildren: () => import('./pages/docente-asignaturas/docente-asignaturas.module').then( m => m.DocenteAsignaturasPageModule)
  },
  {
    path: 'docente-ver-asistencia',
    loadChildren: () => import('./pages/docente-ver-asistencia/docente-ver-asistencia.module').then( m => m.DocenteVerAsistenciaPageModule)
  },
  {
    path: 'docente-generar-qr',
    loadChildren: () => import('./pages/docente-generar-qr/docente-generar-qr.module').then( m => m.DocenteGenerarQrPageModule)
  },
  {
    path: 'alumno-home',
    loadChildren: () => import('./pages/alumno-home/alumno-home.module').then( m => m.AlumnoHomePageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'alumno-escanear-qr',
    loadChildren: () => import('./pages/alumno-escanear-qr/alumno-escanear-qr.module').then( m => m.AlumnoEscanearQrPageModule)
  },
  {
    path: 'alumno-asignaturas',
    loadChildren: () => import('./pages/alumno-asignaturas/alumno-asignaturas.module').then( m => m.AlumnoAsignaturasPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
 
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
