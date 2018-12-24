// @flow
import React, { PureComponent } from 'react';

import type { Store } from '../reducers/types';

import { connect } from 'react-redux';
import DashboardElems from '../components/DashboardItems'
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";
import type {AuthenticationStateType} from "../types/state/AuthenticationStateType";
import {addMedicineActions} from "../actions/addMedicineFormActions";
import {bindActionCreators} from "redux";
import {authenticationActions} from "../actions/authenticationActions"

type State = {
  authentication: AuthenticationStateType
};

// Map the stuff we want from the global application state in redux to the props
function mapStateToProps(state: State) {
  return {
    authentication: state.authentication
  };
}

// Map any actions required to the props
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      logout : authenticationActions.logout
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardElems);
