import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Prescription from '../../components/prescription/Prescription';
//import { addMedicineActions } from '../../actions/medicineFormActions';
import type {MedicineFormStateType} from "../../types/state/MedicineFormStateType";

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
    },
    dispatch
  );
}


export default connect(mapStateToProps,mapDispatchToProps)(Prescription);
