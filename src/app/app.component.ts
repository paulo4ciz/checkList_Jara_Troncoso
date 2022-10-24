import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente [] = [
    {
      icon: 'book',
      name: 'Asignaturas',
      redirecTo: '/docente-asignaturas'
    },
    {
      icon: 'list',
      name: 'Ver Asistencia',
      redirecTo: '/docente-ver-asistencia'
    },
    {
      icon: 'pencil',
      name: 'Editar Asistencia',
      redirecTo: '/docente-editar'
    },
    {
      icon: 'log-out',
      name: 'cerrar sesion',
      redirecTo: '/inicio'
    },
  ];

}


