import React from 'react';
import {
  Image, TextInput, View, Text,
} from 'react-native';
import Button from '../../components/common/buttons/Button';
import Loader from '../../components/general/Loader';
import { config } from '../../firebase/cloudinary';

const imagesArray = [];
let apiUrl = '';
let base64Img = ';';

// eslint-disable-next-line react/prefer-stateless-function

export default class NewPostScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'New Post',
    });

    constructor(props) {
      super(props);
      this.state = {
        caption: '',
        loading: false,
      };
    }

    save=() => {
      this.setState({
        loading: true,
      });
      const { result } = this.props.navigation.state.params;
      const { caption } = this.state;
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
        imagesArray.push({ image: { image: data1.secure_url, caption } });
        this.setState({
          loading: false,
        });
        this.props.navigation.state.params.onGoBack(imagesArray);
        this.props.navigation.goBack();
      });
    };

    render() {
      const { result } = this.props.navigation.state.params;
      const { loading } = this.state;
      if (loading) {
        return (<Loader />);
      }
      return (
        <View>
          <View style={{ padding: 10, flexDirection: 'row' }}>
            <Image source={{ uri: result.uri }} style={{ resizeMode: 'contain', aspectRatio: 1, width: 72 }} />
            <TextInput
              multiline
              style={{ flex: 1, paddingHorizontal: 16 }}
              placeholder="Add a neat description..."
              onChangeText={caption => this.setState({ caption })
            }
            />

          </View>
          <Text>{' '}</Text>
          <Button logout onPress={this.save}>Save</Button>

        </View>

      );
    }
}
