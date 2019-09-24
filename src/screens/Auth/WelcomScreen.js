import React from 'react';
import {
  Content, Container, Text, Title, Body, View,
} from 'native-base';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from '../../components/common/buttons/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,

  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,

  },
});


// eslint-disable-next-line react/prefer-stateless-function
export default class WelcomeScreen extends React.Component {
  logIn=() => {
    this.props.navigation.navigate('Login');
  };

  signUp=() => {
    this.props.navigation.navigate('SignUp');
  };


  render() {
    return (
      <Container>

        <Content>


          <Body style={{ marginTop: 50 }}>
            <Title style={{ color: '#404040', fontSize: 30 }}>Welcome</Title>
            <Text>{' '}</Text>
            <Text
              note
              style={{ fontSize: 12 }}
            >
              {' '}
Please login or sign up to continue using this app
            </Text>
            <View style={styles.imageContainer}>
              <Image resizeMode="contain" style={styles.logo} source={require('../../../assets/images/Landing.gif')} />
            </View>

            <Text note style={{ fontSize: 12 }}> Enter via social networks</Text>
          </Body>
          <View style={styles.buttonContainer}>
            <Button googleButton icon="google-plus" iconColor="white" size={40} onPress={this.googleSignIn} />
            <Text>{' '}</Text>
            <Text>{' '}</Text>
            <Button facebook icon="facebook-square" iconColor="white" size={40} onPress={this.facebookSignIn} />
          </View>
          <Text>{' '}</Text>
          <Body>
            <Text note style={{ fontSize: 12 }}> or login with email </Text>

            <Text>{' '}</Text>
            <Button signUp onPress={this.signUp}>Sign Up</Button>
            <Text>{' '}</Text>
            <Text note style={{ fontSize: 12 }}>
Don't have an account?
            </Text>
            <TouchableOpacity onPress={this.logIn}><Text style={{ color: '#008ae6', fontSize: 12 }} note>Login</Text></TouchableOpacity>


          </Body>
        </Content>
      </Container>
    );
  }
}
