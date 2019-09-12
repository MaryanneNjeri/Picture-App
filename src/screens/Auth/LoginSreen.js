import React from 'react';
import {
  Content, Container, Text, Header, Left, Icon, Body, Title, View,
} from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/common/buttons/Button';
import LoginForm from '../../components/Auth/LoginForm';

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

  signUp=() => {
    this.props.navigation.navigate('SignUp');
  };

  logIn=() => {
    this.props.navigation.navigate('Landing');
  };

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
            <Title style={{ color: '#404040', fontSize: 30 }}>Login Now</Title>
            <Text>{' '}</Text>
            <Text
              note
              style={{ fontSize: 14 }}
            >
              {' '}
              Please login to continue using our app
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
              or login  with email
            </Text>
          </Body>
          <View style={styles.formContainer}>
            <LoginForm />
            <Text>{' '}</Text>

          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>{' '}</Text>
            <Text
              note
              style={{ fontSize: 12 }}
            >

                Don't have an account ?
            </Text>
            <TouchableOpacity onPress={this.signUp}><Text style={{ color: '#008ae6', fontSize: 12 }} note>Sign Up</Text></TouchableOpacity>

          </View>

        </Content>
      </Container>
    );
  }
}
