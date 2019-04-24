// @flow
import React, { Component } from 'react';

import { connect } from 'react-redux';
import navigateTo from "../features/navigation";
import Dashboard from '../components/dashboard/Dashboard'
import {fetchProfile} from "../features/usermanagement";
import { fetchMedicine } from '../features/medicine';

const mapStateToProps = state => ({
  securityState: state.securityState,
  usermanagementState: state.usermanagementState
});
const mapDispatchToProps = {
  navigateTo,
  fetchProfile,
  fetchMedicine
};
class DashboardContentContainer extends Component {
  constructor(props) {
    super(props);
    console.log("DashboardContentContainer");
    console.log(this.props);

    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }


  render() {
    const {
      navigateTo, location , fetchMedicine, securityState
    } = this.props;
    return (
      <Dashboard navigateTo={navigateTo}
                 location={location}
                 fetchMedicine={fetchMedicine}
                 securityState={securityState}
      />
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DashboardContentContainer);
