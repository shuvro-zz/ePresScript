/**
 * @flow
 */

import {constants} from "./constants";

const initialState = {
  profile: "",
  fetchSuccess: false,
  updating: false,
  updateSuccess: false
};

export default function usermanagementState(state: any = initialState, action){
  switch (action.type) {
    case constants.PROFILE_FETCH_REQUEST:
      return {
        ...state,
        fetchSuccess: false
      };
    case constants.PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        fetchSuccess: true
      };
    case constants.PROFILE_FETCH_FAILURE:
    return {
      ...state,
      fetchSuccess: false
    };
    case constants.PROFILE_UPDATE_REQUEST:
      return {
        ...state,
        updating: true
      };
    case constants.PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        updating: false,
        updateSuccess: true
      };
    case constants.PROFILE_UPDATE_FAILURE:
      return {
        ...state,
        updating: false
      };
    default:
      return state;
  }
}
