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

import type {LoginFormStateType} from "../types/state/LoginFormStateType";
import type {AuthenticationStateType} from "../types/state/AuthenticationStateType";


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
        width: '40%',
    },
    loginTypography:{
        fontFamily: 'Arial',
        fontSize: '21px',
        letterSpacing: '7px',
        fontWeight: 'bold',
        color: '#43425D'
    },
    loginTypography2:{
        fontFamily: 'Arial',
        
        fontSize: '14px',
        color: '#C4C5C8'
    },
    grid2:{
        fontSize: '13px',
    },
  });
  type Props = {
    loginForm: LoginFormStateType,
    authentication: AuthenticationStateType,
    logout: () => void,
    login: (username: string, passwors: string) => void,
    setUserName: (username: string) => void,
    setPassword: (password: string) => void,
    setSubmitted: (submitted: boolean) => void
  };

class Login extends React.Component{

    constructor(props: Props, state: any) {
        super(props);
        console.log('in Login constructor');
        this.props.logout(false);
        this.props.setUserName("");
        this.props.setPassword("");
        this.props.setSubmitted(false);
    }

  handleChange(event: any, target: any) {
    const name = event.target.name;
    const value = event.target.value;

    // If the user is editting again submitted must be false...
    if (value == "") {
      this.props.setSubmitted(false);
    }

    if (name == "email") {
      this.props.setUserName(value);
    } else if (name == "password") {
      this.props.setPassword(value);
    } else {
      console.error("Not handled form field: " + name);
    }
  }

  handleSubmit(event: any, target: any) {
    event.preventDefault();

    this.props.setSubmitted(true);

    const {currentUserName, currentPassword} = this.props.loginForm;

    if (currentUserName && currentPassword) {
      this.props.login(currentUserName, currentPassword);
    } else {
      // No need to do anything as validation will kick in due to submitted status changing
    }
  }
    render(){
        const { classes } = this.props;
        const {currentUserName, currentPassword} = this.props.loginForm;
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
                    Welcome back! Please login to your account.
                    </Typography>

                    <form className={classes.form}
                    onSubmit={(event: any, target: any) => {
                    this.handleSubmit(event, target);
                    }}
                    >
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Username</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus value={currentUserName}
                            onChange={(event: any, target: any) => {
                            this.handleChange(event, target);
                            }}

                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="current-password" value={currentPassword}
                        onChange={(event: any, target: any) => {
                        this.handleChange(event, target);
                        }}

                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <br/>
                    <Grid container className={classes.grid2}>
                        <Grid item xs={8}>
                            <input type="checkbox" name="remember"/> Remember Me
                        </Grid>
                        <Grid item xs={4} style={{marginTop:'3px',}}>
                            <Link to="">Forget Password</Link>
                        </Grid>
                    </Grid>
                    <center><Button
                        type="submit"

                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button></center>
                    </form>
                </Paper>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Login);
