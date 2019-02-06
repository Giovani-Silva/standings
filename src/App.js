import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import InputSearch from './components/InputSearch';
import ListCompetitions from './components/ListCompetitions';
import TableScores from './components/TableScores';
import SpinnerBall from './components/SpinnerBall';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <InputSearch />
    <TableScores />
    <SpinnerBall />
    <ListCompetitions />
  </Fragment>
);

export default App;
