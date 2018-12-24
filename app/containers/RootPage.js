// @flow
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import type { Store } from '../reducers/types';
import routes from '../Routes';
import DashboardItems from './DashboardElementsContainer';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import navigateTo from '../actions/navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddMedicine from '../components/AddMedicine';
import { addMedicineActions } from '../actions/addMedicineFormActions';
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";
import { authenticationActions } from '../actions/authenticationActions';
import type {AuthenticationStateType} from "../types/state/AuthenticationStateType";

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

class RootPage extends React.Component<Props>{

  render() {
    const { classes, theme } = this.props;
    const { store, history , navigate} = this.props;
    const{loggedIn} = this.props.authentication;
    return (
      <Provider store={store}>
      <div className={classes.root}>
        {loggedIn // render the bars if we're logged in
        && (
          <div>

              <DashboardItems navigateTo={navigate} />



          </div>
        )
        }
        <main className={classes.content}>

            <ConnectedRouter history={history}>
              {routes}
            </ConnectedRouter>
        </main>
      </div>
      </Provider>
    );
  }
}
RootPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RootPage));
