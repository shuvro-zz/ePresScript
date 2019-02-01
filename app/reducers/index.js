// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginForm } from './loginFormReducer';
import { medicineForm } from './medicineReducer';
import { authentication } from './authenticationReducer';
import uiReducer from '../features/ui/reducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    loginForm,
    medicineForm,
    authentication,
    uiReducer
  });
}
