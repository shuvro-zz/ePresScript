import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import MedicinePage from './containers/MedicinePage'

export default () => (
  <App>
    <Switch>
      <Route path={routes.MEDICINE} component={MedicinePage} />
      <Route path={routes.HOME} component={HomePage} />
      <Route path={routes.LOGIN} component={LoginPage} />
    </Switch>
  </App>
);
