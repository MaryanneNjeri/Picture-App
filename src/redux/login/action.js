import { AsyncStorage } from 'react-native';
import Fire from '../../firebase/config';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginBegin = () => ({
  type: LOGIN_BEGIN,
});

export const loginSuccess = body => ({
  type: LOGIN_SUCCESS,
  payload: { body },
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export function logIn(email, password) {
  return (dispatch) => {
    dispatch(loginBegin());
    return Fire.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        dispatch(loginSuccess(response));
        response.user.getIdToken().then((body) => {
          AsyncStorage.setItem('token', body);
        });

        return response;
      })
      .catch(error => dispatch(loginFailure(error)));
  };
}
