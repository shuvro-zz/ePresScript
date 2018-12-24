// @flow
import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard'

const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,

});

export default connect(mapStateToProps)(Dashboard);
