import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Standings from '../pages/Standings';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/standings/:id" component={Standings} />
    <Route path="*" component={Main} />
  </Switch>
);

export default Routes;
