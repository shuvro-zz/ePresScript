// @flow
import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard'
import navigateTo from "../features/navigation";
import {bindActionCreators} from "redux";


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
      navigate: navigateTo
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps())(Dashboard);
