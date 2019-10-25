import React from 'react';
import {
  View, DeckSwiper, Text, Card, CardItem, Left, Icon, Button, Container,
} from 'native-base';
import _ from 'lodash';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  image: {
    width: width - 25,
    height: height / 1.8,
  },
  card: {
    alignSelf: 'center',
    width: width - 25,
    borderRadius: 5,
    elevation: 3,
  },
});


// eslint-disable-next-line react/prefer-stateless-function
export default class StoryDetailsScreen extends React.Component {
  render() {
    const { images } = this.props.navigation.state.params;
    return (
      <Container>
        <View style={styles.container}>
          {_.map(images, (data, i) => (
            <View key={i}>
              <DeckSwiper
                dataSource={data.images}
                ref={c => this._deckSwiper = c}
                renderEmpty={() => (
                  <View style={{ alignSelf: 'center' }}>
                    <Text>Over</Text>
                  </View>
                )}
                renderItem={item => (
                  <Card key={i} style={styles.card}>
                    <CardItem>
                      <Left>
                        <Text style={{ fontSize: 14, color: '#ff4d4d' }}>
                          <Icon type="Ionicons" name="md-albums" style={{ fontSize: 16, color: '#ff4d4d' }} />
                          {' '}
Images
                        </Text>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        source={{ uri: item.image.image }}
                        style={styles.image}
                      />
                    </CardItem>
                    <CardItem>
                      <Text style={{ color: '#333333' }}>{item.image.caption}</Text>
                    </CardItem>
                  </Card>

                )}
              />
            </View>


          ))}
        </View>
        <View style={{
          flexDirection: 'row', bottom: 30, flex: 1, position: 'absolute', left: 0, right: 0, justifyContent: 'space-between',padding:15
        }}
        >
          <Button large transparent iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" style={{ color: '#ff4d4d', fontSize: 25, fontWeight: 'bold' }} />
          </Button>
          <Text style={{ color: '#333333', fontWeight: '200' }} note> Swipe left or right</Text>
          <Button large transparent iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" style={{ color: '#ff4d4d', fontSize: 25, fontWeight: 'bold' }} />
          </Button>
        </View>
      </Container>
    );
  }
}
