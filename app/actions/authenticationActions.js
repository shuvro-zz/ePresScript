import {authenticationService} from "../services";
import type {UserType} from "../types/common/UserType";
import {history} from "../store/configureStore";
import {authenticationConstants} from "../constants";
import {SNACKBAR_OPEN} from '../features/ui/constants';
const log = require('electron-log');
const {ipcRenderer} = require('electron');


export const authenticationActions = {
  login,
  logout
};

function login(username: string, password: string) {
  return (dispatch: any) => {
    dispatch(request({ username }));

    authenticationService.login(username, password)
      .then(
        (user: UserType) => {
          if (user) {
            ipcRenderer.send('resize-me-please', false);
            dispatch(success(user));
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

  function request(user: {username: string}) { return { type: authenticationConstants.LOGIN_REQUEST, user } }
  function success(user: UserType) { return { type: authenticationConstants.LOGIN_SUCCESS, user } }
  function failure(error) {
    return {
      type:SNACKBAR_OPEN,
      message: error,
      variant: 'error'
    }
  }
}

function logout(isLoggedIn:boolean) {
  log.info("Logout request");
  if (isLoggedIn) {
    history.push('/');
  }
  ipcRenderer.send('resize-me-please', true);
  authenticationService.logout();
  return {
    type: authenticationConstants.LOGOUT };
}
