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
import CircularProgress from '@material-ui/core/CircularProgress';
import {openSnackBar} from '../features/ui';

const styles = theme => ({
  medicineComponent: {
    height: 'auto',
    marginTop: theme.spacing.unit * 8,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  circularProgress: {
    margin: theme.spacing.unit * 2,
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
    this.state = {
      product_name:'',
      type:'',
      generic:'',
      strength:'',
      indication:'',
      open: false,
      loading:false,
      success: false
    };
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

    // // If the user is editting again submitted must be false...
    // if (value == "") {
    //   this.props.setSubmitted(false);
    // }

    switch (name) {
      case "product_name":

        this.props.setProductName(value);
        this.setState({product_name:value});
        break;

      case "type":

        this.props.setType(value);
        this.setState({type:value});
        break;

      case "strength":

        this.props.setStrength(value);
        this.setState({strength:value});
        break;
      case "generic":

        this.props.setGeneric(value);
        this.setState({generic:value});
        break;
      case "indication":

        this.props.setIndication(value);
        this.setState({indication:value});
        break;
    }
  }
  //Todo NAKIB : If save medicine is success, then Add Medicine Dialogue schould close automatically and show sucess result using snackbar
  componentWillReceiveProps(nextProps){
    if(nextProps.medicineState.saveMedicineSuccess){
			this.setState({
        open:false
      });
      //this.props.openSnackBar("New medicine added!",'success');
		}
    this.setState({
      loading:false
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading:true
    });
    const {  product_name, type, generic, strength, indication } = this.state;
    const newMedicine = {product_name:product_name,type:type, generic:generic, indication:indication, strength:strength}; // create a new medicine by passing the values as object to the service
    this.props.saveMedicine(newMedicine)
  }

  render() {
   const {
     product_name,
     type,
     strength,
     generic,
     indication,
     submitted,
     medicineList
    } = this.props.medicineState;

    const {
      medicineState
    } = this.props;

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
                    id="type"
                    name="type"
                    label="Type"
                    className={classes.addMedReqTextFields}
                    margin="normal"
                    value={type}
                    onChange={(event: any, target: any) => {
                      this.handleChange(event, target);
                    }}
                  />
                  <TextField
                    required={true}
                    id="product_name"
                    name="product_name"
                    label="Product Name"
                    className={classes.addMedReqTextFields}
                    margin="normal"
                    value={product_name}
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
                    value={strength}
                    onChange={(event: any, target: any) => {
                      this.handleChange(event, target);
                    }}
                  />
                  <TextField
                    id="generic"
                    name="generic"
                    label="Generic"
                    className={classes.addMedReqTextFields}
                    margin="normal"
                    value={generic}
                    onChange={(event: any, target: any) => {
                      this.handleChange(event, target);
                    }}
                  />
                  <TextField
                    id="indication"
                    name="indication"
                    label="Indication"
                    className={classes.addMedReqTextFields}
                    margin="normal"
                    multiline={true}
                    value={indication}
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
              {this.state.loading
                ? (
                  <CircularProgress className={classes.circularProgress}/>
                ) : null
              }

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
