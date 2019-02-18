/**
 * @flow
 */

import { loginFormConstants } from "../constants";
import type {LoginFormStateType} from "../types/state/LoginFormStateType";
import type {UserType} from "../types/common/UserType";
import type {LoginFormActionType} from "../types/action/LoginFormActionType";


// Initialise the redux store
// Check if the local storage already has a user saved, otherwise start fresh.
const userstring: ?string = (localStorage.getItem("user"): ?string);
var initialState: LoginFormStateType;

if (userstring) {
    const jsonUser = (JSON.parse(userstring): UserType);
    const user: UserType = jsonUser;
    initialState = {
        currentUserName: "",
        currentPassword: "",
        submitted: false
    };
} else {
    initialState = {
        currentUserName: "",
        currentPassword: "",
        submitted: false
    };
}


export function loginForm(state: any = initialState, action: LoginFormActionType): LoginFormStateType {
  switch (action.type) {
    case loginFormConstants.SET_PASSWORD:
      return {
        ...state,
        currentPassword: action.password
      };
      case loginFormConstants.SET_SUBMITTED:
      return {
        ...state,
        submitted: action.submitted
      };

      case loginFormConstants.SET_USERNAME:
      return {
        ...state,
        currentUserName: action.username
      };
    default:
      return state;
  }
}
