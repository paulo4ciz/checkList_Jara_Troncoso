import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/app/service/registroservice.service';
import { FormGroup,
          FormControl,
          Validators,
          FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  formularioLogin : FormGroup;
  usuarios: Usuario [];
  datosCodificados: {};
  datosEscaneados: {};

  constructor(
              private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private fb: FormBuilder) {
                this.formularioLogin = this.fb.group({
                  'nombre': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required),
                }) // commit agregado
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
  //usuarioss = {
   // nombre:'',
   // password:''
  //}

 // onSubmit(){
    //console.log('submit');
   //console.log(this.usuarioss);
 // }

  // metodo ingresar

  async Ingresar (){
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios=datos;
      if(datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if(f.nombre == obj.nomUsuario && f.password == obj.passUsuario){
          a=1;
          console.log('ingresado')
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateRoot('alumno-home');
        }
      }
      console.log(a);
      if (a==0){
        this.alertMsg();
      }
    });
    this.formularioLogin.reset();
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'datos incorrectos',
      buttons: ['aceptar'],
    });
    await alert.present();
    return;
  }

 

  
}