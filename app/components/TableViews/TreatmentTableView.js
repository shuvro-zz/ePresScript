import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from "@material-ui/core/TableHead/TableHead";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import TreatmentMedicineView from './TreatmentMedicineView';
import Draggable from "react-draggable";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);

const styles = theme => ({
  root: {
    width: '96%',
    marginTop: theme.spacing.unit * 12,
    marginLeft:'2%'
  },
  table: {
    minWidth: 500,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  medicineListSearch: {
    padding: 10,
  },
  TableCell:{
    '&:hover': {
      background:'#f0f0f0',
      cursor:'pointer',
    }
  }
});

class TreatmentTableView extends React.Component {
  constructor(props) {
    super(props);
    console.log('In TreatmentTableView');
    console.log(props);
    this.state = {
      rows: [],
      page: 0,
      rowsPerPage: 5,
      searchOn:false,
      filtered:[],
      openMedicineDetail: false,
      medicine:[],
      treatmentName: '',
      MedicineList: this.props.medicineState.medicineList,
    };
  }

  handleClickOpen = () => {
    this.setState({ openMedicineDetail: true });
  };

  handleClose = () => {
    this.setState({ openMedicineDetail: false });
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };
  SearchMedicine = event =>{
    let keyword = event.target.value;
    this.setState({
      searchOn:true
    });
    if (this.state.rows.length !== 0){
      let filtered = this.state.rows.filter((item)=>{
        return item.name.toUpperCase().indexOf(keyword.toUpperCase()) > -1;
      });
      this.setState({
        filtered:filtered,
        searching:true
      })
    }

  };

  handleChange(index,treatment)
  {
    console.log(treatment);

    const {treatment_medicine_list , name } = treatment;
    this.setState({
      openMedicineDetail: true,
      medicine: treatment_medicine_list,
      treatmentName: name
    });
  }

  componentWillMount(){
    this.setState({
      rows: this.props.treatmentState.treatment
    })
  }

  componentDidUpdate(prevProps){
    if (this.props.treatmentState.treatment !== prevProps.treatmentState.treatment) {
      this.setState({
        rows: this.props.treatmentState.treatment
      })
    }
  }
  render() {
    console.log("Inside Treatment Table View");
    console.log(this.props);
    console.log(this.state);
    const { classes , saveMedicine, updateTreatmentMedicine} = this.props;
    const { rows, rowsPerPage, page , medicine , treatmentName, MedicineList} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    let medTable = null;
    if (rows.length !==0 ){
      medTable = !this.state.searchOn?rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map( (treatment, index) => {
        return(
          <TableRow className={classes.TableCell} key={index} onClick={() => {
            this.handleChange(index , treatment);
          }}>
            <TableCell  component="th" scope="row">{treatment.name}</TableCell>
            <TableCell  component="th" scope="row">{treatment.description}</TableCell>
          </TableRow>
        )
      }):this.state.filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((treatment, index) => {
        return(
          <TableRow className={classes.TableCell} key={index} onClick={() => {
            this.handleChange(index , treatment);
          }}>
            <TableCell component="th" scope="row">{treatment.name}</TableCell>
            <TableCell component="th" scope="row">{treatment.description}</TableCell>
          </TableRow>
        )
      });
    }

    return (
      <Paper className={classes.root}>
        <div>
          <Dialog
            fullWidth = {true}
            maxWidth = "xl"
            open={this.state.openMedicineDetail}
            onClose={this.handleClose}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogContent>
              <TreatmentMedicineView
                medicine={medicine}
                medList={MedicineList}
                name={treatmentName}
                saveMedicine={saveMedicine}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className={classes.medicineListSearch}>
        <InputBase className={classes.input} placeholder="Search Treatment" onChange={this.SearchMedicine} />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
        </div>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow >
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {medTable}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={2}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

TreatmentTableView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TreatmentTableView);
