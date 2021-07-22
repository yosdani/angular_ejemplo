
import * as fromDashBoard from './reducer.dashboard';

import {createFeatureSelector,createSelector} from '@ngrx/store'

const getSelectorGeneral = createFeatureSelector<fromDashBoard.StateProfile>('dashboard');

/**
 * Me devuelte la propiedad q me dice si se cargo el perfil
 */
export const getIsLoadedState = createSelector(
    getSelectorGeneral,
    (state:fromDashBoard.StateProfile) => state.isLoaded
)

/**
 * retorna el perfil
 */
export const getProfileState = createSelector(
    getSelectorGeneral,
    (state:fromDashBoard.StateProfile) => state.profile
)

/**
 * Obtengo el mensaje del estado actual
 */
export const getMessageState = createSelector(
    getSelectorGeneral,
    (state:fromDashBoard.StateProfile) => state.message
)

/**
 * Obtiene un listo de jokers al azar
 */
/*
export const getListJokers = createSelector(
    getSelectorGeneral,
    (state:fromDashBoard.StateProfile) => state.jokers
)

export const getIsLoadedJokers = createSelector(
    getSelectorGeneral,
    (state:fromDashBoard.StateProfile) => state.isLoaded_jokers
)
*/
