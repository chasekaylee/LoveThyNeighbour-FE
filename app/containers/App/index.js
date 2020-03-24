/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { hot } from 'react-hot-loader/root';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import AssistancePage from 'containers/AssistancePage/Loadable';
import { IndividualPage, GroupPage } from 'containers/VolunteerPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - LoveThyNeighbour"
        defaultTitle="LoveThyNeighbour"
      >
        <meta
          name="description"
          content="'Connecting volunteers with those who need assistance during the Covid-19 global outbreak"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/assistance" component={AssistancePage} />
        <Route exact path="/volunteer" component={IndividualPage} />
        <Route exact path="/volunteer/group" component={GroupPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default hot(App);
