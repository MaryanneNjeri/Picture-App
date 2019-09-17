import React from 'react';
import {
  Content, Container, Text, Header, Left, Icon, Body, Title, View, Toast,
} from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Button from '../../components/common/buttons/Button';
import LoginForm from '../../components/Auth/LoginForm';
import validate from '../../components/lib/functions/auth/validate';
import { logIn } from '../../redux/login/action';
import Loader from '../../components/general/Loader';
import { signInWithFacebook } from '../../components/lib/functions/auth/facebook';
import { signInWithGoogle } from '../../components/lib/functions/auth/googleSignIn';

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
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    };
  }

  back=() => {
    this.props.navigation.navigate('Welcome');
  };

  signUp=() => {
    this.props.navigation.navigate('SignUp');
  };

  logIn= (email, password) => {
    const user = {
      email, password,
    };
    const { dispatch, error } = this.props;
    const { errors, isValid } = validate(user);
    if (!isValid) {
      this.setState({ errors });
    } else if (isValid) {
      this.setState({ errors: {} });
      dispatch(logIn(email, password)).then((response) => {
        if (error === {}) {
          Toast.show({
            text: ' Successfully Login',
            type: 'success',
            position: 'top',
            duration: 3000,
          });
          this.props.navigation.navigate('App');
        } else if (response.payload) {
          Toast.show({
            text: `${response.payload.error}`,
            type: 'danger',
            position: 'top',
            duration: 3000,

          });

          this.props.navigation.navigate('Auth');
        }
      });
    }
  };

  facebookSignin=() => {
    signInWithFacebook();
  };

  googleSignIn=() => {
    signInWithGoogle();
  };

  render() {
    const { errors } = this.state;
    const { loading } = this.props;
    if (loading) {
      return (
        <Loader />
      );
    }
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
              <Button googleButton icon="google-plus" iconColor="white" size={40} onPress={this.googleSignIn} />
              <Text>{' '}</Text>
              <Text>{' '}</Text>
              <Button facebook icon="facebook-square" iconColor="white" size={40} onPress={this.facebookSignin} />
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
            <LoginForm errors={errors} logIn={this.logIn} />
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
const mapStateToProps = state => ({
  loading: state.body.loading,
  error: state.body.error,
});
export default connect(mapStateToProps)(LoginScreen);
