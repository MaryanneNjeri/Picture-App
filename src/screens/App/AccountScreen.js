import React from 'react';
import {
  Container, Content, Header, Text, View, Body, DeckSwiper, Card, CardItem, Thumbnail, Left,
} from 'native-base';
import { Dimensions, Image, StyleSheet } from 'react-native';
import _ from 'lodash';
import Button from '../../components/common/buttons/Button';
import getStories from '../../components/lib/functions/app/getStories';
import Fire from '../../firebase/config';

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

});
// eslint-disable-next-line react/prefer-stateless-function
export default class AccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      photoURL: '',
      results: [],

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
    const { photoURL, results } = this.state;
    return (
      <Container>
        <Header transparent style={{ marginTop: 20, paddingLeft: 15, paddingRight: 15 }}>
          <Body>
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#333333' }}>Account</Text>
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
          <View>
            {!_.isEmpty(results)
              ? (
                <View>
                  {_.map(results, (item, i) => (
                    <View key={i}>
                      <Text>
                        {item.title}
                      </Text>
                      <DeckSwiper
                        dataSource={item.images}
                        renderItem={data => (
                          <Card style={{
                            elevation: 3, marginTop: 20,
                          }}
                          >
                            <CardItem cardBody>
                              <Image
                                style={{ height: 300, flex: 1 }}
                                source={{ uri: data.image }}
                              />
                            </CardItem>

                          </Card>
                        )}
                      />

                      <Text>{item.description}</Text>
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
          </View>
        </Content>
      </Container>
    );
  }
}
