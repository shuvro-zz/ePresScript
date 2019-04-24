import {constants} from './constants';
import {services} from "./services";
export const profileActions = {
  fetchProfile
};

export function fetchProfile(access_token) {
  console.log("Fetch profile request");
  return (dispatch: any) => {
    dispatch(request({ access_token }));

    services.fetchProfile(access_token)
      .then(
        (profile) => {
          console.log(profile);
          dispatch(success(profile));
        },
        (error: any) => {
          dispatch(failure());
        }
      );
  };

  function request(access_token: {access_token: string}) { return { type: constants.PROFILE_FETCH_REQUEST, access_token } }
  function success(profile: Object ){ return { type: constants.PROFILE_FETCH_SUCCESS, profile } }
  function failure() {
    return {
      type: constants.PROFILE_FETCH_FAILURE
    }
  }
}
