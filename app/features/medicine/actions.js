import {constants} from './constants';
import {services} from "./services";
import {SNACKBAR_OPEN} from "../ui/constants";
import type {Store} from "../../store/reducers/types";

export const medicineActions = {
  setForm,
  setName,
  setStrength,
  setFrequency,
  setRemark,
  setSubmitted,
  saveMedicine,
  fetchMedicine
};

export function setForm(form: string) {
  return (dispatch: any) => {
    dispatch(go(form));
  };

  function go(form: string) {
    return {
      type: constants.SET_FORM,
      form : form
    }
  }
}

export function setName(name: string) {
  return (dispatch: any) => {
    dispatch(go(name));
  };

  function go(name: string) {
    return {
      type: constants.SET_NAME,
      name:name
    }
  }
}
export function setStrength(strength: string) {
  return (dispatch: any) => {
    dispatch(go(strength));
  };

  function go(strength: string) {
    return {
      type: constants.SET_STRENGTH,
      strength:strength
    }
  }
}
export function setFrequency(frequency: string) {
  return (dispatch: any) => {
    dispatch(go(frequency));
  };

  function go(frequency: string) {
    return {
      type: constants.SET_FREQUENCY,
      frequency:frequency
    }
  }
}
export function setRemark(remark: string) {
  return (dispatch: any) => {
    dispatch(go(remark));
  };

  function go(remark: string) {
    return {
      type: constants.SET_REMARK,
      remark:remark
    }
  }
}

export function setSubmitted(value: boolean) {
  return (dispatch: any) => {
    dispatch(go(value));
  };

  function go(value: boolean) {
    return {
      type: constants.SET_SUBMITTED,
      submitted: value
    }
  }
}


export function saveMedicine(value: object) {
  console.log("inside saveMedicine()");
  return (dispatch: any) => {
    services.saveMedicine(value).then(
      (medicine ) => {
        if (medicine) {
          const msg = `New medicine added!`;
          dispatch(success(medicine, msg));
        } else {
          const errorString = `Please Check the details you have provided!`;
          dispatch(failure(errorString));
        }
      },
      (error: any) => {
        const errorString = `Cannot save the Medicine`;
        dispatch(failure(errorString));
      }
    );
  };
  function success(medicine , msg) { return {
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
