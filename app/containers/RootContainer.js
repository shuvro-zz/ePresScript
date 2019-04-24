// @flow
import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../store/Routes';
import PropTypes from "prop-types";
import {MuiThemeProvider, withStyles} from "@material-ui/core";
import navigateTo from '../features/navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import muiTheme from "../assets/theme";
import SnackBar from '../components/SnackBar';
import {logout} from "../features/security";
import {fetchProfile} from "../features/usermanagement";
import DashboardElements from '../components/dashboard/DashboardElements';

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
  securityState: state.securityState,
  snackBarOpen: state.uiReducer.snackBarOpen,
  message: state.uiReducer.message,
  profile: state.usermanagementState.profile,

});

// Map any actions required to the props
const mapDispatchToProps = {
  logout,
  navigateTo,
  fetchProfile
};

class RootContainer extends Component{
  constructor(props) {
    super(props);
    console.log("Root Container");
    console.log(this.props);
  }
  render() {
    const { classes, theme } = this.props;
    const {logout, history , navigateTo ,  message, snackBarOpen, loggedIn, fetchProfile, profile, securityState} = this.props;
    console.log("Inside RootContainer");
    console.log(this.props);
    return (
      <MuiThemeProvider theme={muiTheme}>
      <div className={classes.rootContainer}>
        {loggedIn // render the bars if we're logged in
        && (
              <DashboardElements
                profile={profile}
                fetchProfile={fetchProfile}
                securityState={securityState}
                logout={logout}
                navigateTo={navigateTo}
              />
        )
        }
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
