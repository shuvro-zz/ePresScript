// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginForm } from './loginFormReducer';

export default function createRootReducer(history: History) {
  console.log(history);
  return combineReducers({
    router: connectRouter(history),
    loginForm
  });
}
