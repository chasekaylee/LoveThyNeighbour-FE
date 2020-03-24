/**
 *
 * Individual
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import H2 from 'components/H2';
import Button from 'components/Button';

import makeSelectIndividual from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import CenteredSection from './CenteredSection';
import BodyHeader from './BodyHeader';
import LinkWrapper from './LinkWrapper';

const Wrapper = styled.div`
  font-family: sans-serif;

  form {
    max-width: 700px;
    margin: 2em auto;
    border: 1px solid #ccc;
    padding: 1em;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 1em;
      & > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        // flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type='text'] {
        margin-top: 7px;
        flex: 1;
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
        margin-right: 7px;
      }
      & > textarea {
        flex: 1;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
  }
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const formatPayload = values => {
  const blacklistKeys = [
    'fbEnabled',
    'emailEnabled',
    'phoneEnabled',
    'otherEnabled',
  ];
  const payload = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(values)) {
    if (blacklistKeys.indexOf(key) === -1) payload[key] = values[key];
  }

  return payload;
};

const stateSelector = createStructuredSelector({
  individual: makeSelectIndividual(),
});

const onSubmit = async values => {
  const payload = formatPayload(values);
  await sleep(300);
  // eslint-disable-next-line no-alert
  window.alert(JSON.stringify(payload, 0, 2));
};

function Individual() {
  useInjectReducer({ key: 'individual', reducer });
  useInjectSaga({ key: 'individual', saga });

  /* eslint-disable no-unused-vars */
  const { individual } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>Volunteer</title>
        <meta name="description" content="Description of Individual" />
      </Helmet>
      <CenteredSection>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
        <p>
          <FormattedMessage {...messages.subheader} />
        </p>
      </CenteredSection>
      <Wrapper>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <>
              <form onSubmit={handleSubmit}>
                <BodyHeader>
                  <FormattedMessage {...messages.formHeader} />
                </BodyHeader>
                <LinkWrapper>
                  <Link to="/volunteer/group">
                    <FormattedMessage {...messages.formHeaderLink} />
                  </Link>
                </LinkWrapper>
                <div>
                  <label htmlFor="name">
                    <FormattedMessage {...messages.name} />
                  </label>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="e.g. Freddie D"
                  />
                </div>
                <div>
                  <label htmlFor="location">
                    <FormattedMessage {...messages.location} />
                  </label>
                  <Field
                    name="location"
                    component="input"
                    type="text"
                    placeholder="e.g. Oxford, NW3, Waterloo Station"
                  />
                </div>
                <div>
                  <label htmlFor="phone">
                    <FormattedMessage {...messages.phone} />
                  </label>
                  <Field
                    name="phoneEnabled"
                    component="input"
                    type="checkbox"
                  />
                  <Field
                    disabled={!values.phoneEnabled}
                    name="phone"
                    component="input"
                    type="text"
                    placeholder="e.g. +44 791 555 0921"
                  />
                </div>
                <div>
                  <label htmlFor="facebook">
                    <FormattedMessage {...messages.fbm} />
                  </label>
                  <Field name="fbEnabled" component="input" type="checkbox" />
                  <Field
                    disabled={!values.fbEnabled}
                    name="facebook"
                    component="input"
                    type="text"
                    placeholder="e.g. www.facebook.com/volunteer"
                  />
                </div>
                <div>
                  <label htmlFor="email">
                    <FormattedMessage {...messages.email} />
                  </label>
                  <Field
                    name="emailEnabled"
                    component="input"
                    type="checkbox"
                  />
                  <Field
                    disabled={!values.emailEnabled}
                    name="email"
                    component="input"
                    type="text"
                    placeholder="e.g. someone@something.com"
                  />
                </div>
                <div>
                  <label htmlFor="other">
                    <FormattedMessage {...messages.other} />
                  </label>
                  <Field
                    name="otherEnabled"
                    component="input"
                    type="checkbox"
                  />
                  <Field
                    disabled={!values.otherEnabled}
                    name="other"
                    component="input"
                    type="text"
                    placeholder="e.g. Message me on Instagram: @volunteer"
                  />
                </div>
                <div>
                  <label htmlFor="availability">
                    <FormattedMessage {...messages.avaiability} />
                  </label>
                  <div>
                    <label htmlFor="morning">
                      <Field
                        name="availability"
                        component="input"
                        type="checkbox"
                        value="morning"
                      />{' '}
                      <FormattedMessage {...messages.morning} />
                    </label>
                    <label htmlFor="afternoon">
                      <Field
                        name="availability"
                        component="input"
                        type="checkbox"
                        value="afternoon"
                      />{' '}
                      <FormattedMessage {...messages.afternoon} />
                    </label>
                    <label htmlFor="afternoon">
                      <Field
                        name="availability"
                        component="input"
                        type="checkbox"
                        value="evening"
                      />{' '}
                      <FormattedMessage {...messages.evening} />
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="additonal-info">
                    <FormattedMessage {...messages.additional} />
                  </label>
                  <Field
                    name="additional-info"
                    component="textarea"
                    placeholder="e.g. Lived in the area for 4 years, keen to help in any way I can! Email me and I'll respond within a few hours."
                  />
                </div>
                <div>
                  <FormattedMessage {...messages.disclosure} />
                </div>
                <div className="buttons">
                  <Button
                    type="submit"
                    disabled={submitting || pristine}
                    handleRoute={() => null}
                  >
                    <FormattedMessage {...messages.accept} />
                  </Button>
                </div>
              </form>
            </>
          )}
        />
      </Wrapper>
    </div>
  );
}

Individual.propTypes = {};

export default Individual;
