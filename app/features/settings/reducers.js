/**
 * @flow
 */

import {constants} from "./constants";

let initialState = {
  defaultPrinter:'',
  backgroundPrint: true,
};

export default function settingsState(state: any = initialState, action){
  switch (action.type) {
    case constants.SETTINGS_DEFAULT_PRINTERS:
      return {
        ...state,
        defaultPrinter: action.payload
      };
    case constants.SETTINGS_DEFAULT_PRINTER_BACKGROUND_PRINT:
      return {
        ...state,
        backgroundPrint: action.payload
      };
    case constants.SETTINGS_SAVE_SUCCESS:
      return {
        ...state,
        defaultPrinter: action.settings.defaultPrinter,
        backgroundPrint: action.settings.backgroundPrint
      };
    case constants.SETTINGS_FETCH_SUCCESS:
      return {
        ...state,
        defaultPrinter: action.settings.default_printer,
        backgroundPrint: action.settings.background_print === "1"
      };
    default:
      return state;
  }
}
