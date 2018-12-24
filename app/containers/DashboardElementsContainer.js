// @flow
import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import DashboardElems from '../components/DashboardItems'
import type {AuthenticationStateType} from "../types/state/AuthenticationStateType";
import {bindActionCreators} from "redux";
import {authenticationActions} from "../actions/authenticationActions"
import navigateTo from "../features/navigation";


/**
 *
 * Add navigate
 */
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
      logout : authenticationActions.logout,
      navigate: navigateTo
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardElems);
