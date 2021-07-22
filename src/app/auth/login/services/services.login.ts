
//HttpClient
import { HttpClient } from "@angular/common/http";

//Environment
import {APIRestful} from '../../../../environments/environment';

import { Injectable } from "@angular/core";

//RxJs
import { Observable, of, throwError } from "rxjs";
import {catchError, map} from 'rxjs/operators';

//Models
import { User } from "../model/login.model";
import { _Error } from "../model/misc.model";

@Injectable({providedIn:"root"})
export class ServicesLogin{

    constructor(private http:HttpClient){}

    OnLogin(user:User):Observable<any>{

       return this.http.post(APIRestful.API + '/login',user)
        .pipe(
            map( response =>{
                console.log('from services login: ',response);
                return response;
            }),
            catchError((error) =>  {
                return throwError(error.error)
            })
        )

    }
}