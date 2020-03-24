import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import VolunteerListItem from 'components/VolunteerListItem';

function VolunteerList({ loading, error, volunteers }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (volunteers && volunteers.length) {
    return <List items={volunteers} component={VolunteerListItem} />;
  }

  return null;
}

VolunteerList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  volunteers: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};

export default VolunteerList;
