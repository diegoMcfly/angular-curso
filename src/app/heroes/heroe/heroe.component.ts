import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre:string ='Iroman';
    edad  :number= 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre}- ${this.edad}`;
    }

    cambiarNombre():void{
        console.log("hey");
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        console.log("hey");
        this.edad = 30;
    }

}

