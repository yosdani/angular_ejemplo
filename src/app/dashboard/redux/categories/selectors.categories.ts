
import * as fromCategories from './reducer.categories';

import {createFeatureSelector,createSelector} from '@ngrx/store'

export const getCategoriesState = createFeatureSelector<fromCategories.StateCategories>('categories');
export const getCategories = createSelector(getCategoriesState, 
  fromCategories.categoriesAdapter.getSelectors().selectAll);

export const getCategoriesById = createSelector(getCategoriesState, 
  fromCategories.categoriesAdapter.getSelectors().selectAll);

export const getTotalCategories = createSelector(getCategoriesState, 
  fromCategories.categoriesAdapter.getSelectors().selectTotal);
