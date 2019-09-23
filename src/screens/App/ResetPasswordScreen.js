import React from 'react';
import {
  Container, Content, Text, View,
} from 'native-base';
import {
  Image, StyleSheet, Dimensions, Alert,
} from 'react-native';
import * as firebase from 'firebase';
import { HeaderComponent } from '../../components/Profile/HeaderComponent';
import ResetPasswordForm from '../../components/Auth/ResetPasswordForm';
import app from '../../firebase/config';


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
  reauthenticate = (currentPassword) => {
    const user = app.auth().currentUser;
    const cred = firebase.auth.EmailAuthProvider.credential(
      user.email, currentPassword,
    );
    return user.reauthenticateWithCredential(cred);
  };

  changePassword=(currentPassword, newPassword) => {
    console.log(currentPassword, newPassword);
    this.reauthenticate(currentPassword).then(() => {
      const user = app.auth().currentUser;
      user.updatePassword(newPassword).then(() => {
        Alert.alert('Successful', 'PasswordUpdated');
        this.props.navigation.navigate('Profile');
      }).catch((error) => {
        Alert.alert('An Error Occurred', error);
      }).catch((error) => {
        Alert.alert('An Error Occurred', error);
      });
    });
  };

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

            <ResetPasswordForm changePassword={this.changePassword} />
          </View>
        </Content>
      </Container>

    );
  }
}
