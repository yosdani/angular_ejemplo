import {Injectable} from '@angular/core'

//Router
import {CanActivate, Router,CanLoad } from '@angular/router'

//NGRX
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/Store'

//RxJs
import { Observable, of } from 'rxjs'
import {map, take} from 'rxjs/operators';

//namespaces
import * as fromLogin from '../../auth/login/index';

@Injectable({providedIn:"root"})
export class AuthGuardRouter implements CanLoad{

    constructor(
        private router  :   Router,
        private store   :   Store<AppState>
    ){}

    canLoad():Observable<boolean>{
        let b : boolean = false;

        return (this.store.select(fromLogin.fromLoginSelectors.getIsLoggedState)
           .pipe(
               take(1),
               map(valor => {
                   if(valor !== false)
                   {
                       return valor;
                   }else{
                       this.router.navigate(['/'])
                       return valor;
                   }
                })
           ))

           
          //lo utilizo para prueba return of(true);
    }

}