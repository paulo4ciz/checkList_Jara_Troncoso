import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-docente-ver-asistencia',
  templateUrl: './docente-ver-asistencia.page.html',
  styleUrls: ['./docente-ver-asistencia.page.scss'],
})
export class DocenteVerAsistenciaPage implements OnInit {

  constructor(private menuController: MenuController, private alertController: AlertController) { }

  async Saludo() {
    const alert = await this.alertController.create({
      header: 'Saludo',
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
  mostrarMenu(){
    this.menuController.open('first');
  }

}
