/*
 * Individual Messages
 *
 * This contains all the text for the Individual container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Individual';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Volunteer to help',
  },
  subheader: {
    id: `${scope}.subheader`,
    defaultMessage:
      'Sign up to help those in your area who need assistance during the coronavirus outbreak',
  },
  formHeader: {
    id: `${scope}.formHeader`,
    defaultMessage: 'Enter your information',
  },
  formHeaderLink: {
    id: `${scope}.formHeaderLink`,
    defaultMessage: 'or register a Facebook group instead',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  location: {
    id: `${scope}.location`,
    defaultMessage: 'Location',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Phone',
  },
  fbm: {
    id: `${scope}.fbm`,
    defaultMessage: 'Facebook Messenger',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  other: {
    id: `${scope}.other`,
    defaultMessage: 'Other',
  },
  avaiability: {
    id: `${scope}.availability`,
    defaultMessage: 'Availability',
  },
  morning: {
    id: `${scope}.morning`,
    defaultMessage: 'Morning',
  },
  afternoon: {
    id: `${scope}.afternoon`,
    defaultMessage: 'Afternoon',
  },
  evening: {
    id: `${scope}.Evening`,
    defaultMessage: 'Evening',
  },
  additional: {
    id: `${scope}.additional`,
    defaultMessage: 'Additional Information',
  },
  disclosure: {
    id: `${scope}.disclosure`,
    defaultMessage:
      'Warning: Any information you submit will be displayed publically. Please be careful with how much information you share.',
  },
  accept: {
    id: `${scope}.accept`,
    defaultMessage: 'Accept and Volunteer!',
  },
});
