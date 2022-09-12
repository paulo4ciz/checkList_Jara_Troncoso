import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoEscanearQrPageRoutingModule } from './alumno-escanear-qr-routing.module';

import { AlumnoEscanearQrPage } from './alumno-escanear-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoEscanearQrPageRoutingModule
  ],
  declarations: [AlumnoEscanearQrPage]
})
export class AlumnoEscanearQrPageModule {}
