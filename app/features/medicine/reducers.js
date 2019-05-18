/**
 * @flow
 */

import {constants} from "./constants";
let initialState = {
  product_name:"",
  type:"",
  strength:"",
  generic:"",
  indication:"",
  medicineList:"",
  submitted: false,
  medicine:'',
  saveMedicineSuccess: false
};

export default function medicineState(state: any = initialState, action){
  switch (action.type) {
    case constants.SET_PRODUCT_NAME:
      return {
        ...state,
        product_name: action.payload
      };
    case constants.SET_TYPE:
      return {
        ...state,
        type: action.payload
      };
    case constants.SET_STRENGTH:
      return {
        ...state,
        strength: action.payload
      };
    case constants.SET_GENRIC:
      return {
        ...state,
        generic: action.payload
      };
    case constants.SET_INDICATION:
      return {
        ...state,
        indication: action.payload
      };
      case constants.SET_SUBMITTED:
      return {
        ...state,
        submitted: action.submitted
      };
    case constants.SAVE_MEDICINE_REQUEST:
      return {
        ...state,
        saveMedicineSuccess: false
      };
    case constants.SAVE_MEDICINE_SUCCESS:
      return {
        ...state,
        medicine: action.medicine,
        saveMedicineSuccess: true
      };
    case constants.RESET_MEDICINE_STATE:
      return initialState;
    case constants.FETCH_MEDICINE_SUCCESS:
        return{
          ...state,
          medicineList: action.medicineList
        };

    default:
      return state;
  }
}
