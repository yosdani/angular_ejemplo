
/**
 * Author:
 */

//Models
import { jokers } from "../../models/jokers.model";
import { EntityAdapter,EntityState,createEntityAdapter } from "@ngrx/entity";

//namespace
import * as fromJokers from './actions.joker';

export interface StateJoker extends EntityState<jokers>{
    ids: number[];
    entities: any;
    loaded : boolean;
    loading : boolean;
    message: string;
}

export const jokerAdapter : EntityAdapter<jokers> = createEntityAdapter<jokers>();

export const defaultJokers : StateJoker = {
    ids: [],
    entities: {},
    loading: false,
    loaded: false,
    message: ''
}

export const initialStateJokers = jokerAdapter.getInitialState(defaultJokers);

export function reducerJoker(state = initialStateJokers ,actions :fromJokers.actionsClassJoker ):StateJoker{
    switch (actions.type) {
  
        
        case fromJokers.actionsJoker.GET_JOKERS:{
            return {
                ...state,
                loading: true
            }
        }
        case fromJokers.actionsJoker.GET_JOKERS_LOADED:{
            return jokerAdapter.addMany(actions.jokers, {
                ...state,
                loading: false,
                loaded: true
            });
        }
        case fromJokers.actionsJoker.ADD_JOKER: {
            return jokerAdapter.setOne(actions.joker, {...state});
        }
        case fromJokers.actionsJoker.DEL_JOKER:{
            return jokerAdapter.removeOne(actions.id, {...state});
        }
        case fromJokers.actionsJoker.EDIT_JOKER:{
            return jokerAdapter.upsertOne(actions.joker,{...state})
        }
        default:
        return state;
    }


}