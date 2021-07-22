//Login redux
import {
    fromLoginActions,
    fromLoginEffects,
    fromLoginReducer
} from '../auth/login/index';

//DashBoard redux
import {
    fromCategoriesReducer,
fromDashBoardActions,
fromDashBoardEffects,
fromDashBoardReducer,
fromDashBoardSelectors,
fromJokersActions,
fromJokersReducer,

}from '../dashboard/index';

//NGRX
import { ActionReducerMap } from "@ngrx/store";

export interface AppState{
    login:fromLoginReducer.StateLogin
}

export interface AppDashBoardState extends AppState{
    dashboard:fromDashBoardReducer.StateProfile,
    joker:fromJokersReducer.StateJoker,
    categories:fromCategoriesReducer.StateCategories
}

export const AppReducer : ActionReducerMap<any,any> = {
     login:fromLoginReducer.reducerLogin
}

export const AppEffects =[
    fromLoginEffects.LoginEffects
]
    