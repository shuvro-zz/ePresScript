import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import TreatmentContainer from '../containers/TreatmentContainer';
import LoginPage from '../containers/LoginContainer';
import MedicinePage from '../containers/MedicineContainer'
import DashboardPage from '../containers/DashboardContentContainer'
import PrivateRoute from '../features/protectedRoute/ProtectedRoute';
import RootPage from '../containers/RootContainer';
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
