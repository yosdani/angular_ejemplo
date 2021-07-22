
/**
 * Author:
 */

//Models
import { State } from "@ngrx/store";
import { User } from "../model/login.model";

//namespace
import * as fromLogin from './actions.login';

export interface StateLogin{
    isLoggin:boolean,
    isLogged:boolean;
    user:User;
    token:string;
    message:string;
}

const initialStateLogin : StateLogin = {
    isLoggin:false,
    user:{
        email:'',
        password:''
    },
    isLogged:false,
    token:'',
    message:''
}

export function reducerLogin(state : StateLogin = initialStateLogin ,actions :fromLogin.actionsClassLogin ):StateLogin{
    switch (actions.type) {
        case fromLogin.actionsLogin.LOGGING:{
            return {
                ...state,
                user:actions.user,
                isLoggin:true
            }
        }
        case fromLogin.actionsLogin.LOGGED:{
            return{
                ...state,
                isLoggin:false,
                isLogged:actions.isLogged,

            }
        }
        case fromLogin.actionsLogin.GET_TOKEN:{
            return{
                ...state,
                token:actions.token
            }
        }
        case fromLogin.actionsLogin.ERROR_LOGIN:{
            return{
                ...state,
                isLogged:false,
                isLoggin:false,
                message:actions.message
            }
        }
        case fromLogin.actionsLogin.CLEAR:{
            return{
                ...state,
                isLoggin:false,
                isLogged:false,
                message:'',
                user:{
                    email:'',
                    password:''
                }
            }
        }
        default:
            return state;
    }


}