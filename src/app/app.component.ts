import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


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
  constructor(private toastController: ToastController) {}

  async cerraresion(){
    const toast = await this.toastController.create({
      message: 'Has cerrado sesion, vuelve pronto!',
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });

    await toast.present();
  }

 
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
      redirecTo: '/docente-editar-asistencia'
    },
    {
      icon: 'log-out',
      name: 'cerrar sesion',
      redirecTo: '/inicio'
    },
  ];
}


