import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-alumno-escanear-qr',
  templateUrl: './alumno-escanear-qr.page.html',
  styleUrls: ['./alumno-escanear-qr.page.scss'],
})
export class AlumnoEscanearQrPage implements OnInit {


  encondedData: any;
  scannedData: {};
  barcodeScannerOptioons: BarcodeScannerOptions;

  constructor(private alertController: AlertController,
              private barcodeScanner: BarcodeScanner) { 
                this.encondedData = "https://www.duoc.cl";
                //opciones
                this.barcodeScannerOptioons = {
                  showTorchButton: true,
                  showFlipCameraButton: true
                };
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

  scanCode(){
    this.barcodeScanner
      .scan()
      .then(barcodeData =>{
        alert("Barcode data" + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  encodeText(){
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encondedData)
      .then(
        encondedData => {
          console.log(encondedData);
          this.encondedData = encondedData;
        },
        err =>{
          console.log("error occured : "+err);
        }
      );
  }
}
