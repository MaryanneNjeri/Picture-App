import React from 'react';
import { Text, View } from 'native-base';
import FormInput from '../common/form/FormInput';
import Button from '../common/buttons/Button';

// eslint-disable-next-line react/prefer-stateless-function
export default class ResetPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
    };
  }

  render() {
    const { currentPassword, newPassword } = this.state;
    const { changePassword } = this.props;
    return (
      <View>
        <FormInput
          floating
          floatingLabel
          label="Current Password"
          placeholder="Enter your current password"
          onChangeText={currentPassword => this.setState({ currentPassword })}

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
          onChangeText={newPassword => this.setState({ newPassword })}

        />
        <View style={{ alignItems: 'center', paddingTop: 10 }}>

          <Button account icon="cogs" iconColor="white" size={20} onPress={() => { changePassword(currentPassword, newPassword); }}>Reset Password</Button>

        </View>
      </View>
    );
  }
}
