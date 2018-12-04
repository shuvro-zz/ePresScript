// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default function createRootReducer(history: History) {
  console.log(history);
  return combineReducers({
    router: connectRouter(history)
  });
}
