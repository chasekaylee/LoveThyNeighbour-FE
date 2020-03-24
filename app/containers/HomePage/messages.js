/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Welcome to Love Thy Neighbour',
  },
  subheader: {
    id: `${scope}.subheader`,
    defaultMessage:
      'We connect volunteers with those who need assistance during the Covid-19 global outbreak',
  },
  assistanceButton: {
    id: `${scope}.assistanceButton`,
    defaultMessage: 'I need assistance',
  },
  volunteerButton: {
    id: `${scope}.volunteerButton`,
    defaultMessage: 'I want to volunteer',
  },
  assistanceBullet1: {
    id: `${scope}.assistanceBullet1`,
    defaultMessage:
      'Stay isolated in your home during the coronavirus pandemic',
  },
  assistanceBullet2: {
    id: `${scope}.assistanceBullet2`,
    defaultMessage: 'Find volunteers in your area to help you',
  },
  assistanceBullet3: {
    id: `${scope}.assistanceBullet3`,
    defaultMessage: 'Get groceries and other supplies delivered to your home',
  },
  volunteerBullet1: {
    id: `${scope}.volunteerBullet1`,
    defaultMessage:
      'Sign up to help those in need of assistance during the coronavirus pandemic',
  },
  volunteerBullet2: {
    id: `${scope}.volunteerBullet2`,
    defaultMessage: 'Get matched with people in your area',
  },
  volunteerBullet3: {
    id: `${scope}.volunteerBullet3`,
    defaultMessage:
      'Assist those in isolation by delivering them groceries and supplies',
  },
});
