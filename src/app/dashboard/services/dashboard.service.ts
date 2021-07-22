import { Injectable } from "@angular/core";

//ENV
import {APIRestful} from '../../../environments/environment';

//Models
import {profile} from '../models/profile.model';

//NGRX

//RxJs
import { Observable, of, throwError } from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { jokers, responseHTTP } from "../models/jokers.model";
import { categories } from "../models/categories.model";


@Injectable({providedIn:"root"})
export class ServicesDashBoard{
    constructor(
        private http    :   HttpClient
    ){}

    getProfile():Observable<profile>{

        return (this.http.get<profile>(APIRestful.API + '/users/2')
            .pipe( 
                map(data => {
                    return data 
                })
            )
        );
    }

    getJokersRandom():Observable<jokers[]>{
        return (this.http.get<responseHTTP>(APIRestful.API_ChuckNorris + 'jokes/search?query=animal')
        .pipe( 
            map(data => {
                return data.result 
            }),
            catchError(e=>throwError(e.message))
        )
    );
    }

    
    getCategories():Observable<categories[]>{
        return (this.http.get<categories[]>(APIRestful.API_ChuckNorris + 'jokes/categories')
        .pipe( 
            map(data => {
                return data 
            }),
            catchError(e=>throwError(e.message))
        )
    );
    }
}

//https://reqres.in/api/users/2
//https://api.chucknorris.io/jokes/random?category=history
//https://api.chucknorris.io/jokes/search?query=cha
