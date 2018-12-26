import {authenticationService} from "../services";
import type {UserType} from "../types/common/UserType";
import {history} from "../store/configureStore";
import {authenticationConstants} from "../constants";

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
            dispatch(success(user));
            history.push('/medicine');
          } else {
            dispatch(failure(user));
          }
        },
        (error: any) => {
          dispatch(failure(error));
        }
      );
  };

  function request(user: {username: string}) { return { type: authenticationConstants.LOGIN_REQUEST, user } }
  function success(user: UserType) { return { type: authenticationConstants.LOGIN_SUCCESS, user } }
  function failure(error: any) { return { type: authenticationConstants.LOGIN_FAILURE, error } }
}

function logout(isLoggedIn:boolean) {
  console.log("inside logout()");
  console.log(isLoggedIn);
  if (isLoggedIn) {
    history.push('/');
  }
  authenticationService.logout();
  return {
    type: authenticationConstants.LOGOUT };
}
