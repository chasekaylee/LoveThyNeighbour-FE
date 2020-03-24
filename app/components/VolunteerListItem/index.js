/**
 *
 * VolunteerListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function VolunteerListItem({ item }) {
  return <div>{item.name}</div>;
}

VolunteerListItem.propTypes = {
  item: PropTypes.object,
};

export default VolunteerListItem;
