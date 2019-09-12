import React from 'react';
import { Text, View } from 'native-base';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
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
export default class Loader extends React.Component {
  render() {
    const { error, redirect } = this.props;
    return (

      <View style={{
        justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15,
      }}
      >
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../../assets/images/error.gif')} />

        </View>
        <Text>
          {' '}
                An error occurred!
        </Text>
        <Text note>
          {error.message}
        </Text>


        <TouchableOpacity
          onPress={() => { redirect(); }}
        >
          <Text style={{ color: '#008ae6', fontSize: 14 }} note>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
