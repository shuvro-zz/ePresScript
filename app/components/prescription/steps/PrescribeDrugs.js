import React, { Component } from 'react';
import {withStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MedicineTableView from '../../TableViews/MedicineTableView';
import medicinedata from '../../../fakedata/medicine-fake';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

const columns = [{
  dataField: 'generic_name',
  text: 'Product ID'
}, {
  dataField: 'form',
  text: 'Product Name'
}, {
  dataField: 'strength',
  text: 'Product Price'
}, {
    dataField: 'indication',
    text: 'Product Price'
  }
];


const styles = theme => ({
  prescribeMedicineComponent: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    padding: `${theme.spacing.unit }px ${theme.spacing.unit }px ${theme.spacing.unit }px`,
  },
  paper:{
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
  }
});
type Props = {
  setForm: (form: string) => void,
  setName: (name: string) => void,
  setStrength: (strength: string) => void,
  setFrequency: (frequency: string) => void,
  setRemark: (remark: string) => void,
  setSubmitted: (submitted: boolean) => void
};

class PrescribeDrugs extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in Overview constructor');
    console.log(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.prescribeMedicineComponent}>

          <Grid item xs={12}>

              <BootstrapTable
                keyField="generic_name"
                data={ medicinedata }
                columns={ columns }
                cellEdit={ cellEditFactory({ mode: 'click' }) }
              />

          </Grid>

      </div>
    );
  }
}

export default withStyles(styles)(PrescribeDrugs);
