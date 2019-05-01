import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


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
  },
  active:{
    backgroundColor: '#1F313F',
    borderLeft: '3px solid #E22454',
  },
  formControl: {
    minWidth: '100%',
  },

});


class DashboardElements extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: 'dashboard',
      open:true,
      anchorEl: null,
      anchorEl2: null,
      openDialogProfile: false,
      openDialogMyAccount: false
    };
    this.handleClick = this.handleClick.bind(this);
    console.log("inside Sidebar constructor");
  }
  componentWillMount() {
    this.props.fetchProfile(this.props.securityState.user.access_token);
  }
  handleProfileDialogClickOpen = () => {
    this.setState({ openDialogProfile: true });
  };
  handleProfileDialogClickClose = () => {
    this.setState({ openDialogProfile: false });
  };
  
  handleMyAccountDialogClickOpen = () => {
    this.setState({ openDialogMyAccount: true });
  };
  handleMyAccountDialogClickClose = () => {
    this.setState({ openDialogMyAccount: false });
  };

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
    //if (currentPath !== requestedPath) {
      this.setState({
        currentPath: requestedPath,
      });
      // insert a slash before the requested path to make it a path
      const path = `/${requestedPath}`;
      console.log(path);
      this.props.navigateTo(path, currentPath);
    //}
  }

  handleLogout(event){
    event.preventDefault();
    const {loggedIn } = this.props.securityState;
    if (loggedIn) {
      this.props.logout(loggedIn);
    }
  }

  render() {
    console.log(this.props);
    const {firstname, lastname} = this.props.profile;
    const username = firstname +` ` +lastname;
    const { classes, theme } = this.props;
    const { open , currentPath, anchorEl , anchorEl2} = this.state;

    let dash = false;
    let pat = false;
    let med = false;
    let treat = false;
    if(this.state.currentPath == 'dashboard'){
      dash = true;
    }
    else if(this.state.currentPath == 'patients'){
      pat = true;
    }
    else if(this.state.currentPath == 'medicine'){
      med = true;
    }
    else if(this.state.currentPath == 'treatment'){
      treat = true;
    }
    const primaryItems = (
      <div className={classes.drawerElements}>
        <ListItem button onClick={() => this.handleClick('dashboard')} className={ dash?`${classes.active}`:null }>
          <ListItemIcon>
            <BarChart/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => this.handleClick('patients')} className={ pat?`${classes.active}`:null }>
          <ListItemIcon>
            <Person/>
          </ListItemIcon>
          <ListItemText primary="Patients" />
          </ListItem>
        <ListItem button
                  onClick={() => this.handleClick('medicine')} className={ med?`${classes.active}`:null }>
          <ListItemIcon>
            <LocalHospital />
          </ListItemIcon>
          <ListItemText primary="Medicine" />
        </ListItem>
        <ListItem button
                  onClick={() => this.handleClick('treatment')} className={ treat?`${classes.active}`:null }>
          <ListItemIcon>
            <Healing/>
          </ListItemIcon>
          <ListItemText primary="Treatment" />
        </ListItem>
      </div>
    );
    const secondaryItems = (
      <div>
        <ListItem button>
          <ListItemIcon>
            <LiveHelp />
          </ListItemIcon>
          <ListItemText primary="Help Center" />
        </ListItem>
        <ListItem button>
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
                <h4 className={classes.profileName}>{username}</h4>
              </IconButton>
              <IconButton
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClickMenu}
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleCloseMenu}
                className={classes.menuItems}
              >
                <MenuItem onClick={this.handleCloseMenu} className={classes.menuItem} onClick={this.handleProfileDialogClickOpen}>Profile</MenuItem>
                <MenuItem onClick={this.handleCloseMenu} className={classes.menuItem} onClick={this.handleMyAccountDialogClickOpen}>My account</MenuItem>
                <MenuItem onClick={this.handleCloseMenu} className={classes.menuItem} onClick={() => this.handleLogout(event)}>Logout</MenuItem>
              </Menu>
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
          <Dialog
          open={this.state.openDialogProfile}
          onClose={this.handleProfileDialogClickClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Profile</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Last Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Contact"
              type="Text"
              fullWidth
            />
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="Sex">Sex</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
            </FormControl>  
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleProfileDialogClickClose} color="secondary">
              Update
            </Button>
            <Button onClick={this.handleProfileDialogClickClose} color="primary">
              Close 
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openDialogMyAccount}
          onClose={this.handleMyAccountDialogClickClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Account</DialogTitle>
          <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Enter New Email"
                type="text"
                fullWidth
              />
              <TextField
                margin="dense"
                id="name"
                label="Enter Password"
                type="text"
                fullWidth
              />
              <Button style={{background:'blue',color:'white'}}>Save Changes</Button>
          
              <br/>
              <br/>

            <TextField
                margin="dense"
                id="name"
                label="Current Password"
                type="text"
                fullWidth
              />
             
              <TextField
                margin="dense"
                id="name"
                label="New Password"
                type="text"
                fullWidth
              />
              <TextField
                margin="dense"
                id="name"
                label="Confirm Password"
                type="text"
                fullWidth
              />
              <Button style={{background:'blue',color:'white'}}>Save Changes</Button>
            
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Last Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Contact"
              type="Text"
              fullWidth
            />
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="Sex">Sex</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
            </FormControl>   */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleMyAccountDialogClickClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DashboardElements.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DashboardElements);
