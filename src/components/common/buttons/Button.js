import _ from 'lodash';
import React from 'react';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Button.styles';

export default ({
  onPress, active, children, ...props
}) => {
  const selectedStyle = _.reduce(props, (aggregate, value, prop) => (value && styles[prop]
    ? { ...aggregate, ...styles[prop] } : aggregate),
  styles.standard);
  return (
    <Button
      onPress={onPress}
      style={selectedStyle.button}
      active={active}
      first={props.first}
      last={props.last}
    >
      <Icon style={selectedStyle.icon} name={props.icon} size={props.size} color={props.iconColor} iconStyle={{ justifyContent: 'center', alignItems: 'center' }} />
      <Text style={selectedStyle.text}>
        {children}
      </Text>
    </Button>
  );
};
