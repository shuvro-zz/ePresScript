// @flow
import React, { PureComponent } from 'react';

import type { Store } from '../reducers/types';

import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Sidebar from '../components/DashboardItems'
import navigateTo from '../actions/navigation';

const mapDispatchToProps = {
  navigateToAlias: navigateTo,
};
const mapStateToProps = state => ({
  loggedIn: state.authentication.loggedIn,

});

const SideBarContainer = ({
                            navigateToAlias,
                          }) => (
  <Sidebar
    navigateTo={navigateToAlias}
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);
