import { combineReducers } from 'redux';
import details from './signup/reducer';
import body from './login/reducer';
// we want to store state from the reducer
export default combineReducers({
  details,
  body,
});
