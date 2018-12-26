// @flow
import React, { Component } from 'react';
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing.unit * 3,
  }
});
type Props = {
  medicineForm: AddMedicineFormStateType,
  setForm: (form: string) =>  void,
  setName: (name: string) => void,
  setStrength: (strength: string) => void,
  setFrequency: (frequency: string) => void,
  setRemark: (remark: string) => void,
  setSubmitted: (submitted: boolean) => void
};

class Treatment extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in Treatment constructor');
    console.log(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1> Add a Treatment </h1>
        <h2> Code me! </h2>
      </div>
    );
  }
}

export default withStyles(styles)(Treatment);
