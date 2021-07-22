import { NgModule } from "@angular/core";

//Router
import { Routes,RouterModule } from '@angular/router';
import { JokersComponent } from "./components/jokers/jokers.component";
import { DashBoardComponent } from "./view/dashboard.component";

const routes:Routes = [
    {
        path:'',
        component:DashBoardComponent,
        children:[
            {
                path:'joker',
                component:JokersComponent,

            },
            {path:'**', redirectTo:''},
        ]
    },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DashBoardRouter{

}