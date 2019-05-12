import {services} from "./services";
import {history} from "../../store/configureStore";
import {constants} from "./constants";
import {SNACKBAR_OPEN} from '../../features/ui/constants';
import {profileActions} from "../usermanagement/actions";
import {medicineActions} from "../medicine/actions";
import {treatmentActions} from  "../treatment/actions";
import {fetchSettings} from "../settings/actions";

const {ipcRenderer} = require('electron');

import type { Store } from '../../store/reducers/types';

export const securityActions = {
  login,
  logout,
  setUserName,
  setPassword,
  setSubmitted,
  fetchData
};


export function login(username: string, password: string) {
  console.log("login request !");

  return (dispatch , getState: Store) => {
    dispatch(request({ username }));
    services.login(username, password)
      .then(
        (user) => {

          if (user) {
            ipcRenderer.send('resize-me-please', false);



            dispatch(success(user));
            dispatch(loadDataInBackground());
            //Fetch other necessary stuff
            //dispatch(profileActions.fetchProfile());
            //dispatch(medicineActions.fetchMedicine());


            //history.push('/dashboard');
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

  function request(user: {username: string}) {

    return { type: constants.LOGIN_REQUEST, user } }
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
function navigateToFirstPage() {
  history.push('/dashboard');
}

function loadDataInBackground() {
  try {
    return (dispatch: any) => {

      dispatch(profileActions.fetchProfile());
      dispatch(medicineActions.fetchMedicine());
      dispatch(treatmentActions.fetchTreatment());
      dispatch(fetchSettings());

      navigateToFirstPage();
    };
  } catch (error) {
    console.log(error);
  }
}

export function logout(isLoggedIn:boolean) {
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
export function fetchData() {

  return (dispatch: any) => {
    dispatch(go());

  };

  function go() {
    return {
      type: constants.FETCH_DATA_SUCCESS,
      fetchedData: true
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


