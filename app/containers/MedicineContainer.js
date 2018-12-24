// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddMedicine from '../components/AddMedicine';
import { addMedicineActions } from '../actions/addMedicineFormActions';
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";
import { authenticationActions } from '../actions/authenticationActions';
import type {AuthenticationStateType} from "../types/state/AuthenticationStateType";

type State = {
  medicineForm: AddMedicineFormStateType,
  authentication: AuthenticationStateType
};

// Map the stuff we want from the global application state in redux to the props
function mapStateToProps(state: State) {
  return {
    medicineForm: state.medicineForm,
    authentication: state.authentication
  };
}

// Map any actions required to the props
function mapDispatchToProps(dispatch: any) {
  console.log('working');
  console.log(addMedicineActions);
  return bindActionCreators(
    {
      setForm: addMedicineActions.setForm,
      setName: addMedicineActions.setName,
      setStrength: addMedicineActions.setStrength,
      setFrequency: addMedicineActions.setFrequency,
      setRemark: addMedicineActions.setRemark,
      setSubmitted: addMedicineActions.setSubmitted,
      logout : authenticationActions.logout
    },
    dispatch
  );
}

type Props = {};

export default connect(mapStateToProps,mapDispatchToProps)(AddMedicine);
