import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './Auth/AuthNavigator';
import AppNavigator from './App/AppNavigator';
import LoadingScreen from '../screens/Auth/LoadingScreen';

export default createAppContainer(createSwitchNavigator(
  {
    // AuthLoading: LoadingScreen,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    // intialRouteName: 'AuthLoading',
  },
));
