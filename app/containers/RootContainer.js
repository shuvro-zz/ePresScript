// @flow
import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../store/Routes';
import PropTypes from "prop-types";
import {MuiThemeProvider, withStyles} from "@material-ui/core";
import navigateTo from '../features/navigation';
import { connect } from 'react-redux';
import muiTheme from "../assets/theme";
import SnackBar from '../components/SnackBar';
import {logout} from "../features/security";
import DashboardElementsContainer from './DashboardElementsContainer';

const styles = theme => ({
  rootContainer: {
    display: 'flex',
    height:'100%'
  },
  content: {
    flexGrow: 1,
  },
});

const mapStateToProps = state => ({
  loggedIn: state.securityState.loggedIn,
  loggingIn:  state.securityState.loggingIn,
  fetchedData: state.securityState.fetchedData,
  securityState: state.securityState,
  snackBarOpen: state.uiReducer.snackBarOpen,
  message: state.uiReducer.message,
  profile: state.usermanagementState.profile,

});

// Map any actions required to the props
const mapDispatchToProps = {
  logout,
  navigateTo
};

class RootContainer extends Component{
  constructor(props) {
    super(props);
    console.log("Root Container");
    console.log(this.props);
  }
  render() {
    const { classes, theme } = this.props;
    const {logout, history , navigateTo ,updateProfile,loggingIn,  message, snackBarOpen, loggedIn,location , profile, securityState } = this.props;
    console.log("Inside Root Container");
    console.log(this.props);
    return (
      <MuiThemeProvider theme={muiTheme}>
      <div className={classes.rootContainer}>

        {loggedIn && !loggingIn ? (
          <DashboardElementsContainer  location={location}/>
          ) : null}


        <main className={classes.content}>
          {snackBarOpen
          && (
            <SnackBar
              message={message}
              open={snackBarOpen}
            />
          )
          }
          <ConnectedRouter history={history}>
              {routes}
          </ConnectedRouter>
        </main>
      </div>
      </MuiThemeProvider>
    );
  }
}
RootContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RootContainer));
