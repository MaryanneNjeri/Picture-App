import React from 'react';
import {
  Content, Text, Container, CheckBox, View,
} from 'native-base';
import FormInput from '../common/form/FormInput';

// eslint-disable-next-line react/prefer-stateless-function
export default class SignUpForm extends React.Component {
  render() {
    return (
      <View>

        <FormInput
          standard
          regular
          placeholder="Email"
        />
        <Text>{' '}</Text>
        <FormInput
          standard
          regular
          placeholder="Password"
          secureTextEntry
        />
        <Text>{' '}</Text>
        <View style={{ flexDirection: 'row' }}>
          <CheckBox checked={false} />
          <Text>{' '}</Text>
          <Text>
            {' '}
            {' '}
            {' '}
          </Text>
          <Text style={{ fontWeight: '200' }}>
            I agree with the terms
          </Text>
        </View>

      </View>

    );
  }
}
