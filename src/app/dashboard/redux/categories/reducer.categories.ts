
/**
 * Author:
 */

//Models
import { categories } from "../../models/categories.model";
import { EntityAdapter,EntityState,createEntityAdapter } from "@ngrx/entity";

//namespace
import * as fromCategories from './actions.categories';

export interface StateCategories extends EntityState<categories>{
    ids: number[];
    entities: any;
    loaded : boolean;
    loading : boolean;
    message: string;
}

export const categoriesAdapter : EntityAdapter<categories> = createEntityAdapter<categories>();

export const defaultCategories : StateCategories = {
    ids: [],
    entities: {},
    loading: false,
    loaded: false,
    message: ''
}

export const initialStateCategories = categoriesAdapter.getInitialState(defaultCategories);

export function reducerCategories(state = initialStateCategories ,actions :fromCategories.actionsClassJoker ):StateCategories{
    switch (actions.type) {
  
        
        case fromCategories.actionsCategories.GET_CATEGORIES:{
            return {
                ...state,
                loading: true
            }
        }
        case fromCategories.actionsCategories.GET_CATEGORIES_LOADED:{
            return categoriesAdapter.addMany(actions.categories, {
                ...state,
                loading: false,
                loaded: actions.is_loaded_cat
            });
        }
        case fromCategories.actionsCategories.ADD_CATEGORIES: {
            return categoriesAdapter.setOne(actions.categories, {...state});
        }
        case fromCategories.actionsCategories.DEL_CATEGORIES:{
            return categoriesAdapter.removeOne(actions.id, {...state});
        }
        case fromCategories.actionsCategories.EDIT_CATEGORIES:{
            return categoriesAdapter.upsertOne(actions.categories,{...state})
        }
        default:
        return state;
    }


}