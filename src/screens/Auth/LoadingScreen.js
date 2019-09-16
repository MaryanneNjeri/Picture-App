import React from 'react';
import {
  View, Text, ActivityIndicator, StyleSheet, Image,
} from 'react-native';
import app from '../../firebase/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 400,

  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class LoadingScreen extends React.Component {
  componentDidMount() {
    app.auth().onAuthStateChanged((user) => {

      this.props.navigation.navigate(user ? 'App' : 'Auth');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../../assets/images/loading.jpg')} />

        </View>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />

      </View>
    );
  }
}
