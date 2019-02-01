import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//import all the prescription steps containers
import PatientDetailsContainer from '../../containers/presciption/steps/PatientDetailsContainer';
import PrescribeDrugsContainer from '../../containers/presciption/steps/PrescribeDrugsContainer';
import OverviewContainer from '../../containers/presciption/steps/OverviewContainer';
import CheckUpExaminationContainer from '../../containers/presciption/steps/CheckUpExaminationContainer';

import type {MedicineFormStateType} from "../../types/state/MedicineFormStateType";

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  buttonBack: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    float:'left',
  },
  buttonNext: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    float:'right',
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  stepContents:{
    width: '80%',
    height: '100%',
    float:'left',
  },
  stepper: {
    width: '20%',
    height: '100%',
    float:'left',

  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});
type Props = {
  medicineForm: MedicineFormStateType,
  setForm: (form: string) => void,
  setName: (name: string) => void,
  setStrength: (strength: string) => void,
  setFrequency: (frequency: string) => void,
  setRemark: (remark: string) => void,
  setSubmitted: (submitted: boolean) => void
};

function getSteps() {
  return ['Patient Details', 'Checkup & Examination', 'Prescribe Drugs', 'Overview'];
}
function getStepContent(step) {
  switch (step) {
    case 0:

      return <PatientDetailsContainer />;
    case 1:
      return <CheckUpExaminationContainer/>;
    case 2:
      return <PrescribeDrugsContainer />;
    case 3:
      return <OverviewContainer />;
    default:
      return 'Unknown step';
  }
}
class Prescription extends React.Component<Props, any> {
  constructor(props: Props, state: any) {
    super(props);
    console.log('in Prescription constructor');
    console.log(props);
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      stepName:''
    };
  }

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  // handleSkip = () => {
  //   const { activeStep } = this.state;
  //   if (!this.isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }
  //
  //   this.setState(state => {
  //     const skipped = new Set(state.skipped.values());
  //     skipped.add(activeStep);
  //     return {
  //       activeStep: state.activeStep + 1,
  //       skipped,
  //     };
  //   });
  // };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepper}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className={classes.stepContents}>
          {/* Check for the current step and show the container */}
          {getStepContent(activeStep)}

        </div>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.buttonBack}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.buttonNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Prescription);
