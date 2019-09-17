import * as Google from 'expo-google-app-auth';
import * as firebase from 'firebase';
import { Alert, AsyncStorage } from 'react-native';
import app from '../../../../firebase/config';
import { config } from '../../../../firebase/google.config';


// First obtain the access token from Expo's Google Api
export async function signInWithGoogle() {
  try {
    const result = await Google.logInAsync({
      androidClientId: config.androidClientId,
      iosClientId: config.iosClientId,
      scopes: ['profile', 'email'],
    });
    if (result.type === 'success') {
      const { idToken } = result;
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken);
      app.auth().signInWithCredential(credential);
      await app.auth().currentUser.getIdToken(true).then((result) => {
        AsyncStorage.setItem('token', result);
      }).catch((error) => {
        Alert.alert('Error', `${error}`);
      });
    } else {
      Alert.alert('Permissions', 'Permission denied');
    }
  } catch (e) {
    console.log(e);
    Alert.alert(`Google Login Error:${e}`);
  }
}
