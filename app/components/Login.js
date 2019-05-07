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
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
    root: {
      flexGrow: 1,
      height: "100%",
    },
  circularProgress: {
    margin: theme.spacing.unit * 2,
    marginLeft: '125px',
  },
    loginComponent: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        margin: 'auto',
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
          width: 400,
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
        backgroundColor: 'inherit',
        margin: '0 auto',
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
        fontSize: '21px',
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
class Login extends Component{
    constructor(props) {
        super(props);
      const isDevEnv = process.env.NODE_ENV !== 'production';

      this.state = {
        email: isDevEnv ? 'test@test.com' : '',
        password: isDevEnv ? '1234' : '',
        stayLoggedIn: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSignIn = this.handleSignIn.bind(this);
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
  handleChangeText(event) {
    // event.target.name is the name of the prop that should update,
    // event.target.value is the current value of that prop in the view
    this.setState({ [event.target.name]: event.target.value });
  }

  // Sign In function that calls the login function
  handleSignIn(event) {
    // this prevents the default action to trigger
    // We need it to prevent the application from reloading when submitting
    event.preventDefault();

    // get the login function from the props that the container gave us
    const { login } = this.props;

    // get the user-written credentials from the state of this component
    const { email, password } = this.state;

    // just call the login function with the credentials
    login(email, password);

  }

  render(){
    const {
      classes,
      loggingIn,
    } = this.props;

    const {
      email,
      password
    } = this.state;

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
                    onSubmit={(event: any) => {
                    this.handleSignIn(event);
                    }}
                    >
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Username</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus value={email}
                            onChange={(event: any) => {
                            this.handleChangeText(event);
                            }}

                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="current-password" value={password}
                        onChange={(event: any) => {
                        this.handleChangeText(event);
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
                            <Link to="/forgetPassword">Forget Password</Link>
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
                      {loggingIn
                        ? (
                          <CircularProgress className={classes.circularProgress}/>
                        ) : null

                      }
                        </form>
                </Paper>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Login);
