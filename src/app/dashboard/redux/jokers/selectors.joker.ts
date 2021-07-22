
import * as fromJokers from './reducer.joker';

import {createFeatureSelector,createSelector} from '@ngrx/store'

const getSelectorGeneral = createFeatureSelector<fromJokers.StateJoker>('joker');

/**
 * Me devuelte la propiedad q me dice si se cargo el perfil
 */
export const getIsLoadedState = createSelector(
    getSelectorGeneral,
    (state:fromJokers.StateJoker) => state.loaded
)

/**
 * retorna las bromas
 */
export const getListJokers = createSelector(
    getSelectorGeneral,
    (state:fromJokers.StateJoker) => state.entities
)

/**
 * Obtengo el mensaje del estado actual
 */
export const getMessageState = createSelector(
    getSelectorGeneral,
    (state:fromJokers.StateJoker) => state.message
)

// get the selectors
/*
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = fromJokers.jokerAdapter.getSelectors();
   
// select the array of user ids
export const selectUserIds = selectIds;
 
// select the dictionary of user entities
export const selectUserEntities = selectEntities;
 
// select the array of users
export const selectAllUsers = selectAll;
 
// select the total user count
export const selectUserTotal = selectTotal;
*/

export const getJokersState = createFeatureSelector<fromJokers.StateJoker>('joker');
export const getJokers = createSelector(getJokersState, 
    fromJokers.jokerAdapter.getSelectors().selectAll);

export const getJokerById = createSelector(getJokersState, 
    fromJokers.jokerAdapter.getSelectors().selectAll);

export const getTotalJokers = createSelector(getJokersState, 
    fromJokers.jokerAdapter.getSelectors().selectTotal);
 /*
export const selectUserIds = createSelector(
  selectUserState,
  fromJokers.selectUserIds // shorthand for usersState => fromUser.selectUserIds(usersState)
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);
export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
);
export const selectUserTotal = createSelector(
  selectUserState,
  fromUser.selectUserTotal
);
export const selectCurrentUserId = createSelector(
  selectUserState,
  fromUser.getSelectedUserId
);
 
export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);*/