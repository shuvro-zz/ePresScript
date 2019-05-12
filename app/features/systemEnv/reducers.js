/**
 * @flow
 */

import {constants} from "./constants";

let initialState = {
  printers:[],
  defaultPrinter:'',
  printBackground: true,
};

export default function systemEnvState(state: any = initialState, action){
  switch (action.type) {
    case constants.SYSTEM_PRINTERS:
      return {
        ...state,
        printers: action.payload,
      };
    case constants.SYSTEM_DEFAULT_PRINTERS:
      return {
        ...state,
        defaultPrinter: action.defaultPrinter
      };
    case constants.SYSTEM_DEFAULT_PRINTER_BACKGROUND_PRINT:
      return {
        ...state,
        printBackground: action.printBackground
      };
    default:
      return state;
  }
}
