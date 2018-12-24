import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Typography from "@material-ui/core/Typography/Typography";
import Button from '@material-ui/core/Button';
import {history} from "../store/configureStore";
import CloudUploadIcon from '@material-ui/icons/Subject';
import ListItem from "@material-ui/core/ListItem/ListItem";
import {Redirect, Route} from "react-router";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  button: {
    height:100,
    width: 200,
    margin: theme.spacing.unit,
  },
});

class Dashboard extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in Dashboard constructor');
    console.log(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (requestedPath) => {
    // get the currently selected item
    const { currentPath } = this.props.location;
    // if the clicked item is not the already selected item, it gets selected
    if (currentPath !== requestedPath) {
      // this.setState({
      //   currentPath: requestedPath,
      // });
      // insert a slash before the requested path to make it a path
      const path = `/${requestedPath}`;
      console.log(path);
     history.push(path);
    }
  };

  render() {

    console.log("Render Dashboard Components");
    const { classes, theme } = this.props;
    const {
      loggedIn,
    } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h4" variant="h5">
            Get Started With ...
          </Typography>
          <Button
            variant="outlined"
            color="default"
            className={classes.button}
            onClick={() => this.handleClick('prescription')}
          >
            <CloudUploadIcon className={classes.leftIcon} />
            New Prescription
          </Button>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
