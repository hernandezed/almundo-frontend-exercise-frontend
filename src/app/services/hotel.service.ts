import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs/Rx'
@Injectable()
export class HotelService {
  private baseUrl: string = "http://localhost:8080"
  constructor(private http : Http) {
  }

  getAll() {
    return this.http.get(this.baseUrl+ '/hoteles')
    .map(this.mapHotels.bind(this));
  }

  toHotel(r:any) {
    let hotel = {
      id: r.id,
      name: r.name,
      stars: r.stars,
      price: r.price,
      image: r.image,
      amenities: r.amenities
    };
    return hotel;
  }

  mapHotels(response:any){
     return response.json();
  }


}
