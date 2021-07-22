
/**
 * Autor:
 * 
 */

import { Action } from "@ngrx/store";

//Models
import { jokers } from "../../models/jokers.model";


export enum actionsJoker {
    GET_JOKERS = '[DASHBOARD/GET_JOKERS] GET_JOKERS',
    GET_JOKERS_LOADED = '[DASHBOARD/GET_JOKERS_LOADED] GET_JOKERS_LOADED',
    ADD_JOKER ='[DASHBOARD/ADD_JOKER] ADD_JOKER',
    EDIT_JOKER ='[DASHBOARD/EDIT_JOKER] EDIT_JOKER',
    DEL_JOKER ='[DASHBOARD/DEL_JOKER] DEL_JOKER',
    SEND_MESSAGE ='[DASHBOARD/SEND_MESSAGE] SEND_MESSAGE',
    ERROR = '[DASHBOARD/ERROR] ERROR',
}




export class getJokers implements Action{
    readonly type = actionsJoker.GET_JOKERS;

}

export class jokersLoaded implements Action{
    readonly type = actionsJoker.GET_JOKERS_LOADED;
    constructor(public isLoaded_jokers:boolean, public jokers:jokers[]){}
}

export class getError implements Action{
    readonly type = actionsJoker.ERROR;
    constructor(public message:string){}
}

export class addJoker implements Action{
    readonly type = actionsJoker.ADD_JOKER;
    constructor(public joker:jokers){}
}

export class delJoker implements Action{
    readonly type = actionsJoker.DEL_JOKER;
    constructor(public id:any){}
}

export class editJoker implements Action{
    readonly type = actionsJoker.EDIT_JOKER;
    constructor(public joker:jokers){}
}

export class sendMessageJoker implements Action{
    readonly type = actionsJoker.SEND_MESSAGE;
    constructor(public message:string){}
}

export  type actionsClassJoker =   getJokers | jokersLoaded | getError | addJoker | delJoker | editJoker | sendMessageJoker