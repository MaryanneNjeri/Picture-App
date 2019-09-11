import React from 'react';
import { Text, CheckBox, View } from 'native-base';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import FormInput from '../common/form/FormInput';
import Button from '../common/buttons/Button';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',

  },

});
// eslint-disable-next-line react/prefer-stateless-function
export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      agree: false,
    };
  }

 agree=() => {
   this.setState({
     agree: true,
   });
 }

 render() {
   const { agree, email, password } = this.state;
   const { signUp } = this.props;
   return (
     <View>

       <FormInput
         standard
         regular
         placeholder="Email"
         onChangeText={email => this.setState({ email })}
       />
       <Text>{' '}</Text>
       <FormInput
         standard
         regular
         placeholder="Password"
         secureTextEntry
         onChangeText={password => this.setState({ password })}
       />
       <Text>{' '}</Text>
       <View style={{ flexDirection: 'row' }}>
         <CheckBox checked={agree} onPress={this.agree} />
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
       <Text>
         {' '}
       </Text>
       <View style={styles.buttonContainer}>
         <Button signUp onPress={() => { signUp(email, password, agree); }}>Sign Up</Button>
         <Text>{' '}</Text>
       </View>

     </View>

   );
 }
}
SignUpForm.propTypes = {
  signUp: PropTypes.func.isRequired,
};
