import React from 'react';
import {
  Content, Container, Text, Header, Left, Icon, Right, View,
} from 'native-base';
import { StyleSheet } from 'react-native';
import SearchBar from '../../components/common/SearchBar/SearchBar';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    marginTop: 15,
  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header transparent style={styles.header}>
          <Left>
            <Text style={{ fontWeight: 'bold', fontSize: 27, color: '#333333' }}>Explore Stories</Text>
          </Left>

          <Right>
            <Icon type="Feather" name="menu" style={{ color: '#333333' }} />
          </Right>
        </Header>
        <Content>
          <View style={{ padding: 20 }}>
            <SearchBar
              rounded
              roundedInput
              size={25}
              leftIcon="search"
              color="#d9d9d9"
              placeholder="Search"
            />
          </View>
        </Content>
      </Container>
    );
  }
}
