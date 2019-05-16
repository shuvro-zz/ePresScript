import {constants} from './constants';
import {services} from "./services";
import {SNACKBAR_OPEN} from "../ui/constants";
import type {Store} from "../../store/reducers/types";
import {openSnackBar} from "../ui";

export const medicineActions = {
  saveMedicine,
  fetchMedicine
};

export const setProductName = value => ({
  type: constants.SET_PRODUCT_NAME,
  payload: value,
});

export const setType = value => ({
  type: constants.SET_TYPE,
  payload: value,
});

export const setStrength = value => ({
  type: constants.SET_STRENGTH,
  payload: value,
});

export const setGeneric = value => ({
  type: constants.SET_GENRIC,
  payload: value,
});
export const setIndication = value => ({
  type: constants.SET_INDICATION,
  payload: value,
});

export function saveMedicine(medicine: object) {
  console.log("inside saveMedicine()");
  return (dispatch: any , getState: Store) => {
    const { securityState } = getState();
    const { access_token } = securityState.user;
    dispatch(request());
    services.saveMedicine(access_token, medicine).then(
      (medicine ) => {
        if (medicine) {
          const msg = `New medicine added!`;
          dispatch(success(medicine, msg));
          dispatch({type: constants.RESET_MEDICINE_STATE});
        } else {
          const errorString = `Please Check the details you have provided!`;
          dispatch(failure(errorString));
        }
      },
      (error: any) => {
        console.log(error);
        const errorString = `Cannot save the Medicine`;
        dispatch(failure(error));
      }
    );
  };
  function request() { return { type: constants.SAVE_MEDICINE_REQUEST} }
  function success(medicine , msg) {
    return {
    type: constants.SAVE_MEDICINE_SUCCESS,
    medicine
  }}
  function failure(error) {
    return {
      type:SNACKBAR_OPEN,
      message: error,
      variant: 'error'
    }
  }
}

export function fetchMedicine() {
  return (dispatch , getState: Store) => {
    const { securityState } = getState();
    const { access_token } = securityState.user;

    dispatch(request());
    services.fetchMedicine(access_token)
      .then(
        (medicineList) => {
          dispatch(success(medicineList));
        },
        (error: any) => {
          dispatch(failure());
        }
      );
  };

  function request() { return { type: constants.FETCH_MEDICINE_REQUEST} }
  function success(medicineList: Object ){
    return {
      type: constants.FETCH_MEDICINE_SUCCESS, medicineList
    }
  }
  function failure() {
    return {
      type: constants.FETCH_MEDICINE_FAILURE
    }
  }
}
