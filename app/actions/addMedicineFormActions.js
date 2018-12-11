import { addMedicineConstants } from '../constants';
import { loginService } from '../services';

export const addMedicineActions = {
  setForm,
  setName,
  setStrength,
  setFrequency,
  setRemark,
  logout,
  setSubmitted
};


function setForm(form: string) {
  return (dispatch: any) => {
    dispatch(go(form));
  };

  function go(form: string) {
    return {
      type: addMedicineConstants.SET_FORM,
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
      type: addMedicineConstants.SET_NAME,
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
      type: addMedicineConstants.SET_STRENGTH,
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
      type: addMedicineConstants.SET_FREQUENCY,
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
      type: addMedicineConstants.SET_REMARK,
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
      type: addMedicineConstants.SET_SUBMITTED,
      submitted: value
    }
  }
}
function logout() {
  loginService.logout();
  return {
    type: addMedicineActions.LOGOUT };
}
