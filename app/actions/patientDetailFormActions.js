import {medicineConstants} from '../constants';

export const patientDetailFormActions = {
  setForm,
  setName,
  setStrength,
  setFrequency,
  setRemark,
  setSubmitted
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

