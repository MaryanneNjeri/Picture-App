import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './Auth/AuthNavigator';

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthNavigator,
  },
));
