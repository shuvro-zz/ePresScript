/**
 * @flow
 */

import {constants} from "./constants";

const initialState = {
  profile: ""
};

export default function usermanagementState(state: any = initialState, action){
  switch (action.type) {
    case constants.PROFILE_FETCH_REQUEST:
      return {
        ...state
      };
    case constants.PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        profile: action.profile
      };
    case constants.PROFILE_FETCH_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
