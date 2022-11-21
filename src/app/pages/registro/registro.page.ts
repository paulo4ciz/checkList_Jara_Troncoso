import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/app/service/registroservice.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import {
        FormGroup,
        FormControl,
        Validators,
        FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};
  

  constructor(private alertController: AlertController,
              
              
              private toastController: ToastController,
              private registroService: RegistroserviceService,
              private fb: FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre' : new FormControl("", Validators.required),
                  'password' : new FormControl("", Validators.required),
                  'email' : new FormControl("", Validators.required),
                  'tipo' : new FormControl("", Validators.required),
                });

  }
  
  async CrearUsuario(){
    var form= this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'datos incompletos',
        message: 'completar campos',
        buttons: ['aceptar'],
      });

      await alert.present();
      return;
    }else{

    this.newUsuario.nomUsuario = form.nombre;
    this.newUsuario.passUsuario = form.password;
    this.newUsuario.emailUsuario = form.email;
    this.newUsuario.tipoUsuario = form.tipo;
    this.registroService.addUsuario(this.newUsuario).then(dato=>{
      this.newUsuario = <Usuario>{};
      this.showToast('datos agregados');
    });
    this.formularioRegistro.reset();
  }
  }

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
  //usuario = {
   // nombre: '',
   // password: '',
   // email: '',
   // fecha_nacimiento: ''
  //}

 // onSubmit() {
    //console.log('submit');
    //console.log(this.usuario);
 // }

  //METODOS DEL CRUD
  //metodo get
  // loadDatos(){
  //   this.storageService.getDatos().then(datos=>{
  //     this.datos=datos;
  //   });
  // }

  //metodo create
  // addDatos(){
  //   this.newDato.modified = Date.now();
  //   this.newDato.id = Date.now();
  //   this.storageService.addDatos(this.newDato).then(dato=>{
  //     this.newDato = <Datos>{};
  //     this.showToast('datos agregados');
  //     this.loadDatos();
  //   });
  // }

  //metodo update

  // updateDatos(dato: Datos){
  //   dato.nomUsuario = `UPDATE: ${dato.nomUsuario}`;
  //   dato.modified = Date.now();
  //   this.storageService.updateDatos(dato).then(item=>{
  //     this.showToast('elemento actualizado');
  //     this.myList.closeSlidingItems();
  //     this.loadDatos();
  //   });
  // }

  //metodo delete

  // deleteDatos(dato: Datos){
  //   this.storageService.deleteDatos(dato.id).then(item=>{
  //     this.showToast('Elemento eliminado');
  //     this.myList.closeSlidingItems();
  //     this.loadDatos();
  //   });
  // }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

} // main
