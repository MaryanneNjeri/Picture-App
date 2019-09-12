import React from 'react';
import { Text, CheckBox, View } from 'native-base';
import FormInput from '../common/form/FormInput';
import Button from '../common/buttons/Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };
  }

  rememberMe=() => {
    this.setState({
      rememberMe: true,
    });
  }

  render() {
    const { rememberMe, email, password } = this.state;
    const { errors, logIn } = this.props;

    return (
      <View>
        {errors ? <Text style={{ fontWeight: '200', color: 'red' }}>{errors.email}</Text> : null}

        <FormInput
          standard
          regular
          placeholder="Email"
          onChangeText={email => this.setState({ email })}

        />
        <Text>{' '}</Text>
        {errors ? <Text style={{ fontWeight: '200', color: 'red' }}>{errors.password}</Text> : null}

        <FormInput
          standard
          regular
          placeholder="Password"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
        />
        <Text>{' '}</Text>
        <View style={{ flexDirection: 'row' }}>
          <CheckBox checked={rememberMe} onPress={this.rememberMe} />
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
        <Text>
          {' '}
          {' '}
        </Text>
        <View style={{ alignItems: 'center' }}>
          <Button signUp onPress={() => { logIn(email, password); }}>Login</Button>
        </View>

      </View>

    );
  }
}
