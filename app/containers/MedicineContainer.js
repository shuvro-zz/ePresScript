// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Medicine from '../components/Medicine';
import {setStrength,
  setProductName,
  setGeneric,
  setIndication,
  setType,
  saveMedicine,
  fetchMedicine } from '../features/medicine';

const mapStateToProps = state => ({
  medicineState: state.medicineState,
  securityState: state.securityState,
});
const mapDispatchToProps = {
  setStrength,
  setProductName,
  setGeneric,
  setIndication,
  setType,
  saveMedicine,
  fetchMedicine
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
      medicineState,
      securityState,
      setStrength,
      setProductName,
      setGeneric,
      setIndication,
      setType,
      saveMedicine,
      fetchMedicine
    } = this.props;
    console.log("Medicine Container");
    console.log(this.props);
    return (
      <Medicine
                saveMedicine={saveMedicine}
                setStrength={setStrength}
                medicineState={medicineState}
                fetchMedicine={fetchMedicine}
                securityState={securityState}
                setProductName={setProductName}
                setGeneric={setGeneric}
                setIndication={setIndication}
                setType={setType}
      />
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MedicineContainer);
