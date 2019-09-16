import { AsyncStorage } from 'react-native';

import app from '../../../../firebase/config';

export const logout = async () => {
  await AsyncStorage.removeItem('token');

  app.auth().signOut();
};
