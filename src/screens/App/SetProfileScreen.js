import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import {
  Content, Container, Text, View, Body, Icon, Left,
} from 'native-base';
import EditProfileForm from '../../components/Auth/EditProfileForm';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    alignSelf: 'center',
    width,
    overflow: 'hidden',
    height: width / 1.1,
  },

  slider: {
    borderRadius: width,
    width: width * 2,
    height: width * 2,
    marginLeft: -(width / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  image: {
    height: width / 1.1,
    width,
    position: 'absolute',
    bottom: 0,
    marginLeft: width / 2,
  },
  body: {
    marginTop: 20,
  },
  formContainer: {
    paddingRight: 30,
    paddingLeft: 30,
    padding: 15,

  },
});
// eslint-disable-next-line react/prefer-stateless-function
export default class setProfileScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.containerStyle}>
            <View style={styles.slider}>
              <Left>
                <Icon type="Feather" name="arrow-left" />
              </Left>
              <Image style={styles.image} source={require('../../../assets/images/profile.png')} />
            </View>
          </View>
          <View>
            <Body style={styles.body}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Edit Profile</Text>
              <Text>
                {' '}
              </Text>
              <Text note style={{ fontSize: 12 }}> edit your profile here </Text>
            </Body>
            <View style={styles.formContainer}>
              <EditProfileForm />
            </View>
          </View>


        </Content>
      </Container>
    );
  }
}
