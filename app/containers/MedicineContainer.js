// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Medicine from '../components/Medicine';
import { setSubmitted, saveMedicine, setRemark, setFrequency, setStrength, setName, setForm, fetchMedicine } from '../features/medicine';

const mapStateToProps = state => ({
  medicineState: state.medicineState,
  securityState: state.securityState,
});
const mapDispatchToProps = {
  setSubmitted, saveMedicine, setRemark, setFrequency, setStrength, setName, setForm, fetchMedicine
};

class MedicineContainer extends Component {
  constructor(props) {
    super(props);

    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }

  render() {
    const {
      login,
      loggingIn,
      setSubmitted, saveMedicine, setRemark, setFrequency, fetchMedicine, setStrength, setName, setForm, medicineState, securityState
    } = this.props;
    console.log("Medicine Container");
    console.log(this.props);
    return (
      <Medicine setSubmitted={setSubmitted}
                saveMedicine={saveMedicine}
                setRemark ={setRemark}
                setFrequency={setFrequency}
                setStrength={setStrength}
                setName ={setName}
                setForm={setForm}
                medicineState={medicineState}
                fetchMedicine={fetchMedicine}
                securityState={securityState}/>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MedicineContainer);
