import React from 'react';
import {
  Container, Content, Text, View,
} from 'native-base';
import {
  Alert, StyleSheet, Image, Dimensions, TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import _ from 'lodash';
import * as firebase from 'firebase';
import uuid from 'uuid';
import Button from '../../components/common/buttons/Button';
import FormInput from '../../components/common/form/FormInput';
import Fire, { database } from '../../firebase/config';
import shrinkImageAsync from '../../components/lib/functions/app/shrinkImageAsync';
import uploadPhoto from '../../components/lib/functions/app/uploadPhoto';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  formContainer: {
    paddingRight: 30,
    paddingLeft: 30,
    padding: 15,
    marginTop: 15,

  },
  imageContainer: {
    width: (width - 32) / 3,
    height: (width - 32) / 3,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
});
// eslint-disable-next-line react/prefer-stateless-function
const imagesArray = [];
const localUri = '';
const collectionName = 'snack-SJucFknGX';
export default class StoryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'Create Story',

    });

    constructor(props) {
      super(props);
      this.mounted = false;
      this.state = {
        title: '',
        description: '',
        images: [],
        uid: '',
      };
    }

    componentDidMount() {
      this.mounted = true;
      if (this.mounted === true) {
        const user = Fire.auth().currentUser;
        this.setState({
          uid: user.uid,
        });

        this.getPermissionAsync();
        this.getCameraPermission();
      }
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };

    getCameraPermission =async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
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
        const { uri: reducedImage, width, height } = await shrinkImageAsync(result.uri);

        imagesArray.push({ image: reducedImage, imageWidth: width, imageHeight: height });

        this.setState({
          images: imagesArray,
        });
      }
    };

    takePhoto=async () => {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        const { uri: reducedImage, width, height } = await shrinkImageAsync(result.uri);

        imagesArray.push({ image: reducedImage, imageWidth: width, imageHeight: height });

        this.setState({
          images: reducedImage,
        });
      }
    };

    uploadPhotoAsync = async (uri) => {
      const { uid } = this.state;

      const path = `${collectionName}/${uid}/${uuid.v4()}.jpg`;
      // return uploadPhoto(uri, path);
    };


    save=async () => {
      const { uid } = this.state;
      const {
        title, description, images,
      } = this.state;
      try {
        // const remoteUri = await this.uploadPhotoAsync(images);
        database.collection('stories').add({
          uid,
          title,
          description,
          timestamp: Date.now(),
          images,

        });
        Alert.alert('Successfull', 'your story has been successfully created');
        this.props.navigation.navigate('Account');
      } catch (e) {
        Alert.alert('An Error Occurred', e);

        console.log(e);
      }
    };


    render() {
      const {
        title, description, images,
      } = this.state;
      return (
        <Container>
          <Content>
            <View style={styles.formContainer}>
              <FormInput
                floating
                floatingLabel
                label="Title"
                value={title}
                onChangeText={title => this.setState({ title })}
              />
              <Text>
                {' '}
                {''}
              </Text>

              <FormInput
                floating
                floatingLabel
                label="Story description"
                placeholder="Enter your email address"
                value={description}
                onChangeText={description => this.setState({ description })}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity a onPress={this.pickImage}><Text style={{ fontWeight: '200', fontSize: 15, color: '#008ae6' }}>Select photo</Text></TouchableOpacity>
              <Text>
                {' '}
                {' '}
              </Text>
              <TouchableOpacity onPress={this.takePhoto}><Text style={{ fontWeight: '200', fontSize: 15, color: '#008ae6' }}>Take photo</Text></TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
              { _.map(images, (image, i) => (
                <View key={i} style={{ marginLeft: 10, marginRight: 10 }}>

                  <Image source={{ uri: image.image }} resizeMode="contain" style={{ alignSelf: 'center', width: 80, height: 80 }} />
                </View>
              ))}
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Button account onPress={this.save}>Save</Button>
            </View>
          </Content>
        </Container>
      );
    }
}
