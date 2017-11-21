import { Component, OnInit, Input } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-lista-hoteles',
  templateUrl: './listaHoteles.component.html',
  styleUrls: ['./listaHoteles.component.css']
})
export class ListaHotelesComponent implements OnInit {
  constructor(private hotelService: HotelService) {}
  @Input() hoteles: any;
  public baseUrlImagen: string;

  ngOnInit() {
      this.hotelService.obtenerTodos().subscribe(hoteles => this.hoteles = hoteles);
      this.baseUrlImagen = environment.serverBaseUrl + environment.imagenesUri + '/';
  }

}
