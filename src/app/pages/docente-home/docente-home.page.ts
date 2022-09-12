import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-docente-home',
  templateUrl: './docente-home.page.html',
  styleUrls: ['./docente-home.page.scss'],
})
export class DocenteHomePage implements OnInit {

  constructor(private menuController: MenuController,
    private alertController: AlertController, private toastController: ToastController) { }


  async Saludo() {
    const alert = await this.alertController.create({
      header: '¿Quienes somos?',
      message: 'Somos un equipo de estudiantes de DuocUc, quienes desarrollamos esta App con la finalidad de mejorar la forma de registrar la asistencia entre alumnos y docentes. Permitiendo así, reducir la cantidad de errores y tiempo en que se pasa la lista. Nuestro objetivo es ayudar a mejorar con tecnología la forma en que se registra la asistencia y ahorrar tiempo a profesores y alumnos.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async proyect(){
    const toast = await this.toastController.create({
      message: '¡Te has conectado al proyector!',
      duration: 2000,
      position: 'top',
      color: "dark"
    });

    await toast.present();
  }

  async logout(){
    const toast = await this.toastController.create({
      message: '¡Cerraste sesion, vuelve pronto!',
      duration: 2000,
      position: 'middle',
      color: "dark"
    });

    await toast.present();
  }

  async Contacto() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['Enviar'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Nickname (max 8 cáracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'email',
          placeholder: 'nombre@duocuc.cl',
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Cuéntanos tus dudas',
        },
        
      ],
    });

    await alert.present();
  }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menuController.open('first');
  }


}


