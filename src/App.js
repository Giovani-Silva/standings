import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import InputSearch from './components/InputSearch';
import ListCompetitions from './components/ListCompetitions';
import TableScores from './components/TableScores';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <InputSearch />
    <TableScores />
    <ListCompetitions />
  </Fragment>
);

export default App;
