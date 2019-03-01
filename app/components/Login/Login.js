import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Background from 'page.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")"
};

const styles = theme => ({
    root: {
      flexGrow: 1,
    }, 
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
                    <div style={sectionStyle}>
                        
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