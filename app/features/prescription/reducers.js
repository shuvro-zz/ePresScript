/**
 * @flow
 */

import {constants} from "./constants";

let initialState = {
  patientName:'',
  patientAge:'',
  patientSex:'',
  patientMobile:'',
  patientEmail:'',
  patientPatientId:'',
  cc: [],
  oe: [],
  tests: [],
  medicine: [],
  advice: '',
  followupdate: ''


};

export default function prescriptionState(state: any = initialState, action){
  switch (action.type) {
    case constants.SET_PATIENT_NAME:
      return {
        ...state,
        patientName: action.payload
      };
    case constants.SET_PATIENT_AGE:
      return {
        ...state,
        patientAge: action.payload
      };
    case constants.SET_PATIENT_SEX:
      return {
        ...state,
        patientSex: action.payload
      };
    case constants.SET_PATIENT_MOBILE:
      return {
        ...state,
        patientMobile: action.payload
      };
    case constants.SET_PATIENT_EMAIL:
      return {
        ...state,
        patientEmail: action.payload
      };
    case constants.SET_PATIENT_PATIENTID:
      return {
        ...state,
        patientPatientId: action.payload
      };
    case constants.SET_PATIENT_OE:
      return {
        ...state,
        oe: [...state.oe, action.payload]
      };
    case constants.SET_PATIENT_TESTS:
      return {
        ...state,
        tests: [...state.tests, action.payload]
      };
    case constants.SET_PATIENT_CC:
      return {
        ...state,
        cc: [...state.cc, action.payload]
      };
    case constants.SET_PATIENT_MEDICINE:
      return {
        ...state,
        medicine: [...state.medicine, action.payload]
      };
    case constants.SET_PATIENT_ADVICE:
      return {
        ...state,
        advice: action.payload
      };
    case constants.SET_PATIENT_FOLLOWUPDATE:
      return {
        ...state,
        followupdate: action.payload
      };
    default:
      return state;
  }
}
