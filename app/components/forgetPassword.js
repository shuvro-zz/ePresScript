import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import { withStyles } from '@material-ui/core/styles';
import Background from '../assets/page.jpg';


const styles = theme => ({
    root: {
      flexGrow: 1,
      marginLeft:"-15px",
      height: "100%",
    },
    loginComponent: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginTop: '8%',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
          width: 400,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },
    loginSection:{
      width: "100%",
      height: "100%",
      backgroundImage: `url(${Background})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      backgroundAttachment: "fixed"
    },
    loginPaper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        boxShadow:'none'
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '65%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
       
    },
    loginTypography:{
        fontFamily: 'Arial',
        letterSpacing: '7px',
        fontSize: '21px',
        fontWeight: 'bold',
        color: '#43425D'
    },
    loginTypography2:{
        fontFamily: 'Arial',
        letterSpacing: '1px',

        color: '#C4C5C8'
    },
    grid2:{
        fontSize: '13px',
    },
  });
  

class ForgetPassword extends React.Component{

    constructor(props: Props, state: any) {
        super(props);
        
        
    }

    render(){
        const { classes } = this.props;
        
        return(
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                  <div className={classes.loginSection}>

                  </div>
                </Grid>
                <Grid className={classes.loginComponent} item xs={6}>
                    
                    <Paper className={classes.loginPaper}>

                    <Typography component="h2" variant="h5" className={classes.loginTypography}>
                    e-Prescription
                    </Typography>
                    <Typography component="h5" variant="h5" className={classes.loginTypography2}>
                    Forgot Password!
                    </Typography>

                    <form className={classes.form}
                    onSubmit={(event: any, target: any) => {
                    this.handleSubmit(event, target);
                    }}
                    >
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Enter Your Email</InputLabel>
                        <Input id="email" name="email" autoComplete="email" 

                        />
                    </FormControl>
                    <br/>
              
                    <Button
                    type="submit"

                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                      Proceed
                    </Button>
              
                    <Link to="/"><Typography  style={{marginTop:"20px",}}>Go back to Login page</Typography></Link>    
                    
                    </form>
                </Paper>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(ForgetPassword);
