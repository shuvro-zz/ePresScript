// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TreatmentTableView from './TableViews/TreatmentTableView';

const styles = theme => ({
  treatment: {
    height: '100%',
    marginTop: theme.spacing.unit * 8,
  }
});

class Treatment extends React.Component{

  constructor(props) {
    super(props);
  }


    render() {
    const { classes } = this.props;
      console.log('in Treatment Component');
      const {treatmentState, medicineState , saveMedicine , updateTreatmentMedicine} = this.props;

    return (
      <div className={classes.treatment}>
       <TreatmentTableView
         medicineState={medicineState}
         treatmentState={treatmentState}
         saveMedicine={saveMedicine}
         updateTreatmentMedicine={updateTreatmentMedicine}
       />
      </div>
    );
  }
}

export default withStyles(styles)(Treatment);
