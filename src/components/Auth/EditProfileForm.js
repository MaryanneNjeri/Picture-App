import React from 'react';
import {
  StyleSheet, Image, TouchableOpacity, AlertIOS,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { View, Text, Icon } from 'native-base';
import _ from 'lodash';
import * as ImagePicker from 'expo-image-picker';
import FormInput from '../common/form/FormInput';
import Fire from '../../firebase/config';
import Button from '../common/buttons/Button';
import { config } from '../../firebase/cloudinary';

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
  avatarIcon: {
    width: 130,
    height: 130,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 130,

    alignSelf: 'center',
    color: '#ff0066',
  },
});
let apiUrl = '';
let base64Img = ';';

// const formData = new FormData();
// eslint-disable-next-line react/prefer-stateless-function
export default class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      userDetails: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.mounted = true;
    if (this.mounted === true) {
      const user = Fire.auth().currentUser;
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
        base64: true,
      });
      if (!result.cancelled) {
        const { userDetails } = this.state;
        base64Img = `data:image/jpg;base64,${result.base64}`;
        apiUrl = 'https://api.cloudinary.com/v1_1/uploadpicha/image/upload';
        const data = {
          file: base64Img,
          upload_preset: config.upload_preset,
        };
        fetch(apiUrl, {
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json',
          },
          method: 'POST',
        }).then(async (r) => {
          const data1 = await r.json();
          // console.log(data1);
          this.setState({
            userDetails: {
              displayName: userDetails.displayName,
              email: userDetails.email,
              photoURL: data1.secure_url,
            },
          });
        });
      }
    };


    render() {
      const { userDetails } = this.state;
      const { editProfile } = this.props;
      console.log(userDetails);
      return (
        <View>
          {!_.isEmpty(userDetails.photoURL)
            ? <Image style={styles.avatar} source={{ uri: userDetails.photoURL }} />
            : <Icon style={styles.avatarIcon} name="user-circle" type="FontAwesome" />

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
