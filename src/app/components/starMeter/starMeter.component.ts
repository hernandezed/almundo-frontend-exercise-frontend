import { Component, OnChanges, Input} from '@angular/core';


@Component({
  selector: 'app-star-meter',
  templateUrl: './starMeter.component.html',
  styleUrls: ['./starMeter.component.css']
})
export class StarMeterComponent implements OnChanges {
  @Input() cantidadEstrellas: number;
  estrellas: Array<number> = [];

   ngOnChanges() {
    for (let i = 0; i < this.cantidadEstrellas; i++) {
        this.estrellas.push(i);
    }
  }
}
