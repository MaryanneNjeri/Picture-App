import React from 'react';
import {
  Image, Alert, TextInput, View, Button,
} from 'react-native';
import { Content, Container } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fire from '../../firebase/config';


export default class NewPostScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'New Post',
      headerRight: (
        <Button
          IconComponent={Ionicons}
          iconSize={23}
          color="black"
          title="Next"
          onPress={() => {
            const text = navigation.getParam('text');
            const image = navigation.getParam('image');
            if (text && image) {
              navigation.goBack();
              Fire.shared.post({ text: text.trim(), image });
            } else {
              Alert.alert('Need valid description');
            }
          }}
        />),
    });

    state = { text: '' };

    render() {
      const { image } = this.props.navigation.state.params;
      return (

        <View style={{ padding: 10, flexDirection: 'row' }}>
          <Image source={{ uri: image }} style={{ resizeMode: 'contain', aspectRatio: 1, width: 72 }} />
          <TextInput
            multiline
            style={{ flex: 1, paddingHorizontal: 16 }}
            placeholder="Add a neat description..."
            onChangeText={(text) => {
              this.setState({ text });
              this.props.navigation.setParams({ text });
            }}
          />
        </View>

      );
    }
}
