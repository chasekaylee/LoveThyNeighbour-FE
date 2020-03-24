/**
 *
 * AboutPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Description of AboutPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AboutPage.propTypes = {};

export default AboutPage;
