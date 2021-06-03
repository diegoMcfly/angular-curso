import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';



@NgModule({
  //Componentes
  declarations: [
    AppComponent
    
  ],//Modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
  ],//Servicios a un módulo
  providers: [],
  bootstrap: [AppComponent]//modulo principal
})
export class AppModule { }
