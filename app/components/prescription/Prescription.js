import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
//import all the prescription steps containers
import PatientDetailsContainer from '../../containers/presciption/steps/PatientDetailsContainer';
import PrescribeDrugsContainer from '../../containers/presciption/steps/PrescribeDrugsContainer';
import OverviewContainer from '../../containers/presciption/steps/OverviewContainer';
import CheckUpExaminationContainer from '../../containers/presciption/steps/CheckUpExaminationContainer';

import type {MedicineFormStateType} from "../../types/state/MedicineFormStateType";

const styles = theme => ({
  rootPrescription: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing.unit * 2,
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
const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 40,
    '&$expanded': {
      minHeight: 40,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);
type Props = {
  medicineForm: MedicineFormStateType,
  setForm: (form: string) => void,
  setName: (name: string) => void,
  setStrength: (strength: string) => void,
  setFrequency: (frequency: string) => void,
  setRemark: (remark: string) => void,
  setSubmitted: (submitted: boolean) => void
};

class Prescription extends React.Component<Props, any> {
  constructor(props: Props, state: any) {
    super(props);
    console.log('in Prescription constructor');
    console.log(props);
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      stepName:'',
      expanded: 'panel1',
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

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div className={classes.rootPrescription}>

        <ExpansionPanel
          square
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
        >
          <ExpansionPanelSummary>
            <Typography>Patient Details</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <PatientDetailsContainer />;
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
        >
          <ExpansionPanelSummary>
            <Typography>Checkup & Examination</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CheckUpExaminationContainer/>;
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel3'}
          onChange={this.handleChange('panel3')}
        >
          <ExpansionPanelSummary>
            <Typography>Prescribe Drugs</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <PrescribeDrugsContainer />;
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel4'}
          onChange={this.handleChange('panel4')}
        >
          <ExpansionPanelSummary>
            <Typography>Overview</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <OverviewContainer />;
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>
    );
  }
}

export default withStyles(styles)(Prescription);
