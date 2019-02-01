// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type {MedicineFormStateType} from "../../../types/state/MedicineFormStateType";
import {bindActionCreators} from "redux";
import {addMedicineActions} from "../../../actions/medicineFormActions";
import PatientDetails from '../../../components/prescription/steps/PatientDetails';

type State = {
  medicineForm: MedicineFormStateType
};

// Map the stuff we want from the global application state in redux to the props
function mapStateToProps(state: State) {
  return {
    medicineForm: state.medicineForm
  };
}

// Map any actions required to the props
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      setForm: addMedicineActions.setForm,
      setName: addMedicineActions.setName,
      setStrength: addMedicineActions.setStrength,
      setFrequency: addMedicineActions.setFrequency,
      setRemark: addMedicineActions.setRemark,
      setSubmitted: addMedicineActions.setSubmitted
    },
    dispatch
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(PatientDetails);
