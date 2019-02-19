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
  patientDetailComponent: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    padding: `${theme.spacing.unit }px ${theme.spacing.unit }px ${theme.spacing.unit }px`,
  },
  patientDetailAge:{
    margin: theme.spacing.unit,
    minWidth: 60,
    width:70,
  },
  patientInfoHeight:{
    margin: theme.spacing.unit,
    minWidth: 60,
    width:70,
  },
  patientInfoWeight:{
    margin: theme.spacing.unit,
    minWidth: 60,
    width:70,
  },
  patientInfoMaritalStatus:{
      margin: theme.spacing.unit,
      minWidth: 100,
      width:120,
  },
  patientInfoBloodGroup:{
    margin: theme.spacing.unit,
    minWidth: 100,
    width:120,
  },
  patientInfoRhesus:{
    margin: theme.spacing.unit,
    minWidth: 100,
    width:120,
  },
  patientInfoApgaScore:{
    margin: theme.spacing.unit,
    minWidth: 100,
    width:120,
  },
  patientInfo:{
    margin: theme.spacing.unit,
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
      <div className={classes.patientDetailComponent}>
        <form className={classes.form}
              onSubmit={(event: any, target: any) => {
                this.handleSubmit(event, target);
              }}
        >
        <Grid container spacing={0}>

          <Grid item xs={12} sm={6}>
            <Grid item xs={12}>
              <TextField
                id="form"
                name="form"
                label="First Name"
                className={classes.patientInfo}
                margin="normal"
                onChange={(event: any, target: any) => {
                  this.handleChange(event, target);
                }}
              />
              <TextField
                id="name"
                name="name"
                label="Last Name"
                className={classes.patientInfo}
                margin="normal"
                onChange={(event: any, target: any) => {
                  this.handleChange(event, target);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.patientInfo}>
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

              <FormControl className={classes.patientInfo}>
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
                id="age"
                name="age"
                label="age"
                className={classes.patientDetailAge}
                margin="normal"
                onChange={(event: any, target: any) => {
                  this.handleChange(event, target);
                }}
              />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  id="contact"
                  name="contact"
                  label="Contact"
                  className={classes.patientInfo}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />
                <TextField
                  id="email"
                  name="email"
                  label="E-Mail"
                  className={classes.patientInfo}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />
                <TextField
                  id="address"
                  name="address"
                  label="Address"
                  className={classes.patientInfo}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography className={classes.instructions}>
              Patient's History
            </Typography>
            <Grid item xs={12}>
            <FormControl className={classes.patientInfoMaritalStatus}>
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
              <TextField
                id="height"
                name="height"
                label="Height"
                className={classes.patientInfoHeight}
                margin="normal"
                onChange={(event: any, target: any) => {
                  this.handleChange(event, target);
                }}
              />
              <TextField
                id="weight"
                name="weight"
                label="Weight"
                className={classes.patientInfoWeight}
                margin="normal"
                onChange={(event: any, target: any) => {
                  this.handleChange(event, target);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.patientInfoBloodGroup}>
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
              <FormControl className={classes.patientInfoRhesus}>
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
              <FormControl className={classes.patientInfoApgaScore}>
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
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.instructions}>
              Emergency Contact
            </Typography>
            <TextField
              id="emergencyName"
              name="emergencyName"
              label="Name"
              className={classes.patientInfo}
              margin="normal"
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />
            <TextField
              id="emergencyContact"
              name="emergencyContact"
              label="Contact"
              className={classes.patientInfo}
              margin="normal"
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />
            <TextField
              id="emergencyAddress"
              name="emergencyAddress"
              label="Address"
              className={classes.patientInfo}
              margin="normal"
              onChange={(event: any, target: any) => {
                this.handleChange(event, target);
              }}
            />

          </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(PatientDetails);
