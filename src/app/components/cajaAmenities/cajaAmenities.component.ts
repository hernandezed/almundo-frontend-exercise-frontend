import { Component, OnChanges, Input} from '@angular/core';


@Component({
  selector: 'caja-amenities',
  templateUrl: './cajaAmenities.component.html',
  styleUrls: ['./cajaAmenities.component.css']
})
export class CajaAmenities  implements OnChanges {
  @Input() amenitiesList: Array<string> = [];
  amenitiesIcons: Array<string> = [];
  ngOnChanges() {
    this.amenitiesList.forEach(amenitie => {
      this.amenitiesIcons.push(amenitie+".svg");
    });
  }
}
