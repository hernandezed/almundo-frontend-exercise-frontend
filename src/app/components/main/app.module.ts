import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaHoteles } from '../listaHoteles/listaHoteles.component';
import { StarMeter } from '../starMeter/starMeter.component';
import { CajaAmenities } from '../cajaAmenities/cajaAmenities.component';
import { CajaPrecio } from '../cajaPrecio/cajaPrecio.component';
import { CajaFiltros } from '../cajaFiltros/cajaFiltros.component';
import { HotelService } from '../../services/hotel.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsibleModule } from 'angular2-collapsible';

@NgModule({
  declarations: [
    AppComponent,
    ListaHoteles,
    StarMeter,
    CajaAmenities,
    CajaPrecio,
    CajaFiltros
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule,
    BrowserAnimationsModule, 
    CollapsibleModule
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
