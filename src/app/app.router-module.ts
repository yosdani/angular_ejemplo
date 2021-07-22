import {NgModule} from '@angular/core'

//Router
import { Routes,RouterModule } from '@angular/router';

//Pages
import { AboutPage } from './pages/About/about.page';

//Components
import { LoginComponent } from './auth/login/view/login.component';

//Helpers
import { AuthGuardRouter } from './shared/helper/authGuard';


const routes:Routes = [
    {
        path:'',
        component:LoginComponent,
        pathMatch:'full'
    },
    {
        path:'about',
        component:AboutPage,
        pathMatch:'full'
    },
   {
        path:'dashboard',
         loadChildren:()=>import('./dashboard/dashboard.module')
        .then(module => module.DashBoardModule),
        canLoad:[AuthGuardRouter]
    },
    {path:'**', redirectTo:''},

];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRouterModule{}