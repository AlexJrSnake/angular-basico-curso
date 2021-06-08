import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.sevice';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  // @Input() personajes:any[] = [] ;

  
  get personajes() : Personaje[] {
    return this.DbzServices.servicesPersonajes
  }

  constructor(private DbzServices:DbzServices ) {}

}
