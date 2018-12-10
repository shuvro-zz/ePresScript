/**
 * @flow
 */

import { AddMedicineConstants } from "../constants";
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";
import type {UserType} from "../types/common/UserType";
import type {AddMedicineActionType} from "../types/action/AddMedicineActionType";


// Initialise the redux store
// Check if the local storage already has a user saved, otherwise start fresh.
const userstring: ?string = (localStorage.getItem("user"): ?string);
var initialState: AddMedicineFormStateType;

if (userstring) {
    const jsonUser = (JSON.parse(userstring): UserType);
    const user: UserType = jsonUser;
    initialState = {
      user: user,
      loggedIn: true,
      loggingIn: false,
      error: "",
      currentMedicineForm:"",
      currentMedicineName:"",
      currentMedicineStrength:"",
      currentMedicineFrequency:"",
      currentMedicineRemark:"",
      submitted: false
    };
} else {
    initialState = {
        user: null,
        loggedIn: false,
        loggingIn: false,
        error: "",
      currentMedicineForm:"",
      currentMedicineName:"",
      currentMedicineStrength:"",
      currentMedicineFrequency:"",
      currentMedicineRemark:"",
        submitted: false
    };
}


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


  case AddMedicineConstants.LOGOUT:
      return {
        ...state,
          user: null,
          loggedIn: false,
          loggingIn: false,
          error: ""
      };
    default:
      return state;
  }
}
