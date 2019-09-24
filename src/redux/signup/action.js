import { AsyncStorage } from 'react-native';
import Fire from '../../firebase/config';

export const SIGNUP_BEGIN = 'SIGNUP_BEGIN';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signupBegin = () => ({
  type: SIGNUP_BEGIN,
});

export const signupSuccess = details => ({
  type: SIGNUP_SUCCESS,
  payload: { details },
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: { error },
});

export function signUp(email, password) {
  return (dispatch) => {
    dispatch(signupBegin());
    return Fire.auth().createUserWithEmailAndPassword(email, password)

      .then((body) => {
        dispatch(signupSuccess(body));
        body.user.getIdToken().then((response) => {
          AsyncStorage.setItem('token', response);
        });
        return body;
      })
      .catch(error => dispatch(signupFailure(error)));
  };
}
