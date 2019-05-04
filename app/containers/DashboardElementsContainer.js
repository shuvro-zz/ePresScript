// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashboardElements from '../components/dashboard/DashboardElements';
import {logout} from "../features/security";
import navigateTo from "../features/navigation";
import {fetchProfile , updateProfile} from "../features/usermanagement";

const mapStateToProps = state => ({
  securityState: state.securityState,
  snackBarOpen: state.uiReducer.snackBarOpen,
  message: state.uiReducer.message,
  usermanagementState: state.usermanagementState,
  loggedIn: state.securityState.loggedIn,
});
const mapDispatchToProps = {
  logout,
  navigateTo,
  updateProfile
};

class DashboardElementsContainer extends Component {
  constructor(props) {
    super(props);

    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }


  render() {
    const {logout, history , navigateTo , location , message, snackBarOpen, loggedIn, usermanagementState, securityState, updateProfile } = this.props;
    console.log("DashboardElementsContainer Container");
    console.log(this.props);
    return (
      <DashboardElements
        usermanagementState={usermanagementState}
        securityState={securityState}
        logout={logout}
        navigateTo={navigateTo}
        location={location}
        updateProfile={updateProfile}
      />
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(DashboardElementsContainer);
