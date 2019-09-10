import React from 'react';
import { Text, CheckBox, View } from 'native-base';
import FormInput from '../common/form/FormInput';

// eslint-disable-next-line react/prefer-stateless-function
export default class LoginForm extends React.Component {
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
              Remember me..
          </Text>
          <Text>
            {' '}
            {' '}
          </Text>
          <Text>Forgot Password ?</Text>
        </View>

      </View>

    );
  }
}
