import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { NuevoComponent } from './nuevo/nuevo.component';

import { DbzServices } from './services/dbz.sevice';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    NuevoComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    DbzServices
  ]
})
export class DbzModule { }
