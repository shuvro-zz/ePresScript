import { createMuiTheme } from '@material-ui/core/styles';

import {
  primaryColor,
  secondaryColor,
  highlightColor,
  defaultColor,
} from '../styleConstants';

// ****************************************** THEME ********************************************* //

const muiTheme = createMuiTheme({
  overrides: {
    MuiListItem: {
      button: {
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: highlightColor,
          //borderLeft: '3px solid #E22454', This hover is not looking good I think, try it and check.
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiIconButton: {
      root: {
        marginLeft:'5px',
        padding:'7px',
      },
    },
    MuiGridListTileBar: {
      root: {
        backgroundColor: primaryColor,
      },
    },
    MuiTableRow: {
      root: {
        '&$hover:hover': {
          backgroundColor: highlightColor,
        },
      },
    },
    MuiMenuItem: {
      root: {
        '&$selected': {
          backgroundColor: highlightColor,
        },
      },
    },
    MuiTypography:{
      subtitle1:{
        color:'#fffff',
      },
      root:{
        color:'#fffff',
        fontSize:'16px',
      },
      h6:{
        fontSize:'20px',
        marginRight:'62px',
      },
      noWrap:{
        overflow:'visible',
      },
    },
    MuiListItemIcon:{
      root:{
        color:'#fffff'
      }
    },
    MuiToolbar:{
      root:{
        background:'#fffff'
      },
    },
    MuiGrid:{
      container:{
        backgroundColor: "inherit"
      }
    },
    MuiExpansionPanelSummary:{
      content:{
        paddingRight: '0px'
      }
    }
  },
  // this is the colour palette
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    highlight: {
      main: highlightColor,
    },
    default: {
      main: defaultColor,
    },
  },
  //text or headlines
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto',
    fontSize: '1rem',

  },
});

export default muiTheme;
