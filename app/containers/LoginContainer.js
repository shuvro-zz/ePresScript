// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { login , logout, setPassword ,setSubmitted ,setUserName} from '../features/security';
import {fetchProfile} from "../features/usermanagement";

const mapStateToProps = state => ({
  loggingIn: state.securityState.loggingIn
});


class LoginContainer extends Component {
  constructor(props) {
    super(props);

    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }

  render() {
    const {
      login,
      loggingIn,
      fetchProfile
    } = this.props;
    console.log("Login container");
    console.log(this.props);
    return (
      <Login
        login={login}
        loggingIn={loggingIn}
        fetchProfile={fetchProfile}
      />
    );
  }
}

const mapDispatchToProps = {
  login,
  setPassword ,setSubmitted ,setUserName, fetchProfile
};


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
