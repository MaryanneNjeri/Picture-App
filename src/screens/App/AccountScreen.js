import React from 'react';
import {
  Container, Content, Text, View,
} from 'native-base';
import { AlertIOS, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import Button from '../../components/common/buttons/Button';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
// eslint-disable-next-line react/prefer-stateless-function
export default class AccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    if (this.mounted === true) {
      this.getPermissionAsync();
      this.getCameraPermission()
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          AlertIOS.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };

    getCameraPermission =async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
          AlertIOS.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };

    pickImage=async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        console.log(result);
        // const filename = result.uri.split('/').pop();
        // const match = /\.(\w+)$/.exec(filename);
        // const type = match ? `image/${match[1]}` : 'image';
        // formData.append('photoURL', { uri: result.uri, name: filename, type });
      }
    };

    takePhoto=async () => {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        console.log(result);
      }
    };


    render() {
      console.log(this.mounted);
      return (
        <Container>
          <Content>
            <Text>Account</Text>
            <View style={styles.buttonContainer}>
              <Button account onPress={this.pickImage}>Select photo</Button>
              <Text>
                {' '}
                {' '}
              </Text>
              <Button account onPress={this.takePhoto}>Take photo</Button>


            </View>
          </Content>
        </Container>
      );
    }
}
