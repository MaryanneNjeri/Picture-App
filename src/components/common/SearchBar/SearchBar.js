import React from 'react';
import {
  Input, Item,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import styles from './SearchBar.styles';

export default ({
  rounded, onChangeText, onPress, ...props
}) => {
  const selectedStyle = _.reduce(props, (aggregate, value, prop) => (value && styles[prop]
    ? { ...aggregate, ...styles[prop] } : aggregate),
  styles.standard);
  return (
    <Item rounded={rounded} style={selectedStyle.item}>
      <Icon
        onPress={onPress}
        name={props.leftIcon}
        size={props.size}
        color={props.color}
      />

      <Input
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        onChangeText={onChangeText}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        style={selectedStyle.input}
      />
      <Icon
        name={props.rightIcon}
        size={props.size}
        color={props.color}
        onPress={onPress}
      />
    </Item>
  );
};
