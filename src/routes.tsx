import React, { FunctionComponent } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Error from './utils/ErrorRoute';

interface OwnProps {
  children: any;
}

const Routes: FunctionComponent<OwnProps> = () => (
  <BrowserRouter>
    <Switch>
      <Route root exact path="/" component={Home} />
      <Route path="/docs" component={Error} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
