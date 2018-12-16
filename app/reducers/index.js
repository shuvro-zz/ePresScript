// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginForm } from './loginFormReducer';
import { medicineForm } from './addMedicineReducer';
import { authentication } from './authenticationReducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    loginForm,
    medicineForm,
    authentication
  });
}
