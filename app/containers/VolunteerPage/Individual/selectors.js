import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the individual state domain
 */

const selectIndividualDomain = state => state.individual || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Individual
 */

const makeSelectIndividual = () =>
  createSelector(selectIndividualDomain, substate => substate);

export default makeSelectIndividual;
export { selectIndividualDomain };
