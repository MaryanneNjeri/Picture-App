import React from 'react';
import {
  Header, Icon, Left, Right, Text,
} from 'native-base';

// eslint-disable-next-line react/prefer-stateless-function
export default class HeaderComponent extends React.Component {
  render() {
    return (
      <Header transparent style={{ marginTop: 20, paddingLeft: 15, paddingRight: 15 }}>
        <Left>

          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#333333' }}>Explore Stories</Text>
        </Left>

        <Right>
          <Icon type="Feather" name="menu" style={{ color: '#333333' }} />
        </Right>
      </Header>
    );
  }
}
