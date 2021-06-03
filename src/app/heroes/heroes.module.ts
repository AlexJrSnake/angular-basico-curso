import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { heroeComponet } from './heroe/heroe.componet';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        heroeComponet,
        ListadoComponent
    ],
    exports:[
        ListadoComponent,
        heroeComponet
    ],
    imports:[
        CommonModule
    ]
})
export class heroesModules{}