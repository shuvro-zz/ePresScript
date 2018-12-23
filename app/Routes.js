import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import routesPath from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import MedicinePage from './containers/MedicinePage'
import DashboardPage from './containers/DashboardPage'
import PrivateRoute from './containers/PrivateRoute';
import RootPage from './containers/RootPage';
const routes = (
  <div>
    <Switch>
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <PrivateRoute path="/medicine" component={MedicinePage} />
      <PrivateRoute path="/root" component={RootPage} />
      <Route path="/" component={LoginPage} />
    </Switch>
  </div>
);

export default routes;
