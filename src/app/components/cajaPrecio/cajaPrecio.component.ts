import { Component, OnChanges, Input} from '@angular/core';


@Component({
  selector: 'caja-precio',
  templateUrl: './cajaPrecio.component.html',
  styleUrls: ['./cajaPrecio.component.css']
})
export class CajaPrecio implements OnChanges {
  @Input() precio: string;
  precioPorPartes: any;

  ngOnChanges() {
    this.precioPorPartes = this.precio.toString().split('.');

   if(this.precioPorPartes[0].length >= 4) {
     this.precio = this.precioPorPartes[0][0]+ '.'+ this.precioPorPartes[0].substr(1,this.precioPorPartes[0].length);
   } else {
     this.precio = this.precioPorPartes[0];
   }
   if(this.precioPorPartes[1] !== undefined){
     this.precio += ',' + this.precioPorPartes[1];
   } else {
     this.precio += ',' + "00"
   }
 }
}
