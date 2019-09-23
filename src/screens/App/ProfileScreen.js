import React from 'react';
import {
  Content, Container, View, Text,
} from 'native-base';
import { Image, StyleSheet, Dimensions } from 'react-native';
import Button from '../../components/common/buttons/Button';
import { logout } from '../../components/lib/functions/auth/logout';
import { HeaderComponent } from '../../components/Profile/HeaderComponent';


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: width - 50,
    height: height / 2,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

logOut=() => {
  logout();
};

  editProfile=() => {
    this.props.navigation.navigate('SetProfile');
  };

  resetPassword=() => {
    this.props.navigation.navigate('ResetPassword');
  }

  render() {
    return (
      <Container>
        <HeaderComponent title="Profile Account" />

        <Content>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../../assets/images/profile.gif')} />
            <Text>{' '}</Text>

            <Text note style={{ fontSize: 10 }}>
              {' '}
          profile account setting
            </Text>

          </View>
          <View style={styles.buttonContainer}>
            <Button success icon="edit" iconColor="white" size={20} onPress={this.editProfile}>Edit profile</Button>

            <Text>
              {' '}
              {' '}
            </Text>
            <Button account icon="cogs" iconColor="white" size={20} onPress={this.resetPassword}>Reset Password</Button>
          </View>
          <View style={styles.bottomContainer}>
            <Button logout icon="power-off" iconColor="white" size={20} onPress={this.logOut}>Log out</Button>
          </View>
        </Content>
      </Container>
    );
  }
}
