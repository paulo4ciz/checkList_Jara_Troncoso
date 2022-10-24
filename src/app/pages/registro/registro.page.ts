import { Component, OnInit } from '@angular/core';
import { AlertController  } from '@ionic/angular';
import { RegistroserviceService, registro  } from 'src/app/services/registroservice.service';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InicioPage } from '../inicio/inicio.page';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  newRegistro: registro=<registro>{};

  constructor(private registroService: RegistroserviceService,
              private alertController: AlertController,
              private toastController: ToastController,
              private fb: FormBuilder){
                this.formularioRegistro=this.fb.group({
                  'Nombre': new FormControl("", Validators.required),
                  'email': new FormControl("", Validators.required),
                  'password':  new FormControl("", Validators.required),
                });
              }
 ngOnInit() {}
 
  async CrearUsuario(){
    var form=this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert= await this.alertController.create({
        header:'Datos Incompletos',
        message:'Debe ingresar todos los datos',
        buttons:['Aceptar'],
      });

      await alert.present();
      return;
    }
    this.newRegistro.Nombre=form.Nombre,
    this.newRegistro.Email=form.email,
    this.newRegistro.Password=form.password,
    this.registroService.addRegistro(this.newRegistro).then(dato=>{
       this.newRegistro=<registro>{};
       this.showToast('Datos agregados');
     })
   }
   async showToast(msg){
    const toast =await this.toastController.create({
      message: msg,
      duration: 2000
    })
    toast.present();
   }

   }









               
 

