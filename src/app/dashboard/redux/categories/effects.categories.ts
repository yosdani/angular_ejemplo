
/**
 * Author:
 * Content for error:   {
                            "error": "Missing password"
                        }
 */
import { Injectable } from "@angular/core";

//Models

//namespace
import * as fromDashCategories from './actions.categories';

//NGRX
import { of } from "rxjs";
import { createEffect,Actions, ofType } from "@ngrx/effects";
import { ServicesDashBoard } from "../../services/dashboard.service";
import { switchMap,map, catchError, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class CategoriesEffects{



    GetCategories$ = createEffect( () => 
        this.actions$.pipe(
            ofType<fromDashCategories.getCategories>(fromDashCategories.actionsCategories.GET_CATEGORIES),
            switchMap( () => 
                this.services.getCategories().pipe(
                map(cat=>{
                    return new fromDashCategories.categoriesLoaded(true,cat);
                }),
  /*               catchError(error => {
                    return of(new fromDashCategories.getError(error));
                }) */
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