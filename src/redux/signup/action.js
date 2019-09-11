import { AsyncStorage } from 'react-native';
import app from '../../firebase/config';

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
    function handleErrors(response) {
      if (!response.ok) {
        alert(response.statusText);
      }
      return response;
    }

    dispatch(signupBegin());
    return app.auth().createUserWithEmailAndPassword(email, password)
      .then(handleErrors)
      .then((body) => {
        dispatch(signupSuccess(body));
        AsyncStorage.setItem('token', body.stsTokenManager.accessToken);
        console.log(body);
        return body;
      })
      .catch(error => dispatch(signupFailure(error)));
  };
}
