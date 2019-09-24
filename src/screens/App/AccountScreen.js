import React from 'react';
import {
  Container, Content, Header, Text, View, Body,
} from 'native-base';
import {
  Dimensions, Image, StyleSheet, ScrollView,
} from 'react-native';
import _ from 'lodash';
import Button from '../../components/common/buttons/Button';
import getStories from '../../components/lib/functions/app/getStories';
import Fire from '../../firebase/config';
import Loader from '../../components/general/Loader';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 130,
    height: 130,
    marginTop: 20,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    alignSelf: 'center',
  },
  imagesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  storiesContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  box: {
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,

  },
  image: {
    alignSelf: 'center',
    width: 180,
    height: 180,
    padding: 10,
    borderColor: 'white',
    borderWidth: 5,
  },

});
// eslint-disable-next-line react/prefer-stateless-function
export default class AccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      photoURL: '',
      results: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.mounted = true;
    if (this.mounted === true) {
      const user = Fire.auth().currentUser;
      this.setState({
        photoURL: user.photoURL,
      });

      getStories().then((response) => {
        this.setState({
          results: response,
          loading: false,

        });
      }).catch((e) => {
        console.log(e);
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }


  createStory=() => {
    this.props.navigation.navigate('Story');
  };

  render() {
    const { photoURL, results, loading } = this.state;
    if (loading) {
      return (
        <Loader />
      );
    }

    return (
      <Container>
        <Header transparent style={{ marginTop: 10, paddingLeft: 15, paddingRight: 15 }}>
          <Body>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#333333' }}>Account</Text>
          </Body>

        </Header>
        <Content>
          <View style={styles.imagesContainer}>
            {!_.isEmpty(photoURL)
              ? <Image style={styles.avatar} source={{ uri: photoURL }} />
              : <Image style={styles.avatar} source={{ uri: 'https://img.icons8.com/plasticine/200/000000/user.png' }} />

          }
          </View>
          <View style={styles.buttonContainer}>
            <Button storyButton icon="plus" size={20} iconColor="#1883CB" onPress={this.createStory}>Create Story </Button>
          </View>
          <ScrollView>
            {!_.isEmpty(results)
              ? (
                <View>
                  {_.map(results, (item, i) => (
                    <View key={i}>
                      <View style={{ padding: 10 }}>
                        <Text note style={{ fontWeight: '200' }}>
                          {item.title}
                        </Text>
                      </View>
                      <View style={{
                        flexDirection: 'row', marginTop: 5, marginRight: 10, marginLeft: 10,
                      }}
                      >
                        {_.map(item.images, (image, i) => (
                          <View key={i} style={styles.box}>

                            <Image
                              source={{ uri: image.image }}
                              style={styles.image}
                            />
                          </View>

                        ))}
                      </View>
                      <View style={{ padding: 15 }}>
                        <Text>{item.description}</Text>
                      </View>
                    </View>
                  ))}


                </View>
              ) : (
                <View style={styles.storiesContainer}>

                  <Text style={{ fontSize: 15 }} note>
                    No stories created create your stories
                    {' '}
                  </Text>
                </View>
              )}
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
