import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { contadorComponet } from './contador/contador.componet';


@NgModule({
    declarations:[
        contadorComponet
    ],
    exports:[
        contadorComponet
    ],
    imports:[
        CommonModule
    ]
})
export class contadorModules{}