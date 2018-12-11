/**
 * @flow
 */

import { AddMedicineConstants } from "../constants";
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";
import type {AddMedicineActionType} from "../types/action/AddMedicineActionType";


// Initialise the redux store
// Check if the local storage already has a user saved, otherwise start fresh.

const initialState: AddMedicineFormStateType;

initialState = {
currentMedicineForm:"",
currentMedicineName:"",
currentMedicineStrength:"",
currentMedicineFrequency:"",
currentMedicineRemark:"",
  submitted: false
};

export function medicineForm(state: any = initialState, action: AddMedicineActionType): AddMedicineFormStateType {
  switch (action.type) {
    case AddMedicineConstants.SET_FORM:
      return {
        ...state,
        currentMedicineForm: action.form
      };
    case AddMedicineConstants.SET_NAME:
      return {
        ...state,
        currentMedicineName: action.name
      };
    case AddMedicineConstants.SET_STRENGTH:
      return {
        ...state,
        currentMedicineStrength: action.strength
      };
    case AddMedicineConstants.SET_FREQUENCY:
      return {
        ...state,
        currentMedicineFrequency: action.frequency
      };
    case AddMedicineConstants.SET_REMARK:
      return {
        ...state,
        currentMedicineRemark: action.remark
      };
      case AddMedicineConstants.SET_SUBMITTED:
      return {
        ...state,
        submitted: action.submitted
      };

    default:
      return state;
  }
}
