// @flow

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Treatment from '../components/Treatment';
import {fetchTreatment , saveTreatment} from "../features/treatment";

const mapStateToProps = state => ({
  medicineState: state.medicineState,
  securityState: state.securityState,
  treatmentState: state.treatmentState
});

const mapDispatchToProps = {
  fetchTreatment , saveTreatment
};

class TreatmentContainer extends Component {
  constructor(props) {
    super(props);

    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }

  render() {
    const {
     medicineState, securityState , treatmentState, saveTreatment, fetchTreatment
    } = this.props;
    console.log("Treatment Container");
    console.log(this.props);
    return (
      <Treatment
        medicineState={medicineState}
        securityState={securityState}
        treatmentState={treatmentState}
        saveTreatment={saveTreatment}
        fetchTreatment={fetchTreatment}
      />
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(TreatmentContainer);
