import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private alertController: AlertController,
              public menuCtrl: MenuController) { }

  async Saludo() {
    const alert = await this.alertController.create({
      header: '¿Quienes somos?',
      message: 'Somos un equipo de estudiantes de DuocUc, quienes desarrollamos esta App con la finalidad de mejorar la forma de registrar la asistencia entre alumnos y docentes. Permitiendo así, reducir la cantidad de errores y tiempo en que se pasa la lista. Nuestro objetivo es ayudar a mejorar con tecnología la forma en que se registra la asistencia y ahorrar tiempo a profesores y alumnos.',
      buttons: ['OK'],
    });

    await alert.present();
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
    usuario = {
    nombre: '',
    password: '',
    email: '',
    fecha_nacimiento: ''
  }

  onSubmit() {
    console.log('submit');
    console.log(this.usuario);
  }

  ionViewWillEnter() {

    this.menuCtrl.swipeGesture(false)
  }

  ionViewDidLeave() {

    this.menuCtrl.swipeGesture(true)
  }
}
