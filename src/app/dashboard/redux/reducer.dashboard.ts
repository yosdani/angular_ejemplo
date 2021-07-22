
/**
 * Author:
 */

//Models
import { jokers } from "../models/jokers.model";
import { profile } from "../models/profile.model";

//namespace
import * as fromDashBoard from './actions.dashboard';

export interface StateProfile{
    isLoaded:boolean,
    profile:profile;
    message:string;
/*     isLoaded_jokers:boolean;
    jokers:jokers[]; */
}

const initialStateProfile : StateProfile = {
    isLoaded:false,
    profile:{
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
    },
    message:'',
   /*  isLoaded_jokers:false,
    jokers:[] */
}

export function reducerDashBoard(state : StateProfile = initialStateProfile ,actions :fromDashBoard.actionsClassDashBoard ):StateProfile{
    switch (actions.type) {
        case fromDashBoard.actionsDashBoard.GET_PROFILE:{
            return state;
       
        }
        case fromDashBoard.actionsDashBoard.GET_PROFILE_LOADED:{
            return{
                ...state,
                isLoaded:actions.isLoaded,
                profile:actions.profle,

            }
        }
        case fromDashBoard.actionsDashBoard.ERROR:{
            return{
                ...state,
                message:actions.message,
               // isLoaded_jokers:false,
                isLoaded:false
            }
        }
        /*
        case fromDashBoard.actionsDashBoard.GET_JOKERS:{
            return state
        }
        case fromDashBoard.actionsDashBoard.GET_JOKERS_LOADED:{
            return{
                ...state,
                message:'loades correct!',
                isLoaded_jokers:actions.isLoaded_jokers,
                jokers:actions.jokers
            }
        }
     */
        default:
        return state;
    }


}