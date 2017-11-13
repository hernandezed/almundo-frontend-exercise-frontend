import { Component, OnChanges, Input} from '@angular/core';


@Component({
  selector: 'star-meter',
  templateUrl: './starMeter.component.html',
  styleUrls: ['./starMeter.component.css']
})
export class StarMeter implements OnChanges {
  @Input() cantidadEstrellas: number;
  estrellas: Array<number> = [];

   ngOnChanges() {
    for(let i=0; i< this.cantidadEstrellas; i++) {
        this.estrellas.push(i);
    }
  }
}
