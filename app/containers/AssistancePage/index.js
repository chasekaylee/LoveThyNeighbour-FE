/**
 *
 * AssistancePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import H2 from 'components/H2';
import Table from 'components/Table';

import { changeLocation } from './actions';
import { makeSelectLocation } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Input from './Input';
import Form from './Form';
import TableContainer from './TableContainer';
import CenteredSection from './CenteredSection';
import BodyHeader from './BodyHeader';
import SearchButton from './SearchButton';
import SearchContainer from './SearchContainer';

// TODO: (Chase) replace with store injected props when we know what data looks like
const volunteerListProps = {
  loading: false,
  error: false,
  data: [
    {
      id: 123,
      name: 'Gwen Goodwin',
      distance: 11.123, // meter
      contact: '@GwenGoodwin',
      information:
        'Eget mi proin sed libero enim sed faucibus turpis. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Et molestie ac feugiat sed lectus vestibulum.',
    },
    {
      id: 1234,
      name: 'Jennifer Haley',
      distance: 12311.123, // meter
      contact: 'www.facebook.com/JenniferHaley',
      information:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor. Elit scelerisque mauris pellentesque pulvinar pellentesque.',
    },
  ],
  columns: [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Distance',
      accessor: 'distance',
    },
    {
      Header: 'Contact',
      accessor: 'contact',
    },
    {
      Header: 'Information',
      accessor: 'information',
    },
  ],
};

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

function AssistancePage() {
  useInjectReducer({ key: 'assistancePage', reducer });
  useInjectSaga({ key: 'assistancePage', saga });

  /* eslint-disable no-unused-vars */
  const { location } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  const onChangeLocation = evt => dispatch(changeLocation(evt.target.value));
  const onSubmitForm = evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    // eslint-disable-next-line no-useless-return
    if (!location) return;

    // dispatch((dosomethingwithlocation));
  };

  return (
    <div>
      <Helmet>
        <title>Assistance</title>
        <meta name="description" content="Description of AssistancePage" />
      </Helmet>
      <CenteredSection>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
        <p>
          <FormattedMessage {...messages.subheader} />
        </p>
      </CenteredSection>
      <SearchContainer>
        <BodyHeader>
          <FormattedMessage {...messages.searchQuestion} />
        </BodyHeader>
        <Form onSubmit={onSubmitForm} id="location-form">
          <label htmlFor="location">
            <FormattedMessage {...messages.searchLabel} />
          </label>
          <Input
            id="location"
            type="text"
            placeholder="e.g. Oxford, NW3, Waterloo Station"
            value={location}
            onChange={onChangeLocation}
          />
          <SearchButton type="submit" form="location-form" value="Search" />
        </Form>
      </SearchContainer>
      <TableContainer>
        <BodyHeader>
          <FormattedMessage {...messages.volunteerTableHeader} />
        </BodyHeader>
        <Table {...volunteerListProps} />
      </TableContainer>
    </div>
  );
}

AssistancePage.propTypes = {};

export default AssistancePage;
