import { Component, OnInit } from '@angular/core';
import  { MenuController } from '@ionic/angular';

@Component({
  selector: 'alumno-home',
  templateUrl: './alumno-home.page.html',
  styleUrls: ['./alumno-home.page.scss'],
})
export class AlumnoHomePage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}