import { createMuiTheme } from '@material-ui/core/styles';

import {
  primaryColor,
  secondaryColor,
  highlightColor,
} from '../styleConstants';

// ****************************************** THEME ********************************************* //

const muiTheme = createMuiTheme({
  overrides: {
    MuiListItem: {
      button: {
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: highlightColor,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: highlightColor,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
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
        color:'#fffff'
      },
      root:{
        color:'#fffff'
      }
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
  },
  //text or headlines
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto',
    fontSize: '1rem',

  },
});

export default muiTheme;
