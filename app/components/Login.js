import React, { Component } from 'react';
import * as DOM from "react-dom";

// material
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import type {LoginFormStateType} from "../types/state/LoginFormStateType";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

type Props = {
  loginForm: LoginFormStateType,
  logout: () => void,
  login: (username: string, passwors: string) => void,
  setUserName: (username: string) => void,
  setPassword: (password: string) => void,
  setSubmitted: (submitted: boolean) => void
};

class Login extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);

    // reset login status
    this.props.logout();

    // Set initial values for login form
    this.props.setUserName("");
    this.props.setPassword("");
    this.props.setSubmitted(false);
  }

  handleChange(event: any, target: any) {
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleChange");
    console.log(this.props);

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
    console.log("submitted");
    event.preventDefault();

    this.props.setSubmitted(true);

    const {currentUserName, currentPassword} = this.props.loginForm;

    if (currentUserName && currentPassword) {
      this.props.login(currentUserName, currentPassword);
    } else {
      // No need to do anything as validation will kick in due to submitted status changing
    }
  }

  render() {
      console.log("Render Login Page");
      console.log(this.props);

      const {currentUserName, currentPassword,loggingIn,submitted,error} = this.props.loginForm;
      const { classes } = this.props;
      return (
          <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form}
            onSubmit={(event: any, target: any) => {
              this.handleSubmit(event, target);
              }}
            >
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
      );
    }
}

export default withStyles(styles)(Login);
