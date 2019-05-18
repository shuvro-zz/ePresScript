/**
 * @flow
 */

import {constants} from "./constants";

let initialState = {
  submitted: false,
  treatment: [],
  updatedTreatment: '',
  isProcessing: false,
  processed: false,
  error: false,
  treatmentUpdateError: false,
  errorResponse: ''
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
      case constants.UPDATE_TREATMENT_MEDICINE_SUCCESS:
      return{
        ...state,
        updatedTreatment : action.payload
      };

      case constants.UPDATE_TREATMENT_MEDICINE_FAILURE:
        return{
          ...state,
          treatmentUpdateError : true,
          errorResponse : action.payload
        }; 
        case constants.UPDATE_TREATMENT_MEDICINE_REQUEST:
          return{
            ...state,
            updatedTreatment : action.payload
          }; 
            default:
      return state;
  }
}
