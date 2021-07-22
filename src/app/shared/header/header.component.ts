import { Component,OnInit, OnDestroy } from "@angular/core";

//State
import {AppState} from '../../Store/index';

//NGRX
import { Store } from "@ngrx/store";

//namespaces
import * as fromLogin from '../../auth/login/index'

//Router
import { Router } from "@angular/router";

//RxJs
import { Observable, Subscription } from "rxjs";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy{

    public isLogged$ =  new Observable<boolean>() ;
    private subs = new Subscription();
    
    constructor(
        private store: Store<AppState>,
        private routes:Router
    ){}
    ngOnDestroy(): void {
        //unsubscriber
        console.log('destroy');
        this.subs.unsubscribe();

    }
    ngOnInit(): void {
        //subscriber and make somethings
        this.isLogged$   =   this.store.select(fromLogin.fromLoginSelectors.getIsLoggedState)
        this.subs.add(this.isLogged$.subscribe(
            console.log
        ))
     
    }
    OnLogout():void{
        this.store.dispatch(new fromLogin.fromLoginActions.Logout());
    }

    

}