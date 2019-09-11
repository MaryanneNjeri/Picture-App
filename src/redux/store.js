import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

/*
* thunk has to be wrapped around a middleware
* since reducers only take simple action object
* we use thunk as the object we pass has an action
* here we link the store with oure reducers using the create store function..
* */

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
