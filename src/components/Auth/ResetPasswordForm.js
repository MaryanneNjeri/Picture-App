import React from 'react';
import { Text, View } from 'native-base';
import FormInput from '../common/form/FormInput';

// eslint-disable-next-line react/prefer-stateless-function
export default class ResetPasswordForm extends React.Component {
  render() {
    return (
      <View>
        <FormInput
          floating
          floatingLabel
          label="Current Password"
          placeholder="Enter your current password"
          secureTextEntry
        />
        <Text>
          {' '}
          {''}
        </Text>
        <FormInput
          floating
          floatingLabel
          label="New Password"
          placeholder="Enter your new password"
          secureTextEntry
        />
      </View>
    );
  }
}
