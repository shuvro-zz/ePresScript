import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";

const styles = theme => ({

  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    width: 200,
  },
  addMedReqTextFields: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  addMedRemarkTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%',
    height:200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

type Props = {
  medicineForm: AddMedicineFormStateType,
  logout: () => void,
  setForm: (form: string) => void,
  setName: (name: string) => void,
  setStrength: (strength: string) => void,
  setFrequency: (frequency: string) => void,
  setRemark: (remark: string) => void,
  setSubmitted: (submitted: boolean) => void
};

class AddMedicine extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in constructor');
    console.log(props);
    // Set initial values for login form
    props.logout();
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

  handleSubmit(event: any, target: any) {
    console.log("submitted");
    event.preventDefault();
  }
  handleLogout(event:any , target:any ){
    console.log("logout");
    event.preventDefault();
    this.props.logout();
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

        <Paper className={classes.paper}>
          <form className={classes.form}
                onSubmit={(event: any, target: any) => {
                  this.handleSubmit(event, target);
                }}
          >

            <TextField
              id="form"
              name="form"
              label="Form"
              className={classes.addMedReqTextFields}
              margin="normal"
              value={currentMedicineForm}
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />
            <TextField
              id="name"
              name="name"
              label="Name"
              className={classes.addMedReqTextFields}
              margin="normal"
              value={currentMedicineName}
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />
            <TextField
              id="strength"
              name="strength"
              label="Strength"
              className={classes.addMedReqTextFields}
              margin="normal"
              value={currentMedicineStrength}
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />
            <TextField
              id="frequency"
              name="frequency"
              label="Frequency"
              className={classes.addMedReqTextFields}
              margin="normal"
              value={currentMedicineFrequency}
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />
            <TextField
              id="remark"
              name="remark"
              label="Remark"
              className={classes.addMedRemarkTextField}
              margin="normal"
              multiline={true}
              value={currentMedicineRemark}
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add Medicine
            </Button>
          </form>
        </Paper>
    </div>
    );
  }
}

export default withStyles(styles)(AddMedicine);
