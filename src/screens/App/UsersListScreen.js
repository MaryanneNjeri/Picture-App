import React from 'react';
import { Content, Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class UsersListScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>User ListScreen</Text>
        </Content>
      </Container>
    );
  }
}
