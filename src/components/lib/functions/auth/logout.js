import { AsyncStorage } from 'react-native';

import Fire from '../../../../firebase/config';

export const logout = async () => {
  await AsyncStorage.removeItem('token');

  Fire.auth().signOut();
};
