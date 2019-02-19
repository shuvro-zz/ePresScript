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
  checkupexamination: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    padding: `${theme.spacing.unit }px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
  },

  textFieldPatientComplain: {
    margin: theme.spacing.unit,
    width:'50%',
  },
  textFieldOnExamination: {
    margin: theme.spacing.unit,
    width:'50%',
  },
  textFieldInvestigation: {
    margin: theme.spacing.unit,
    width:'50%',
  },
  textFieldDiagnosis: {
    margin: theme.spacing.unit,
    width:'50%',
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
      <div className={classes.checkupexamination}>
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
      </div>
    );
  }
}

export default withStyles(styles)(CheckUpExamination);
