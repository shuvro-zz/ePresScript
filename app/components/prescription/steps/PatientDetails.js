import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from "@material-ui/core/Typography/Typography";
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  patientDetailSex: {
    margin: theme.spacing.unit,
    minWidth: 122,
  },
  patientDetailAge:{
    margin: theme.spacing.unit,
    minWidth: 120,
    width:122,
  },
  patientDetailReligion:{
    margin: theme.spacing.unit,
    minWidth: 120,
    width:122,
  },
  patientDetailFirstname:{
    margin: theme.spacing.unit,
  },
  patientDetailLastname:{
    margin: theme.spacing.unit,
  },
  patientDetailContact:{
    margin: theme.spacing.unit,
  },
  patientDetailEmail:{
    margin: theme.spacing.unit,
  },
  patientDetailAddress:{
    margin: theme.spacing.unit,
    minWidth: 200,
    width:400,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
type Props = {
  setForm: (form: string) => void,
  setName: (name: string) => void,
  setStrength: (strength: string) => void,
  setFrequency: (frequency: string) => void,
  setRemark: (remark: string) => void,
  setSubmitted: (submitted: boolean) => void
};

class PatientDetails extends React.Component<Props, any> {

  state = {
    sex: '',
    name: 'hai',
    labelWidth: 0,
    religion:'',
    maritalstatue:'',
    bloodgroup:'',
    rhesus:'',
    apgarscore:'',

  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <form className={classes.form}
              onSubmit={(event: any, target: any) => {
                this.handleSubmit(event, target);
              }}
        >
        <Grid container spacing={0}>

          <Grid item xs={12} sm={6}>
            <Typography className={classes.instructions}>
              General Details
            </Typography>
            <div className={classes.paper}>

                <TextField
                  id="form"
                  name="form"
                  label="First Name"
                  className={classes.patientDetailFirstname}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />
                <TextField
                  id="name"
                  name="name"
                  label="Last Name"
                  className={classes.patientDetailLastname}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />
              <FormControl className={classes.patientDetailSex}>
                <InputLabel htmlFor="sex-native-simple">Sex</InputLabel>
                <Select
                  native
                  value={this.state.sex}
                  onChange={this.handleChange('sex')}
                  inputProps={{
                    name: 'sex',
                    id: 'sex-native-simple',
                  }}
                >
                  <option value=''/>
                  <option value='M'>Male</option>
                  <option value='F'>Female</option>
                  <option value='NA'>N/A</option>
                </Select>
              </FormControl>
              <FormControl className={classes.patientDetailReligion}>
                <InputLabel htmlFor="religion-native-simple">Religion</InputLabel>
                <Select
                  native
                  value={this.state.religion}
                  onChange={this.handleChange('religion')}
                  inputProps={{
                    name: 'religion',
                    id: 'religion-native-simple',
                  }}
                >
                  <option value=''/>
                  <option value='Muslim'>Muslim</option>
                  <option value='Hindu'>Hindu</option>
                  <option value='Christian'>Christian</option>
                </Select>
              </FormControl>
              <TextField
                id="strength"
                name="strength"
                label="age"
                className={classes.patientDetailAge}
                margin="normal"
                onChange={(event: any, target: any) => {
                  this.handleChange(event, target);
                }}
              />
                <TextField
                  id="strength"
                  name="strength"
                  label="Contact"
                  className={classes.patientDetailContact}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />
                <TextField
                  id="frequency"
                  name="frequency"
                  label="E-Mail"
                  className={classes.patientDetailEmail}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />
                <TextField
                  id="address"
                  name="address"
                  label="Address"
                  className={classes.patientDetailAddress}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />

            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.instructions}>
              Patient's History
            </Typography>

            <FormControl className={classes.patientDetailReligion}>
              <InputLabel htmlFor="maritalstatue-native-simple">Marital Status</InputLabel>
              <Select
                native
                value={this.state.maritalstatue}
                onChange={this.handleChange('maritalstatue')}
                inputProps={{
                  name: 'maritalstatue',
                  id: 'maritalstatue-native-simple',
                }}
              >
                <option value=''/>
                <option value='Married'>Married</option>
                <option value='Single'>Single</option>
                <option value='NA'>NA</option>
              </Select>
            </FormControl>
            <div className={classes.paper}>
              <TextField
                id="strength"
                name="strength"
                label="Height"
                className={classes.patientDetailAge}
                margin="normal"
                onChange={(event: any, target: any) => {
                  this.handleChange(event, target);
                }}
              />
              <TextField
                id="strength"
                name="strength"
                label="Weight"
                className={classes.patientDetailAge}
                margin="normal"
                onChange={(event: any, target: any) => {
                  this.handleChange(event, target);
                }}
              />
              <FormControl className={classes.patientDetailReligion}>
                <InputLabel htmlFor="bloodgroup-native-simple">Blood Group</InputLabel>
                <Select
                  native
                  value={this.state.bloodgroup}
                  onChange={this.handleChange('bloodgroup')}
                  inputProps={{
                    name: 'bloodgroup',
                    id: 'bloodgroup-native-simple',
                  }}
                >
                  <option value=''/>
                  <option value='A+'>A+</option>
                  <option value='A-'>A-</option>
                  <option value='B+'>B+</option>
                  <option value='B-'>B-</option>
                  <option value='O+'>O+</option>
                  <option value='O-'>O-</option>
                  <option value='AB+'>AB+</option>
                  <option value='AB-'>AB-</option>

                </Select>
              </FormControl>
              <FormControl className={classes.patientDetailReligion}>
                <InputLabel htmlFor="rhesus-native-simple">RH Factor</InputLabel>
                <Select
                  native
                  value={this.state.rhesus}
                  onChange={this.handleChange('rhesus')}
                  inputProps={{
                    name: 'rhesus',
                    id: 'rhesus-native-simple',
                  }}
                >
                  <option value=''/>
                  <option value='rh +'>rh +</option>
                  <option value='rh -'>rh -</option>

                </Select>
              </FormControl>
              <FormControl className={classes.patientDetailReligion}>
                <InputLabel htmlFor="apgarscore-native-simple">Apgar Score</InputLabel>
                <Select
                  native
                  value={this.state.apgarscore}
                  onChange={this.handleChange('apgarscore')}
                  inputProps={{
                    name: 'apgarscore',
                    id: 'apgarscore-native-simple',
                  }}
                >
                  <option value=''/>
                  <option value='0 -2'>0 - 2</option>
                  <option value='4-6'>4 - 6</option>
                  <option value='7+'>7</option>
                </Select>
              </FormControl>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography className={classes.instructions}>
              Emergency Contact
            </Typography>
            <TextField
              id="emergencyName"
              name="emergencyName"
              label="Name"
              className={classes.patientDetailEmergencyName}
              margin="normal"
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />
            <TextField
              id="emergencyContact"
              name="emergencyContact"
              label="Contact"
              className={classes.patientDetailEmergencyContact}
              margin="normal"
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />
            <TextField
              id="emergencyAddress"
              name="emergencyAddress"
              label="Address"
              className={classes.patientDetailEmergencyAddress}
              margin="normal"
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />

          </Grid>
        </Grid>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(PatientDetails);
