// @flow
import React, { Component } from 'react';

import { connect } from 'react-redux';
import navigateTo from "../features/navigation";
import Dashboard from '../components/dashboard/Dashboard'
import {fetchProfile} from "../features/usermanagement";

const mapStateToProps = state => ({
  securityState: state.securityState,
  usermanagementState: state.usermanagementState
});

class DashboardContentContainer extends Component {
  constructor(props) {
    super(props);
    console.log("DashboardContentContainer");
    console.log(this.props);

    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }
  // componentDidMount() {
  //   this.props.fetchProfile(this.props.securityState.user.access_token);
  // }

  render() {
    const {
      navigateTo, location
    } = this.props;
    return (
      <Dashboard navigateTo={navigateTo} location={location}/>
    );
  }
}

const mapDispatchToProps = {
  navigateTo,
  fetchProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContentContainer);
