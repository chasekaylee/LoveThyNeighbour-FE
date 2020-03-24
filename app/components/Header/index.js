import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink exact to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/assistance">
          <FormattedMessage {...messages.assistance} />
        </HeaderLink>
        <HeaderLink to="/volunteer">
          <FormattedMessage {...messages.volunteer} />
        </HeaderLink>
        <HeaderLink to="/about">
          <FormattedMessage {...messages.about} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
