import React from 'react';
import {
  Input, Item, Label, Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import styles from './Form.styles';

export default ({
  floatingLabel, onChangeText, stackedLabel, rounded, regular, label, onPress, ...props
}) => {
  const selectedStyle = _.reduce(props, (aggregate, value, prop) => (value && styles[prop]
    ? { ...aggregate, ...styles[prop] } : aggregate),
  styles.standard);
  return (
    <Item floatingLabel={floatingLabel} stackedLabel={stackedLabel} rounded={rounded} regular={regular}>

      <Label style={selectedStyle.label}>
        <Icon

          onPress={onPress}
          name={props.leftIcon}
          size={props.size}
          color={props.color}
        />
        <Text>{' '}</Text>
        {label}
      </Label>

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
