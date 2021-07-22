
/**
 * Author:
 * Content for error:   {
                            "error": "Missing password"
                        }
 */
import { Injectable } from "@angular/core";

//Models
import { User } from "../model/login.model";
import {_Error} from '../model/misc.model';
//namespace
import * as fromLogin from './actions.login';

//NGRX
import { of } from "rxjs";
import { createEffect,Actions, ofType } from "@ngrx/effects";
import { ServicesLogin } from "../services/services.login";
import { switchMap,map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()

export class LoginEffects{

    Loggin$ = createEffect( () => 
        this.actions$.pipe(
            ofType<fromLogin.Logging>(fromLogin.actionsLogin.LOGGING),
            switchMap( action => 
                this.services.OnLogin(action.user)
                    .pipe( 
                        map( valor =>{
                            this.route.navigate(['/dashboard/joker'])
                            return new fromLogin.GetToken(valor.token);
                        }),
                        catchError(error => {
                            return of(new fromLogin.Error_login(error.error));
                        })
                    )
            )
        )
    )
    GetToken$ = createEffect( () => 
        this.actions$.pipe(
            ofType<fromLogin.GetToken>(fromLogin.actionsLogin.GET_TOKEN),
            switchMap( action =>{
                localStorage.setItem('token',action.token);
                return of( new fromLogin.Logged(true));
            })
        )
    )

    LogOut$ =  createEffect( () =>
            this.actions$.pipe(
                ofType<fromLogin.Logout>(fromLogin.actionsLogin.LOGOUT),
                switchMap( () =>{
                    this.route.navigate(['/']);
                    localStorage.removeItem('token');
                    return of(new fromLogin.Clear())
                })
            )
    )


    constructor(
        private actions$ :Actions,
        private services: ServicesLogin,
        private route: Router
    ){}
}