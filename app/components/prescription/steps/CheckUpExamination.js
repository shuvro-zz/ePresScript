import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import {withStyles} from "@material-ui/core";
const styles = theme => ({
  root: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  checkupContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  textFieldPatientComplain: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width:'70%',
  },
  textFieldOnExamination: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width:'70%',
  },
  textFieldInvestigation: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width:'70%',
  },
  textFieldDiagnosis: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width:'70%',
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

class CheckUpExamination extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in CheckUpExamination constructor');
    console.log(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <form className={classes.form}
              onSubmit={(event: any, target: any) => {
                this.handleSubmit(event, target);
              }}
        >
          <Grid container spacing={0} className={classes.checkupContainer}>

              <TextField
                id="outlined-multiline-static"
                label="Patient Complain"
                multiline
                rows="4"
                defaultValue="Fever since 2 days"
                className={classes.textFieldPatientComplain}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="On examination"
                multiline
                rows="4"
                defaultValue="Default Value"
                className={classes.textFieldOnExamination}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Investigation"
                multiline
                rows="4"
                defaultValue="Default Value"
                className={classes.textFieldInvestigation}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-static"
                label="Diagnosis"
                multiline
                rows="4"
                defaultValue="Default Value"
                className={classes.textFieldDiagnosis}
                margin="normal"
                variant="outlined"
              />
          </Grid>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(CheckUpExamination);
