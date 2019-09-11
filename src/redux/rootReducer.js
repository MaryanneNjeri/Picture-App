import { combineReducers } from 'redux';
import details from './signup/reducer';

// we want to store state from the reducer
export default combineReducers({
  details,
});
