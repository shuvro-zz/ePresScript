// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type {MedicineFormStateType} from "../../../types/state/MedicineFormStateType";
import {bindActionCreators} from "redux";
import CheckUpExamination from '../../../components/prescription/steps/CheckUpExamination';

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

export default connect(mapStateToProps,mapDispatchToProps)(CheckUpExamination);
