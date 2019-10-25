import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LandingScreen from '../../screens/App/LandingScreen';
import SetProfileScreen from '../../screens/App/SetProfileScreen';
import ProfileScreen from '../../screens/App/ProfileScreen';
import HomeScreen from '../../screens/App/HomeScreen';
import UsersListScreen from '../../screens/App/UsersListScreen';
import AccountScreen from '../../screens/App/AccountScreen';
import ResetPasswordScreen from '../../screens/App/ResetPasswordScreen';
import NewPostScreen from '../../screens/App/NewPostScreen';
import StoryScreen from '../../screens/App/StoryScreen';
import StoryDetailsScreen from '../../screens/App/StoryDetailsScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen:
    createBottomTabNavigator({
      Home: HomeScreen,
      Users: UsersListScreen,
      Account: AccountScreen,
      Profile: ProfileScreen,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({

        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          const IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'ios-home';
          } else if (routeName === 'Users') {
            iconName = 'ios-people';
          } else if (routeName === 'Account') {
            iconName = 'ios-albums';
          } else if (routeName === 'Profile') {
            iconName = 'ios-person';
          }
          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },

      }),

      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }),
    navigationOptions: {
      header: null,
    },
  },
  Landing: {
    screen: LandingScreen,
    navigationOptions: { header: null },
  },
  SetProfile: {
    screen: SetProfileScreen,
    navigationOptions: { header: null },
  },
  NewPost: {
    screen: NewPostScreen,
  },
  Story: {
    screen: StoryScreen,
  },
  StoryDetails: {
    screen: StoryDetailsScreen,
  },
  ResetPassword: {
    screen: ResetPasswordScreen,
    navigationOptions: { header: null },
  },

});

export default AppNavigator;
