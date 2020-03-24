/*
 * AssistancePage Messages
 *
 * This contains all the text for the AssistancePage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AssistancePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Get help from a volunteer',
  },
  subheader: {
    id: `${scope}.subheader`,
    defaultMessage:
      'Be put in touch with volunteers in your area, who can help you during the coronavirus outbreak',
  },
  searchQuestion: {
    id: `${scope}.searchQuestion`,
    defaultMessage: 'Where are you based?',
  },
  searchLabel: {
    id: `${scope}.searchLabel`,
    defaultMessage: 'Enter your location: ',
  },
  volunteerTableHeader: {
    id: `${scope}.volunteerTableHeader`,
    defaultMessage: 'Nearest Volunteers',
  },
});
