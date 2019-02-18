/**
 * @flow
 */

import { authenticationConstants } from "../constants";
import type {AuthenticationStateType} from "../types/state/AuthenticationStateType";
import type {UserType} from "../types/common/UserType";
import type {AuthenticationActionType} from "../types/action/AuthenticationActionType";


// Initialise the redux store
// Check if the local storage already has a user saved, otherwise start fresh.
const userstring: ?string = (localStorage.getItem("user"): ?string);
var initialState: AuthenticationStateType;

if (userstring) {
  const jsonUser = (JSON.parse(userstring): UserType);
  const user: UserType = jsonUser;
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

export function authentication(state: any = initialState, action: AuthenticationActionType): AuthenticationStateType {
  switch (action.type) {
    case authenticationConstants.LOGIN_REQUEST:
      return {
        ...state,
        user: action.user,
        loggedIn: false,
        loggingIn: true,
        error: ""
      };
    case authenticationConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loggedIn: true,
        loggingIn: false,
        error: ""
      };
    case authenticationConstants.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loggedIn: false,
        loggingIn: false,
        error: action.error
      };
    case authenticationConstants.LOGOUT:
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
