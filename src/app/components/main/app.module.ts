import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaHotelesComponent } from '../listaHoteles/listaHoteles.component';
import { StarMeterComponent } from '../starMeter/starMeter.component';
import { CajaAmenitiesComponent } from '../cajaAmenities/cajaAmenities.component';
import { CajaPrecioComponent } from '../cajaPrecio/cajaPrecio.component';
import { CajaFiltrosComponent } from '../cajaFiltros/cajaFiltros.component';
import { HotelService } from '../../services/hotel.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaHotelesComponent,
    StarMeterComponent,
    CajaAmenitiesComponent,
    CajaPrecioComponent,
    CajaFiltrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule,
    FormsModule
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
