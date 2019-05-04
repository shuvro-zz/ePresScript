// @flow
import React, { Component } from 'react';

import { connect } from 'react-redux';
import navigateTo from "../features/navigation";
import Dashboard from '../components/dashboard/Dashboard'

const mapStateToProps = state => ({
  securityState: state.securityState,
  usermanagementState: state.usermanagementState
});
const mapDispatchToProps = {
  navigateTo
};
class DashboardContentContainer extends Component {
  constructor(props) {
    super(props);


    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }

  render() {
    const {
      navigateTo, location , securityState , fetchProfile
    } = this.props;
    console.log("DashboardContentContainer");
    console.log(this.props);
    return (
      <Dashboard navigateTo={navigateTo}
                 location={location}
                 securityState={securityState}
                 fetchProfile={fetchProfile}
      />
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DashboardContentContainer);
