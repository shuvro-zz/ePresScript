// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginFormActions } from '../actions/loginFormActions';
import { authenticationActions } from '../actions/authenticationActions';
import type {LoginFormStateType} from "../types/state/LoginFormStateType";
import type {AuthenticationStateType} from "../types/state/AuthenticationStateType";

type State = {
  loginForm: LoginFormStateType,
  authentication: AuthenticationStateType

};

// Map the stuff we want from the global application state in redux to the props
function mapStateToProps(state: State) {
    return {
      loginForm: state.loginForm,
      authentication: state.authentication
    };
}

// Map any actions required to the props
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
        setUserName: loginFormActions.setUserName,
        setPassword: loginFormActions.setPassword,
        setSubmitted: loginFormActions.setSubmitted,
        login: authenticationActions.login,
        logout: authenticationActions.logout
    },
    dispatch
  );
}

type Props = {};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
