import { combineReducers } from 'redux';
import details from './signup/reducer';
import body from './login/reducer';
import events from './events/reducer';
import stories from './account/reducer';

// we want to store state from the reducer
export default combineReducers({
  details,
  body,
  events,
  stories,
});
