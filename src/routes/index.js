import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/table" component={Main} />
  </Switch>
);

export default Routes;
