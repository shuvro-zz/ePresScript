/**
 * @flow
 */

import { constants } from "./constants";

// Initialise the redux store
// Check if the local storage already has a user saved, otherwise start fresh.
const userstring: ?string = (localStorage.getItem("user"): ?string);
let initialState;

if (userstring) {
  const jsonUser = (JSON.parse(userstring));
  const user = jsonUser;
  initialState = {
    user: user,
    loggedIn: true,
    loggingIn: false,
    error: ""
  };
} else {
  initialState = {
    user: null,
    loggedIn: false,
    loggingIn: false,
    error: ""
  };
}

export default function securityState(state: any = initialState, action) {
  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return {
        ...state,
        user: action.user,
        loggedIn: false,
        loggingIn: true,
        error: ""
      };
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loggedIn: true,
        loggingIn: false,
        error: ""
      };
    case constants.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loggedIn: false,
        loggingIn: false,
        error: action.error
      };
    case constants.LOGOUT:
      return {
        ...state,
        user: null,
        loggedIn: false,
        loggingIn: false,
        error: ""
      };
    default:
      return state;
  }
}
