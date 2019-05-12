import {constants} from './constants';
import type {Store} from "../../store/reducers/types";
import {services} from "./services";

export const defaultPrinter = defaultPrinter => ({
  type: constants.SETTINGS_DEFAULT_PRINTERS,
  payload: defaultPrinter,
});

export const backgroundPrint = bgprint => ({
  type: constants.SETTINGS_DEFAULT_PRINTER_BACKGROUND_PRINT,
  payload: bgprint,
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
