import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Snackbar from '@material-ui/core/Snackbar';
import FormControl from "@material-ui/core/FormControl/FormControl";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 10,
    [theme.breakpoints.up(800)]: {
      width: 550,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    width:200,
    marginTop: theme.spacing.unit*3,
  },
  addMedReqTextFields: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 220,
  },
  addMedRemarkTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 455,
  },

});

type Props = {
  medicineForm: AddMedicineFormStateType,
  setForm: (form: string) => void,
  setName: (name: string) => void,
  setStrength: (strength: string) => void,
  setFrequency: (frequency: string) => void,
  setRemark: (remark: string) => void,
  setSubmitted: (submitted: boolean) => void
};

class Medicine extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in Medicine constructor');
    console.log(props);

    props.setForm("");
    props.setName("");
    props.setFrequency("");
    props.setStrength("");
    props.setRemark("");
    this.state = {
      form:'',
      name:'',
      frequency:'',
      strength:'',
      remark:'',
      open: false,
      vertical: 'top',
      horizontal: 'center',
    };

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
        this.setState({form:value});
        this.props.setForm(value);
        break;

      case "name":
        this.setState({name:value});
        this.props.setName(value);
        break;

      case "strength":
        this.setState({strength:value});
        this.props.setStrength(value);
        break;
      case "frequency":
        this.setState({frequency:value});
        this.props.setFrequency(value);
        break;
      case "remark":
        this.setState({remark:value});
        this.props.setRemark(value);
        break;

    }
  }
  handleSubmit(event: any, target: any) {
    event.preventDefault();
    const { form, name,frequency,strength,remark } = this.state; // get the values from the state
    let newMedicine = {form:form,name:name, frequency:frequency, remark:remark, strength:strength}; // create a new medicine by passing the values as object to the service
    this.props.saveMedicine(newMedicine);

    /**
     * TODO :
     * Need to implement something that checks
     * the success or failure of db and use maybe snackbar to show the msg
     * and also reset the entire form for new medicine
     * **/
  }

  /** For Snackbar to be used later on for success or failure notification
  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  }; */
  render() {
   const {
     currentMedicineForm,
     currentMedicineName,
     currentMedicineStrength,
     currentMedicineFrequency,
     currentMedicineRemark,
     submitted
    } = this.props.medicineForm;
    const { vertical, horizontal, open } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <FormControl margin="normal" required fullWidth>
          <form className={classes.form}
                onSubmit={(event: any, target: any) => {
                  this.handleSubmit(event, target);
                }}
          >

            <TextField
              required={true}
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
              required={true}
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
              required={true}
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
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">I love snacks</span>}
            />
          </form>
          </FormControl>
        </Paper>
    </div>
    );
  }
}

export default withStyles(styles)(Medicine);
