import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    marginTop: theme.spacing.unit * 8,
  },
});


class Settings extends React.Component{

  constructor(props: Props, state: any) {
    super(props);
  }

  render(){
    const { classes } = this.props;

    return(
      <Grid container className={classes.root}>
        <h1> Settings View </h1>
      </Grid>
    )
  }
}
export default withStyles(styles)(Settings);
