import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.sevice';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  
  nuevo:Personaje  = {
    nombre:"",
    poder:0
  }

  constructor(private DbzServices:DbzServices ) {}
}
