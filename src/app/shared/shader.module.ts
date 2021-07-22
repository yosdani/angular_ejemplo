import { NgModule } from "@angular/core";



//Components
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from "@angular/common";
import { AppRouterModule } from "../app.router-module";
import { MaterialModule } from "./materialize/materialize.module";


@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
    ],
    imports:[
        MaterialModule,
        CommonModule,
        AppRouterModule,
    ],
    exports:[

        HeaderComponent,
        FooterComponent,

    ],

})
export class SharedModule{}