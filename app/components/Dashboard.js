import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import type {AddMedicineFormStateType} from "../types/state/AddMedicineFormStateType";
import type {AuthenticationStateType} from "../types/state/AuthenticationStateType";



class Dashboard extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in Dashboard constructor');
    console.log(props);
  }


  render() {
    console.log("Render Dashboard Page");
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default (Dashboard);
