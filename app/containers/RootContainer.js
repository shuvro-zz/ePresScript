// @flow
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import type { Store } from '../reducers/types';
import routes from '../store/Routes';
import DashboardElementsContainer from './DashboardElementsContainer';
import PropTypes from "prop-types";
import {MuiThemeProvider, withStyles} from "@material-ui/core";
import navigateTo from '../features/navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticationActions } from '../actions/authenticationActions';
import muiTheme from "../assets/theme";
import SnackBar from '../components/SnackBar';

type Props = {
  store: Store,
  history: {}
};
const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    marginTop: 50,
    flexGrow: 1,
    padding: theme.spacing.unit,
  },
  contentWindow: {
    marginTop: 64,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 64,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    padding: 8,
    paddingTop: 0,
  },

  contentBeneathTabBar: {
    paddingTop: 56,
  },
});

// Map the stuff we want from the global application state in redux to the props
function mapStateToProps(state: State) {
  return {
    loggedIn: state.authentication.loggedIn,
    snackBarOpen: state.uiReducer.snackBarOpen,
    message: state.uiReducer.message
  };
}

// Map any actions required to the props
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      navigate: navigateTo,
      logout : authenticationActions.logout
    },
    dispatch
  );
}

class RootContainer extends PureComponent{

  render() {
    const { classes, theme } = this.props;
    const { history , navigate ,  message, snackBarOpen, loggedIn} = this.props;
    console.log(this.props);
    return (
      <MuiThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        {loggedIn // render the bars if we're logged in
        && (
          <div>
              <DashboardElementsContainer />
          </div>
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
