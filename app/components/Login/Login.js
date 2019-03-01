import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Background from '../../assets/page.jpg';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    loginSection:{
      width: "100%",
      height: "600px",
      backgroundImage: `url(${Background})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
  }
  });

class Login extends React.Component{
    state = {
        spacing: '0',
    };
    render(){
        const { classes } = this.props;
        const { spacing } = this.state;
        return(
            <div>

            <Grid container className={classes.root}>
                <Grid item xs={6}>
                  <div className={classes.loginSection}>

                  </div>
                </Grid>
                <Grid item xs={6}>
                    Login
                </Grid>
            </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(Login);
