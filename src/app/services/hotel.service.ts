import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs/Observable';

@Injectable()
export class HotelService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: Http) {
  }

  public obtenerTodos() {
    return this.http.get(this.baseUrl + '/hoteles')
    .map(res => res.json());
  }

  public buscar(nombre: string, estrellas: Set<number>) {
    return this.http.get(this.baseUrl + '/hoteles?' + this.armarFiltros(nombre,estrellas));
  }

  private armarFiltros(nombre:string, estrellas: Set<number>) {
    let filtroNombre = 'nombre=';
    let filtroEstrellas = 'estrellas=';
    let filtros= '';
    if(nombre!='') {
      filtros = filtros.concat(filtroNombre).concat(nombre);
    }
    estrellas.forEach(estrella => {
      filtros = filtros.concat("&").concat(filtroEstrellas).concat(estrella);
    });
    return filtros;
  }

}
