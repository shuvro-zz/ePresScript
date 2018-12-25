import { createMuiTheme } from '@material-ui/core/styles';

import {
  primaryColor,
  secondaryColor,
  highlightColor,
} from '../styleConstants';

// ****************************************** THEME ********************************************* //

const muiTheme = createMuiTheme({
  // overrides: changes every single style injected by Material-UI into the DOM
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
  },
  // this is the colour palette
  palette: {
    // primary color of the app for primary interfaces
    primary: {
      main: primaryColor,
    },
    //  color of the app for secondary interfaces
    secondary: {
      main: secondaryColor,
    },
    highlight: {
      main: highlightColor,
    },
  },
  // this is text stuff
  typography: {
    fontFamily: 'Roboto',
    fontSize: '1rem',
  },
});

export default muiTheme;
