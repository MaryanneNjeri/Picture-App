import { createStackNavigator } from 'react-navigation';
import LandingScreen from '../../screens/App/LandingScreen';
import SetProfileScreen from '../../screens/App/SetProfileScreen';

const AppNavigator = createStackNavigator({
  Landing: {
    screen: LandingScreen,
    navigationOptions: { header: null },
  },
  SetProfile: {
    screen: SetProfileScreen,
    navigationOptions: { header: null },
  },

});

export default AppNavigator;
