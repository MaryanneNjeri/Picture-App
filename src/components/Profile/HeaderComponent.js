import React from 'react';
import {
  Left, Text, Right, Icon, Header,
} from 'native-base';


// eslint-disable-next-line react/prefer-stateless-function
export const HeaderComponent = ({ title }) => (
  <Header transparent style={{ marginTop: 20, paddingLeft: 15, paddingRight: 15 }}>
    <Left>
      <Text style={{ fontWeight: 'bold', fontSize: 27, color: '#333333' }}>{title}</Text>
    </Left>

    {/*<Right>*/}
      {/*<Icon type="Feather" name="menu" style={{ color: '#333333' }} />*/}
    {/*</Right>*/}
  </Header>
);

