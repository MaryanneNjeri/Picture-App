import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import MainAppNavigator from './src/navigation/MainAppNavigator';
import { store } from './src/redux/store';
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <MainAppNavigator />
        </Provider>
      </Root>
    );
  }
}
