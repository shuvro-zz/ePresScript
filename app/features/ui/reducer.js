import {
  SNACKBAR_OPEN,
  SNACKBAR_CLOSED,
} from './constants';

const initialState = {
  snackBarOpen: false,
  message: '',
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SNACKBAR_OPEN:
      return {
        ...state,
        snackBarOpen: true,
        message: action.message,
        snackBarVariant: action.variant,
      };
    case SNACKBAR_CLOSED:
      return {
        ...state,
        snackBarOpen: false,
        message: ''
      };
    default:
      return state;
  }
}
