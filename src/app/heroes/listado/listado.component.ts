import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[] = ["Batman", "SuperMan","Reedhood"];
  heroeQueSale:string = "Ninguno";

  BorrarHeroe():void{
    this.heroeQueSale = this.heroes.shift() || "";
  }
}
