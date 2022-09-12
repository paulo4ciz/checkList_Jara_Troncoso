import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenteGenerarQrPageRoutingModule } from './docente-generar-qr-routing.module';

import { DocenteGenerarQrPage } from './docente-generar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenteGenerarQrPageRoutingModule
  ],
  declarations: [DocenteGenerarQrPage]
})
export class DocenteGenerarQrPageModule {}
