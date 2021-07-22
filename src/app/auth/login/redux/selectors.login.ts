
import * as fromLogin from './reducer.login';

import {createFeatureSelector,createSelector} from '@ngrx/store'

const getSelectorGeneral = createFeatureSelector<fromLogin.StateLogin>('login');

export const getIsLoggedState = createSelector(
    getSelectorGeneral,
    (state:fromLogin.StateLogin) => state.isLogged
)