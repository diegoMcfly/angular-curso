import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from '../app.component';
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule {}