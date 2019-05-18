import {constants} from './constants';
import type {Store} from "../../store/reducers/types";
import {services} from "./services";

export const setPatientName = patientName => ({
  type: constants.SET_PATIENT_NAME,
  payload: patientName
});
export const setPatientAge = age => ({
  type: constants.SET_PATIENT_AGE,
  payload: age
});
export const setPatientSex = sex => ({
  type: constants.SET_PATIENT_SEX,
  payload: sex
});
export const setPatientMobile = mobile => ({
  type: constants.SET_PATIENT_MOBILE,
  payload: mobile
});
export const setPatientEmail = email => ({
  type: constants.SET_PATIENT_EMAIL,
  payload: email
});
export const setPatientPatientId = patientid => ({
  type: constants.SET_PATIENT_PATIENTID,
  payload: patientid
});


export const setCC = cc => ({
  type: constants.SET_PATIENT_CC,
  payload: cc
});
export const setOE = oe => ({
  type: constants.SET_PATIENT_OE,
  payload: oe
});
export const setTests = tests => ({
  type: constants.SET_PATIENT_TESTS,
  payload: tests
});
export const setAdvice = advice => ({
  type: constants.SET_PATIENT_ADVICE,
  payload: advice
});
export const setMedicine = medicine => ({
  type: constants.SET_PATIENT_MEDICINE,
  payload: medicine
});



export function saveSettings(data) {
  return (dispatch , getState: Store) => {
    const { securityState } = getState();
    const { access_token } = securityState.user;

    dispatch(request());
    services.saveSettings(data, access_token)
      .then(
        (settings) => {
          dispatch(success(data));
        },
        (error: any) => {
          dispatch(failure(error));
        }
      );
  };

  function request() { return { type: constants.SETTINGS_SAVE_REQUEST} }
  function success(settings: Object ){
    return {
      type: constants.SETTINGS_SAVE_SUCCESS, settings
    }
  }
  function failure(error) {
    return {
      type: constants.SETTINGS_SAVE_FAILURE , error
    }
  }
}

export function fetchSettings() {
  return (dispatch , getState: Store) => {
    const { securityState } = getState();
    const { access_token } = securityState.user;

    dispatch(request());
    services.fetchSettings()
      .then(
        (settings) => {
          console.log("settings : ", settings);
          const take_settings = {
            default_printer: settings.dataValues.default_printer, background_print: settings.dataValues.background_print};
          console.log(take_settings);
          dispatch(success(take_settings));
        },
        (error: any) => {
          dispatch(failure(error));
        }
      );
  };

  function request() { return { type: constants.SETTINGS_FETCH_REQUEST} }
  function success(settings: Object ){
    return {
      type: constants.SETTINGS_FETCH_SUCCESS, settings
    }
  }
  function failure(error) {
    return {
      type: constants.SETTINGS_FETCH_FAILURE , error
    }
  }
}
