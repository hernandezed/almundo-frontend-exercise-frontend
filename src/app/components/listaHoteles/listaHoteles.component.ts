import { Component, OnInit, Input } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-lista-hoteles',
  templateUrl: './listaHoteles.component.html',
  styleUrls: ['./listaHoteles.component.css']
})
export class ListaHotelesComponent implements OnInit {
  constructor(private hotelService: HotelService) {}
  @Input() hoteles: any;

  ngOnInit() {
      this.hotelService.obtenerTodos().subscribe(hoteles => this.hoteles = hoteles);
  }

}
