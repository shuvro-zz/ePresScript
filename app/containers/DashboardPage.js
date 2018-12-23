// @flow
import React, { PureComponent } from 'react';

import type { Store } from '../reducers/types';

import {withStyles} from "@material-ui/core";

import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard'
type Props = {
  store: Store,
  history: {}
};
const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,

});

export default connect(mapStateToProps)(Dashboard);
