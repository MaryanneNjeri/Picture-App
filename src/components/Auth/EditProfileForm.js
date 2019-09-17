import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import FormInput from '../common/form/FormInput';

// eslint-disable-next-line react/prefer-stateless-function
export default class EditProfileForm extends React.Component {
  render() {
    return (
      <View>

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
