import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home, Room } from '../pages';

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/r/:roomName">
      <Room />
    </Route>
    <Redirect to="/" />
  </Switch>
);
