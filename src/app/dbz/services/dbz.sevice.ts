import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzServices {

    private _personajes:Personaje[] = [{
        nombre: "Goku",
        poder: 15000
      },
      {
        nombre: "Vegeta",
        poder: 12000
      }
    ]

    get servicesPersonajes():Personaje[]{
        return [...this._personajes]
    }


    constructor() {
        console.log("Inicio Servicio");
    }

    agregarNuevoPersonaje(env:Personaje):void{
        this._personajes.push(env)
    }
  
}