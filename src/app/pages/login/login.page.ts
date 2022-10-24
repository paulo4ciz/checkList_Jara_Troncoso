import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, registro } from '../service/registroservice.service';
import {
   FormGroup,
   FormControl,
   Validators,
   FormBuilder


} from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formularioLogin:FormGroup;
  registro: registro[];

  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private fb: FormBuilder) {
                this.formularioLogin=this.fb.group({
                  'email': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required),
                })
               }

  ngOnInit() {


  }

  async Ingresar(){
    var f= this.formularioLogin.value;
    var a= 0;
    this.registroService.getRegistro().then(datos=>{
      this.registro=datos;
      if(datos.length==0){
        return null;
      }
      for(let obj of this.registro){
        if(obj.email==f.email && obj.password==f.password){
          a=1;
          console.log('Ingresado');
          localStorage.setItem('Ingresado', 'true');
          this.navController.navigateRoot('Inicio');
        }
      }
      console.log(a);
      if(a==0){
        this.alertMsg();
      }
    });
  }

  async alertMsg(){
    const alert= await this.alertController.create({
      header: 'Error',
      message:'Los datos ingresados son incorrectos',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }

}
