import {
  SNACKBAR_OPEN,
  SNACKBAR_CLOSED,
} from './constants';
export const openSnackBar = (message, variant) => (
  {
    type: SNACKBAR_OPEN,
    payload: { message, variant },
  }
);

export const closeSnackBar = () => (
  {
    type: SNACKBAR_CLOSED ,
  }
);
