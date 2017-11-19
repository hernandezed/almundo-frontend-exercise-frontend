import { Component, OnChanges, Input} from '@angular/core';


@Component({
  selector: 'app-caja-amenities',
  templateUrl: './cajaAmenities.component.html',
  styleUrls: ['./cajaAmenities.component.css']
})
export class CajaAmenitiesComponent  implements OnChanges {
  @Input() amenitiesList: Array<string> = [];
  amenitiesIcons: Array<string> = [];
  ngOnChanges() {
    this.amenitiesList.forEach(amenitie => {
      this.amenitiesIcons.push(amenitie + '.svg');
    });
  }
}
