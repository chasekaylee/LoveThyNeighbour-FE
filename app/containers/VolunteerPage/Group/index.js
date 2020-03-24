/**
 *
 * Group
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';

import H2 from 'components/H2';
import Button from 'components/Button';

import makeSelectGroup from './selectors';
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
        width: 110px;
        font-size: 1em;
        line-height: 2em;
      }
      & > input,
      & > textarea {
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
      & > textarea {
        flex: 1;
      }
      }
    }
  }
`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  // eslint-disable-next-line no-alert
  window.alert(JSON.stringify(values, 0, 2));
};
const stateSelector = createStructuredSelector({
  group: makeSelectGroup(),
});

function Group() {
  useInjectReducer({ key: 'group', reducer });
  useInjectSaga({ key: 'group', saga });

  /* eslint-disable no-unused-vars */
  const { group } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>Volunteer</title>
        <meta name="description" content="Description of Group" />
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
          render={({
            handleSubmit,
            form,
            submitting,
            pristine /* , values */,
          }) => (
            <form onSubmit={handleSubmit}>
              <BodyHeader>
                <FormattedMessage {...messages.formHeader} />
              </BodyHeader>
              <LinkWrapper>
                <Link to="/volunteer">
                  <FormattedMessage {...messages.formHeaderLink} />
                </Link>
              </LinkWrapper>
              <div>
                <label htmlFor="name">
                  <FormattedMessage {...messages.groupname} />
                </label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="e.g. Camden Helpers"
                />
              </div>
              <div>
                <label htmlFor="location">
                  <FormattedMessage {...messages.groupLocation} />
                </label>
                <Field
                  name="location"
                  component="input"
                  type="text"
                  placeholder="e.g. Oxford, NW3, Waterloo Station"
                />
              </div>
              <div>
                <label htmlFor="url">
                  <FormattedMessage {...messages.groupurl} />
                </label>
                <Field
                  name="url"
                  component="input"
                  type="text"
                  placeholder="e.g. www.facebook.com/groups/camdenhelpers"
                />
              </div>

              <BodyHeader>
                <FormattedMessage {...messages.optionalInfoHeader} />
              </BodyHeader>
              <div>
                <label htmlFor="additonal-info">
                  <FormattedMessage {...messages.additionalLabel} />
                </label>
                <Field
                  name="additional-info"
                  component="textarea"
                  placeholder="e.g. Lived in the area for 4 years, keen to help in any way I can! Email me and I'll respond within a few hours."
                />
              </div>
              <div className="buttons">
                <Button
                  type="submit"
                  disabled={submitting || pristine}
                  handleRoute={() => null}
                >
                  <FormattedMessage {...messages.submit} />
                </Button>
              </div>
            </form>
          )}
        />
      </Wrapper>
    </div>
  );
}

Group.propTypes = {};

export default Group;
