// @flow
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import type { Store } from '../reducers/types';
import routes from '../Routes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import AppBar from '../components/AppBar';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

import { connect } from 'react-redux';
import type {AuthenticationStateType} from "../types/state/AuthenticationStateType";
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";

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
type Props = {
  authentication: AuthenticationStateType,
  store: Store,
  history: {}
};

class Root extends React.Component<Props>{

  render() {
    console.log("inside Root()");
    console.log(this.props);
    const { loggedIn} = this.props.authentication.loggedIn;
    const {store , history, classes} = this.props;
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
              {routes}
            </ConnectedRouter>
          </Provider>
        </main>
      </div>
    );
  }
}
Root.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Root);
