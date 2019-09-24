import * as Facebook from 'expo-facebook';
import { Alert, AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import Fire from '../../../../firebase/config';

export async function signInWithFacebook() {
  try {
    // Asking for permission
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      app.options.facebook.appId, {
        permission: ['public_profile', 'email', 'user_birthday', 'user_photos'],
      },
    );

    if (type === 'success' && token) {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      await Fire.auth().signInWithCredential(credential);

      await Fire.auth().currentUser.getIdToken(true).then((result) => {

        AsyncStorage.setItem('token', result);
      }).catch((error) => {
        Alert.alert('Error', `${error}`);
      });
    } else {
      Alert.alert('Permissions', 'Permission denied');
    }
  } catch (e) {
    Alert.alert(`Facebook Login Error:${e}`);
  }
}
