import { Component, OnDestroy, OnInit } from "@angular/core";

//Store
import { AppDashBoardState, AppState } from "../../Store";

//NGRX
import { Store } from "@ngrx/store";

//RxJs
import { Observable } from "rxjs";

//Models
import { profile } from "../models/profile.model";

//namespaces
import * as fromLogin from '../../auth/login/index';
import * as fromDashBoard from '../../dashboard/index';

@Component({
    selector:'app-dashboard',
    templateUrl:'./dashboard.component.html'
})
export class DashBoardComponent implements OnInit,OnDestroy{

    //Observable
    public profile$ = new Observable<profile>();
    public profile : profile ={
        data: {
            id: 0,
            email: '',
            first_name: '',
            last_name: '',
            avatar: ''
        },
        support: {
            url: '',
            text: ''
        }
    }
    constructor(
        private store:Store<AppDashBoardState>
    ){}
    ngOnDestroy(): void {
     
    }
    ngOnInit(): void {
        //Accionar
        this.store.dispatch( new fromDashBoard.fromDashBoardActions.getProfile());
        this.profile$   =   this.store.select(fromDashBoard.fromDashBoardSelectors.getProfileState)
        this.profile$.subscribe(profile => this.profile = profile);
    }
    OnLogout():void{
        this.store.dispatch(new fromLogin.fromLoginActions.Logout());
    }
}