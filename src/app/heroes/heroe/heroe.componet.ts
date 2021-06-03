import {Component} from "@angular/core"

@Component({
    selector:"app-heroe",
    templateUrl:"heroe.componet.html"
})
export class heroeComponet {
    nombre:string = "IronMan"
    edad:number=45

    
    public get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }
    

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad} `;
    }

    cambiarNombre():void{
        this.nombre = "SpiderMan";
    }

    cambiarEdad():void{
        this.edad = 18;
    }
}

