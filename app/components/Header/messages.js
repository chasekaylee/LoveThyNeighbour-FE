/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'lovethyneighbour.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  assistance: {
    id: `${scope}.assistance`,
    defaultMessage: 'I need assistance',
  },
  volunteer: {
    id: `${scope}.volunteer`,
    defaultMessage: 'I want to volunteer',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
});
