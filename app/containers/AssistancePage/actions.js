/*
 *
 * AssistancePage actions
 *
 */

import { CHANGE_LOCATION } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} location The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_SEARCH_TERM
 */
export function changeLocation(location) {
  return {
    type: CHANGE_LOCATION,
    location,
  };
}
