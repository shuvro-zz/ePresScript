import {medicineConstants} from '../constants';
import {medicineService} from "../services";
import {SNACKBAR_OPEN} from "../features/ui/constants";
import type {MedicineType} from "../types/common/MedicineType";

export const addMedicineActions = {
  setForm,
  setName,
  setStrength,
  setFrequency,
  setRemark,
  setSubmitted,
  saveMedicine
};

function setForm(form: string) {
  return (dispatch: any) => {
    dispatch(go(form));
  };

  function go(form: string) {
    return {
      type: medicineConstants.SET_FORM,
      form : form
    }
  }
}

function setName(name: string) {
  return (dispatch: any) => {
    dispatch(go(name));
  };

  function go(name: string) {
    return {
      type: medicineConstants.SET_NAME,
      name:name
    }
  }
}
function setStrength(strength: string) {
  return (dispatch: any) => {
    dispatch(go(strength));
  };

  function go(strength: string) {
    return {
      type: medicineConstants.SET_STRENGTH,
      strength:strength
    }
  }
}
function setFrequency(frequency: string) {
  return (dispatch: any) => {
    dispatch(go(frequency));
  };

  function go(frequency: string) {
    return {
      type: medicineConstants.SET_FREQUENCY,
      frequency:frequency
    }
  }
}
function setRemark(remark: string) {
  return (dispatch: any) => {
    dispatch(go(remark));
  };

  function go(remark: string) {
    return {
      type: medicineConstants.SET_REMARK,
      remark:remark
    }
  }
}

function setSubmitted(value: boolean) {
  return (dispatch: any) => {
    dispatch(go(value));
  };

  function go(value: boolean) {
    return {
      type: medicineConstants.SET_SUBMITTED,
      submitted: value
    }
  }
}


function saveMedicine(value: object) {
  console.log("inside saveMedicine()");
  return (dispatch: any) => {
    medicineService.saveMedicine(value).then(
      (medicine : MedicineType) => {
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
  function success(medicine: MedicineType , msg) { return {
    type: medicineConstants.SAVE_MEDICINE_SUCCESS,
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
