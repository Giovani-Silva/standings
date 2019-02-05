import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import InputSearch from './components/InputSearch';
import ListCompetitions from './components/ListCompetitions';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <InputSearch />
    <ListCompetitions />
  </Fragment>
);

export default App;
