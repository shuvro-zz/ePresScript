import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import DashboardIcon from "@material-ui/icons/Dashboard";
import ControlPoint from "@material-ui/icons/ControlPoint";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BarChart from '@material-ui/icons/BarChart';
import LocalHospital from '@material-ui/icons/LocalHospital';
import Healing from '@material-ui/icons/Healing';
import Person from '@material-ui/icons/Person';
import LiveHelp from '@material-ui/icons/LiveHelp';
import Settings from '@material-ui/icons/Settings';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import classNames from 'classnames';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase/InputBase";
import AppBar from "@material-ui/core/AppBar/AppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Badge from "@material-ui/core/Badge/Badge";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Divider from '@material-ui/core/Divider';
import { fade } from '@material-ui/core/styles/colorManipulator';
import muiThemeable from 'material-ui/styles/muiThemeable';


const drawerWidth = 240;

const styles = theme => ({
  dashboardElementComponent: {
    display: 'flex',
    backgroundColor:'black',
    color:'white',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    background: theme.palette.primary.main,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: theme.palette.primary.main,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    background:'#ffffff',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    background:'#ffffff',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerHeader: {
    display: 'flex',
    ...theme.mixins.toolbar,
    padding: '1em 10%',
  },
  menuButton: {
    color:'#000000',
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerElements:{
    color:'#fffff'
  },
  sectionDesktop: {
    color:'#515151',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  search: {
    color:'#515151',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '74%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  arrowIcon:{
    color:'#7f7f7f',
  },
  profileName:{
    color:"#7f7f7f",
    
  },
  menuItems:{
    marginTop:'30px',
  },
  menuItem:{
    '&:hover':{
      backgroundColor:'#f2f2f2',
    }
  }

});

class ResponsiveDrawer extends React.Component {
  constructor(props: Props, state: any) {
    super(props);
    this.state = {
      currentPath: 'dashboard',
      open:true,
      anchorEl: null,
      anchorEl2: null,
    };
    this.handleClick = this.handleClick.bind(this);
    console.log("inside Sidebar constructor");
    console.log(this.props);
  }


  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  
  handleClickNotification = event => {
    this.setState({ anchorEl2: event.currentTarget });
  };

  handleCloseNotification = () => {
    this.setState({ anchorEl2: null });
  };
  handleClickMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };
  handleClick(requestedPath) {
    // get the currently selected item
    const { currentPath } = this.state;

    // if the clicked item is not the already selected item, it gets selected
    if (currentPath !== requestedPath) {
      this.setState({
        currentPath: requestedPath,
      });
      // insert a slash before the requested path to make it a path
      const path = `/${requestedPath}`;
      console.log(path);
      this.props.navigate(path, currentPath);
    }
  }
  handleLogout(event){
    const {loggedIn } = this.props.authentication;
    event.preventDefault();
    if (loggedIn) {
      this.props.logout(loggedIn);
    }
  }
  render() {
    const { classes, theme } = this.props;
    const { open , currentPath, anchorEl , anchorEl2} = this.state;
    
    const primaryItems = (
      <div className={classes.drawerElements}>
        <ListItem button
                  onClick={() => this.handleClick('dashboard')}>
          <ListItemIcon>
            <BarChart/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button
                  onClick={() => this.handleClick('dashboard')}>
          <ListItemIcon>
            <Person/>
          </ListItemIcon>
          <ListItemText primary="Patient" />
        </ListItem>
        <ListItem button
                  onClick={() => this.handleClick('medicine')}>
          <ListItemIcon>
            <LocalHospital />
          </ListItemIcon>
          <ListItemText primary="Medicine" />
        </ListItem>
        <ListItem button
                  onClick={() => this.handleClick('treatment')}>
          <ListItemIcon>
            <Healing/>
          </ListItemIcon>
          <ListItemText primary="Treatment" />
        </ListItem>
      </div>
    );
    const secondaryItems = (
      <div>
        <ListItem button
                  onClick={() => this.handleLogout(event)}>
          <ListItemIcon>
            <LiveHelp />
          </ListItemIcon>
          <ListItemText primary="Help Center" />
        </ListItem>
        <ListItem button
                  onClick={() => this.handleLogout(event)}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        
      </div>
    );
    return (
      <div className={classes.dashboardElementComponent}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton 
                color="inherit"
                aria-owns={anchorEl2 ? 'simple-menu2' : undefined}
                aria-haspopup="true"
                onClick={this.handleClickNotification}
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Menu
                id="simple-menu2"
                anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={this.handleCloseNotification}
                className={classes.menuItems}
              >
                <MenuItem onClick={this.handleCloseNotification} className={classes.menuItem}>You have listed a new medicine</MenuItem>
                <MenuItem onClick={this.handleCloseNotification} className={classes.menuItem}>Your monthly report is ready</MenuItem>
                <MenuItem onClick={this.handleCloseNotification} className={classes.menuItem}>You have listed a new medicine</MenuItem>
              </Menu>
              {/* still need to fix handleProfileMenuOpen*/}
              <IconButton 
                disabled={true}
                
              >
                <h4 className={classes.profileName}>Nakib Hossain</h4>
              </IconButton>
              <IconButton
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClickMenu}
              >

               <KeyboardArrowDown className={classes.arrowIcon}/>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleCloseMenu}
                className={classes.menuItems}
              >
                <MenuItem onClick={this.handleCloseMenu} className={classes.menuItem}>Profile</MenuItem>
                <MenuItem onClick={this.handleCloseMenu} className={classes.menuItem}>My account</MenuItem>
                <MenuItem onClick={this.handleCloseMenu} className={classes.menuItem} onClick={() => this.handleLogout(event)}>Logout</MenuItem>
              </Menu>
              <IconButton
                aria-owns ='material-appbar'
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              }),
            }}
          open={open}>
          <div className={classes.drawerHeader}>
            <Typography
              component="h4"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              E-Prescription
            </Typography>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={this.handleDrawerClose}
            >
              <MoreVertIcon />
            </IconButton>
          </div>
          <Divider />
          {primaryItems}
          <Divider />
          {secondaryItems}
          </Drawer>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
