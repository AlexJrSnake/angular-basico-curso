import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { contadorModules } from './contador/contador.module';
import { heroesModules } from './heroes/heroes.module';

import {DbzModule} from './dbz/dbz.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    heroesModules,
    contadorModules,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
