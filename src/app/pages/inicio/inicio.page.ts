import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'bug-outline',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'alarm-outline',
      name: 'Action-Sheet',
      redirecTo: '/action-sheet'
    },
  ];


  constructor(private alertController: AlertController) { }

  async Saludo() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      message: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

  

}



