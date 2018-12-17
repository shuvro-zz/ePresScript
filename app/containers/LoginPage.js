// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginFormActions } from '../actions/loginFormActions';
import type {LoginFormStateType} from "../types/state/LoginFormStateType";

type State = {
    loginForm: LoginFormStateType

};

// Map the stuff we want from the global application state in redux to the props
function mapStateToProps(state: State) {
    return {
        loginForm: state.loginForm
    };
}

// Map any actions required to the props
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
        setUserName: loginFormActions.setUserName,
        setPassword: loginFormActions.setPassword,
        setSubmitted: loginFormActions.setSubmitted,
        login: loginFormActions.login,
        logout: loginFormActions.logout
    },
    dispatch
  );
}

type Props = {};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
