import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
const { remote } = require('electron');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

import {IconSettingsPrinter , IconSettingsDocument} from '../assets';

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
    listStyleType: 'none',
    padding: '20px 10px 20px 10px',
    width: 'auto',
    height: '200px',
    position: 'relative',
    margin: 'inherit'
  },
  printerElm:{
    textAlign:'center'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    padding: '0 0'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});
let printWindow;


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
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      printers: [],
      defaultPrinter: '',
      expanded: null,
    };
  }

  componentDidMount(){
    const { BrowserWindow, dialog, shell } = remote;
    printWindow = new BrowserWindow({ 'auto-hide-menu-bar': true,show:false });
    printWindow.loadFile('/db/test.pdf');
    let list = printWindow.webContents.getPrinters();

    this.setState( {
      printers : list
    })
  }

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  handleChange = panel => (event, expanded) => {
    event.preventDefault();

    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  setDefaultPrinter = p => (event) => {
    event.preventDefault();
    this.setState({
      defaultPrinter: p
    });
  };

  testPrint = p => (event) => {
    event.preventDefault();
    let dbDirectory = path.join(__dirname, process.env.NODE_ENV ==='development' ? '/db/test.pdf' : '/db/test.pdf');

    console.log(dbDirectory);
    const { BrowserWindow, dialog, shell } = remote;
     let test = new BrowserWindow({ 'auto-hide-menu-bar': true,show:false });
    let contents = test.webContents;
    contents.loadFile(dbDirectory);
    console.log(contents);
    contents.print({ silent: true, printBackground: true, deviceName: p });

  };

  render(){
    const { classes } = this.props;
    const { value , printers } = this.state;
    console.log("Inside Settings Component");
    console.log(this.state);
  // console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));
    const { expanded } = this.state;

    return(
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleTabChange}
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
          <li className={classes.printerListElm} key={key}>

            <PrinterElements printer={p} classes={classes}/>

            <ExpansionPanel expanded={expanded === p.name} onChange={this.handleChange(p.name)}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>General settings</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <a href="#" onClick={this.setDefaultPrinter(p.name)}>Set this as default printer</a>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.testPrint(p.name)}>Send Test Print</Button>
              </ExpansionPanelDetails>
            </ExpansionPanel>

          </li>
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
