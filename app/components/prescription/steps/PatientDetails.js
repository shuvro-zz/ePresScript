import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
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
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.form}
              onSubmit={(event: any, target: any) => {
                this.handleSubmit(event, target);
              }}
        >
        <Grid container spacing={0}>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>

                <TextField
                  id="form"
                  name="form"
                  label="First Name"
                  className={classes.addMedReqTextFields}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />
                <TextField
                  id="name"
                  name="name"
                  label="Last Name"
                  className={classes.addMedReqTextFields}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />

                <TextField
                  id="strength"
                  name="strength"
                  label="Contact"
                  className={classes.addMedReqTextFields}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />
                <TextField
                  id="frequency"
                  name="frequency"
                  label="E-Mail"
                  className={classes.addMedReqTextFields}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />
                <TextField
                  id="remark"
                  name="remark"
                  label="Address"
                  className={classes.addMedRemarkTextField}
                  margin="normal"
                  onChange={(event: any, target: any) => {
                    this.handleChange(event, target);
                  }}
                />

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>

              <FormControl className={classes.formControl}>
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
                  <option value='M'>MALE</option>
                  <option value='F'>FEMALE</option>
                  <option value='NA'>N/A</option>
                </Select>
              </FormControl>


            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(PatientDetails);
