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
    case addMedicineConstants.SET_FORM:
      return {
        ...state,
        currentMedicineForm: action.form
      };
    case addMedicineConstants.SET_NAME:
      return {
        ...state,
        currentMedicineName: action.name
      };
    case addMedicineConstants.SET_STRENGTH:
      return {
        ...state,
        currentMedicineStrength: action.strength
      };
    case addMedicineConstants.SET_FREQUENCY:
      return {
        ...state,
        currentMedicineFrequency: action.frequency
      };
    case addMedicineConstants.SET_REMARK:
      return {
        ...state,
        currentMedicineRemark: action.remark
      };
      case addMedicineConstants.SET_SUBMITTED:
      return {
        ...state,
        submitted: action.submitted
      };
    default:
      return state;
  }
}
