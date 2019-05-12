// @flow

import React, {Component} from 'react';
import { connect } from 'react-redux';
import PrescriptionWritting from '../components/PrescriptionWritting';
import {setAdvice , setPatientAge, setCC, setMedicine , setOE , setPatientEmail,
  setPatientMobile, setPatientName , setPatientPatientId , setPatientSex , setTests} from "../features/prescription";


const mapStateToProps = state => ({
  medicineState: state.medicineState,
  securityState: state.securityState,
  treatmentState: state.treatmentState,
  prescriptionState : state.prescriptionState
});

const mapDispatchToProps = {
  setAdvice , setPatientAge, setCC, setMedicine , setOE , setPatientEmail,
  setPatientMobile, setPatientName , setPatientPatientId , setPatientSex , setTests
};

class PrescriptionContainer extends Component {
  constructor(props) {
    super(props);

    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }

  render() {
    const {
      securityState , medicineState , treatmentState , setAdvice , setPatientAge, setCC, setMedicine ,
      setOE , setPatientEmail, setPatientMobile, setPatientName , setPatientPatientId , setPatientSex , setTests,
      prescriptionState
    } = this.props;
    return (
      <PrescriptionWritting
        securityState={securityState}
        treatmentState={treatmentState}
        medicineState={medicineState}
        prescriptionState={prescriptionState}

        setCC={setCC}
        setOE={setOE}
        setMedicine={setMedicine}
        setTests={setTests}
        setAdvice={setAdvice}

        setPatientAge={setPatientAge}
        setPatientEmail={setPatientEmail}
        setPatientMobile={setPatientMobile}
        setPatientName={setPatientName}
        setPatientPatientId={setPatientPatientId}
        setPatientSex={setPatientSex}

      />
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(PrescriptionContainer);
