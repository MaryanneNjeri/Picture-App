import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import {

  Container, Content, Text, Title, View, Icon, Header, Left, ActionSheet, Toast,
} from 'native-base';
import Button from '../../components/common/buttons/Button';
import { logout } from '../../components/lib/functions/auth/logout';

const { width, height } = Dimensions.get('window');
const Buttons = [

  { text: 'Logout', icon: 'power-off', iconColor: '#fa213b' },
  { text: 'Cancel', icon: 'close', iconColor: '#25de5b' },

];

const CANCEL_INDEX = 1;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    marginBottom: 0,
    alignItems: 'center',
    bottom: 0,

  },
  image: {
    width: width - 50,
    height: height / 1.5,
  },
});
// eslint-disable-next-line react/prefer-stateless-function
export default class LandingScreen extends React.Component {
    openMenu=() => {
      ActionSheet.show(
        {
          options: Buttons,
          cancelButtonIndex: CANCEL_INDEX,
          title: 'Settings',
        },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            logout();
            Toast.show({
              text: 'Successfully Logged out',
              position: 'top',
              duration: 3000,

            });
            this.props.navigation.navigate('Auth');
          }
        },
      );
    };


    next=() => {
      this.props.navigation.navigate('SetProfile');
    }

    render() {
      return (
        <Container>
          <Header transparent>
            <Left>
              <Icon type="Feather" name="menu" onPress={this.openMenu} style={{ color: '#008ae6' }} />
            </Left>
          </Header>
          <Content>
            <View style={styles.imageContainer}>
              <Image resizeMode="contain" style={styles.image} source={require('../../../assets/images/landing.gif')} />
              <Title style={{ color: '#404040', fontSize: 30 }}>Karibu!</Title>
              <Text>{' '}</Text>
              <Text
                note
                style={{ fontSize: 12 }}
              >
Welcome to the story app
              </Text>
              <Text>
                {' '}
                {' '}
              </Text>
              <View style={styles.buttonContainer}>
                <Button signUp onPress={this.next}>Let's go</Button>
              </View>
            </View>
          </Content>
        </Container>
      );
    }
}
