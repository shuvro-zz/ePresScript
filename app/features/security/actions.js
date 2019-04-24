import {services} from "./services";
//import type {UserType} from "../types/common/UserType";
import {history} from "../../store/configureStore";
import {constants} from "./constants";
import {SNACKBAR_OPEN} from '../../features/ui/constants';

import {fetchProfile} from "../usermanagement";

const log = require('electron-log');
const {ipcRenderer} = require('electron');


export const securityActions = {
  login,
  logout,
  setUserName,
  setPassword,
  setSubmitted
};

export function login(username: string, password: string) {
  return (dispatch: any) => {
    dispatch(request({ username }));

    services.login(username, password)
      .then(
        (user) => {

          if (user) {
            ipcRenderer.send('resize-me-please', false);
            dispatch(success(user));
            //Fetch other necessary stuff

            history.push('/dashboard');

          } else {
            const errorString = `Please Check Your Credentials!`;
            console.log(errorString);
            dispatch(failure(errorString));
          }
        },
        (error: any) => {
          const errorString = `Email or Password is wrong`;
          dispatch(failure(errorString));
        }
      );
  };

  function request(user: {username: string}) { return { type: constants.LOGIN_REQUEST, user } }
  function success(user: Object ){

    return {
      type: constants.LOGIN_SUCCESS, user
    }
  }
  function failure(error) {
    return {
      type:SNACKBAR_OPEN,
      message: error,
      variant: 'error'
    }
  }
}

export function logout(isLoggedIn:boolean) {
  log.info("Logout request");
  if (isLoggedIn) {
    history.push('/');
  }
  ipcRenderer.send('resize-me-please', true);
  services.logout();
  return {
    type: constants.LOGOUT };
}


export function setUserName(username: string) {
  return (dispatch: any) => {
    dispatch(go(username));
  };

  function go(username: string) {
    return {
      type: constants.SET_USERNAME,
      username: username
    }
  }
}


export function setPassword(password: string) {
  return (dispatch: any) => {
    dispatch(go(password));
  };

  function go(password: string) {
    return {
      type: constants.SET_PASSWORD,
      password: password
    }
  }
}


export function setSubmitted(value: boolean) {
  return (dispatch: any) => {
    dispatch(go(value));
  };

  function go(value: boolean) {
    return {
      type: constants.SET_SUBMITTED,
      submitted: value
    }
  }
}


