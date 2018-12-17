// @flow
import React, { Component } from 'react';
// import Home from '../components/Home';
import Home from '../components/dashboard/Dashboard';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <Home />;
  }
}
