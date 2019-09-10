import React from 'react';
import { Content, Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// eslint-disable-next-line react/prefer-stateless-function
export default class LoginScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Text>Login</Text>
        </Content>
      </Container>
    );
  }
}
