/**
 * @flow
 */

import {constants} from "./constants";
let initialState = {
  currentMedicineForm:"",
  currentMedicineName:"",
  currentMedicineStrength:"",
  currentMedicineFrequency:"",
  currentMedicineRemark:"",
  medicineList:"",
  submitted: false
};

export default function medicineState(state: any = initialState, action){
  switch (action.type) {
    case constants.SET_FORM:
      return {
        ...state,
        currentMedicineForm: action.form
      };
    case constants.SET_NAME:
      return {
        ...state,
        currentMedicineName: action.name
      };
    case constants.SET_STRENGTH:
      return {
        ...state,
        currentMedicineStrength: action.strength
      };
    case constants.SET_FREQUENCY:
      return {
        ...state,
        currentMedicineFrequency: action.frequency
      };
    case constants.SET_REMARK:
      return {
        ...state,
        currentMedicineRemark: action.remark
      };
      case constants.SET_SUBMITTED:
      return {
        ...state,
        submitted: action.submitted
      };
    case constants.SAVE_MEDICINE_SUCCESS:
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
    case constants.FETCH_MEDICINE_SUCCESS:
        return{
          ...state,
          medicineList: action.medicineList
        };

    default:
      return state;
  }
}
