// @flow

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Settings from '../components/Settings';
import {fetchTreatment , saveTreatment} from "../features/treatment";

const mapStateToProps = state => ({
  medicineState: state.medicineState,
  securityState: state.securityState,
  treatmentState: state.treatmentState
});

const mapDispatchToProps = {
  fetchTreatment , saveTreatment
};

class SettingsContainer extends Component {
  constructor(props) {
    super(props);

    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }

  render() {
    const {
      medicineState, securityState , treatmentState, saveTreatment, fetchTreatment
    } = this.props;
    console.log("Settings Container");
    console.log(this.props);
    return (
      <Settings
        medicineState={medicineState}
        securityState={securityState}
        treatmentState={treatmentState}
        saveTreatment={saveTreatment}
        fetchTreatment={fetchTreatment}
      />
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SettingsContainer);
