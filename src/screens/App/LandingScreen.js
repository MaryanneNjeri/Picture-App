import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import {

  Container, Content, Text, Title, View,
} from 'native-base';
import Button from '../../components/common/buttons/Button';

const { width, height } = Dimensions.get('window');
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
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.imageContainer}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/images/welcome.jpg')} />
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
              <Button signUp>Let's go</Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
