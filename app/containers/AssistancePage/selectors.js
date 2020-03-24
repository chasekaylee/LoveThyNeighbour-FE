import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assistancePage state domain
 */

const selectAssistancePageDomain = state =>
  state.assistancePage || initialState;

/**
 * Other specific selectors
 */

const makeSelectLocation = () =>
  createSelector(selectAssistancePageDomain, substate => substate.location);

export { makeSelectLocation };
