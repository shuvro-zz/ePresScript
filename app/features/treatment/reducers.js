/**
 * @flow
 */

import {constants} from "./constants";

let initialState = {
  submitted: false,
  treatment: "",
  isProcessing: false,
  processed: false,
  error: false
};

export default function treatmentState(state: any = initialState, action){
  switch (action.type) {
    case constants.SAVE_TREATMENT_REQUEST:
      return {
        ...state,
        treatment: action.treatment,
      };
    case constants.FETCH_TREATMENT_REQUEST:
        return{
          ...state,
          isProcessing: true,
          error: false
        };
    case constants.FETCH_TREATMENT_SUCCESS:
    return{
      ...state,
      treatment: action.treatment,
      isProcessing: false,
      processed: true,
      error: false
    };
    case constants.FETCH_TREATMENT_FAILURE:
      return{
        ...state,
        isProcessing: false,
        processed: false,
        error: true
      };
    default:
      return state;
  }
}
