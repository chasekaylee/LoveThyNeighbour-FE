/*
 *
 * AssistancePage reducer
 *
 */

import produce from 'immer';
import { CHANGE_LOCATION } from './constants';

export const initialState = {
  location: '',
};

/* eslint-disable default-case, no-param-reassign */
const assistancePageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      draft.location = action.location;
      break;
  }
}, initialState);

export default assistancePageReducer;
