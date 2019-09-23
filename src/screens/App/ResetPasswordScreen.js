import React from 'react';
import {
  Container, Content, Text, View,
} from 'native-base';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { HeaderComponent } from '../../components/Profile/HeaderComponent';
import ResetPasswordForm from '../../components/Auth/ResetPasswordForm';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: width - 50,
    height: height / 2.5,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  formContainer: {
    paddingRight: 30,
    paddingLeft: 30,
    padding: 15,

  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class ResetPasswordScreen extends React.Component {
  render() {
    return (
      <Container>
        <HeaderComponent title="Reset Password" />
        <Content>

          <View style={styles.imageContainer}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/images/landing.gif')} />
            <Text note style={{ fontSize: 10 }}>
              {' '}
                  Reset your password
            </Text>
          </View>

          <View style={styles.formContainer}>

              <ResetPasswordForm />
          </View>
        </Content>
      </Container>

    );
  }
}
