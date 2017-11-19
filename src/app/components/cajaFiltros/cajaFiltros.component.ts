import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
@Component({
  selector: 'app-caja-filtros',
  templateUrl: './cajaFiltros.component.html',
  styleUrls: ['./cajaFiltros.component.css']
})
export class CajaFiltrosComponent {
  public abiertoFiltroNombre: boolean;
  public abiertoFiltroEstrella: boolean;
  private hotelService: HotelService;
  @Input() nombreBuscado: string;

  @Input() todasLasEstrellas: boolean;
  @Input() cincoEstrellas: boolean;
  @Input() cuatroEstrellas: boolean;
  @Input() tresEstrellas: boolean;
  @Input() dosEstrellas: boolean;
  @Input() unaEstrella: boolean;


  @Output()
  hotelesFiltrados = new EventEmitter();

  constructor(hotelService: HotelService) {
    this.abiertoFiltroNombre = true;
    this.abiertoFiltroEstrella = true;
    this.hotelService = hotelService;
    this.nombreBuscado = '';

    this.todasLasEstrellas = false;
    this.cincoEstrellas = false;
    this.cuatroEstrellas = false;
    this.tresEstrellas = false;
    this.dosEstrellas = false;
    this.unaEstrella = false;
  }

  public toggleAbiertoFiltroNombre() {
    this.abiertoFiltroNombre = !this.abiertoFiltroNombre;
  }

  public toggleAbiertoFiltroEstrella() {
    this.abiertoFiltroEstrella = !this.abiertoFiltroEstrella;
  }

  private armarFiltrosDeEstrellas(): Set<number> {
    let estrellas = new Set();
    if(this.cincoEstrellas) {
      estrellas.add(5);
    }
    if(this.cuatroEstrellas) {
      estrellas.add(4);
    }
    if(this.tresEstrellas) {
      estrellas.add(3);
    }
    if(this.dosEstrellas) {
      estrellas.add(2);
    }
    if(this.unaEstrella) {
      estrellas.add(1);
    }
    return estrellas;
  }

  private marcarTodos() {
    this.todasLasEstrellas = !this.todasLasEstrellas;
    this.cincoEstrellas = this.todasLasEstrellas;
    this.cuatroEstrellas = this.todasLasEstrellas;
    this.tresEstrellas = this.todasLasEstrellas;
    this.dosEstrellas = this.todasLasEstrellas;
    this.unaEstrella = this.todasLasEstrellas;
  }

  public buscar() {
    this.hotelService.buscar(this.nombreBuscado, this.armarFiltrosDeEstrellas()).subscribe(hoteles => this.hotelesFiltrados.emit(hoteles.json()));
  }

}
