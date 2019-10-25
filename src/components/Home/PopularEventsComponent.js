import React from 'react';
import {
  Body, Card, CardItem, Icon, Left, Text, Thumbnail, View,
} from 'native-base';
import {
  ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native';
import _ from 'lodash';


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

  storiesContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: width - 20,
    height: height / 2,
  },
  card: {
    alignSelf: 'center',
    width: width - 20,
    borderRadius: 5,
    paddingBottom: 5,
  },
});

// eslint-disable-next-line react/prefer-stateless-function
export default class PopularEventsComponent extends React.Component {
  render() {
    const { events, viewStory } = this.props;
    return (
      <ScrollView>
        {!_.isEmpty(events)
          ? (
            <View>
              {_.map(events, (item, i) => (
                <View key={i}>
                  <Text note style={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {item.title}
                  </Text>
                  <Card key={i} style={styles.card}>
                    <CardItem>
                      <Left>
                        <Thumbnail
                          source={{ uri: item.user.photoURL }}
                        />
                        <Body>
                          <Text style={{ fontWeight: '200', fontSize: 14 }}>
                            {item.user.name}
                          </Text>

                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <TouchableOpacity onPress={() => { viewStory(item.images); }}>
                        <Image
                          source={{ uri: item.images[1].image.image }}
                          style={styles.image}
                        />
                      </TouchableOpacity>
                    </CardItem>
                    <CardItem>
                      <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontWeight: '200', fontSize: 15 }}>{item.description}</Text>
                        <Text>{' '}</Text>
                        <TouchableOpacity onPress={() => { viewStory(item.images); }}>
                          <Text style={{ fontSize: 12 }} note>
                            {' '}
                            <Icon type="Feather" name="send" style={{ fontSize: 20, color: '#ff0066' }} />
                            {' '}
                            View Story
                          </Text>
                        </TouchableOpacity>

                      </View>
                    </CardItem>
                  </Card>
                </View>
              ))}


            </View>
          ) : (
            <View style={styles.storiesContainer}>

              <Text style={{ fontSize: 15 }} note>
                      No stories Available
                {' '}
              </Text>
            </View>
          )}
      </ScrollView>
    );
  }
}
