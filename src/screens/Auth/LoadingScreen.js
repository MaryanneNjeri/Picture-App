import React from 'react';
import {
  View, Text, ActivityIndicator, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />

      </View>
    );
  }
}
