import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import printer from 'printer';
import {IconSettingsPrinter} from '../assets';

var util = require('util');


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "auto",
    marginTop: theme.spacing.unit * 8,
  },
  printerList:{
    minWidth: 600,
    listStyle: 'none'
  },
  printerListElm: {
    display: 'inline-block',
    listStyleType: 'none'
  },
  printerElm:{
    textAlign:'center'
  }
});


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
function PrinterElements(props) {
  return (
    <div className={props.classes.printerElm}>
    <IconSettingsPrinter />
    <p>{props.printer.name}</p>

    </div>
  );
}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Settings extends React.Component{

  constructor(props: Props, state: any) {
    super(props);
    this.state = {
      value: 0,
      printers: [],
      defaultPrinter: ''
    };
  }

  componentDidMount(){
    this.setState( {
      printers : printer.getPrinters()
    })
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render(){
    const { classes } = this.props;
    const { value , printers } = this.state;
    console.log("Inside Settings Component");
    console.log(this.state);
  // console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));

    return(
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >

            <Tab label="Printer Settings" icon= {<IconSettingsPrinter />} />
            <Tab label="Item Two" icon={<FavoriteIcon />} />
            <Tab label="Item Three" icon={<PersonPinIcon />} />
          </Tabs>
        </AppBar>

        {value === 0 &&  <ul className={classes.printerList}> {this.state.printers.map((p, key) =>
          <li className={classes.printerListElm} key={key}> <PrinterElements printer={p} classes={classes}/> </li>
        )}
        </ul>
        }

        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    )
  }
}
export default withStyles(styles)(Settings);
