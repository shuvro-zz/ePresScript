/**
 * @flow
 */

import {patientDetailsConstants} from "../constants";
import type {PatientDetailsStateType} from "../types/state/PatientDetailsStateType";
import type {PatientDetailsActionType} from "../types/action/PatientDetailsActionType";


// Initialise the redux store
// Check if the local storage already has a user saved, otherwise start fresh.

var initialState: PatientDetailsStateType;

initialState = {
  currentMedicineForm:"",
  currentMedicineName:"",
  currentMedicineStrength:"",
  currentMedicineFrequency:"",
  currentMedicineRemark:"",
  submitted: false
};

export function medicineForm(state: any = initialState, action: PatientDetailsActionType): PatientDetailsStateType {
  switch (action.type) {
    case medicineConstants.SET_FORM:
      return {
        ...state,
        currentMedicineForm: action.form
      };
    case medicineConstants.SET_NAME:
      return {
        ...state,
        currentMedicineName: action.name
      };
    case medicineConstants.SET_STRENGTH:
      return {
        ...state,
        currentMedicineStrength: action.strength
      };
    case medicineConstants.SET_FREQUENCY:
      return {
        ...state,
        currentMedicineFrequency: action.frequency
      };
    case medicineConstants.SET_REMARK:
      return {
        ...state,
        currentMedicineRemark: action.remark
      };
      case medicineConstants.SET_SUBMITTED:
      return {
        ...state,
        submitted: action.submitted
      };
    default:
      return state;
  }
}
