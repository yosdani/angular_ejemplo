import { Component, OnDestroy, OnInit } from "@angular/core";


//Forms
import {FormControl, Validators} from '@angular/forms';

//NGRX
import {Store} from '@ngrx/store';
import { Observable } from "rxjs";
import { AppState } from "src/app/Store";

//namespace
import * as fromLogin from '../index'; 
import { User } from "../model/login.model";


@Component({
    selector:'app-login',
    templateUrl:'./login.component.html'
})
export class LoginComponent implements OnInit,OnDestroy{

    public   hide = true;
    public token$ = new Observable<string>();
    private user  : User = {email:'',password:''};

    constructor(
      private store : Store<AppState>,

    ){}

    ngOnInit():void{}
    
    ngOnDestroy():void{}

    email = new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email]);
    password = new FormControl('cityslicka');

    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    OnLogin():void{

      this.user = {
        email     : this.email.value,
        password  : this.password.value
      }

      console.log('email: ',this.email.value + ' password: ',this.password.value);
      this.store.dispatch(new fromLogin.fromLoginActions.Logging(this.user));

    }
}