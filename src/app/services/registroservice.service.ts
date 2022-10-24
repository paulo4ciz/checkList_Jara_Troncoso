import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login.page';




export interface registro{
  email: any;
  password: any;
  id:number;
  Nombre:String;
  Password:String;
  Email:String;
  modified: number;
  }

const USERS_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  private _storage: Storage;
  newUsuario: registro= <registro>{};

  constructor( private storage: Storage) { 
    this.init();
  }

  
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  
  async addRegistro(dato: registro):Promise <any>{
    return this.storage.get(USERS_KEY).then((datos: registro[]) => {
      if(datos){
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
    })    
  }


  
  async getRegistro():Promise<registro[]>{
    return this.storage.get(USERS_KEY);
  }


  async updateRegistro(dato: registro): Promise<any>{
    return this.storage.get(USERS_KEY).then((datos : registro[])=>{
      if (!datos || datos.length == 0){
        return null;
      }
      let newDato: registro[] = [];
      for (let i of datos){
        if (i.id === dato.id){
          newDato.push(dato);
        }
        else{
          newDato.push(i);
        }
      }
      return this.storage.set(USERS_KEY, newDato);
    });
  

      }
  async deleteRegistro(id:number): Promise<registro>{
    return this.storage.get(USERS_KEY).then((datos :registro[])=>{
      if (!datos || datos.length === 0){
        return null;
      }
      let toKeep: registro[] = []; 
      for (let i of datos){
        if (i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(USERS_KEY, toKeep);
    });

  }



}
