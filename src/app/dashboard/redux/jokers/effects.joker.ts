
/**
 * Author:
 * Content for error:   {
                            "error": "Missing password"
                        }
 */
import { Injectable } from "@angular/core";

//Models
import { jokers } from "../../models/jokers.model";

//namespace
import * as fromDashJoker from './actions.joker';

//NGRX
import { of } from "rxjs";
import { createEffect,Actions, ofType } from "@ngrx/effects";
import { ServicesDashBoard } from "../../services/dashboard.service";
import { switchMap,map, catchError, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class JokerEffects{



    GetJokers$ = createEffect( () => 
        this.actions$.pipe(
            ofType<fromDashJoker.getJokers>(fromDashJoker.actionsJoker.GET_JOKERS),
            switchMap( () => 
                this.services.getJokersRandom().pipe(
                map(jokers=>{
                    return new fromDashJoker.jokersLoaded(true,jokers);
                }),
                catchError(error => {
                    return of(new fromDashJoker.getError(error));
                })
                )
            )
        )                
    )   
    
    EditJokers$ = createEffect( () => 
    this.actions$.pipe(
        ofType<fromDashJoker.editJoker>(fromDashJoker.actionsJoker.EDIT_JOKER),
        map( (v)=> {
            
            return new fromDashJoker.sendMessageJoker("good")
        })
        )
    )                
   

    constructor(
        private actions$ :Actions,
        private services: ServicesDashBoard,
        private route: Router
    ){}
}