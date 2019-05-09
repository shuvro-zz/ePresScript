import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import FormControl from "@material-ui/core/FormControl/FormControl";
import MedicineViewTest from "./TableViews/MedicineTableView";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  medicineComponent: {
    height: 'auto',
    marginTop: theme.spacing.unit * 8,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },

  addMedReqTextFields: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,

  },
  addMedicineBtn:{
    position: 'relative',
    zIndex:'100',
    float: 'right',
    marginRight:'3%',
    marginTop:'1%'
  }
});

class Medicine extends Component {

  constructor(props) {
    super(props);
    console.log('In Medicine Component');
    console.log(this.props);

    this.state = {
      form:'',
      mname:'',
      frequency:'',
      strength:'',
      remark:'',
      open: false,
      firstline:'',
      secondline : '',

    };

    this.props.setSubmitted(false);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
        this.setState({mname:value});
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
    const { form, mname,frequency,strength,remark } = this.state;
    let fistline = form + ' ' + mname + ' ' + strength;
    let secondline = frequency + '\t' + remark ;

    this.setState({firstline : fistline , secondline:secondline});
  }

  handleSubmit(event: any, target: any) {
    event.preventDefault();
    this.props.setSubmitted(true);
    const { form, name,frequency,strength,remark } = this.state; // get the values from the state
    let newMedicine = {form:form,name:name, frequency:frequency, remark:remark, strength:strength}; // create a new medicine by passing the values as object to the service
    this.props.saveMedicine(newMedicine);

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
     submitted,
     medicineList
    } = this.props.medicineState;
    const {
      medicineState
    } = this.props;
    const {firstline, secondline} = this.state;

    const preview =
      <div>
        <p>
          {firstline}
        </p>
        <p>
          {secondline}
        </p>
    </div>;

    const { classes } = this.props;
    return (
      <div className={classes.medicineComponent}>
        <CssBaseline />
        <div className={classes.addMedicineDialogueBox}>

          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={this.state.open}
            onClose={this.handleClose}
          >
            <DialogTitle>Add a new Medicine</DialogTitle>
            <DialogContent>
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
                    className={classes.addMedReqTextFields}
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
                    className={classes.saveMedicineBtn}
                  >
                    Add Medicine
                  </Button>
                </form>
              </FormControl>

            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
          <div>
            <div className={classes.addMedicineBtn}>
            <Tooltip title="Add" aria-label="Add">
              <Fab color="secondary" size="small" onClick={this.handleClickOpen}>
                <AddIcon />
              </Fab>
            </Tooltip>
            </div>
            <MedicineViewTest medicineState={medicineState}/>
          </div>


      </div>
    );
  }
}

export default withStyles(styles)(Medicine);
