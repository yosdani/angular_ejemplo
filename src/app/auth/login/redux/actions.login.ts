
/**
 * Autor:
 * 
 */

import { Action } from "@ngrx/store";

//Models
import { User } from "../model/login.model";

export enum actionsLogin {
    LOGGING = '[AUTH/LOGGING] LOGGING_USER',
    LOGGED = 'AUTH/LOGGED LOGGED_USER',
    ERROR_LOGIN = '[AUTH/ERROR ERROR_LOGIN',
    LOGOUT = '[AUTH/LOGOUT LOGOUT_USER',
    CLEAR = '[AUTH/CLEAR CLEAR TOKEN LOCALSTORAGE',
    GET_TOKEN = '[AUTH/GET_TOKEN TOKEN_USER'
}

export class Logging implements Action{
    readonly type = actionsLogin.LOGGING;
    constructor(public user:User){}
}

export class Logged implements Action{
    readonly type = actionsLogin.LOGGED;
    constructor(public isLogged:boolean){}
}

export class Error_login implements Action{
    readonly type = actionsLogin.ERROR_LOGIN;
    constructor(public message:string){}
}

export class Logout implements Action{
    readonly type = actionsLogin.LOGOUT;
/*     constructor(public user:User){} */
}

export class GetToken implements Action{
    readonly type = actionsLogin.GET_TOKEN;
    constructor(public token:string){}
}

export class Clear implements Action{
    readonly type = actionsLogin.CLEAR;
  
}

export  type actionsClassLogin = Logging | Logged | Error_login | GetToken | Logout | Clear