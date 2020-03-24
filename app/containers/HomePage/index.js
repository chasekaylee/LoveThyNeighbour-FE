/**
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { push } from 'connected-react-router';

import H2 from 'components/H2';
import Button from 'components/Button';

import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Section from './Section';
import CenteredSection from './CenteredSection';
import Card from './Card';

const stateSelector = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  /* eslint-disable no-unused-vars */
  const { homePage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <CenteredSection>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
        <p>
          <FormattedMessage {...messages.subheader} />
        </p>
      </CenteredSection>
      <Section>
        <Card>
          <Button handleRoute={() => dispatch(push('/assistance'))}>
            <FormattedMessage {...messages.assistanceButton} />
          </Button>
          <ul>
            <li>
              <FormattedMessage {...messages.assistanceBullet1} />
            </li>
            <li>
              <FormattedMessage {...messages.assistanceBullet2} />
            </li>
            <li>
              <FormattedMessage {...messages.assistanceBullet2} />
            </li>
          </ul>
        </Card>
        <Card>
          <Button handleRoute={() => dispatch(push('/volunteer'))}>
            <FormattedMessage {...messages.volunteerButton} />
          </Button>
          <ul>
            <li>
              <FormattedMessage {...messages.volunteerBullet1} />
            </li>
            <li>
              <FormattedMessage {...messages.volunteerBullet2} />
            </li>
            <li>
              <FormattedMessage {...messages.volunteerBullet3} />
            </li>
          </ul>
        </Card>
      </Section>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
