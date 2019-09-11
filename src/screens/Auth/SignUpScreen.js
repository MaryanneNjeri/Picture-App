import React from 'react';
import {
  Content, Container, Text, Header, Left, Icon, Body, Title, View,
} from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/common/buttons/Button';
import SignUpForm from '../../components/Auth/SignUpForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,

  },
  formContainer: {
    paddingRight: 30,
    paddingLeft: 30,
    padding: 15,

  },

});

// eslint-disable-next-line react/prefer-stateless-function
export default class LoginScreen extends React.Component {
  back=() => {
    this.props.navigation.navigate('Welcome');
  };

  logIn=() => {
    this.props.navigation.navigate('Login');
  };

  signUp=(email, password, agree) => {
    const user = {
      email,
      password,
      agree,
    };
    console.log(user);
  }

  render() {
    return (
      <Container>
        <Header transparent>
          <Left>
            <Icon type="Feather" name="arrow-left" onPress={this.back} style={{ color: '#008ae6' }} />
          </Left>
        </Header>
        <Content>
          <Body style={{ marginTop: 50 }}>
            <Title style={{ color: '#404040', fontSize: 30 }}>Sign Up</Title>
            <Text>{' '}</Text>
            <Text
              note
              style={{ fontSize: 14 }}
            >
              {' '}
            Please sign up to enter in app
            </Text>
            <Text>{' '}</Text>
            <Text>{' '}</Text>
            <Text
              note
              style={{ fontSize: 12 }}
            >
              {' '}
              Enter via social networks
            </Text>
            <View style={styles.buttonContainer}>
              <Button twitter icon="twitter" iconColor="white" size={40} />
              <Text>{' '}</Text>
              <Text>{' '}</Text>
              <Button facebook icon="facebook-square" iconColor="white" size={40} />
            </View>
            <Text>{' '}</Text>
            <Text>{' '}</Text>
            <Text
              note
              style={{ fontSize: 12 }}
            >
              {' '}
              or sign up with email
            </Text>
          </Body>
          <View style={styles.formContainer}>
            <SignUpForm signUp={this.signUp} />
            <Text>{' '}</Text>

          </View>
          <View style={{ alignItems: 'center' }}>

            <Text
              note
              style={{ fontSize: 12 }}
            >
              Already have an account ?
            </Text>
            <TouchableOpacity onPress={this.logIn}><Text style={{ color: '#008ae6', fontSize: 12 }} note>Login</Text></TouchableOpacity>

          </View>

        </Content>
      </Container>
    );
  }
}
