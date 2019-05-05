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
    this.state={
      treatment:[]
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.treatmentState.treatment !== prevProps.treatmentState.treatment) {
      this.setState({
        treatment:this.props.treatmentState.treatment
      })
    }
  }

    render() {
    const { classes } = this.props;
      console.log('in Treatment Component');
      console.log(this.state);
      const {treatment } = this.props.treatmentState;
    return (
      <div className={classes.treatment}>
       <TreatmentTableView  treatment={treatment}/>
      </div>
    );
  }
}

export default withStyles(styles)(Treatment);
