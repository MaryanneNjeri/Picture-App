import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { View, Text } from 'native-base';
import FormInput from '../common/form/FormInput';

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    alignSelf: 'center',

  },
});
// eslint-disable-next-line react/prefer-stateless-function
export default class EditProfileForm extends React.Component {
  render() {
    return (
      <View>

        <Image style={styles.avatar} source={{ uri: 'https://img.icons8.com/plasticine/200/000000/user.png' }} />
        <TouchableOpacity>
          <Text style={{ fontWeight: '200', color: '#0099ff' }}>Upload Photo</Text>
        </TouchableOpacity>
        <FormInput
          floating
          floatingLabel
          label="User name"
          placeholder="Enter your username"
        />
        <FormInput
          floating
          floatingLabel
          label="Full Name"
          placeholder="Enter your full name"
        />
        <FormInput
          floating
          floatingLabel
          label="Email address"
          placeholder="Enter your email address"
        />
      </View>
    );
  }
}
