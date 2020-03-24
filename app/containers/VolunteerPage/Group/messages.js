/*
 * Group Messages
 *
 * This contains all the text for the Group container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Group';

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
    defaultMessage: 'Enter your Facebook group information',
  },
  formHeaderLink: {
    id: `${scope}.formHeaderLink`,
    defaultMessage: 'or register as an individual instead',
  },
  groupname: {
    id: `${scope}.groupname`,
    defaultMessage: 'Enter group name',
  },
  groupLocation: {
    id: `${scope}.groupLocation`,
    defaultMessage: 'Enter group location',
  },
  groupurl: {
    id: `${scope}.groupurl`,
    defaultMessage: 'Enter group URL',
  },
  optionalInfoHeader: {
    id: `${scope}.optionalInfoHeader`,
    defaultMessage: 'Optional Additional Info',
  },
  additionalLabel: {
    id: `${scope}.additionalLabel`,
    defaultMessage: 'Additional Info',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Submit',
  },
});
