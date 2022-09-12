import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import {  ToastController } from '@ionic/angular';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  constructor(private alertController: AlertController, 
              public menuCtrl: MenuController,
              private toastController: ToastController) {}

  async Saludo() {
    const alert = await this.alertController.create({
      header: '¿Quienes somos?',
      message: 'Somos un equipo de estudiantes de DuocUc, quienes desarrollamos esta App con la finalidad de mejorar la forma de registrar la asistencia entre alumnos y docentes. Permitiendo así, reducir la cantidad de errores y tiempo en que se pasa la lista. Nuestro objetivo es ayudar a mejorar con tecnología la forma en que se registra la asistencia y ahorrar tiempo a profesores y alumnos.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async Alumno(position: 'bottom'){
    const toast = await this.toastController.create({
      message: '¡Has ingresado a la seccion Alumno!',
      duration: 2000,
      position: 'top',
      color: "dark"
    });

    await toast.present();
  }

  async Docente(position: 'bottom'){
    const toast = await this.toastController.create({
      message: '¡Has ingresado a la seccion Docente!',
      duration: 2000,
      position: 'top',
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

  ionViewWillEnter() {

    this.menuCtrl.swipeGesture(false)
  }

  ionViewDidLeave() {

    this.menuCtrl.swipeGesture(true)
  }





}



