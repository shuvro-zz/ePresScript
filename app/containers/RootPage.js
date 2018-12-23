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
import navigateTo from '../actions/navigation';
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
const mapDispatchToProps = {
  navigate: navigateTo,

};
const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,
});
class RootPage extends React.Component<Props>{

  render() {
    const { classes, theme } = this.props;
    const { store, history , loggedIn, navigate} = this.props;
    return (
      <div className={classes.root}>
        {loggedIn // render the bars if we're logged in
        && (
          <div>
            <Sidebar navigateTo={navigate}/>
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
RootPage.propTypes = {
  classes: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RootPage));
