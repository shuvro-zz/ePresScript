import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Background from '../../assets/page.jpg';

const styles = theme => ({
    loginSection:{
      height: "100%",
      backgroundImage: `url(${Background})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
  },
  loginComponent:{
      height:"100%"
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
            <Grid container className={classes.loginComponent}>
                <Grid item xs={6}>
                  <div className={classes.loginSection}>

                  </div>
                </Grid>
                <Grid item xs={6}>
                    Login
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Login);
