import React, { Component } from 'react';
import styles from './Home.css';
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";
import withStyles from "@material-ui/core/styles/withStyles";

type Props = {
  medicineForm: AddMedicineFormStateType,
  setForm: (form: string) => void,
  setName: (name: string) => void,
  setStrength: (strength: string) => void,
  setFrequency: (frequency: string) => void,
  setRemark: (remark: string) => void,
  setSubmitted: (submitted: boolean) => void
};

class Prescription extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in AddMedicine constructor');
    console.log(props);
    console.log('End of Add Medicine props');
    // Set initial values for login form

    props.setForm("");
    props.setName("");
    props.setFrequency("");
    props.setStrength("");
    props.setRemark("");
    this.props.setSubmitted(false);
  }

  handleChange(event: any, target: any) {
    const name = event.target.name;
    const value = event.target.value;

    console.log(this.props);
    // // If the user is editting again submitted must be false...
    if (value == "") {
      this.props.setSubmitted(false);
    }

    switch (name) {
      case "form":
        this.props.setForm(value);
        break;

      case "name":
        this.props.setName(value);
        break;

      case "strength":
        this.props.setStrength(value);
        break;
      case "frequency":
        this.props.setFrequency(value);
        break;
      case "remark":
        this.props.setRemark(value);
        break;

    }
  }

  render() {
    console.log("Render Medicine Page");
    console.log(this.props.medicineForm);

    const {
      currentMedicineForm,
      currentMedicineName,
      currentMedicineStrength,
      currentMedicineFrequency,
      currentMedicineRemark,
      submitted
    } = this.props.medicineForm;

    const { classes } = this.props;

    return (
      <div>
        <h1> New Prescription</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Prescription);
