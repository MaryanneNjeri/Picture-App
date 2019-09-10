import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../../screens/Auth/WelcomScreen';
import LoginScreen from '../../screens/Auth/LoginSreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';

const AuthNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: { header: null },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: { header: null },

  },
  Login: {
    screen: LoginScreen,
    navigationOptions: { header: null },

  },
});

export default AuthNavigator;
