
/**
 * Autor:
 * 
 */

import { Action } from "@ngrx/store";

//Models
import { categories } from "../../models/categories.model";


export enum actionsCategories {
    GET_CATEGORIES = '[DASHBOARD/GET_CATEGORIES] GET_CATEGORIES',
    GET_CATEGORIES_LOADED = '[DASHBOARD/GET_CATEGORIES_LOADED] GET_CATEGORIES_LOADED',
    ADD_CATEGORIES ='[DASHBOARD/ADD_CATEGORIES] ADD_CATEGORIES',
    EDIT_CATEGORIES ='[DASHBOARD/EDIT_CATEGORIES] EDIT_CATEGORIES',
    DEL_CATEGORIES ='[DASHBOARD/DEL_CATEGORIES] DEL_CATEGORIES',

}




export class getCategories implements Action{
    readonly type = actionsCategories.GET_CATEGORIES;

}

export class categoriesLoaded implements Action{
    readonly type = actionsCategories.GET_CATEGORIES_LOADED;
    constructor(public is_loaded_cat:boolean, public categories:categories[]){}
}



export class addCcategories implements Action{
    readonly type = actionsCategories.ADD_CATEGORIES;
    constructor(public categories:categories){}
}

export class delCategories implements Action{
    readonly type = actionsCategories.DEL_CATEGORIES;
    constructor(public id:any){}
}

export class editCategories implements Action{
    readonly type = actionsCategories.EDIT_CATEGORIES;
    constructor(public categories:categories){}
}



export  type actionsClassJoker =  getCategories  | categoriesLoaded | addCcategories | delCategories | editCategories