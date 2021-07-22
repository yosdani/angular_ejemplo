
/**
 * Author:
 * Content for error:   {
                            "error": "Missing password"
                        }
 */
import { Injectable } from "@angular/core";

//Models
import { profile } from "../models/profile.model";

//namespace
import * as fromDashBoard from './actions.dashboard';

//NGRX
import { of } from "rxjs";
import { createEffect,Actions, ofType } from "@ngrx/effects";
import { ServicesDashBoard } from "../services/dashboard.service";
import { switchMap,map, catchError, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class DashBoardEffects{

    GetProfile$ = createEffect( () => 
        this.actions$.pipe(
            ofType<fromDashBoard.getProfile>(fromDashBoard.actionsDashBoard.GET_PROFILE),
            tap(v=>console.log('debug : ',v)),
            switchMap( () => 
            
                this.services.getProfile()
                    .pipe( 
                        map( valor =>{
                            console.log('efecto desde dashboard: ',valor)
                            return new fromDashBoard.getProfileLoaded(true,valor);
                        }),
/*                         catchError(error => {
                            return of(new fromDashBoard.Error_login(error.error));
                        }) */
                    )
            )
        )
    )

    GetJokers$ = createEffect( () => 
        this.actions$.pipe(
            ofType<fromDashBoard.getJokers>(fromDashBoard.actionsDashBoard.GET_JOKERS),
            switchMap( () => 
                this.services.getJokersRandom().pipe(
                map(jokers=>{
                    return new fromDashBoard.jokersLoaded(true,jokers);
                }),
                catchError(error => {
                    return of(new fromDashBoard.getError(error));
                })
                )
            )
        )                
    )                   

    constructor(
        private actions$ :Actions,
        private services: ServicesDashBoard,
        private route: Router
    ){}
}