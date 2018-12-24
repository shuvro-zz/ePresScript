// @flow
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import type { Store } from '../reducers/types';
import routes from '../store/Routes';
import DashboardItems from './DashboardElementsContainer';
import PropTypes from "prop-types";
import {MuiThemeProvider, withStyles} from "@material-ui/core";
import navigateTo from '../features/navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticationActions } from '../actions/authenticationActions';
import muiTheme from "../assets/AppTheme";

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
});

// Map the stuff we want from the global application state in redux to the props
function mapStateToProps(state: State) {
  return {
    authentication: state.authentication
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

class RootContainer extends React.Component<Props>{

  render() {
    const { classes, theme } = this.props;
    const { store, history , navigate} = this.props;
    const{loggedIn} = this.props.authentication;
    return (
      <MuiThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        {loggedIn // render the bars if we're logged in
        && (
          <div>
              <DashboardItems />
          </div>
        )
        }
        <main className={classes.content}>
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
