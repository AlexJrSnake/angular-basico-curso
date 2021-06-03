import {Component} from "@angular/core"

@Component({
    selector:"app-contador",
    template:`
    
    
        <h3>La Base es: <strong>  {{base}} </strong> </h3>

        <button (click)="acumular(base)" >+{{base}}</button>

        <span> {{numero}} </span>

        <button (click)="acumular(-base)" >-{{base}}</button>
    
    `
})
export class contadorComponet {
    numero:number = 10;
    base:number = 5;
  
    acumular( valor:number ) {
      console.log(valor);
      return this.numero += valor
    }
}

