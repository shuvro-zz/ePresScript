/**
 * @flow
 */

import {medicineConstants, loginFormConstants} from "../constants";
import type {MedicineFormStateType} from "../types/state/MedicineFormStateType";
import type {MedicineActionType} from "../types/action/MedicineActionType";


// Initialise the redux store
// Check if the local storage already has a user saved, otherwise start fresh.

var initialState: MedicineFormStateType;

initialState = {
  currentMedicineForm:"",
  currentMedicineName:"",
  currentMedicineStrength:"",
  currentMedicineFrequency:"",
  currentMedicineRemark:"",
  submitted: false
};

export function medicineForm(state: any = initialState, action){
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
    case medicineConstants.SAVE_MEDICINE_SUCCESS:
      return {
        ...state,
        medicine: action.medicine,
        error: "",
        currentMedicineForm:"",
        currentMedicineName:"",
        currentMedicineStrength:"",
        currentMedicineFrequency:"",
        currentMedicineRemark:""
      };
    default:
      return state;
  }
}
