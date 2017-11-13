import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'caja-filtros',
  templateUrl: './cajaFiltros.component.html',
  styleUrls: ['./cajaFiltros.component.css']
})
export class CajaFiltros{
  public abiertoFiltroNombre: boolean = true;
  public abiertoFiltroEstrella: boolean = true;

  toggleAbiertoFiltroNombre() {
    this.abiertoFiltroNombre = !this.abiertoFiltroNombre;
  }

  toggleAbiertoFiltroEstrella() {
    this.abiertoFiltroEstrella = !this.abiertoFiltroEstrella;
  }
}
