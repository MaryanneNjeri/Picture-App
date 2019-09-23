import React from 'react';
import {
  StyleSheet, Image, TouchableOpacity, AlertIOS,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { View, Text } from 'native-base';
import _ from 'lodash';
import * as ImagePicker from 'expo-image-picker';
import FormInput from '../common/form/FormInput';
import app from '../../firebase/config';
import Button from '../common/buttons/Button';

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    alignSelf: 'center',

  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
});
// const formData = new FormData();
// eslint-disable-next-line react/prefer-stateless-function
export default class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      userDetails: {},
    };
  }

  componentDidMount() {
    this.mounted = true;
    if (this.mounted === true) {
      const user = app.auth().currentUser;
      this.setState({
        userDetails: {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        },
      });
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

    pickImage=async () => {
      this.getPermissionAsync();
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        const { userDetails } = this.state;
        // const filename = result.uri.split('/').pop();
        // const match = /\.(\w+)$/.exec(filename);
        // const type = match ? `image/${match[1]}` : 'image';

        // formData.append('photoURL', { uri: result.uri, name: filename, type });

        this.setState({
          userDetails: {
            displayName: userDetails.displayName,
            email: userDetails.email,
            photoURL: result.uri,

          },
        });
      }
    };


    render() {
      const { userDetails } = this.state;
      const { editProfile } = this.props;
      return (
        <View>
          {!_.isEmpty(userDetails.photoURL)
            ? <Image style={styles.avatar} source={{ uri: userDetails.photoURL }} />
            : <Image style={styles.avatar} source={{ uri: 'https://img.icons8.com/plasticine/200/000000/user.png' }} />

          }
          <TouchableOpacity>
            <Text style={{ fontWeight: '200', color: '#0099ff' }} onPress={this.pickImage}>Upload Photo</Text>
          </TouchableOpacity>
          <Text>
            {''}
            {''}
          </Text>
          <FormInput
            floating
            floatingLabel
            label="User Name"
            placeholder="Enter your user name"
            value={userDetails.displayName}
            onChangeText={(e) => {
              const prof = userDetails;
              userDetails.displayName = e;
              this.setState({ userDetails: prof });
            }}
          />
          <Text>
            {' '}
            {''}
          </Text>

          <FormInput
            floating
            floatingLabel
            label="Email address"
            placeholder="Enter your email address"
            value={userDetails.email}
            onChangeText={(e) => {
              const prof = userDetails;
              userDetails.email = e;
              this.setState({ userDetails: prof });
            }}
          />
          <View style={styles.buttonContainer}>
            <Button account onPress={() => { editProfile(userDetails); }}>Save</Button>
          </View>

        </View>
      );
    }
}
