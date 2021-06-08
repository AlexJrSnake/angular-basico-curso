import { Component, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { EventEmitter } from '@angular/core';
import { DbzServices } from '../services/dbz.sevice';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {
  @Input() personajes:any[] = [] ;
  
  @Input() nuevo:Personaje = {
    nombre:"",
    poder:0
  }
  
  // @Output() onNewPerj:EventEmitter<Personaje> = new EventEmitter();

  agregar():void{
    if (this.nuevo.nombre.trim().length ===0 ) {return;}
    // this.onNewPerj.emit(this.nuevo)
    this.DbzServices.agregarNuevoPersonaje(this.nuevo)
    
    this.nuevo  = {
      nombre:"",
      poder:0
    }  

  }

  constructor(private DbzServices:DbzServices ) {}

}
