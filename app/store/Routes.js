import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router';
import TreatmentContainer from'../containers/TreatmentContainer';
import LoginContainer from '../containers/LoginContainer';
import MedicineContainer from '../containers/MedicineContainer';
import DashboardContentContainer from '../containers/DashboardContentContainer'
import ProtectedRoute from '../features/protectedRoute/ProtectedRoute';
import RootContainer from '../containers/RootContainer';
import PrescriptionContainer from '../containers/presciption/PrescriptionContainer';
import ForgetPassword from '../components/forgetPassword';
const routes = (
    <Switch>
      <ProtectedRoute path="/prescription" component={PrescriptionContainer} />
      <ProtectedRoute path="/treatment" component={TreatmentContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContentContainer} />
      <ProtectedRoute path="/medicine" component={MedicineContainer} />
      <ProtectedRoute path="/root" component={RootContainer} />
      <Route path="/" exact component={LoginContainer} />
      <Route path="/forgetPassword" exact component={ForgetPassword} />
    </Switch>
);

export default routes;
