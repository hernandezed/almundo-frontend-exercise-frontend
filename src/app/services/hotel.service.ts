import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class HotelService {
  private baseUrl = '';

  constructor(private http: Http) {
    this.baseUrl = environment.serverBaseUrl + environment.apiUri;
  }

  public obtenerTodos() {
    return this.http.get(this.baseUrl)
    .map(res => res.json());
  }

  public buscar(nombre: string, estrellas: Set<number>) {
    return this.http.get(this.baseUrl + '?' + this.armarFiltros(nombre, estrellas));
  }

  private armarFiltros(nombre: string, estrellas: Set<number>) {
    const filtroNombre = 'nombre=';
    const filtroEstrellas = 'estrellas=';
    let filtros = '';
    if (nombre !== '') {
      filtros = filtros.concat(filtroNombre).concat(nombre);
    }
    estrellas.forEach(estrella => {
      filtros = filtros.concat('&').concat(filtroEstrellas).concat(estrella.toString());
    });
    return filtros;
  }

}
