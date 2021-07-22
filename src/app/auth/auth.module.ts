import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';

//Modulos Custom
import { MaterialModule } from "../shared/materialize/materialize.module";

//Forms
import { ReactiveFormsModule,FormsModule} from "@angular/forms";
//Components
import { LoginComponent } from "./login/view/login.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        LoginComponent
    ],
    imports:[

        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    exports:[
        LoginComponent
    ],
    providers:[
  /*       ServicesLogin */
    ]
})
export class AuthModule{}