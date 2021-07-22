
/**
 * Autor:
 * 
 */

import { Action } from "@ngrx/store";
import { jokers } from "../models/jokers.model";

//Models
import { profile } from "../models/profile.model";

export enum actionsDashBoard {
    GET_PROFILE = '[DASHBOARD/GET_PROFILE] GET_PROFILE',
    GET_PROFILE_LOADED = '[DASHBOARD/GET_PROFILE_LOADED] GET_PROFILE_LOADED',
    GET_JOKERS = '[DASHBOARD/GET_JOKERS] GET_JOKERS',
    GET_JOKERS_LOADED = '[DASHBOARD/GET_JOKERS_LOADED] GET_JOKERS_LOADED',
    ERROR = '[DASHBOARD/ERROR] ERROR',
}


export class getProfile implements Action{
    readonly type = actionsDashBoard.GET_PROFILE;

}

export class getProfileLoaded implements Action{
    readonly type = actionsDashBoard.GET_PROFILE_LOADED;
    constructor(public isLoaded:boolean, public profle:profile){}
}

export class getJokers implements Action{
    readonly type = actionsDashBoard.GET_JOKERS;

}

export class jokersLoaded implements Action{
    readonly type = actionsDashBoard.GET_JOKERS_LOADED;
    constructor(public isLoaded_jokers:boolean, public jokers:jokers[]){}
}

export class getError implements Action{
    readonly type = actionsDashBoard.ERROR;
    constructor(public message:string){}
}
/*
export class Error_login implements Action{
    readonly type = actionsLogin.ERROR_LOGIN;
    constructor(public message:string){}
}

export class Logout implements Action{
    readonly type = actionsLogin.LOGOUT;

}

export class GetToken implements Action{
    readonly type = actionsLogin.GET_TOKEN;
    constructor(public token:string){}
}

export class Clear implements Action{
    readonly type = actionsLogin.CLEAR;
  
}
*/

export  type actionsClassDashBoard = getProfile | getProfileLoaded | getJokers | jokersLoaded | getError