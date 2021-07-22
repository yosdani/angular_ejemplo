import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MaterialModule  } from "../shared/materialize/materialize.module";
import { ReactiveFormsModule } from "@angular/forms";

//NGRX
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";

//Redcuer
import { reducerCategories } from "./redux/categories/reducer.categories";
import { reducerDashBoard } from "./redux/reducer.dashboard";
import { reducerJoker } from "./redux/jokers/reducer.joker";

//Effects
import { JokerEffects } from "./redux/jokers/effects.joker";
import { CategoriesEffects } from "./redux/categories/effects.categories";
import { DashBoardEffects } from "./redux/effects.dashboard";

//Models

//Components
import {JokersComponent} from './components/jokers/jokers.component'
import {DashBoardComponent} from './view/dashboard.component';

//Router
import { DashBoardRouter } from "./dashboard-router";
import { ModalComponent } from "./components/modals/modals.component";


@NgModule({
    declarations:[
        DashBoardComponent,
        JokersComponent,
        ModalComponent
    ],
    imports:[
        MaterialModule,
        CommonModule,
        DashBoardRouter,
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forFeature('dashboard',reducerDashBoard),
        StoreModule.forFeature('joker',reducerJoker),
        StoreModule.forFeature('categories',reducerCategories),
        EffectsModule.forFeature([DashBoardEffects,JokerEffects,CategoriesEffects])
    ],
    exports:[

    ],
    providers:[

    ]
    
})
export class DashBoardModule{}
