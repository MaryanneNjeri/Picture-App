import { createStackNavigator } from 'react-navigation';
import LandingScreen from '../../screens/App/LandingScreen';

const AppNavigator = createStackNavigator({
  Landing: {
    screen: LandingScreen,
    navigationOptions: { header: null },
  },

});

export default AppNavigator;
