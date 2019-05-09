// @flow

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Help from '../components/AppHelp';
import {fetchTreatment , saveTreatment} from "../features/treatment";

const mapStateToProps = state => ({
  medicineState: state.medicineState,
  securityState: state.securityState,
  treatmentState: state.treatmentState
});

const mapDispatchToProps = {
  fetchTreatment , saveTreatment
};

class HelpContainer extends Component {
  constructor(props) {
    super(props);

    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }

  render() {
    const {
      securityState
    } = this.props;
    console.log("Help Container");
    console.log(this.props);
    return (
      <Help
        securityState={securityState}
      />
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HelpContainer);
