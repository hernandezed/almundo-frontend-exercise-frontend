import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'lista-hoteles',
  templateUrl: './listaHoteles.component.html',
  styleUrls: ['./listaHoteles.component.css']
})
export class ListaHoteles implements OnInit{
  constructor(private hotelService: HotelService) {}
  hoteles: any;

  ngOnInit() {
      this.hotelService.getAll().subscribe(hoteles => this.hoteles=hoteles);
  }

}
