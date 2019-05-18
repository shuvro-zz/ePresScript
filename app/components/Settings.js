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
const ipcRenderer = require("electron").ipcRenderer;
import {IconSettingsPrinter , IconSettingsDocument} from '../assets';
import Switch from '@material-ui/core/Switch';

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
      backgroundPrint: true,
      expanded: null,
    };
  }

  componentDidMount(){
    this.setState( {
      printers : this.props.systemEnvState.printers,
      defaultPrinter: this.props.settingsState.defaultPrinter,
      backgroundPrint: this.props.settingsState.backgroundPrint
    })
  }

  componentDidUpdate(prevProps){

    if (this.props.settingsState !== prevProps.settingsState) {
      console.log("updating settings info");
      this.setState({
        defaultPrinter: this.props.settingsState.defaultPrinter,
        backgroundPrint: this.props.settingsState.backgroundPrint
      })
    }
  }
  handlebackgroundPrintChange = name => event => {
    const settings ={
      backgroundPrint: event.target.checked,
      defaultPrinter: this.state.defaultPrinter
    };
    this.props.saveSettings(settings);
    //this.setState({ [name]: event.target.checked });
  };

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

    const settings ={
      defaultPrinter: p,
      backgroundPrint: this.state.backgroundPrint
    };

    this.props.saveSettings(settings);
  };

  testPrint = p => (event) => {
    event.preventDefault();
    const printerObj={
      content: "<h1>TEST PRINT FROM E-DOCTORSCRIPT</h1>",
      options: {
        silent: this.state.backgroundPrint, //Don't ask user for print settings. Default is false.
        printBackground: true, //Also prints the background color and image of the web page. Default is false.
        deviceName: p
      }
    };

    console.log("Test print request", printerObj);
    ipcRenderer.send("printPDF", printerObj);
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

            <Tab label="Printers" icon= {<IconSettingsPrinter />} />
            <Tab label="Print Settings" icon={<FavoriteIcon />} />
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

        {value === 1 &&
          <div>
            <span>
              Background Print
              <Switch
                checked={this.state.backgroundPrint}
                onChange={this.handlebackgroundPrintChange('backgroundPrint')}
                value="backgroundPrint"
              />
            </span>

          </div>
        }
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    )
  }
}
export default withStyles(styles)(Settings);
