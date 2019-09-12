import { AsyncStorage } from 'react-native';
import app from '../../../../firebase/config';

export const logout = async () => {
  app.auth().signOut();
  await AsyncStorage.removeItem('token');
};
