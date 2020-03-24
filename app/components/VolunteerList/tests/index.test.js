import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import VolunteerList from '../index';
import configureStore from '../../../configureStore';

describe('<VolunteerList />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<VolunteerList loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <VolunteerList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).toBeInTheDocument();
  });

  it('should render the repositories if loading was successful', () => {
    const store = configureStore({ global: { currentUser: 'mxstbr' } });
    const repos = [
      {
        owner: {
          login: 'mxstbr',
        },
        html_url: 'https://github.com/react-boilerplate/react-boilerplate',
        name: 'react-boilerplate',
        open_issues_count: 20,
        full_name: 'react-boilerplate/react-boilerplate',
      },
    ];
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <VolunteerList repos={repos} error={false} />
        </IntlProvider>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(
      <VolunteerList repos={false} error={false} loading={false} />,
    );

    expect(container).toBeEmpty();
  });
});
