// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import type { Store } from '../reducers/types';
import Routes from '../Routes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import AppBar from '../components/AppBar';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

import { connect } from 'react-redux';
type Props = {
  store: Store,
  history: {}
};
const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    marginTop: 64,
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
});
class Root extends Component<Props> {
  constructor(props: Props, state: any) {
    super(props);
    console.log('in Root constructor');
    console.log(props);
  }

  render() {
    const { classes, theme } = this.props;
    const { store, history , loggedIn} = this.props;
    return (
      <div className={classes.root}>
        {loggedIn // render the bars if we're logged in
        && (
          <div>
            <Sidebar />
            <AppBar />
          </div>
        )
        }
        <main className={classes.content}>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Routes />
            </ConnectedRouter>
          </Provider>
        </main>
      </div>
    );
  }
}
Root.propTypes = {
  classes: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(Root));

//
// <div>

// </div>
