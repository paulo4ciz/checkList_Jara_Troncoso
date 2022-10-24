import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesdatosService, Datos } from '../../services/servicesdatos.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  datos: Datos[]=[];
  newDato: Datos =<Datos>{};
  @ViewChild('myList')myList: IonList;

  constructor(private storageServices: ServicesdatosService,
    private plt: Platform, private toastController: ToastController) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }
  loadDatos(){
    this.storageServices.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

   
   addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageServices.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  
  updateDatos(dato: Datos ){
    dato.Nombre = `UPDATED: ${dato.Nombre}`;
    dato.modified = Date.now();
    this.storageServices.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  } 

  
  deleteDatos(dato: Datos){
    this.storageServices.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }










}
